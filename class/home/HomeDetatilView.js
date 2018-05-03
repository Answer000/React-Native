import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import NavigatorHeaderView from '../common/NavigatorHeaderView';

import {NativeModules} from 'react-native';
var ExampleInterface = NativeModules.ExampleInterface;


export default class HomeDetailView extends NavigatorHeaderView {

  _renderContentFunction() {
    return (
      <View style={styles.containerViewStyle}>
        <TouchableOpacity
          onPress={this._onPress.bind(this, this.props.rowData)}
        >
          <Text>点我弹框</Text>
        </TouchableOpacity>
      </View>
    )
  };

  _onPress(rowData) {
    let str = rowData.message;
    ExampleInterface.sendMessageFromRN(str);
  };

  componentDidMount() {
    this.setState({
      title: this.props.rowData.title,
      navigator: this.props.navigator
    });
  };
}

let styles = StyleSheet.create({
  containerViewStyle: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
