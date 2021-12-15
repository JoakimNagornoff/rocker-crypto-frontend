import { useQuery, gql } from "@apollo/client";

//query for single crypto
export const crypto = gql`
  query GetCrypto($name: String) {
    getCrypto(name: $name) {
      asset_id
      name
      type_is_crypto
      price_usd
    }
  }
`;
//query for crypto list
export const cryptos = gql`
  query GetCryptos {
    getCryptos {
      asset_id
      name
      price_usd
      type_is_crypto
    }
  }
`;
