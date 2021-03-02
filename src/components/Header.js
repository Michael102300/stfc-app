import React from "react";
import { View, Text, Button } from "react-native";
import { Header, Icon } from "react-native-elements";

const HeaderCustom = ({title, navigation }) => {  
  return (
    <Header centerComponent={{ text: `${title}`, style: { color: '#fff', fontSize: 20 } }}>
      <Home navigation={navigation} />
    </Header>
  )
}

const Home = ({navigation}) => {
  return (
    <Icon onPress={() => navigation.openDrawer()} name="subject" color="white" />
  )
}
export default HeaderCustom;