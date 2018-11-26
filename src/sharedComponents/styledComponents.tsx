import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { SearchItemInterface } from "../utils/searchItemInterface";
interface ResultItemProps {
  item: SearchItemInterface;
  onToggle: (id: number) => void;
  isToggled: boolean;
}

const ResultItem: React.SFC<ResultItemProps> = props => (
  <TouchableOpacity onPress={() => props.onToggle(props.item.id)}>
    <Text>
      {props.item && props.item.full_name ? props.item.full_name : ""}
    </Text>
    <Text>{props.item.stargazers_count}</Text>
    {props.item.owner && props.item.owner.avatar_url ? (
      <Image
        style={{ width: 20, height: 20, borderRadius: 10 }}
        source={{ uri: props.item.owner.avatar_url }}
      />
    ) : null}
  </TouchableOpacity>
);

export { ResultItem };
