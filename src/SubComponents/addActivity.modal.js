import React, {Component} from 'react';
import {ProfileStyles as styles} from '../Assets/Styles';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {H3} from 'native-base';
import Icons from 'react-native-vector-icons/Ionicons';

class Modal extends Component {
  state = {
    Comment: null,
  };
  render() {
    return (
      <View>
        <View style={styles.modal}>
          <View style={styles.updateFields}>
            <H3>Add new Activity</H3>
            <TextInput placeholder="Write the activity" />
          </View>
        </View>
        <View
          style={{
            ...styles.modalTools,
            padding: 0,
            margin: 0,
          }}>
          <TouchableOpacity
            onPress={this.props.toggleModal}
            style={{...localStyles.buttons, backgroundColor: '#aa4545'}}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handleComment(this.state.Comment)}
            style={{...localStyles.buttons, backgroundColor: 'skyblue'}}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Modal;

const localStyles = StyleSheet.create({
  buttons: {
    flex: 1,
    padding: 15,
    flex: 1,
    alignItems: 'center',
  },
});
