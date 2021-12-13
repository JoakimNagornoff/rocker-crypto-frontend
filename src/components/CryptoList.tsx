import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
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

function Item({ name, asset_id, price_usd }) {
  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <Text style={styles.text} numberOfLines={1}>
          {asset_id}
        </Text>
        <View style={styles.right}>
          <Text style={styles.text}>${price_usd || 0}</Text>
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
              asset_id={item.asset_id}
              price_usd={item.price_usd}
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
    padding: 10,
  },

  loadingIndicatorContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
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

export default CryptoList;
