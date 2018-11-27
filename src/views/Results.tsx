import React from "react";
import { FlatList } from "react-native";
import { SearchItemInterface } from "../redux/reducers";
import { ResultItem } from "../sharedComponents/styledComponents";

export default class Results extends React.Component<{
  data: SearchItemInterface[];
}> {
  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={(item: SearchItemInterface) => item.id.toString()}
        renderItem={({ item }: { item: SearchItemInterface }) => (
          <ResultItem
            item={item}
            onToggle={toggledItem => console.warn(toggledItem)}
          />
        )}
      />
    );
  }
}
