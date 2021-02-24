import React from "react";
import { View, Text, Button } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <View>
      <Text>Esta es la pantalla de registro</Text>
      <Button
        title="Volver a home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default SignUp;
