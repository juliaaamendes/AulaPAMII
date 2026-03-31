import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';
import { deletePerson } from '../servers/peopleCrud';

function CardPersonal({ item, navigation, refresh }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{item.firstname} {item.lastname}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>

      <View>
        <Button
          title="Editar"
          onPress={() => navigation.navigate("AddEditScreen", { person: item })}
        />
        <Button
            title="Deletar"
            onPress={async () => {
                try {
                console.log("Deletando pessoa com ID:", item.id);
                await deletePerson(item.id);
                refresh();
                } catch (error) {
                console.error("Erro ao deletar pessoa:", error);
                }
            }}
        />
      </View>
    </View>
  );
}

export default CardPersonal;