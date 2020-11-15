import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { getContacts, getContact } from "../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddContact from "./ContactAdd"
export default ({navigation}) => {
  const dispatch = useDispatch();
  const dataContact = useSelector((state) => state.contactReducer.contacts);
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  const handlePress = (id) => {
    dispatch(getContact(id))
    navigation.navigate("Detail")
  }
  const renderItem = ({ item }) => (
    <View>
      <TouchableWithoutFeedback onPress={() => handlePress(item.id)}>
        <View style={styles.item}>
          <View>
            <Image
              style={styles.photo}
              source={{
                uri: item.photo,
              }}
            />
          </View>
          <View style={styles.containerName}>
            <Text style={styles.title}>
              Name: {`${item.firstName} ${item.lastName}`}
            </Text>
            <Text style={styles.age}>Age: {item.age} Years</Text>
          </View>
          <Ionicons />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonAdd}>
          <AddContact navigation={navigation}/>
        </View>
      <FlatList
        data={dataContact}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  age: {
    fontSize: 14,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  containerName: {
    marginLeft: 10,
  },
  buttonAdd: {
    width: 100,
    margin: 5,
    alignContent: "flex-end",
    textAlign: "right",
    justifyContent: "flex-end"
  },
});
