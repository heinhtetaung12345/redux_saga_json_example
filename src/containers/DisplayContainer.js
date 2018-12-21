import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import Button from "../components/common/Button";

import { connect } from "react-redux";
//Actions
import { displayAction } from "../action";

class DisplayContainer extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [{ id: 1, title: "HH", completed: "jj" }],
      dataSet: false
    };
  }
  componentDidUpdate() {
    if (!this.state.dataSet) {
      this.setState({ dataSource: this.props.data, dataSet: true });
    }
  }

  render() {
    const { num1, num2, text } = this.state;
    console.log("text : ", text);
    // console.log("num1", this.state.num1);
    //console.log("num2", this.state.num2);
    //console.log("text", this.state.text);
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          {/* increaseAction */}

          <Button
            onPress={() => {
              this.props.displayAction();
            }}
          >
            Display
          </Button>

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
            keyExtractor={({ id }, index) => index.toString()}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    margin: 20,
    fontWeight: "bold",
    color: "forestgreen",
    fontSize: 20
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column"
  }
};

const mapStateToProps = state => {
  console.log("map", state.value);
  return {
    data: state.value
  };
};

export default connect(
  mapStateToProps,
  {
    displayAction
  }
)(DisplayContainer);
