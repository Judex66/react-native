import { StyleSheet, Text, View } from 'react-native';

export default function FullData() {
    const {data = [], isLoading} = useGetUserQuery(id);
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
