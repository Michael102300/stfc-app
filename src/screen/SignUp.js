import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, } from "react-native";
import { Input } from "react-native-elements";
import Background from "../media/fondo.jpg";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <View style={styles.body}>
          <View style={styles.header}>
              <Text style={styles.text}>Sign Up</Text>
          </View>

          <View style={styles.bodybody}>
            <Input
                placeholder="Nombre"
                onChangeText={(a) => setForm({ ...form, nombre: a })}
            />
            <Input
                placeholder="Identificación"
                onChangeText={(b) => setForm({ ...form, identificacion: b })}
            />
            <Input
                placeholder="Número casa"
                onChangeText={(c) => setForm({ ...form, numeroca: c })}
            />
            <Input
                placeholder="Número celular"
                onChangeText={(d) => setForm({ ...form, numerocel: d })}
            />
            <Input
                placeholder="Dirección"
                onChangeText={(f) => setForm({ ...form, direccion: f })}
            />
            <Input
                placeholder="Email"
                onChangeText={(g) => setForm({ ...form, email: g })}
            />
            <Input
                placeholder="Password"
                onChangeText={(h) => setForm({ ...form, password: h })}
            />
            <Input
                placeholder="Confirm password"
                onChangeText={(i) => setForm({ ...form, confirmp: i })}
            />
          </View>
          <View style={styles.footer}>
            <Button
                title="Registrarse"
                type="solid"
                onPress={() => navigation.navigate("SignUp")}
            />
          </View>
          <View style={styles.footerfoo}>
            <Button
                title="Inicio"
                type="solid"
                onPress={() => navigation.navigate("Login")}
            />
          </View>
        </View> 
      </ImageBackground>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: "#33FF8D", */
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flexGrow: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: "80%",
    marginVertical: "40%",
  },
  bodybody: {
    padding: 10,
  },
  footer: {
    marginHorizontal: 50,
    justifyContent: "flex-end",
    marginTop:1,
  },
  footerfoo: {
    justifyContent: "flex-end",
    marginTop:10,
    marginVertical: 10,
    marginHorizontal: 110,
  },
  text: {
    fontSize: 20,
    marginTop: 2,
  },
});