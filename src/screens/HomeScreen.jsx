import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text> Hello There LE </Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Component DEmo"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Button change view</Text>
      </TouchableOpacity>
      <Button
        title="Go to image Demo"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => props.navigation.navigate("Counter")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
