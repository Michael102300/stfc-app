import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import Header from "../components/Header";
import AuthContext from "../context/auth/authContext";
import ProblemsContext from "../context/problems/problemContext";

const Proceso = ({ navigation }) => {
  const problemContext = useContext(ProblemsContext);
  const { problems } = problemContext;
  let proceso = problems.filter((pro) => pro.stateProcces === "proceso");
  return (
    <View>
      <Header title="En proceso" navigation={navigation} />
      <ScrollView style={{ marginBottom: 90 }}>
        {proceso ? (
          proceso.length > 0 ? (
            proceso.map((pr) => (
              <Card>
                <Card.Title style={{ fontSize: 25 }}>{pr.name}</Card.Title>
                <Card.Divider />
                <View style={styles.containerText}>
                  <Text style={styles.text}>Nombre: </Text>
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
                    <Text style={styles.text}>Dificultad: </Text>
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
                  <Text style={styles.text}>Descripción: </Text>
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
                    {pr.createdAt.substring(0, 10)}
                  </Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.text}>Acción: </Text>
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
