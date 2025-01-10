
import { StyleSheet, Text, SafeAreaView,View, ScrollView } from 'react-native';
import React from 'react'

 export default function Contacts(){

    if (isLoading) return <Text >Loading...</Text>
    return (
      <SafeAreaView style={styles.container}>
      <View><Text>Contacts</Text></View>
    </SafeAreaView>
    )
  }
  const styles = StyleSheet.create({
  apiContainer:{
    flex:1,
    paddingTop:25,
  },
  apiContainer2:{
    flex:1,
  },
    container: {
      flex: 1,
      flexDirection: 'column',
    },
  });
  