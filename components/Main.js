
import { StyleSheet, Text, SafeAreaView, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react'
import Header from './Header'
import { useState } from 'react';
import { useGetUsersQuery } from '../redux';
import ItemLocal from './ItemName.js';

 export default function Main(){
    const [count, setCount] = useState('');
//   const [newUser, setNewUser] = useState('');
  const {data = [], isLoading} = useGetUsersQuery(count);
//   const [addUser, {isError}] = useAddUserMutation();
  
    if (isLoading) return <Text >Loading...</Text>
    return (
      <ScrollView >
      <Header/>
      <Text>wdwadwdad</Text>
      {data.map(item => (
        <TouchableHighlight style={styles.apiContainer} key={item.id}>
           <ItemLocal el={item}   onPress={() => {console.log('delete');}}/>
        </TouchableHighlight>
        ))}
            
          </ScrollView>
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
  