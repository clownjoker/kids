import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {
  AddstudentStyle as styles,
  RegesterStyles as styles2,
  LoginStyle as styles3,
} from '../Assets/Styles/';

export default class AddStudentScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Form />
        </View>
      </View>
    );
  }
}

function Form(props) {
  return (
    <View style={styles.form}>
      <View style={styles.formBody}>
        <TextInput  placeholder="Name" />
      </View>
      <View style={styles.formBody}>
        <TextInput  placeholder="Level" />
      </View>
      <View style={styles.formBody}>
        <TextInput  placeholder="Name Father" />
      </View>
      <View style={styles.formBody}>
        <TextInput  placeholder="Address" />
      </View>
      <View style={styles.formBody}>
        <TextInput  placeholder="Date of Birth" />
      </View>

      <TouchableOpacity style={styles3.buttonlogin}>
        <Text style={styles3.login}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
