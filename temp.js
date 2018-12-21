import React, { Component } from "react";
import {
  Platform,
  FlatList,
  ActivityIndicator,
  Text,
  View
} from "react-native";

import { createStore, applyMiddleware } from "redux";
//import createSagaMiddle from "redux-saga";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={{ flex: 1 }}>
                <View style={styles.boxStyle}>
                  <Text>{item.id}</Text>
                  <Text>{item.title}</Text>
                  <Text>{item.completed}</Text>
                </View>
              </View>
            )}
            keyExtractor={({ id }, index) => id}
          />
        </View>
      );
    }
  }
}

const styles = {
  boxStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};
