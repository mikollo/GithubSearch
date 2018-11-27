import React, { Component } from "react";
import Results from "./components/Results";
import { View, TextInput, Text, ActivityIndicator, Button } from "react-native";
import { connect } from "react-redux";
import { actions } from "../redux/actions";
import { StateInterface, SearchItemInterface } from "../redux/reducers";

interface Props {
  reduxState: StateInterface;
  updateSearchResults: (text: string) => void;
  toggleItem: (item: SearchItemInterface) => void;
}

class Main extends Component<Props> {
  calculateTotalSelectedItemsStarCount = (
    searchResults: StateInterface["searchResults"]
  ) =>
    searchResults
      .filter(item => item.picked)
      .map(item => item.starCount)
      .reduce((augend, addend) => augend + addend, 0);

  render() {
    return (
      <View style={{ padding: 20, flex: 1 }}>
        <TextInput
          placeholder="Search repos"
          onChangeText={this.props.updateSearchResults}
        />
        {this.props.reduxState.inProgress ? <ActivityIndicator /> : null}
        {this.props.reduxState.error ? (
          <Text>😟</Text>
        ) : (
          <Results
            data={this.props.reduxState.searchResults}
            onToggle={this.props.toggleItem}
          />
        )}
        <Text>
          {this.calculateTotalSelectedItemsStarCount(
            this.props.reduxState.searchResults
          )}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state: StateInterface) => ({
  reduxState: state
});

export default connect(
  mapStateToProps,
  { ...actions }
)(Main);
