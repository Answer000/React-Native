import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import NavigatorHeaderView from './NavigatorHeaderView';
import HomeView from '../home/HomeView';
import MerchantView from '../merchant/MerchantView';


export default class TabBarView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedTab: 'home'
    }
  }

  render() {
    return(
      <TabNavigator>
        <TabNavigator.Item
          title= {this.props.rn_info[0]}
          renderIcon= {() => <Image source={{uri: 'icon_tabbar_homepage'}} style={styles.renderIconStyle} />}
          renderSelectedIcon= {() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.renderIconStyle} />}
          onPress= {() => this.setState({selectedTab: 'home'})}
          selected= {this.state.selectedTab === 'home'}
        >
          <View style={{flex: 1}}>
            <HomeView
              navigator= {this.props.navigator}
            />
          </View>
        </TabNavigator.Item>

        <TabNavigator.Item
          title= {this.props.rn_info[1]}
          renderIcon= {() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.renderIconStyle} />}
          renderSelectedIcon= {() => <Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.renderIconStyle} />}
          onPress= {() => this.setState({ selectedTab: 'merchant' })}
          selected= {this.state.selectedTab === 'merchant'}
        >
        <MerchantView
          navigator= {this.props.navigator}
        />
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

let styles = StyleSheet.create({
  renderIconStyle: {
    width: 30,
    height: 30
  }
});
