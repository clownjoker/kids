import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Textarea from 'react-native-textarea';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import {
  RegesterStyles as styles,
  EvaluationOfPeriodsStyle as styles2,
} from '../Assets/Styles';
import {ThemeProvider} from 'react-native-paper';

export default class EvaluationOfPeriods extends Component {
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
        <MenuProvider>
          <CustomMeun handleType={props.handleType} />

          <Textarea
            style={styles2.borderTextarea}
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
          <TouchableOpacity style={styles.button}>
            <Text>Send</Text>
          </TouchableOpacity>
        </MenuProvider>
      </View>
    </View>
  );
}

function CustomMeun(props) {
  return (
    <Menu style={styles.menu}>
      <MenuTrigger text="Choose an activity..." />
      <MenuOptions>
        <MenuOption onSelect={() => props.handleType('ممتاز')}>
          <Text>Excellent</Text>
        </MenuOption>
        <MenuOption onSelect={() => props.handleType('جيد جدا')}>
          <Text>Very Good</Text>
        </MenuOption>
        <MenuOption onSelect={() => props.handleType('جيد')}>
          <Text>Good</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
