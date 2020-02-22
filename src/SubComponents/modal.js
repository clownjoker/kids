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
import Textarea from 'react-native-textarea';

class Modal extends Component {
  state = {
    Comment: null,
  };
  render() {
    return (
      <View>
        <View style={styles.modal}>
          <View style={styles.updateFields}>
            <H3>New Comment</H3>
            <Textarea
              onChangeText={e => this.setState({Comment: e})}
              style={{
                textAlignVertical: 'top', // hack android
                height: 170,
                fontSize: 14,
                color: '#333',
              }}
              placeholder={'type a comment...'}
              underlineColorAndroid={'transparent'}
            />
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
