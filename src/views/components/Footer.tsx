import React from "react";
import { View, Button } from "react-native";
import { theme } from "../../constants";

const Footer: React.SFC<Button["props"]> = props => (
  <View style={{ padding: theme.spacing }}>
    <Button {...props} />
  </View>
);

export default Footer;
