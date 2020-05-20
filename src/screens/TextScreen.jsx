import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const ColorCounter = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <Text>My Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default ColorCounter;
