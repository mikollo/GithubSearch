import React, { Component } from "react";
import Results from "./Results";
import githubApiSearchHelper from "./utils/githubApiSearchHelper";
import { View, TextInput, Alert, Text } from "react-native";
export default class App extends Component<{}> {
  state = {
    data: []
  };

  onType = async (query: string) => {
    try {
      this.setState({ loading: true });
      this.setState({ data: await githubApiSearchHelper(query) }, () => {
        if (this.state.data.length < 1) {
          Alert.alert("There are no matches for Your query");
        }
      });
    } catch (e) {
      console.warn(e);
      Alert.alert(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <View style={{ padding: 20 }}>
        <TextInput placeholder="Search repos" onChangeText={this.onType} />
        <Results data={this.state.data} />
      </View>
    );
  }
}
