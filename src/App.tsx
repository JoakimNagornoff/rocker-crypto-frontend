import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "./screens/SearchScreen";
import HomeSceen from "./screens/HomeScreen";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SearchButton from "./components/SearchButton";
//need to be expo ip address
const client = new ApolloClient({
  uri: "http:/192.168.1.180:4000/graphql",
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerTitleAlign: "center" }}
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={HomeSceen}
            options={{
              title: "Rocker Crypto",
              headerRight: () => <SearchButton />,
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: "Rocker Crypto",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
