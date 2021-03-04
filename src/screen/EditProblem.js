import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import Header from "../components/Header";
import AuthContext from "../context/auth/authContext";
import ProblemContext from "../context/problems/problemContext";
import { Picker } from "@react-native-picker/picker";

const Edit = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const UserCurrent = authContext.user;
  const problemContext = useContext(ProblemContext);
  const { problems, currentProblem, editProblem } = problemContext;
  const problem = problems.find((pro) => pro._id === currentProblem);
  const {
    _id,
    name,
    description,
    stateProcces,
    createdAt,
    dificulty,
    tecnico,
    user,
    tecnicoName,
  } = problem;
  const [form, setForm] = useState({
    _id,
    user,
    name,
    description,
    tecnico,
    stateProcces,
    dificulty,
    createdAt,
    solution: "",
    editedAt: new Date().toISOString(),
  });
  console.log(problem);
  const states = [
    { id: 1, name: "registrado" },
    { id: 2, name: "proceso" },
    { id: 3, name: "resuelto" },
    { id: 4, name: "cancelado" },
  ];
  const onSubmit = () => {
    editProblem(form);
    navigation.goBack();
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.text}>Nombre del problema</Text>
          <Input value={name} placeholder="Nombre del problema" disabled />
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Descripción del problema</Text>
          <Input style={{ color: "black" }} value={description} disabled />
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Dificultad del problema</Text>
          <Input value={dificulty} disabled style={{ color: "black" }} />
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Estado del problema</Text>
          <Picker
            selectedValue={form.stateProcces}
            onValueChange={(s) => setForm({ ...form, stateProcces: s })}
          >
            {states.map((st) => (
              <Picker.Item label={st.name} value={st.name} />
            ))}
          </Picker>
        </View>
        {problem.stateProcces === "proceso" ? (
          <View style={styles.card}>
            <Text style={styles.text}>Solucion del problema</Text>
            <Input
              style={{ color: "black" }}
              placeholder="Aun no tiene solucion"
              value={form.solution}
              onChangeText={(y) => setForm({ ...form, solution: y })}
            />
          </View>
        ) : null}
        <View></View>

        <View style={styles.footer}>
          <Button
            title="Editar problema"
            type="solid"
            onPress={() => onSubmit()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Edit;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    paddingTop: 15,
    marginBottom: 15,
  },
  footer: {
    justifyContent: "flex-end",
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: "black",
    opacity: 0.7,
    textAlign: "left",
    marginLeft: 10,
  },
});
