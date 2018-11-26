import React from "react";
import { FlatList } from "react-native";
import { SearchItemInterface } from "./utils/searchItemInterface";
import { ResultItem } from "./sharedComponents/styledComponents";

interface Props {
  data: SearchItemInterface[];
}

interface State {
  toggledItems: number[];
}

export default class Results extends React.Component<Props, State> {
  state: State = {
    toggledItems: []
  };

  onToggle = (isToggled: boolean) => (id: number) => {
    //  console.warn(id, isToggled);
    if (isToggled) {
      this.setState(({ toggledItems }) => ({
        toggledItems: toggledItems.filter(toggledItemID => toggledItemID !== id)
      }));
    } else {
      this.setState(({ toggledItems }) => ({
        toggledItems: [...toggledItems, id]
      }));
    }
  };

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state.toggledItems}
        keyExtractor={(item: SearchItemInterface) => item.id.toString()}
        renderItem={({ item }: { item: SearchItemInterface }) => {
          const isToggled = this.state.toggledItems.indexOf(item.id) > -1;
          return (
            <ResultItem
              item={item}
              onToggle={this.onToggle(isToggled)}
              isToggled={isToggled}
            />
          );
        }}
      />
    );
  }
}
