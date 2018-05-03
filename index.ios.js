/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import NavigatorView from './class/common/NavigatorView';

export default class LearnRN extends Component {
  render() {
    return (
      <NavigatorView rn_info={this.props.rn_info}/>
    );
  }
}

AppRegistry.registerComponent('LearnRN', () => LearnRN);
