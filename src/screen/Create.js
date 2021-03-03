import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Header from "../components/Header";
import AuthContext from "../context/auth/authContext";
import ProblemContext from "../context/problems/problemContext";

const Create = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const problemContext = useContext(ProblemContext);
  const { createProblem } = problemContext;
  const [problem, setProblem] = useState({
    name: "",
    description: "",
    user: user._id,
  });
  const { name, description } = problem;
  const onSubmit = () => {
    createProblem(problem);
    setProblem({
      name: "",
      description: "",
      user: user._id,
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Crear Problema" navigation={navigation} />

      <View style={styles.body}>
        <Input
          value={name}
          placeholder="Nombre del problema"
          onChangeText={(y) => setProblem({ ...problem, name: y })}
        />
        <Input
          value={description}
          placeholder="Descripción del problema"
          onChangeText={(z) => setProblem({ ...problem, description: z })}
        />
      </View>
      <View style={styles.footer}>
        <Button
          title="Crear problema"
          type="solid"
          onPress={() => onSubmit()}
        />
      </View>
    </View>
  );
};

export default Create;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginVertical: "10%",
  },
  footer: {
    justifyContent: "flex-end",
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
