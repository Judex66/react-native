import React from "react";
import Main from "./Main.js";
import Contacts from "./Contacts.js"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FullData from "./FullData.js";

const Stack=createNativeStackNavigator();
 
export default function Navigate(){
    return   (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{ title: 'Новости' }} />
          <Stack.Screen name="Contacts" component={Contacts} options={{ title: 'Контакты' }} />
          <Stack.Screen name="FullData" component={FullData} options={{ title: 'Полные данные' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}