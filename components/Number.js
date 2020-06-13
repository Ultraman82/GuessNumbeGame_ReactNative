import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/color";
const Number = (props) => {
  return (
    <View style={styles.containter}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    borderWidth: 2,
    borderColor: Color.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  number: {
    color: Color.accent,
  },
});
export default Number;
