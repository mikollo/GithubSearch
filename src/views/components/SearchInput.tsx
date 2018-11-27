import React from "react";
import { TextInput } from "react-native";
import { theme } from "../../constants";

const SearchInput = (props: {
  onChangeText: TextInput["props"]["onChangeText"];
}) => (
  <TextInput
    style={{ padding: theme.spacing, fontSize: theme.fontSize }}
    placeholder="Search repos"
    onChangeText={props.onChangeText}
  />
);

export default SearchInput;
