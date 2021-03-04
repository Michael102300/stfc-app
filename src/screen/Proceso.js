import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Input, Button, Card, Icon } from "react-native-elements";
import Header from "../components/Header";
import AuthContext from "../context/auth/authContext";
import ProblemsContext from "../context/problems/problemContext";

const Proceso = ({ navigation }) => {
  const problemContext = useContext(ProblemsContext);
  const { problems, getAllProblems, saveCurrentProblem } = problemContext;
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    getAllProblems();
  }, []);
  let proceso = problems.filter((pro) => pro.stateProcces === "proceso");
  const currentProblemLocal = (id) => {
    console.log(id);
    navigation.navigate("Editar");
    saveCurrentProblem(id);
    /* setEdit(true); */
  };
  return (
    <View>
      <Header title="En proceso" navigation={navigation} />
      <ScrollView style={{ marginBottom: 90 }}>
        {proceso ? (
          proceso.length > 0 ? (
            proceso.map((pr) => (
              <Card key={pr._id}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 20 }}>Nombre del problema:</Text>
                    <Card.Title style={{ fontSize: 25, textAlign: "left" }}>
                      {pr.name}
                    </Card.Title>
                  </View>
                  {edit ? (
                    <Icon
                      name="send"
                      color="#3C6DCC"
                      size={30}
                      onPress={() => setEdit(false)}
                    />
                  ) : (
                    <Icon
                      name="create"
                      color="#3C6DCC"
                      size={30}
                      onPress={() => currentProblemLocal(pr._id)}
                    />
                  )}
                </View>
                <Card.Divider />
                <View style={styles.containerText}>
                  <Text style={styles.text}>Descripción: </Text>
                  <Text
                    style={[
                      { color: "black", fontWeight: "bold", opacity: 1 },
                      styles.text,
                    ]}
                  >
                    {pr.description}
                  </Text>
                </View>
                {edit ? (
                  <View style={styles.containerText}>
                    <Text style={styles.text}>Solucion: </Text>
                    <TextInput
                      style={{
                        borderBottomColor: "black",
                        fontSize: 20,
                        borderBottomWidth: 0.5,
                        marginTop: 5,
                      }}
                      placeholder="Escribe tu solucion aca"
                    />
                  </View>
                ) : null}
                {pr.solution ? (
                  <View style={styles.containerText}>
                    <Text style={styles.text}>Solucion: </Text>
                    <Text
                      style={[
                        { color: "black", fontWeight: "bold", opacity: 1 },
                        styles.text,
                      ]}
                    >
                      {pr.solution ? pr.solution : "Aun no tiene solucion"}
                    </Text>
                  </View>
                ) : null}
                <View style={styles.containerText}>
                  <Text style={styles.text}>Dificultad: </Text>
                  <Text
                    style={[
                      { color: "black", fontWeight: "bold", opacity: 1 },
                      styles.text,
                    ]}
                  >
                    {pr.dificulty}
                  </Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.text}>Estado: </Text>
                  <Text
                    style={[
                      { color: "black", fontWeight: "bold", opacity: 1 },
                      styles.text,
                    ]}
                  >
                    {pr.stateProcces}
                  </Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.text}>Técnico: </Text>
                  <Text
                    style={[
                      { color: "black", fontWeight: "bold", opacity: 1 },
                      styles.text,
                    ]}
                  >
                    {pr.tecnicoName ? pr.tecnicoName.name : "sin asignar"}
                  </Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.text}>Fecha de creacion: </Text>
                  <Text
                    style={[
                      { color: "black", fontWeight: "bold", opacity: 1 },
                      styles.text,
                    ]}
                  >
                    {pr.createdAt.substring(0, 10)}
                  </Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.text}>Fecha de ultimos cambios: </Text>
                  <Text
                    style={[
                      { color: "black", fontWeight: "bold", opacity: 1 },
                      styles.text,
                    ]}
                  >
                    {pr.editedAt
                      ? pr.editedAt.substring(0, 10)
                      : "No tiene fecha"}
                  </Text>
                </View>
              </Card>
            ))
          ) : (
            <Card>
              <Card.Title style={{ fontSize: 20 }}>
                No tienes problemas en proceso
              </Card.Title>
            </Card>
          )
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Proceso;
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  containerText: {
    width: "95%",
    marginBottom: 15,
  },
  body: {
    display: "flex",
    alignItems: "center",
    marginVertical: "5%",
  },
  footer: {
    marginHorizontal: 30,
    justifyContent: "flex-end",
    marginTop: 1,
  },
  text: {
    fontSize: 20,
    color: "black",
    opacity: 0.7,
  },
});
