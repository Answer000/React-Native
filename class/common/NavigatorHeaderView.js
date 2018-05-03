import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';


export default class NavigatorHeaderView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      navigator: null
    }
  }

  render() {
    return(
      <View style={styles.backgroundViewStyle}>
        <View style={styles.contentViewStyle}>
          <View style={{flex: 1}}>
            {this._backItem()}
          </View>

          <View style={{flex: 3, alignItems: 'center'}}>
            <Text style={styles.titleTextStyle}> {this.state.title} </Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row-reverse', paddingLeft: 15}}>
            {this._rightItem()}
          </View>
        </View>
        {this._renderContentFunction()}
      </View>
    )
  };

  _backItem() {
    if (this.state.navigator === null) {
      return null;
    }
    if (this.state.navigator.getCurrentRoutes().length <= 1) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress= {() => {this._clickBackItem()}}
      >
        <Image source={{uri: 'backItem'}} style={styles.backImageStyle}/>
      </TouchableOpacity>
    );
  };

  /* 子类可重写方法 */
  _renderContentFunction() {
    return null;
  };

  _clickBackItem() {
    console.log( this.state.title + '  返回按钮被点击了');
    if (this.state.navigator !== null) {
      this.state.navigator.pop();
    }
  };

  _rightItem() {
    return null;
  }
}

let styles = StyleSheet.create({
  backgroundViewStyle: {
    backgroundColor: 'white',
    flex: 1
  },
  contentViewStyle: {
    marginRight: 0,
    marginLeft: 0,
    alignItems: 'center',
    height: 44,
    marginTop: 20,
    flexDirection: 'row'
  },
  titleTextStyle: {
    fontSize: 18,
    color: '#3d3d3d',
    fontWeight: 'bold',
  },
  backImageStyle: {
    width: 10,
    height: 17,
    marginLeft: 15
  }
});
