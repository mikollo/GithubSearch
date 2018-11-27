import React from "react";
import { TextInput } from "react-native";

const SearchInput = (props: {
  onChangeText: TextInput["props"]["onChangeText"];
}) => (
  <TextInput
    style={{ padding: 20, fontSize: 18 }}
    placeholder="Search repos"
    onChangeText={props.onChangeText}
  />
);

export default SearchInput;
