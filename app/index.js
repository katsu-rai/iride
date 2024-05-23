import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

const HomePage = () => {
  const router = useRouter(); // Use the useRouter hook to get the router object

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <Link href="/users/1">
        <Text style={styles.link}>Go to user 1</Text>
      </Link>
      <Pressable
        style={styles.pressable}
        onPress={() => router.push("/users/2")}
      >
        <Text style={styles.text}>Go to user 2</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  link: {
    color: "blue",
    fontSize: 18,
    margin: 10,
  },
  pressable: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5,
    margin: 10,
  },
});

export default HomePage;
