import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../pages/Pages1Auth/Login";
 

const RootStack = createNativeStackNavigator();



const AuthStackScreen = ({ navigation }) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStack.Screen name="login" component={Login}  />
  </RootStack.Navigator>
);

export default AuthStackScreen;
