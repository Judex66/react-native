import { StyleSheet} from 'react-native';
import React from 'react'
import { store } from './redux'
import { Provider } from 'react-redux'
import Main from './components/Main';
import Navigate from './components/navigation'
export default function App() {
  
  return (
    <Provider store={store}>
  <Navigate/>
  </Provider>)
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
