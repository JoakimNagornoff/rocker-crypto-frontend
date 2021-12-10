import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useQuery, gql } from "@apollo/client";

const cryptos = gql`
  query GetCryptos {
    getCryptos {
      asset_id
      name
      price_usd
      type_is_crypto
    }
  }
`;
const HomeSceen = () => {
  const { loading, error, data } = useQuery(cryptos);
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeSceen;
