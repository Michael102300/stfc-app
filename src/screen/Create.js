import React from "react";
import { View, Text, Button } from "react-native";
const Create = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 40 }}>Crear problemas</Text>
            <Button
                title="Inicio"
                type="solid"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
};

export default Create;