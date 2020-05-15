import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const greeting = <Text>Hello to you!</Text>;
  const name = "cuong le";
  return (
    <View>
      <Text style={styles.textStyle}>Cuong dep trai</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});
export default ComponentScreen;
