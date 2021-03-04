import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import ProblemsContext from "../context/problems/problemContext";
import Header from "../components/Header";
const Myproblems = ({ navigation }) => {
  const problemContext = useContext(ProblemsContext);
  const { problems, getAllProblems } = problemContext;
  useEffect(() => {
    getAllProblems();
  }, []);
  return (
    <View>
      <Header title="Mis problemas" navigation={navigation} />
      <ScrollView style={{ marginBottom: 90 }}>
        {problems ? (
          problems.length > 0 ? (
            problems.map((pr) => (
              <Card>
                <Card.Title style={{ fontSize: 25 }}>{pr.name}</Card.Title>
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
                  <Text style={styles.text}>Nombre del tecnico: </Text>
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
                No tienes problemas registrados
              </Card.Title>
            </Card>
          )
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Myproblems;
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
