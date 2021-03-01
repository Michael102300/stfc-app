import React from "react";
import { View, Text, Button } from "react-native";
import { Header, MyCustomCenterComponent, MyCustomLeftComponent, MyCustomRightComponent } from "react-native-elements";


const SignUp = ({ navigation }) => {
  return (
    <View>

      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />

      <Button
        title="Volver a home"
        onPress={() => navigation.navigate("Home")}
      />
      
      
    </View>
    
  );
};

export default SignUp;
