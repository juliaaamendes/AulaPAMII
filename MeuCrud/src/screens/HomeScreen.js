import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import AddEditScreen from './AddEditScreen';
import database from "../database.json";

import styles from '../styles/styles';

import { getPeople, deletePerson } from '../servers/peopleCrud';

function CardPersonal({item, navigation, refresh}){
  return(
    <View style={styles.card}>
      <View>
          <Text style={styles.name}>{item.firstName} {item.lastNmame}</Text>
          <Text style={styles.email}>{item.email}</Text>
          <Text styles={styles.phone}>{item.phone}</Text>
      </View>

      <View>

        <Button
          title="Editar"
          onPress={() => navigation.navigate("AddEditScreen", {person:item})}
        />

        <Button
          title="Deletar"
          onPress={async () => {
            await deletePerson(item.id);
            refresh();
          }}
        />

      </View>

    </View>
  )
}

export default function HomeScreen({ navigation }) {
    // estado da lista
    const [people, setPeople] = useState([]);
    const [filteredpeople, setFilteredPeople] = useState(people);
    const [refreshing, setRefreshing] = useState(false);
    // função para carregar dados
    async function loadPeople() {
      try {
        const data = await getPeople();

        setPeople(data);
    }

    // executa ao abrir tela
    useEffect(() => {
        loadPeople();
    }, []);

  return(
      <View style={styles.container}>

          <TextInput
              placeholder="Pesquisar por nome"
              onChangeText={(text) => {
                  const filtered = people.filter(p => 
                      `${p.firstname} ${p.lastname}`.toLowerCase().includes(text.toLowerCase())
                  );
                  setFilteredPeople(filtered);
              }}/>

          <Button
              title="Adicionar Pessoa"
              onPress={() => navigation.navigate('AddEditScreen')}
          />

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
