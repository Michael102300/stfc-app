import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { Header, Icon } from "react-native-elements";
import AuthContext from "../context/auth/authContext";

const HeaderCustom = ({ title, navigation }) => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  return (
    <Header
      centerComponent={{
        text: `${title}`,
        style: { color: "#fff", fontSize: 20 },
      }}
      rightComponent={<Logout navigation={navigation} logout={logout} />}
    >
      <Home navigation={navigation} />
    </Header>
  );
};

const Home = ({ navigation }) => {
  return (
    <Icon
      onPress={() => navigation.openDrawer()}
      name="subject"
      color="white"
    />
  );
};

const Logout = ({ logout }) => {
  return <Icon onPress={() => logout()} name="logout" color="white" />;
};
export default HeaderCustom;
