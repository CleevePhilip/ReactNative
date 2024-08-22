import React, { useState } from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

// Define the type for each credential object
interface Credential {
  user_id: string;
  username: string;
  password: string;
}

const HomeScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [credentials, setCredentials] = useState<Credential[]>([]);

  const handleSubmit = () => {
    setCredentials((prev) => [
      ...prev,
      { user_id: new Date().getTime().toString(), username, password },
    ]);
    // Clear input fields after submission
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Registration</Text>
        <ScrollView style={styles.scrollView}>
          {credentials.map((item) => (
            <View key={item.user_id} style={styles.userCard}>
              <Text style={styles.cardText}>Username: {item.username}</Text>
              <Text style={styles.cardText}>Password: {item.password}</Text>
            </View>
          ))}
        </ScrollView>
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
          secureTextEntry={true}
          style={styles.input}
        />
        <Button title="Register" onPress={handleSubmit} />
      </View>
      <View>
        {" "}
        <Link
          href={{
            pathname: "/details/[id]",
            params: { id: "bacon" },
          }}
        >
          View user details
        </Link>
      </View>
    </>
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  scrollView: {
    width: "100%",
    marginBottom: 20,
  },
  userCard: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    borderColor: "#CCC",
    borderWidth: 1,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
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
  link: {
    marginTop: 20,
    color: "#007BFF",
    fontSize: 16,
  },
});

export default HomeScreen;
