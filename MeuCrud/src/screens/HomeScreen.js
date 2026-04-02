import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput } from 'react-native';
import CardPersonal from '../components/CardPersonal';
import styles from '../styles/styles';

import { getPeople, deletePerson } from '../servers/peopleCrud';

export default function HomeScreen({ navigation }) {

    // estado da lista
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState(people);

    // função para carregar dados
    async function loadPeople() {
      try {
        const data = await getPeople();
        console.log("Dados carregados:", data); // Verifique se os dados estão corretos
        setPeople(data);
      } catch (error) {
        console.error("Erro ao carregar pessoas:", error);
      }
    }

    // executa ao abrir tela
    useEffect(() => {
        loadPeople();
    }, []);

  return(
      <View style={styles.container}>
          <TextInput
              placeholder="Pesquisar por nome"
              style={styles.searchInput}
              onChangeText={(text) => {
                  const filtered = people.filter(p => 
                      `${p.firstname} ${p.lastname}`.toLowerCase().includes(text.toLowerCase())
                  );
                  setSearch(filtered);
              }}
          />
          <Button
              title="Adicionar Pessoa"
              onPress={() => navigation.navigate('AddEditScreen')}
          />

          <FlatList
              data={search}
              keyExtractor={(item) => item.id.toString()}

              renderItem={({item}) => (
                  <CardPersonal
                      item={item}
                      navigation={navigation}
                      refresh={loadPeople}
                  />
              )}
          />

      </View>
  );

}
