import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useDeleteUserMutation } from '../redux'

export default function ItemLocal({el, navigation }) {
  // const [deleteUser] = useDeleteUserMutation();
  
  // const handleDeleteProduct = async (id) => {
  //   await deleteUser(id).unwrap();
  //   console.log('deleted')
  // }
  return (
    <View style={styles.container} >
      <Text style={styles.text}>{el.name}</Text>
      <Text style={styles.text}>{el.username}</Text>
      <Text style={styles.text}>{el.address.street}</Text>
      <Text style={styles.text}>{el.address.city}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  text:{
    color:'white',
  }
});
