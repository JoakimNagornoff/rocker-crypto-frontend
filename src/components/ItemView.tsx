import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Item({ id, name, price, props }) {
  return (
    <View style={props}>
      <View style={styles.row}>
        <Text style={styles.text} numberOfLines={1}>
          {id}
        </Text>
        <View style={styles.right}>
          <Text style={styles.text}>${price || 0}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={[styles.text, styles.name]} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  loadingIndicatorContainer: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 16,
    fontWeight: "300",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "500",
  },
});
