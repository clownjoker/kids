import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  KindergartenFile as styles,
  LoginStyle as styles2,
  TeacherHomeStyle as styles3,
} from '../Assets/Styles';
import {Header, Left, Right} from 'native-base';

export default class AdminHomeScreen extends Component {
  render() {
    return (
      <View>
        <Header style={{backgroundColor: 'white'}}>
          <Left>
            <Text>Add Activity</Text>
          </Left>
          <Right>
            <Text>Home</Text>
          </Right>
        </Header>
      </View>
    );
  }
}
