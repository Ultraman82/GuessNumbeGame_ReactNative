import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/color";
const MainButton = (props) => {
  let ButtonComponenet = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponenet = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
