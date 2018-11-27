import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { SearchItemInterface } from "../../redux/reducers";

interface ResultItemProps {
  item: SearchItemInterface;
  onResultPress: (item: SearchItemInterface) => void;
}

const ResultItem: React.SFC<ResultItemProps> = props => (
  <TouchableOpacity
    style={{
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }}
    onPress={() => props.onResultPress(props.item)}
  >
    <Text
      style={{
        color: props.item.picked ? "red" : "black"
      }}
    >
      {props.item.fullName}
      {`\n`}
      {props.item.starCount}
    </Text>
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "gray"
      }}
    >
      <Image
        style={{ width: 50, height: 50, borderRadius: 25 }}
        source={{ uri: props.item.avatar }}
      />
    </View>
  </TouchableOpacity>
);

export default ResultItem;
