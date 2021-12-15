import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CryptosList from "../components/CryptosList";

const HomeSceen = () => {
  return (
    <View style={styles.container}>
      <CryptosList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeSceen;
