import React, { Component } from "react";
import { NavigationScreenProp } from "react-navigation";
import { SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { actions } from "../redux/actions";
import { StateInterface, SearchItemInterface } from "../redux/reducers";
import Results from "./components/Results";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";

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
      <SafeAreaView style={{ flex: 1 }}>
        <SearchInput onChangeText={this.props.updateSearchResults} />
        <Results
          inProgress={this.props.reduxState.inProgress}
          data={this.props.reduxState.searchResults}
          onResultPress={this.props.toggleItem}
        />
        <Footer
          title={`Show selected (${this.calculateTotalSelectedItemsStarCount(
            this.props.reduxState.searchResults
          )} total star count)`}
          onPress={() => this.props.navigation.navigate("SelectedItems")}
        />
      </SafeAreaView>
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
