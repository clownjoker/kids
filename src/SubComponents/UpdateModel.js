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

class Modal extends Component {
  state = {
    Comment: null,
  };
  render() {
    return (
      <View>
        <View style={styles.modal}>
          <View style={styles.updateFields}>
            <H3>Add Update</H3>
            <TextInput
              onChangeText={e => this.setState({Comment: e})}
              style={{
                alignSelf: 'flex-start',
                fontSize: 14,
                width: '100%',
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
            style={{
              ...localStyles.buttons,
              margin: 5,
              borderRightWidth: 1,
              borderColor: '#ccc',
            }}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.handleComment(this.state.Comment)}
            style={{...localStyles.buttons, margin: 5}}>
            <Text>Update</Text>
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
    padding: 9,
    flex: 1,
    alignItems: 'center',
  },
});
