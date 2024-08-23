import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";

export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [userId, setUserId] = useState<number | null>(null);
  const [currentScreen, setCurrentScreen] = useState<"login" | "register">(
    "login"
  );

  const [users, setUsers] = useState<
    {
      id: number;
      username: string;
      password: string;
      fullName: string;
      age: string;
    }[]
  >([]);
  const handleRegister = () => {
    if (users.some((user) => user.username === username)) {
      alert("User already exists");
    } else {
      const newUser = {
        id: users.length + 1,
        username,
        password,
        fullName,
        age,
      };
      setUsers([...users, newUser]);
      alert("User registered successfully");
      setCurrentScreen("login");
    }
  };

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setUserId(user.id);
      setFullName(user.fullName);
      setAge(user.age);
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSubmit = () => {
    currentScreen === "login" ? handleLogin() : handleRegister();
  };

  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  if (isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text>Welcome to the HomePage</Text>
        <Text>User ID: {userId}</Text>
        <Text>Full Name: {fullName}</Text>
        <Text>Age: {age}</Text>
      </View>
    );
  }

  return (
    <Animated.View style={[styles.container]}>
      <Text style={styles.title}>
        {currentScreen === "login" ? "Login" : "Register"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        placeholderTextColor="#aaa"
      />
      {currentScreen === "register" && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            value={age}
            onChangeText={(text) => setAge(text)}
            inputMode="numeric"
            placeholderTextColor="#aaa"
          />
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {currentScreen === "login" ? "Login" : "Register"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setCurrentScreen(currentScreen === "login" ? "register" : "login")
        }
      >
        <Text style={styles.switchText}>
          {currentScreen === "login"
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  switchText: {
    marginTop: 20,
    color: "#4CAF50",
    fontSize: 16,
  },
});
