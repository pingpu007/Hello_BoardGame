import React, { useState } from "react";
import CryptoJS from "crypto-js";

import { View, Text, TextInput, Button } from "react-native";
import DncryptionStyle from "./index.stype";

// ---------------------<h1> ตัวอย่าง </h1>

// const key = 'YourSecretKey';
// const data = 'Hello, world!';

// // Encrypt
// const encryptedData = CryptoJS.AES.encrypt(data, key).toString();

// console.log('Encrypted:', encryptedData);

// // Decrypt
// const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);

const Decryption = () => {
  const [Key, setKey] = useState("");
  const [encrypt, setEncryt] = useState("");
  const [decrypt, setDecrypt] = useState("");

  const handledecryot = () => {
    const decryptedData = CryptoJS.AES.decrypt(encrypt, Key).toString(
      CryptoJS.enc.Utf8
    );
    setDecrypt(decryptedData);
  };

  return (
    <View style={DncryptionStyle.boxDecrypt}>
      <View style={DncryptionStyle.boxInput}>
        <TextInput
          style={DncryptionStyle.Input}
          placeholder="Key"
          value={Key}
          onChangeText={(text) => setKey(text)}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextInput
          style={DncryptionStyle.Input}
          placeholder="Code Encrypt"
          value={encrypt}
          onChangeText={(text) => setEncryt(text)}
        />
      </View>
      <View>
        <Button title="Decrypt" onPress={handledecryot} />
      </View>
      <View style={DncryptionStyle.boxResule}>
        <Text>{decrypt}</Text>
      </View>
    </View>
  );
};

export default Decryption;
