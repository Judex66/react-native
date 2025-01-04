import React from "react";
import { StyleSheet,TouchableHighlight,Text } from "react-native";

export default function Item(item){
<TouchableHighlight>
    <Text style={style.item}>{item.name}</Text>
</TouchableHighlight>
}
const style=StyleSheet.create({
     item:{}
})