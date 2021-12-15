import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "@apollo/client";
import { Item } from "./ItemView";
import { cryptos } from "./querys";

const CryptoList = () => {
  const { loading, error, data } = useQuery(cryptos);
  if (loading && !data) {
    return (
      <View style={styles.loadingIndicatorContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
  //maps every object in array
  const newData = data.getCryptos?.map((p) => {
    return p;
  });

  if (error) {
    return <Text>Error: {data}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={newData}
        keyExtractor={(item) => item.asset_id}
        renderItem={({ item }) => {
          return (
            <Item
              name={item.name}
              id={item.asset_id}
              price={item.price_usd}
              props={styles.item}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  item: {
    flex: 1,
    padding: 5,
  },
  loadingIndicatorContainer: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CryptoList;
