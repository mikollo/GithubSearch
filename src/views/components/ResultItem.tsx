import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { SearchItemInterface } from "../../redux/reducers";
import { theme } from "../../constants";
interface ResultItemProps {
  item: SearchItemInterface;
  onResultPress: (item: SearchItemInterface) => void;
}

const ResultItem: React.SFC<ResultItemProps> = props => (
  <TouchableOpacity
    style={itemStyles.container}
    onPress={() => props.onResultPress(props.item)}
  >
    <Text
      style={{
        color: props.item.picked ? "red" : "black"
      }}
    >
      {props.item.fullName}
      {`\n`}
      {props.item.starCount} stars
    </Text>
    <View style={itemStyles.avatar}>
      <Image style={itemStyles.avatar} source={{ uri: props.item.avatar }} />
    </View>
  </TouchableOpacity>
);

const itemStyles = StyleSheet.create({
  container: {
    padding: theme.spacing,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  avatar: {
    width: theme.spacing * 2,
    height: theme.spacing * 2,
    borderRadius: theme.spacing
  }
});

export default ResultItem;
