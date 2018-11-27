import React from "react";
import { FlatList } from "react-native";
import { SearchItemInterface } from "../../redux/reducers";
import ResultItem from "./ResultItem";

export default class Results extends React.Component<{
  data: SearchItemInterface[];
  onToggle: (item: SearchItemInterface) => void;
}> {
  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={(item: SearchItemInterface) => item.id.toString()}
        renderItem={({ item }: { item: SearchItemInterface }) => (
          <ResultItem item={item} onToggle={this.props.onToggle} />
        )}
      />
    );
  }
}
