import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screen/Home";
import DetailScreen from "./screen/Detail";
import AddScreen from "./screen/Add";
import EditScreen from "./screen/Edit";
import ContactAdd from "./components/ContactAdd";

const Stack = createStackNavigator();

export default ({ navigation }) =>{
  const handleAdd = () => {
    console.log(navigation);
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Contacts",
          headerStyle: {
            backgroundColor: "#01a7e1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
          headerLeft: null,
          // headerRight: () => <ContactAdd navigation={navigation}/>,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#01a7e1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
      />
      <Stack.Screen name="AddContact" component={ContactAdd} />
      <Stack.Screen name="Add" component={AddScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addBtn: {
    backgroundColor: "#01a7e1",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginRight: 10,
  },
});
