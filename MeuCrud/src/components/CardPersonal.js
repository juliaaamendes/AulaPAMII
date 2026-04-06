import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { deletePerson } from "../servers/peopleCrud";
import styles from "../styles/styles";
import {Ionicons} from "@expo/vector-icons";

export default function CardPersonal({item, navigation, refresh}){
    const [loading, setLoading] = useState(false);
    return(
      <View style={styles.card}>
        <View>
            <Text style={styles.name}>{item.firstname} {item.lastname}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Ionicons name="call-outline" size={14} color="#4361ee" style={{ marginTop: -5 }}/>
              <Text style={styles.phone}>{item.phone}</Text>
            </View>
        </View>
  
        <View>
  
          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("AddEditScreen", {person:item, edit:true})}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.deleteButton} onPress={() => {
            console.log('Delete button pressed for item:', item.id);
            Alert.alert(
              'Confirmar Exclusão',
              'Tem certeza que deseja excluir esta pessoa?',
              [
                { text: 'Cancelar', style: 'cancel' },
                {
                  text: 'Excluir',
                  style: 'destructive',
                  onPress: async () => {
                    console.log('Confirmed delete for item:', item.id);
                    setLoading(true);
                    try {
                      await deletePerson(item.id);
                      console.log('Delete successful, refreshing...');
                      refresh();
                    } catch (error) {
                      console.log('Delete error:', error);
                      Alert.alert('Erro', 'Não foi possível excluir. Tente novamente.');
                    } finally {
                      setLoading(false);
                    }
                  }
                }
              ]
            );
          }} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>Deletar</Text>
            )}
          </TouchableOpacity>
  
        </View>
  
      </View>
    )
  }