import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import imagen from "../media/inicio.jpg";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.bodyheader}>
          <Image source={imagen} />
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
    /* backgroundColor: "#FF5733",  */
    justifyContent: "center",
  },

  body: {
    marginVertical: "50%",
    marginHorizontal: "10%",
    flex: 1,
    flexGrow: 10,
    /* backgroundColor: "#B8FF33", */
    justifyContent: "center",
  },

  bodyheader: {
    flex: 5,
    marginVertical: '1%',
    marginHorizontal: '5%', 
    justifyContent: "center",
    /* backgroundColor: "#FF5733", */
    justifyContent: "center",
  },

  bodybody: {
    flex: 5,
    marginVertical: "20%",
    marginHorizontal: "10%",
    flexGrow: 20,
    /* backgroundColor: "#B8FF33",  */
    justifyContent: "flex-end",
  },

  footer: {
    flex: 1,
    /* backgroundColor: "#FF5733", */
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: "15%",
    marginHorizontal: "10%",
  },

  image: {
    width: 100,
    height: 100,
    marginVertical: '1%',
    marginHorizontal: '35%', 
  },
});
