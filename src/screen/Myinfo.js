import React from "react";
import { View, Text, Button } from "react-native";
const Myinfo = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 40 }}>Mi info</Text>
            <Button
                title="Inicio"
                type="solid"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
};

export default Myinfo;