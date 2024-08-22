import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
const login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Link href="/">Home</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
});
export default login;
