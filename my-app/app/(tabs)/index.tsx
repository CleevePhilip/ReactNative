import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const HomeScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState([
    {
      user_id: "",
      username: "",
      password: "",
    },
  ]);

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello, {username}</Text>*/}
      <Text style={styles.text}>Student Login</Text>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />

      {/* Ensures that username is rendered as text */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: "#000",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  outputText: {
    fontSize: 16,
    color: "#333",
  },
});

export default HomeScreen;
