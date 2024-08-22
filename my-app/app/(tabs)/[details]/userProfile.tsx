import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "expo-router";

const UserProfile = () => {
  const { params } = useRoute();
  const { userId } = params as { userId: string }; // Ensure correct typing

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <Text style={styles.info}>User ID: {userId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  info: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default UserProfile;
