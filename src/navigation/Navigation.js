import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "../context/auth/authContext";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";
import Home from "../screen/Home";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default Navigation = () => {
  const authContext = useContext(AuthContext);
  const { authenticate } = authContext;
  return <>{authenticate == true ? <DrawerNavigator /> : <StackNavigator />}</>;
};
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};