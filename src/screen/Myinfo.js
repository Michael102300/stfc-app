import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Header from "../components/Header";
import AuthContext from "../context/auth/authContext";
import ProblemsContext from "../context/problems/problemContext";

const Myinfo = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { user, authUser } = authContext;
  const problemContext = useContext(ProblemsContext);
  const { getAllProblems } = problemContext;
  useEffect(() => {
    authUser();
    getAllProblems();
  }, []);
  return (
    <View style={styles.contenedor}>
      <Header title="Mi informacion" navigation={navigation} />

      <View style={styles.body}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Nombre:</Text>
          <Text style={styles.text}>{user ? user.name : null}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Número de identificación:</Text>
          <Text style={styles.text}>{user ? user.NIT : null}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Correo electrónico:</Text>
          <Text style={styles.text}>{user ? user.email : null}</Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.text}>Dirección:</Text>
          <Text style={styles.text}>{user ? user.address : null}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Teléfono:</Text>
          <Text style={styles.text}>{user ? user.phone : null}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Celular:</Text>
          <Text style={styles.text}>{user ? user.mobile : null}</Text>
        </View>
      </View>
    </View>
  );
};

export default Myinfo;
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  containerText: {
    width: "95%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  body: {
    display: "flex",
    alignItems: "center",
    marginVertical: "5%",
  },
  footer: {
    marginHorizontal: 30,
    justifyContent: "flex-end",
    marginTop: 1,
  },
  text: {
    fontSize: 20,
    color: "black",
    opacity: 0.7,
  },
});
