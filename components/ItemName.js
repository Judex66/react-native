import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ItemLocal({el}) {
  return (
    <View style={styles.container}>
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
