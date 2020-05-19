import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);
  const COLOR_INCREMENT = 20;
  // const setColor = (color, change) => {
  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0
  //         ? null
  //         : setRed(red + COLOR_INCREMENT);
  //       return;
  //     case "green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + COLOR_INCREMENT);
  //       return;
  //     case "blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + COLOR_INCREMENT);
  //       return;
  //   }
  // };

  /** USE REDUCER */
  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case "red":
        return state.red + action.amount > 255 || state.red + action.amount < 0
          ? state
          : { ...state, red: state.red + action.amount };
      case "green":
        return state.green + action.amount > 255 ||
          state.green + action.amount < 0
          ? state
          : { ...state, green: state.green + action.amount };
      case "blue":
        return state.blue + action.amount > 255 ||
          state.blue + action.amount < 0
          ? state
          : { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, green, blue } = state;
  console.log(state);
  return (
    <View>
      <ColorCounter
        color={"red"}
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color={"blue"}
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color={"green"}
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
