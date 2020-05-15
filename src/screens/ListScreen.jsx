import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #4" },
    { name: "Friend #4" },
    { name: "Friend #4" },
    { name: "Friend #4" },
    { name: "Friend #4" },
    { name: "Friend #4" },
    { name: "Friend #4" },
    { name: "Friend #4" },
    { name: "Friend #4" },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      // keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item, index }) => {
        return <Text key={index}>{item.name}</Text>;
      }}
    />
  );
};
const styles = StyleSheet.create({});

export default ListScreen;
