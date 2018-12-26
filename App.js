import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Register from "./src/components/Register";
import GooglePlaces from "./src/components/GooglePlaces";

export default class App extends React.Component {
  render() {
    return (
      <GooglePlaces />
      // <Register />
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
