import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const SearchButton = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
      <Icon name={"search"} size={25} />
    </TouchableOpacity>
  );
};

export default SearchButton;
