import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  Modal,
} from "react-native";

const datagame = [
  {
    imageUrl:
      "data:image/jpeg;base64,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",
    name: "สามก๊ก",
  },
  {
    imageUrl:
      "data:image/png;base64,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",
    name: "Uno",
  },
];

const AddGamePage = () => {
  const [modal, setModal] = useState(false);
  const [dataform, setDataform] = useState({
    image: '', 
    name: '',      
    minimumPlayer: '', 
  });

  const handleButtonPress = () => {
    console.log("data form:", dataform);
  };


  axios.post('http://localhost:3000/addBoardGame',dataform)
  .then(response =>{
    alert(response.data);
  })
  .catch(error => {
    console.error("Error sending data: ", error);
  });

  return (
    <SafeAreaView>
      <View style={stylesadd.headadd}>
        <Text style={{ fontSize: 20 }}> Add Game</Text>
        <Text onPress={() => setModal(true)} style={{ fontSize: 20 }}>
          {" "}
          add +{" "}
        </Text>
      </View>
      <View style={stylesadd.boxcard}>
        <Text style={{ fontSize: 20 }}> game </Text>
        {datagame.map((item, index) => (
          <View style={stylesadd.cardcontent} key={index}>
            <View
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={{ width: 50, height: 50 }}
              />
              <Text style={{ marginHorizontal: 20 }}> {item.name} </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "40%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  padding: 5,
                  borderRadius: 5,
                  marginHorizontal: 10,
                  backgroundColor: "#FF3232",
                }}
              >
                Delete
              </Text>
              <Text
                style={{
                  color: "#fff",
                  padding: 5,
                  borderRadius: 5,
                  marginHorizontal: 10,
                  backgroundColor: "#B1D8B7",
                }}
              >
                Edit
              </Text>
            </View>
          </View>
        ))}
      </View>
{/*------------------------------------------------------------------------------------- Modal */}
      <Modal
        visible={modal}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <Text
          onPress={() => setModal(false)}
          style={{ padding: 20, textAlign: "right" }}
        >
          Cloose
        </Text>
        <View style={stylesadd.mainModal}>
          <View style={stylesadd.boxaddgame}>
            <Text style={stylesadd.texthead}> Add Games </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>Link Image : </Text>
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomRightRadius: 10,
                borderLeftWidth: 2,
                borderRightWidth: 2,
                borderColor: "#B1D8B7",
                width: "90%",
                padding: 3,
                borderRadius: 10,
                overflow: "hidden",
              }}
              placeholder="Place link"
              // onChangeText={(Text) => setDataform(Text)}
              onChangeText={(text) => setDataform({ ...dataform, image: text })}
            />
          </View>

          <TextInput
            style={stylesadd.inputname}
            placeholder="Name game"
            keyboardType="numeric"
            // onChangeText={(Text) => setDataform(Text)}
            onChangeText={(text) => setDataform({ ...dataform, name: text })}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Description"
            style={{
              borderBottomWidth: 2,
              borderBottomRightRadius: 10,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              width: "80%",
              height: 45,
              minHeight: 90,
              padding: 2,
              marginBottom: 25,
              borderRadius: 10,
              borderColor: "#B1D8B7",
            }}
            // onChangeText={(Text) => setDataform(Text)}
            onChangeText={(text) => setDataform({ ...dataform, minimumPlayer: text })}
          />
          <View style={{ width: "80%" }}>
            <Button
              title="Add Game"
              color="#B1D8B7"
              onPress={handleButtonPress}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const stylesadd = StyleSheet.create({
  headadd: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#C0C0C0",
  },

  boxcard: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },

  cardcontent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 2,
    borderColor: "#C0C0C0",
    marginVertical: 10,
    borderRadius: 10,
  },

  inputname: {
    marginVertical: 25,
    padding: 5,
    width: "80%",
    height: 45,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 15,
    borderColor: "#B1D8B7",
  },
  mainModal: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#C0C0C0",
  },

  texthead: {
    color: "#B1D8B7",
    elevation: 50,
    fontSize: 30,
    textShadowColor: "#000",
    textShadowOffset: { width: -1, height: 0 },
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    top: -15,
  },

  boxaddgame: {
    marginVertical: 30,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    position: "relative",
  },
});

export default AddGamePage;
