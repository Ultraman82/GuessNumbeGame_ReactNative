import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";

import MainButton from "../components/MainButton";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/color";

const GameOver = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          <TitleText>The Game is Over</TitleText>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/success.png")}
              //fadeDuration={1000}
              // source={{
              //   uri:
              //     "https://cdn.pixabay.com/photo/2019/01/22/18/30/summit-3948706_960_720.jpg",
              // }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.resultContainer}>
            <BodyText style={styles.bodyText}>
              You phone needed{" "}
              <Text style={styles.hightlight}>{props.roundsNumber}</Text> rounds
              to guess the number{" "}
              <Text style={styles.hightlight}>{props.userNumber}</Text>.
            </BodyText>
          </View>
          <MainButton onPress={props.onRestart}>New Game</MainButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "#000",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  hightlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").width / 60,
  },
  bodyText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});

export default GameOver;
