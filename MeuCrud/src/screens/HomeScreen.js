import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import CardPersonal from '../components/CardPersonal';
import styles from '../styles/styles';

import { getPeople, deletePerson } from '../servers/peopleCrud';

export default function HomeScreen({ navigation }) {

    // estado da lista
    const [people, setPeople] = useState([]);

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
          <Text style={styles.title}>Pessoas</Text>

          <Button
              title="Adicionar Pessoa"
              onPress={() => navigation.navigate('AddEditScreen')}
          />

          <FlatList
              data={people}
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
