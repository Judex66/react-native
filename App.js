import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react'
import { store } from './redux'
import { Provider, useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import { useState } from 'react';
//import { configureStore,createSlice } from '@reduxjs/toolkit';
import { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } from './redux';
import ItemLocal from './components/ItemName.js';
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
  const [text, setText] = useState('');
  const {status, error} = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const data = useSelector(state => state.todos.todos);
  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (isLoading) return <Text >Loading...</Text>
  return (
    <SafeAreaView style={styles.container}>
    
    <ScrollView >
    <Header/>
    {data.map(item => (
      <TouchableHighlight style={styles.apiContainer} key={item.id}>
         <ItemLocal el={item} {...item}/> 
      </TouchableHighlight>
      ))}
          
        </ScrollView>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
apiContainer:{
  flex:1,
},
apiContainer2:{
  flex:1,
},
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
