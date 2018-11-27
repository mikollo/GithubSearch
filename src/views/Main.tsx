import React, { Component } from "react";
import Results from "./Results";
import { View, TextInput, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { actions } from "../redux/actions";
import { StateInterface } from "../redux/reducers";

class Main extends Component<any> {
  render() {
    console.warn(this.props.reduxState.inProgress);
    return (
      <View style={{ padding: 20 }}>
        <TextInput
          placeholder="Search repos"
          onChangeText={this.props.updateSearchResults}
        />
        {this.props.reduxState.inProgress ? <ActivityIndicator /> : null}
        {this.props.reduxState.error ? (
          <Text>😟</Text>
        ) : (
          <Results data={this.props.reduxState.searchResults} />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: StateInterface) => ({
  reduxState: state
});

export default connect(
  mapStateToProps,
  { updateSearchResults: actions.updateSearchResults }
)(Main);
