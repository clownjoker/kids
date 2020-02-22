import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {TeacherHomeStyle as styles} from '../Assets/Styles';
class ParentHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heder}>
          <ScrollView>
            <Student navigation={this.props.navigation} />
            <Student navigation={this.props.navigation} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ParentHomeScreen;

function Student(props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('StudentProfileScreen')}
      style={styles.Students}>
      <Text>tttttttttt</Text>
    </TouchableOpacity>
  );
}
