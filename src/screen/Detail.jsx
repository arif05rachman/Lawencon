import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts, editContact } from "../store/actions"

export default ({navigation}) => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contactReducer.contact)
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [age, setAge] = useState()
  const [photo, setPhoto] = useState();
  const handleEdit = () => {
    // alert(JSON.stringify(contact))
    // dispatch(
    //   editContact(contact.id, {
    //     firstName: contact.firstName,
    //     lastName: contact.lastName,
    //     age: contact.age,
    //     photo: contact.photo
    //   })
    // );
    // dispatch(getContacts());
    navigation.navigate("Edit");
  }
  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
    dispatch(getContacts())
    navigation.navigate("Home")
    // alert("delete success")
  }
  useEffect(() => {
    console.log(contact)
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerPhoto}>
          <Image
            style={styles.photo}
            source={{
              uri: contact.photo,
            }}
          />
        </View>
        <View style={styles.containerDetail}>
          <Text style={styles.detailText}>
            First Name : {contact.firstName}
          </Text>
          <Text style={styles.detailText}>Last Name : {contact.lastName}</Text>
          <Text style={styles.detailText}>Age : {contact.age}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
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
  containerDetail: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "flex-start",
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
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 10,
    width: "30%",
    backgroundColor: "#01a7e1",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    color: "white",
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
