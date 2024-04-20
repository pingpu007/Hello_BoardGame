import React, { useState } from "react";
import CryptoJS from "crypto-js";

import { View, Text, TextInput, Button } from "react-native";
import EncryptionStyle from "./index.stype";

// ---------------------<h1> ตัวอย่าง </h1>

// const key = 'YourSecretKey';
// const data = 'Hello, world!';

// // Encrypt
// const encryptedData = CryptoJS.AES.encrypt(data, key).toString();

// console.log('Encrypted:', encryptedData);

// // Decrypt
// const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);


const Encryption = () => {
  const [input, setInput] = useState([{ key: 0, values: "" }]);
  const [Key, setKey] = useState("");
  const [data, setData] = useState([{ key: 0, values: "" }]);
  const [dataEncrypt, setEncrypt] = useState([{ key: 0, values: "" }]);

  const addInput = () => {
    const newKey = input.length;
    setInput([...input, { key: newKey, values: "" }]);
    setData([...data, { key: newKey, values: "" }]);
    setEncrypt([...dataEncrypt, { key: newKey, values: "" }]);
  };

  const remove = (keyToRemove) => {
    const newInput = input.filter(
      (removeInput) => removeInput.key !== keyToRemove
    );
    setInput(newInput);

    const newData = data.filter((removeData) => removeData.key !== keyToRemove);
    setData(newData);

    const newEncryptData = dataEncrypt.filter(
      (item) => item.key !== keyToRemove
    );
    setEncrypt(newEncryptData);
  };

  const handleText = (text, key) => {
    const newInput = input.map((item) =>
      item.key === key ? { ...item, values: text } : item
    );
    setInput(newInput);
    const newData = data.map((item) =>
      item.key === key ? { ...item, values: text } : item
    );
    setData(newData);
  };

  const encrypValues = () => {
    const encrypData = data.map((item) => {
      const encryptValues = CryptoJS.AES.encrypt(item.values, Key).toString();
      return { key: item.key, values: encryptValues };
    });
    setEncrypt(encrypData);
    console.log("Encryption =====>", encrypData);
  };

  return (
    <View>
      <Text>Encryption</Text>
      <View>
        <TextInput
          style={EncryptionStyle.Input}
          placeholder="Key"
          onChangeText={(text) => setKey(text)}
          value={Key}
        />
      </View>

      <View>
        <Button title="Click to add input" onPress={addInput} />
      </View>
      {input.map((item) => (
        <View key={item.key}>
          <TextInput
            style={EncryptionStyle.Input}
            placeholder="Input"
            onChangeText={(text) => handleText(text, item.key)}
            value={item.values}
          />
          <View>
            <Button title="Remove" onPress={() => remove(item.key)} />
          </View>
        </View>
      ))}

      <View>
        <Button title="Click to Encrypt Data" onPress={encrypValues} />
      </View>
      <View>
        {dataEncrypt.map((item) => (
          <Text key={item.key}> Encrypting : {item.values} </Text>
        ))}
      </View>
    </View>
  );
};

export default Encryption;
