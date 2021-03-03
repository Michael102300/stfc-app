import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Input, Button } from "react-native-elements";
import Background from "../media/fondo.jpg";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alerts/alertContext";

const SignUp = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { msg, authenticate, signupUser, user } = authContext;
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  useEffect(() => {
    if (msg) {
      showAlert(msg.msg, msg.category);
    }
  }, [msg, authenticate]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    NIT: "",
    address: "",
    phone: "",
    mobile: "",
  });
  const {
    name,
    email,
    password,
    confirmpassword,
    NIT,
    address,
    phone,
    mobile,
  } = form;
  const onSubmit = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmpassword.trim() === "" ||
      NIT.trim() === "" ||
      address.trim() === "" ||
      phone.trim() === "" ||
      mobile.trim() === ""
    ) {
      showAlert("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    if (password.length < 6) {
      showAlert("Password minimo de 6 caracteres", "alerta-error");
      return;
    }
    if (phone < 8) {
      showAlert("Ingrese un numero de casa valido");
      return;
    }
    if (mobile < 11) {
      showAlert("Ingrese un numero de celular valido");
      return;
    }
    if (password !== confirmpassword) {
      showAlert("Password no son iguales", "alerta-error");
      return;
    }
    signupUser({
      name,
      email,
      password,
      NIT,
      address,
      mobile,
      phone,
    });
  };
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
        {alert && (
          <View
            style={{
              backgroundColor: "red",
              width: "40%",
              height: "10%",
              position: "absolute",
              top: 10,
              zIndex: 1,
              right: 0,
              borderRadius: 10,
              justifyContent: "center",
              opacity: 0.8,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {alert.msg}
            </Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.text}>Sign Up</Text>
          </View>

          <View style={styles.bodybody}>
            <Input
              placeholder="Nombre"
              onChangeText={(a) => setForm({ ...form, name: a })}
            />
            <Input
              placeholder="Identificación"
              onChangeText={(b) => setForm({ ...form, NIT: b })}
            />
            <Input
              placeholder="Número casa"
              onChangeText={(c) => setForm({ ...form, phone: c })}
            />
            <Input
              placeholder="Número celular"
              onChangeText={(d) => setForm({ ...form, mobile: d })}
            />
            <Input
              placeholder="Dirección"
              onChangeText={(f) => setForm({ ...form, address: f })}
            />
            <Input
              placeholder="Email"
              onChangeText={(g) => setForm({ ...form, email: g })}
            />
            <Input
              placeholder="Password"
              onChangeText={(h) => setForm({ ...form, password: h })}
              secureTextEntry={true}
            />
            <Input
              placeholder="Confirm password"
              onChangeText={(i) => setForm({ ...form, confirmpassword: i })}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.footer}>
            <Button
              title="Registrarse"
              type="solid"
              onPress={() => onSubmit()}
            />
          </View>
          <View style={styles.footerfoo}>
            <Button
              type="outline"
              title="Inicia Sesion"
              style={{ marginTop: 10 }}
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
    marginHorizontal: 30,
    justifyContent: "flex-end",
    marginTop: 1,
  },
  footerfoo: {
    justifyContent: "flex-end",
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 5,
  },
});
