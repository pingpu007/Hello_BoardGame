import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from 'expo-blur';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
} from "react-native";

const image = {
  uri: "https://media.gettyimages.com/id/1146577830/vector/game-icon-sets.jpg?s=612x612&w=0&k=20&c=BXy_eSYsZTCmAOTFVFNsru9yCEcTpdHINh5U65JSO2o=",
};

const index = () => {
  const [textInputName, setTextInputName] = useState("");

  const checkTextInput = () => {
    if (!textInputName.trim()) {
      alert("Please Enter username");
      return;
    }
    // alert("Success");
  };

  return (
    <SafeAreaView>
      <ImageBackground style={styles.box} source={image} resizeMode="cover">
        <BlurView intensity={200} style={styles.backgroundblur}>
          <Text style={styles.texthead}>BOARD GAME</Text>

          <TextInput
            style={styles.BorderInput}
            keyboardType="default"
            placeholder="username"
            onChangeText={(value) => setTextInputName(value)}
          />

          <TextInput
            style={styles.BorderInput}
            maxLength={12}
            secureTextEntry={true}
            placeholder="password"
          />

          <View style={styles.ArreaButton}>
            <Button
              title="LOGIN"
              style={styles.buttoncustom}
              color="#B1D8B7"
              onPress={checkTextInput}
            />
          </View>
        </BlurView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundblur: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    height: "45%",
    backgroundBlur: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },

  texthead: {
    color: '#B1D8B7',
    paddingVertical: 20,
    elevation: 50,
    fontSize: 30,
    textShadowColor: "#000",
    textShadowOffset: { width: -1, height: 0 },
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  BorderInput: {
    width: "85%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#B1D8B7',
  },

  buttoncustom: {
    backgroundColor: "#009688",
  },

  ArreaButton: {
    width: "85%",
    paddingVertical: 20,
  },
});

export default index;
