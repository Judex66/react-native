import { StyleSheet, Text, View } from 'react-native';
import { useGetUserQuery } from '../redux';
export default function FullData({route}) {
    const { id } = route.params;
    const {data = [], isLoading} = useGetUserQuery(id);
    console.log(data)
    if (isLoading) return <Text >Loading...</Text>
  return (
   <View style={styles.container}>
         <Text style={styles.text}>{data.name}</Text>
         <Text style={styles.text}>{data.username}</Text>
         <Text style={styles.text}>{data.address.street}</Text>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
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
