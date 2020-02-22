import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {Header, Left, Right} from 'native-base';

export default class Header extends Component {
  render() {
    return (
      <View>
        <Header style={{backgroundColor: 'white'}}>
          <Left>
            <Text>{this.props.title}</Text>
          </Left>
          {/* <Right>
            <Text>Home</Text>
          </Right> */}
        </Header>
      </View>
    );
  }
}
