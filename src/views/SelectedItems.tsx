import React, { Component } from "react";
import { View, Linking } from "react-native";
import { connect } from "react-redux";
import { actions } from "../redux/actions";
import { StateInterface, SearchItemInterface } from "../redux/reducers";
import Results from "./components/Results";

interface Props {
  reduxState: StateInterface;
}

class Main extends Component<Props> {
  openRepoLink = (item: SearchItemInterface) => {
    Linking.openURL(item.repoLink);
  };

  render() {
    return (
      <View style={{ padding: 20, flex: 1 }}>
        <Results
          data={this.props.reduxState.searchResults.filter(item => item.picked)}
          onResultPress={this.openRepoLink}
        />
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
