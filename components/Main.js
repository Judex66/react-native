
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react'
import Header from './Header'
import { useState } from 'react';
import { useGetUsersQuery } from '../redux';
import ItemLocal from './ItemName.js';

 export default function Main({navigation}){
    const {data = [], isLoading} = useGetUsersQuery();

  
    if (isLoading) return <Text >Loading...</Text>
    return (
      <View >
      <Header/>
            <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Contacts')}>
            <ItemLocal el={item}/>
          </TouchableOpacity>
        )}
      />
          </View>
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
  