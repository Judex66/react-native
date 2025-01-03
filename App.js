import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import { configureStore,createSlice } from '@reduxjs/toolkit';
const initialState={
counter:0
}
const counterSlice=createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment:(state)=>{
      state.counter+=1
    },
    decrement:(state)=>{
      state.counter-=1
    }
  }
})
const store = configureStore({
  reducer:counterSlice.reducer,
})
export default function App() {
  return (
   <Provider store={store}>
    <Counter/>
   </Provider>
  );
}
function Counter(){
  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch()
  return (
    <View style={styles.container}>
    <Header/>
    <Text>Counter:{counter}</Text>
    <StatusBar style="auto" />
    <Button title='+' onPress={()=>{dispatch(counterSlice.actions.increment())}}/>
    <Button title="-" onPress={()=>{dispatch(counterSlice.actions.decrement())}}/>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
  },
});
