import React from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { SearchItemInterface } from "../../redux/reducers";
import ResultItem from "./ResultItem";

interface Props {
  data: SearchItemInterface[];
  onResultPress: (item: SearchItemInterface) => void;
  inProgress?: boolean;
}

const Results: React.SFC<Props> = (props: Props) => (
  <View
    style={{
      backgroundColor: "white",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {props.inProgress ? (
      <ActivityIndicator />
    ) : (
      <FlatList
        data={props.data}
        style={{ width: "100%" }}
        keyExtractor={(item: SearchItemInterface) => item.id.toString()}
        renderItem={({ item }: { item: SearchItemInterface }) => (
          <ResultItem item={item} onResultPress={props.onResultPress} />
        )}
      />
    )}
  </View>
);

Results.defaultProps = {
  inProgress: false
};

export default Results;
