import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection:"row",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  text:{
    color:'white',
  }
});
