import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import {addContact, getContacts} from "../store/actions"
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

export default ({navigation}) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [age, setAge] = useState()
  const [photo, setPhoto] = useState();
  const handleAdd = () => {
    dispatch(addContact({ firstName, lastName, age, photo }))
    dispatch(getContacts());
    navigation.navigate("Home")
  };
  useEffect(() => {
    console.log({firstName, lastName, age, photo});
  }, [firstName, lastName, age, photo]);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="First Name..."
            placeholderTextColor="#fff"
            onChangeText={(text) => setFirstName(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Last Name..."
            placeholderTextColor="#fff"
            onChangeText={(text) => setLastName(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Age..."
            placeholderTextColor="#fff"
            onChangeText={(text) => setAge(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Photo Url..."
            placeholderTextColor="#fff"
            onChangeText={(text) => setPhoto(text)}
          />
        </View>
        <TouchableOpacity style={styles.saveBtn} onPress={handleAdd}>
          <Text>Save Contact</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerPhoto: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  detailText: {
    fontSize: 18,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 25,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#01a7e1",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  saveBtn: {
    width: "80%",
    backgroundColor: "#01a7e1",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    color: "white",
  },
});
