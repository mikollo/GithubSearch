import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";
import { SearchItemInterface } from "../../redux/reducers";
import { theme } from "../../constants";
interface ResultItemProps {
  item: SearchItemInterface;
  onResultPress: (item: SearchItemInterface) => void;
}

const ResultItem: React.SFC<ResultItemProps> = props => (
  <TouchableWithoutFeedback onPress={() => props.onResultPress(props.item)}>
    <View style={itemStyles.container}>
      <Text
        style={{
          width: Dimensions.get("screen").width - 5 * theme.spacing,
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
    </View>
  </TouchableWithoutFeedback>
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
    borderRadius: theme.spacing,
    backgroundColor: "gray"
  }
});

export default ResultItem;
