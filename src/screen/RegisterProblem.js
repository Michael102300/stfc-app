import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import ProblemsContext from "../context/problems/problemContext";
import Header from "../components/Header";
const RegisterProblems = ({ navigation }) => {
  const problemContext = useContext(ProblemsContext);
  const { problems, getAllProblems, saveCurrentProblem } = problemContext;
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    getAllProblems();
  }, []);
  let register = problems.filter((pro) => pro.stateProcces === "registrado");
  const currentProblemLocal = (id) => {
    saveCurrentProblem(id);
    console.log(id);
    navigation.navigate("Editar");
    /* setEdit(true); */
  };
  return (
    <View>
      <Header title="Nuevos problemas" navigation={navigation} />
      <ScrollView style={{ marginBottom: 90 }}>
        {register ? (
          register.length > 0 ? (
            register.map((pr) => (
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
                {/* <Card.Title style={{ fontSize: 25 }}>{pr.name}</Card.Title> */}
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
                {pr.solution ? (
                  <View style={styles.containerText}>
                    <Text style={styles.text}>Solucion: </Text>
                    <Text
                      style={[
                        { color: "black", fontWeight: "bold", opacity: 1 },
                        styles.text,
                      ]}
                    >
                      {pr.solution}
                    </Text>
                  </View>
                ) : null}

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
              </Card>
            ))
          ) : (
            <Card>
              <Card.Title style={{ fontSize: 20 }}>
                No tienes problemas nuevos
              </Card.Title>
            </Card>
          )
        ) : null}
      </ScrollView>
    </View>
  );
};

export default RegisterProblems;
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
