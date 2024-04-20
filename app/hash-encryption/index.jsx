import { Input } from "@mui/material";
import React, { useState } from "react";
import md5 from "md5";
import { View, Text, TextInput, Button } from "react-native";
import hashStyle from "./index.style";

const Hash = () => {
  const [inputValues, setInputValues] = useState([{ key: 0, value: "" }]);
  const [hashedValues, setHashedValues] = useState([{ key: 0, value: "" }]);

  const MAX_INPUTS = 5;

  const addInput = () => {
    if (inputValues.length < MAX_INPUTS) {
      const newKey = inputValues.length;
      setInputValues([...inputValues, { key: newKey, value: "" }]);
      setHashedValues([...hashedValues, { key: newKey, value: "" }]);
    }
  };

  const removeInput = (keyToRemove) => {
    const newInputs = inputValues.filter((input) => input.key !== keyToRemove);
    setInputValues(newInputs);
    const newHashedValues = hashedValues.filter(
      (hash) => hash.key !== keyToRemove
    );
    setHashedValues(newHashedValues);
  };

  const handleTextChange = (text, key) => {
    const newInputs = inputValues.map((input) =>
      input.key === key ? { ...input, value: text } : input
    );
    setInputValues(newInputs);
  };

  const hashValues = () => {
    const newHashedValues = inputValues.map((input) => {
      const hashedValue = md5(input.value);
      return { key: input.key, value: hashedValue };
    });
    setHashedValues(newHashedValues);
  };

  return (
    <View>
      <View>
        <Button title="Click Add Input" onPress={addInput} />

        {inputValues.map((input) => (
          <View key={input.key} style={hashStyle.boxInput}>
            <TextInput
              multiline
              onChangeText={(text) => handleTextChange(text, input.key)}
              value={input.value}
              style={{
                borderWidth: 1,
                width: "65%",
                height: 45,
                borderRadius: 10,
                borderColor: "red",
                padding: 10,
                margin: 10,
              }}
            />
            <View style={hashStyle.button} >
              <Text  style={{color:'#ffff'}} onPress={() => removeInput(input.key)}>
                Click Remove
              </Text>
            </View>
          </View>
        ))}

        <Button title="Click for Hash" onPress={hashValues} />

        {hashedValues.map((hash) => (
          <Text key={hash.key} style={{ marginTop: 10 }}>
            Hashed Value: {hash.value}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Hash;
