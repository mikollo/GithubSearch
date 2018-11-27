import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { SearchItemInterface } from "../../redux/reducers";

interface ResultItemProps {
  item: SearchItemInterface;
  onToggle: (item: SearchItemInterface) => void;
}

const ResultItem: React.SFC<ResultItemProps> = props => (
  <TouchableOpacity onPress={() => props.onToggle(props.item)}>
    <Text>{props.item.fullName}</Text>
    <Text>{props.item.starCount}</Text>
    <Image
      style={{ width: 20, height: 20, borderRadius: 10 }}
      source={{ uri: props.item.avatar }}
    />
  </TouchableOpacity>
);

export default ResultItem;
