import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList, Text, TextInput } from 'react-native';
import CardPersonal from '../components/CardPersonal';

import styles from '../styles/styles';

import { getPeople } from '../servers/peopleCrud';

export default function HomeScreen({ navigation }) {
    // estado da lista
    const [people, setPeople] = useState([]);
    const [filteredpeople, setFilteredPeople] = useState(people);
    const [refreshing, setRefreshing] = useState(false);
    // função para carregar dados
    async function loadPeople(){
        const data = await getPeople();
        setPeople(data);
        setFilteredPeople(data);
    }

    // executa ao abrir tela
    useEffect(() => {
        loadPeople();
    }, []);

  return(
      <View style={styles.container}>

          <TextInput
              placeholder="Pesquisar por nome"
              style={styles.input}
              onChangeText={(text) => {
                  const filtered = people.filter(p => 
                      `${p.firstname} ${p.lastname}`.toLowerCase().includes(text.toLowerCase())
                  );
                  setFilteredPeople(filtered);
              }}
          />

          <TouchableOpacity 
            style={styles.addButton} 
            onPress={() => navigation.navigate('AddEditScreen')} 
            activeOpacity={0.7}
            >
              <Text style={styles.addButtonText}>Adicionar Pessoa</Text>
          </TouchableOpacity>

          <FlatList
              data={filteredpeople}
              keyExtractor={(item) => item.id.toString()}

              renderItem={({item}) => (
                  <CardPersonal
                      item={item}
                      navigation={navigation}
                      refresh={loadPeople}
                  />
              )}
              onRefresh={loadPeople}
              refreshing={refreshing}
          />

      </View>
  );

}
