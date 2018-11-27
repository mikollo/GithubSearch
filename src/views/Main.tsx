import React, { Component } from "react";
import Results from "./components/Results";
import { View, TextInput, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { actions } from "../redux/actions";
import { StateInterface } from "../redux/reducers";

class Main extends Component<any> {
  render() {
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
          <Results
            data={this.props.reduxState.searchResults}
            onToggle={this.props.toggleItem}
          />
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
  { ...actions }
)(Main);
