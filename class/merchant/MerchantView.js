import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NavigatorHeaderView from '../common/NavigatorHeaderView';


export default class MerchantView extends NavigatorHeaderView {

  _renderContentFunction() {
    return (
      <View style={styles.containerViewStyle}></View>
    )
  };

  componentDidMount() {
    this.setState({
      title: '商家'
    });
  };
}

let styles = StyleSheet.create({
  containerViewStyle: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
