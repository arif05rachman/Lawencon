import React, {useState, useEffect} from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import ContactList from "../components/ContactList"
import { useDispatch } from "react-redux";

export default ({ navigation}) => {
  const dispatch=useDispatch()
  const handleAdd = () => {
    console.log();
  };
  return (
    <>
      <ContactList navigation={navigation}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
