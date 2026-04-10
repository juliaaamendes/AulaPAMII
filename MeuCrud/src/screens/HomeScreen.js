import React, { useEffect, useState, useCallback } from 'react';
import { View, TouchableOpacity, FlatList, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import CardPersonal from '../components/CardPersonal';

import styles from '../styles/styles';

import { getPeople } from '../servers/peopleCrud';

export default function HomeScreen({ navigation }) {
    // estado da lista
    const [people, setPeople] = useState([]);
    const [filteredpeople, setFilteredPeople] = useState(people);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // função para carregar dados
    async function loadPeople(isRefresh = false){
        if (isRefresh) {
            setRefreshing(true);
        } else {
            setLoading(true);
        }
        setError(null);
        try {
            const data = await getPeople();
            setPeople(data);
            setFilteredPeople(data);
        } catch (err) {
            setError('Erro ao carregar dados. Verifique a conexão com a API.');
            Alert.alert('Erro', 'Não foi possível carregar os dados. Tente novamente.');
        } finally {
            if (isRefresh) {
                setRefreshing(false);
            } else {
                setLoading(false);
            }
        }
    }

    // executa ao abrir tela
    useFocusEffect(
        useCallback(() => {
            loadPeople();
        }, [])
    );

  return(
      <View style={styles.container}>
          {loading ? (
              <View style={styles.loadingContainer}>
                  <ActivityIndicator size="large" color="#4361ee" />
                  <Text style={styles.loadingText}>Carregando...</Text>
              </View>
          ) : error ? (
              <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>{error}</Text>
                  <TouchableOpacity style={styles.saveButton} onPress={loadPeople}>
                      <Text style={styles.saveButtonText}>Tentar Novamente</Text>
                  </TouchableOpacity>
              </View>
          ) : (
              <>
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
                      onRefresh={() => loadPeople(true)}
                      refreshing={refreshing}
                  />
              </>
          )}
      </View>
  );

}
