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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
