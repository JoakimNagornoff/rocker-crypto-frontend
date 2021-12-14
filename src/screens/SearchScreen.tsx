import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { SafeAreaView } from "react-native-safe-area-context";

const crypto = gql`
  query GetCrypto($name: String) {
    getCrypto(name: $name) {
      asset_id
      name
      type_is_crypto
      price_usd
    }
  }
`;

function Item({ id, name, price }) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.text} numberOfLines={1}>
          {id}
        </Text>
        <View style={styles.right}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.text, styles.name]} numberOfLines={1}>
          {price}
        </Text>
      </View>
    </View>
  );
}

const SearchScreen = () => {
  const [search, setSearched] = useState("");

  const [getVar, { loading, error, data }] = useLazyQuery(crypto);

  if (loading && !data) {
    return (
      <View style={styles.loadingIndicatorContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.5 }}>
        {data?.getCrypto?.map((p) => (
          <Item
            id={p.asset_id}
            name={p.name}
            price={p.price_usd}
            key={p.asset_id}
          />
        ))}
      </View>
      <View style={{ flex: 0.5 }}>
        <TextInput
          style={styles.input}
          placeholder="Projekt"
          onChangeText={(text) => setSearched(text)}
        />
        <TouchableOpacity
          onPress={() => getVar({ variables: { name: search } })}
        >
          <Text>SEARCH</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  item: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 16,
    height: 200,
    backgroundColor: "gray",
    width: 360,
  },
  right: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "flex-end",
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
export default SearchScreen;
