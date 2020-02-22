import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {TeacherHomeStyle as styles} from '../Assets/Styles';
class TeacherHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heder}>
          <Text style={styles.title}>Students:</Text>
          <ScrollView>
            <Student />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default TeacherHomeScreen;

function Student(props) {
  return (
    <TouchableOpacity style={styles.Students}>
      <Text>tttttttttt</Text>
    </TouchableOpacity>
  );
}
