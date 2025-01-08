import React from "react";
import Main from "./Main.js";
import Contacts from "./Contacts.js"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack=createNativeStackNavigator();
 
export default function Navigate(){
    return   (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main} options={{ title: 'Новости' }} />
          <Stack.Screen name="FullPost" component={Contacts} options={{ title: 'Статья' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}