import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import React from 'react'
import { store } from './redux'
import { Provider, useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import { useState } from 'react';
//import { configureStore,createSlice } from '@reduxjs/toolkit';
import { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } from './redux';
import Item from './components/ItemName.js';
import { FlatList } from 'react-native-web';

const handleAddProduct = async () => {
  if(newProduct) {
    await addProduct({name: newProduct}).unwrap();
    setNewProduct('');
  }
}

const handleDeleteProduct = async (id) => {
  await deleteProduct(id).unwrap();
}


export default function App() {
  
  return (
   <Provider store={store}>
    <Counter/>
   </Provider>
  );
}
function Counter(){
  const [count, setCount] = useState('');
const [newUser, setNewUser] = useState('');
const {data = [], isLoading} = useGetUsersQuery(count);
const [addUser, {isError}] = useAddUserMutation();
const [deleteUser] = useDeleteUserMutation();
  // const counter=useSelector((state)=>state.counter);
  // const dispatch=useDispatch()
  if (isLoading) return <Text >Loading...</Text>
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
    {data.map(item => (
      <TouchableHighlight key={item.id}>
          <Text >{item.name}</Text>
      </TouchableHighlight>
      ))}
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
