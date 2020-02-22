import React, {Component} from 'react';

import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import {LoginStyle as styles} from '../Assets/Styles';
import {postData} from '../utils/axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {
  handleLogin = ({Phone, Password}) => {
    if (!Phone || !Password) {
      alert('please fill in the fields');
    } else {
      postData({Phone, Password}, 'auth/login')
        .then(res => {
          this.filterAndRedirect(res.data);
        })
        .catch(err => {
          alert(err);
          console.log(err);
        });
    }
  };

  filterAndRedirect = data => {
    let info = JSON.stringify(data);
    AsyncStorage.setItem('info', info);
    if (data.isTeacher === true) {
      this.props.navigation.navigate('TeacherHomeScreen');
    } else if (data.isAdmin) {
      this.props.navigation.navigate('AdminHomeScreen');
    } else {
      this.props.navigation.navigate('ParentHomeScreen');
    }
  };

  render() {
    return (
      <View style={styles.containerLogin}>
        <Form handleLogin={this.handleLogin} />
      </View>
    );
  }
}

class Form extends Component {
  state = {};
  render() {
    return (
      <View style={styles.form}>
        <View style={styles.formBodyLogin}>
          <TextInput
            onChangeText={Phone => this.setState({Phone})}
            style={styles.inputlogin}
            placeholder="phone number"
            keyboardType="number-pad"
          />
          <TextInput
            onChangeText={Password => this.setState({Password})}
            style={styles.inputlogin}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TouchableOpacity
            onPress={() => this.props.handleLogin(this.state)}
            style={styles.buttonlogin}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
