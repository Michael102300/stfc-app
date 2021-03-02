import React, { useEffect, useContext } from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import AuthContext from "../context/auth/authContext";
const Home = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { authUser } = authContext;
  useEffect(() => {
    authUser();
  }, []);
  return (
    <View>
      <Header title="Registro" navigation={navigation} />
      <Text style={{ fontSize: 40 }}>Hola Home</Text>
    </View>
  );
};

export default Home;
