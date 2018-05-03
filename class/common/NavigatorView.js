import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';
import TabBarView from './TabBarView';

export default class NavigatorView extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    // 创建路由对象
    var rootRoute = {
      component : TabBarView
    };

    return(
      <Navigator
        initialRoute= {rootRoute}

        configureScene= {(route) => {
          return Navigator.SceneConfigs.PushFromRight;
        }}

        renderScene= {(route, navigator) => {
          var Component = route.component;
          return (
            <Component
              navigator= {navigator}
              route= {route}
              {...route.passProps}
              rn_info= {this.props.rn_info}
            />
          );
        }}
      />
    )
  }
}
