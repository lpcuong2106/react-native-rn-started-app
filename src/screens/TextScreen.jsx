import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const ColorCounter = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={"hi there"}
      />
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
