import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useLazyQuery } from "@apollo/client";
import { crypto } from "./querys";
import { Item } from "./ItemView";

const windowWidth = Dimensions.get("window").width;

const CryptoItem = () => {
  const [search, setSearched] = useState("");
  const [getVar, { loading, error, data }] = useLazyQuery(crypto);

  if (loading && !data) {
    return (
      <View style={styles.loadingIndicatorContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
  if (error) {
    return <Text>Error: {data}</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.halfContainer}>
        {data?.getCrypto?.map((p) => (
          <Item
            key={p.asset_id}
            id={p.asset_id}
            price={p.price_usd}
            name={p.name}
            props={styles.item2}
          />
        ))}
      </View>
      <View style={styles.halfContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for Crypto"
          onChangeText={(text) => setSearched(text)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => getVar({ variables: { name: search } })}
          >
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },
  halfContainer: {
    flex: 0.5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
    textAlign: "center",
  },
  loadingIndicatorContainer: {
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
  },
  item2: {
    height: 200,
    width: windowWidth,
    backgroundColor: "gray",
    justifyContent: "center",
    padding: 5,
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    width: 380,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
export default CryptoItem;
