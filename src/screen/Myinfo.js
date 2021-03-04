import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import Header from "../components/Header";
import AuthContext from "../context/auth/authContext";
import ProblemsContext from "../context/problems/problemContext";
import letterColors from "../utils/letterColors";

const Myinfo = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { user, authUser } = authContext;
  const problemContext = useContext(ProblemsContext);
  const { getAllProblems } = problemContext;
  const [bgColorLetter, setBgColorLetter] = useState(null);
  useEffect(() => {
    authUser();
    getAllProblems();
    setBgColorLetter(letterColors[Math.floor(Math.random() * (26 - 0)) + 0]);
  }, []);

  return (
    <View style={styles.contenedor}>
      <Header title="Mi informacion" navigation={navigation} />
      <View style={styles.body}>
        <Avatar
          size="xlarge"
          rounded
          title={user.name.substring(0, 2)}
          overlayContainerStyle={{ backgroundColor: bgColorLetter }}
        />
        <View style={styles.card}>
          <Text style={styles.text}>Nombre:</Text>
          <Text style={styles.text}>{user ? user.name : null}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Número de identificación:</Text>
          <Text style={styles.text}>{user ? user.NIT : null}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Correo electrónico:</Text>
          <Text style={styles.text}>{user ? user.email : null}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>Dirección:</Text>
          <Text style={styles.text}>{user ? user.address : null}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Teléfono:</Text>
          <Text style={styles.text}>{user ? user.phone : null}</Text>
        </View>
        <View style={styles.card}>
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
    padding: 10,
    paddingTop: 2,
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#aabbcc",
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    paddingTop: 15,
    marginBottom: 15,
  },
});
