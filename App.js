import "react-native-gesture-handler";
import React from "react";
import AuthState from "./src/context/auth/authState";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <AuthState>
      <Navigation />
    </AuthState>
  );
}
