import React, {Component} from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import {
  RegesterStyles as styles,
  LoginStyle as styles2,
} from '../Assets/Styles';

export default class AddSortActivity extends Component {
  state = {
    type: null,
  };

  handleType = type => {
    this.setState({type});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.type}</Text>
        <MenuProvider>
          <TextInput style={styles.input} placeholder="Activity" />
          <CustomMeun handleType={this.handleType} />

          <TouchableOpacity style={styles2.buttonlogin}>
            <Text style={styles2.login}>Send</Text>
          </TouchableOpacity>
        </MenuProvider>
      </View>
    );
  }
}

// some component

function CustomMeun(props) {
  return (
    <Menu style={styles.menu}>
      <MenuTrigger text="Select Activity" />
      <MenuOptions>
        <MenuOption onSelect={() => props.handleType('نشاط ديني')}>
          <Text>نشاط ديني</Text>
        </MenuOption>
        <MenuOption onSelect={() => props.handleType('نشاط رياضي')}>
          <Text>نشاط رياضي</Text>
        </MenuOption>
        <MenuOption onSelect={() => props.handleType('نشاط لغوي')}>
          <Text>نشاط لغوي</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
