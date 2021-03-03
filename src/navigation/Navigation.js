import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "../context/auth/authContext";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";
import Myinfo from "../screen/Myinfo";
import Create from "../screen/Create";
import Myproblems from "../screen/Myproblems";
import Proceso from "../screen/Proceso";
import Register from "../screen/RegisterProblem";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default Navigation = () => {
  const authContext = useContext(AuthContext);
  const { authenticate, user } = authContext;
  console.log(user);
  return (
    <>
      {authenticate == true ? (
        <DrawerNavigator user={user} />
      ) : (
        <StackNavigator />
      )}
    </>
  );
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
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DrawerNavigator = ({ user }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Mi informacion">
        <Drawer.Screen
          name="Mi información"
          component={Myinfo}
          options={{ headerShown: false }}
        />
        {user ? (
          user.role === "tecnico" ? (
            <>
              <Drawer.Screen
                name="En proceso"
                component={Proceso}
                options={{ headerShown: false }}
              />
              <Drawer.Screen
                name="Nuevos Problemas"
                component={Register}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <Drawer.Screen
              name="Crear problema"
              component={Create}
              options={{ headerShown: false }}
            />
          )
        ) : null}

        <Drawer.Screen
          name="Mis problemas"
          component={Myproblems}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
