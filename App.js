import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screen/Home";
import SignUp from "./src/screen/SignUp";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
{/* <Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Home"
component={Home}
options={{ headerShown: false }}
/>
<Stack.Screen name="SignUp" component={SignUp} />
</Stack.Navigator> */}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
          />
        <Drawer.Screen 
          name="SignUp"
          component={SignUp}
          />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
