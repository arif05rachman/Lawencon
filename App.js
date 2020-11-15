import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Router from "./src/Router";
import store from "./src/store"
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router></Router>
      </NavigationContainer>
    </Provider>
  );
}
