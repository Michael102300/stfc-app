import React from "react";
import { View, Text, Button } from "react-native";
const Myproblems = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 40 }}>Mis problemas</Text>
            <Button
                title="Inicio"
                type="solid"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
};

export default Myproblems;