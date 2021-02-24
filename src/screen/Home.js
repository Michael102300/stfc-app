import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button, Image } from "react-native-elements";
import imagen from "../media/inicio.jpg";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.bodyheader}>
          <Image style={styles.image} source={imagen} />
        </View>

        <View style={styles.bodybody}>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </View>

        <View style={styles.footer}>
          <Button
            title="Sign In"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5733",
    justifyContent: "center",
  },

  body: {
    marginVertical: "50%",
    marginHorizontal: "10%",
    flex: 1,
    flexGrow: 10,
    backgroundColor: "#B8FF33",
    justifyContent: "center",
  },

  bodyheader: {
    flex: 3,
    /* marginVertical: '30%',
    marginHorizontal: '10%', */
    justifyContent: "center",
    backgroundColor: "#FF5733",
  },

  bodybody: {
    flex: 1,
    marginVertical: "30%",
    marginHorizontal: "10%",
    flexGrow: 5,
    backgroundColor: "#FF5733",
    justifyContent: "flex-end",
  },

  footer: {
    flex: 1,
    backgroundColor: "#FF5733",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: "15%",
    marginHorizontal: "10%",
  },

  image: {
    width: 30,
    height: 30,
  },
});
