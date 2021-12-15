import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import CryptoItem from "../components/CryptoItem";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <CryptoItem />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SearchScreen;
