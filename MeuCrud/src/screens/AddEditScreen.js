import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";
import styles from "../styles/styles";
import { createPerson, updatePerson } from "../servers/peopleCrud";


export default function AddEditScreen({ route, navigation }) {
  const person = route.params?.person;
  const edit = route.params?.edit || false;

  const [firstname, setFirstName] = useState(person?.firstname || "");
  const [lastname, setLastName] = useState(person?.lastname || "");
  const [email, setEmail] = useState(person?.email || "");
  const [phone, setPhone] = useState(person?.phone || "");
  const [focusedInput, setFocusedInput] = useState(null);

  async function save(){
    const data = { firstname, lastname, email, phone };

    if(person){
      await updatePerson(person.id, data);
    } else {
      await createPerson(data);
    }

    navigation.goBack();
  }
  return(
      <ScrollView style={styles.container} contentContainerStyle={styles.formContainer}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={[styles.input, focusedInput === "firstName" && styles.inputFocused]}
        value={firstname}
        onChangeText={setFirstName}
        placeholder="Digite o nome"
        onFocus={() => setFocusedInput("firstName")}
        onBlur={() => setFocusedInput(null)}
      />

      <Text style={styles.label}>Sobrenome</Text>
      <TextInput
        style={[styles.input, focusedInput === "lastName" && styles.inputFocused]}
        value={lastname}
        onChangeText={setLastName}
        placeholder="Digite o sobrenome"
        onFocus={() => setFocusedInput("lastName")}
        onBlur={() => setFocusedInput(null)}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={[styles.input, focusedInput === "email" && styles.inputFocused]}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={() => setFocusedInput("email")}
        onBlur={() => setFocusedInput(null)}
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={[styles.input, focusedInput === "phone" && styles.inputFocused]}
        value={phone}
        onChangeText={setPhone}
        placeholder="(11) 99999-9999"
        keyboardType="phone-pad"
        onFocus={() => setFocusedInput("phone")}
        onBlur={() => setFocusedInput(null)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={save}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    )
}
