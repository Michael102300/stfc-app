import React from "react";
import { View, Text } from "react-native";

const Alert = ({ alert }) => {
  return (
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
  );
};

export default Alert;
