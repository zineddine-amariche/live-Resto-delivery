import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import DrawerScreen from "../Stack2App/Drawer_Nav";
import AuthStackScreen from "../Stack1Auth";

const RootStack = createNativeStackNavigator();

const Root = ( ) => {

  const { isSuccess } = useSelector((state) => state.auth);
    if (isSuccess) {
      return (
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen
            name="DrawerScreen"
            component={DrawerScreen}
            screenOptions={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      );
    } else {
      return (
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen
            name="AuthStackScreen"
            component={AuthStackScreen}
            options={{
              animationEnabled: false,
            }}
          />
        </RootStack.Navigator>
      );
    }
  }
// };
export default Root;
