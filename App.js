import "react-native-gesture-handler";
import React from "react";
import AuthState from "./src/context/auth/authState";
import AlertState from "./src/context/alerts/alertState";
import ProblemState from "./src/context/problems/problemState";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <ProblemState>
      <AlertState>
        <AuthState>
          <Navigation />
        </AuthState>
      </AlertState>
    </ProblemState>
  );
}
