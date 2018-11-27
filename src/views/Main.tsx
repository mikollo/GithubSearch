import React, { Component } from "react";
import { NavigationScreenProp } from "react-navigation";
import { View, TextInput, Text, ActivityIndicator, Button } from "react-native";
import { connect } from "react-redux";
import { actions } from "../redux/actions";
import { StateInterface, SearchItemInterface } from "../redux/reducers";
import Results from "./components/Results";

interface Props {
  reduxState: StateInterface;
  updateSearchResults: (text: string) => void;
  toggleItem: (item: SearchItemInterface) => void;
  navigation?: NavigationScreenProp<any> | any;
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
            onResultPress={this.props.toggleItem}
          />
        )}
        <View>
          <Button
            title={`Show selected (${this.calculateTotalSelectedItemsStarCount(
              this.props.reduxState.searchResults
            )} total star count)`}
            onPress={() => this.props.navigation.navigate("SelectedItems")}
          />
        </View>
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
