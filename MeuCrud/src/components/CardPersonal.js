import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { deletePerson } from "../servers/peopleCrud";
import styles from "../styles/styles";
import {Ionicons} from "@expo/vector-icons";

export default function CardPersonal({item, navigation, refresh}){
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
  
          <TouchableOpacity style={styles.deleteButton} onPress={async () => {
            await deletePerson(item.id);
            refresh();
          }}>
            <Text style={styles.buttonText}>Deletar</Text>
          </TouchableOpacity>
  
        </View>
  
      </View>
    )
  }