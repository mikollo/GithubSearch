import React, { Component } from "react";
import { View, Button } from "react-native";

const Footer: React.SFC<Button["props"]> = props => (
  <View style={{ padding: 20 }}>
    <Button {...props} />
  </View>
);

export default Footer;
