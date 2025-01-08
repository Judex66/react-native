
import { StyleSheet, Text, SafeAreaView,View, ScrollView } from 'react-native';
import React from 'react'
import Header from './Header.js'
import { useState } from 'react';
import { useGetUsersQuery } from '../redux/index.js';
import ItemLocal from './ItemName.js';

 export default function Contacts(){
    const [count, setCount] = useState('');
//   const [newUser, setNewUser] = useState('');
  const {data = [], isLoading} = useGetUsersQuery(count);
//   const [addUser, {isError}] = useAddUserMutation();
  
    if (isLoading) return <Text >Loading...</Text>
    return (
      <SafeAreaView style={styles.container}>
      

      <View>Contacts</View>
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
  