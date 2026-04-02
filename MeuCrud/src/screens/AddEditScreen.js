import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "../styles/styles";
import { createPerson, updatePerson } from "../servers/peopleCrud";
import HomeScreen from "./HomeScreen";

export default function AddEditScreen({ route, navigation }) {
  const person = route.params?.person;
  const edit = route.params?.edit || false;

  const [firstname, setFirstName] = useState(person?.firstname || "");
  const [lastname, setLastName] = useState(person?.lastname || "");
  const [email, setEmail] = useState(person?.email || "");
  const [phone, setPhone] = useState(person?.phone || "");

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
      <View style={styles.container}>
        <TextInput
          placeholder="First Name"
          value={firstname}
          onChangeText={setFirstName}
        />
    
        <TextInput
          placeholder="Last Name"
          value={lastname}
          onChangeText={setLastName}
        />
    
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
        />
        
        <Button
          title="Salvar"
          onPress={async() => {
            console.log(edit)
            if (edit === true) {
              await updatePerson(person.id, { firstname, lastname, email, phone });
            } else {
              await createPerson({ firstname, lastname, email, phone });
            };
            navigation.replace("Home")
          }}
        />
    
        <Button
          title="Cancelar"
          onPress={() => navigation.goBack()}
        />
      </View>
    )
}
