import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ListView,
  Image,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

import NavigatorHeaderView from '../common/NavigatorHeaderView';
import HomeDetailView from './HomeDetatilView';
import Resource from '../common/Resource';


export default class HomeView extends NavigatorHeaderView {

  static rowDidSelected() {
    alert('hahahhah');
  };

  constructor(props) {
    super(props)
    this.state = {
      title: '首页',
      navigator: null,
      datas: [],
      isRefreshing: false,
      isFooterRefreshing: false,
      isNoMoreData: false
    }
  }

  _renderContentFunction() {
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => { row1 !== row2 }
    });
    return (
      <ListView
        style= {styles.containerViewStyle}
        enableEmptySections= {true}
        dataSource= {ds.cloneWithRows(this.state.datas)}
        renderRow= {(rowData) => this._renderRow(rowData)}

        refreshControl= {
          <RefreshControl
            refreshing= {this.state.isRefreshing}
            onRefresh= {this._loadData.bind(this, false, true)}
          />
        }

        renderFooter= {() => this._renderFooter()}
        onEndReached= {() => this._onEndReached()}
        onEndReachedThreshold= {0}
      />
    )
  };

  _renderRow(rowData) {
    return (
      <TouchableOpacity
        onPress= {this._pushAction.bind(this, rowData)}
      >
       <View style={styles.rowContainerView}>
         <Image source={{uri: rowData.headface}} style={styles.headface}/>
         <View style={{flex: 1, flexDirection: 'column'}}>
           <Text style={styles.rowTitle}> {rowData.title} </Text>
           <Text style={styles.rowMessage}> {rowData.message} </Text>
         </View>
       </View>
      </TouchableOpacity>
    );
  };

  _renderFooter() {
    if (this.state.isFooterRefreshing) {
      return (
        <View style={{height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <ActivityIndicator />
          <Text>正在加载数据</Text>
        </View>
      )
    }
    if (this.state.isNoMoreData) {
      return (
        <View style={{height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <Text>暂无更多数据</Text>
        </View>
      )
    }
    return null;
  };

  _onEndReached() {
    console.log('onEndReached');
    if (this.state.isFooterRefreshing || this.state.isNoMoreData || this.state.isRefreshing) {
      return;
    }

    this._loadData(false, false);
  };

  componentDidMount() {
    this._loadData(false, true);
  };

  _pushAction(rowData) {
    let nextRoute = {
      component: HomeDetailView,
      navigator: this.props.navigator,
      passProps: {
        rowData: rowData
      }
    };
    this.props.navigator.push(nextRoute);
  };

  _rightItem() {
    return (
      <TouchableOpacity
        onPress= {() => this._pushAction()}
      >
        <Text>下一级</Text>
      </TouchableOpacity>
    )
  };

  _loadData(isFirst, isDown) {
    var dataArray = this.state.datas;
    if (isDown) {
      console.log("下拉   " + isFirst);
      dataArray = Resource.data;
      if (!isFirst) {
        this.setState({ isRefreshing: true });
      }
    }else{
      dataArray = dataArray.concat(Resource.data)
      this.setState({ isFooterRefreshing: true });
    }
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
        datas: dataArray,
        isNoMoreData: dataArray.length >= 30,
        isFooterRefreshing: false
      })
    }, 5000);
  }
}

let styles = StyleSheet.create({
  containerViewStyle: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  rowContainerView: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  rowTitle: {
    position: 'absolute',
    left: 12,
    top: 5,
    fontSize: 16,
    color: '#3d3d3d'
  },
  rowMessage: {
    position: 'absolute',
    left: 12,
    bottom: 5,
    fontSize: 14,
    color: '#b2b2b2'
  },
  headface: {
    width: 50,
    height: 50,
    marginLeft: 15,
    marginTop: 5,
    borderRadius: 25
  }
});
