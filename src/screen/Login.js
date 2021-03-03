import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Input, Button } from "react-native-elements";
import imagen from "../media/welcome.png";
import Background from "../media/fondo.jpg";
import AuthContext from "../context/auth/authContext";
import { sub } from "react-native-reanimated";

const Home = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { login } = authContext;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  const submit = () => {
    login({ email, password });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
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
          <View style={styles.bodyheader}>
            <Image source={imagen} style={styles.image} resizeMode="contain" />
            <Text style={styles.text}>Inicio de Sesion</Text>
          </View>

          <View style={styles.bodybody}>
            <Input
              placeholder="Email"
              onChangeText={(e) => setForm({ ...form, email: e })}
            />
            <Input
              placeholder="Password"
              onChangeText={(e) => setForm({ ...form, password: e })}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.footer}>
            <Button
              title="Iniciar Sesion"
              type="solid"
              onPress={() => submit()}
            />
          </View>
          <View style={[{ marginBottom: 20 }, styles.footer]}>
            <Button
              type="outline"
              title="Registro"
              style={{ marginTop: 10 }}
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flexGrow: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: "70%",
    marginVertical: "40%",
  },

  bodyheader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  bodybody: {
    padding: 20,
  },

  footer: {
    marginHorizontal: 30,
    justifyContent: "flex-end",
    marginTop: 10,
  },

  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
});
