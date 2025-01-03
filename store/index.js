import App from "../App";
import { createStore } from "redux";
const defaultStore={
  cash:0,
}
action={type:'',payload:''}
const reducers=(state=defaultStore,action)=>{
  switch(action.type){
    case "ADD_CASH":
return {...state, cash: state.cash + action.payload}
    case "GET_CASH":
      return {...state, cash: state.cash - action.payload}
    default:
      return state
  }
}