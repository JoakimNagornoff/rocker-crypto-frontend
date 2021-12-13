import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useQuery, gql } from "@apollo/client";
import CryptoList from "../components/CryptoList";

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

  return (
    <View style={styles.container}>
      <CryptoList />
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
