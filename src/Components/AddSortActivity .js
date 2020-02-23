
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
import {privatePost, getItemFromAsyncStorage} from '../utils/axios';

export default class AddSortActivity extends Component {
  state = {};

  
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.type}</Text>
        <MenuProvider>
          <TextInput
            
            placeholder="اسم المادة"
            onChangeText={Subject => this.setState({Subject})}
          />
          <PeriodMenu handlePeriod={this.handlePeriod} />
          <SubjectTypeMenu handleSubjectType={this.handleSubjectType} />
          <LevelMenu handleLevel={this.handleLevel} />
          <TouchableOpacity
            style={styles2.buttonlogin}
            // onPress={this.handleSaveActivity}
            >
            <Text style={styles2.login}>حفظ </Text>
          </TouchableOpacity>
        </MenuProvider>
      </View>
    );
  }
}

// some component

function PeriodMenu(props) {
  return (
    <Menu style={styles.menu}>
      <MenuTrigger text="اختيار الفترة" />
      <MenuOptions>
        <MenuOption onSelect={() => props.handlePeriod('الفترة الاولى')}>
          <Text> الفترة الاولى</Text>
        </MenuOption>
        <MenuOption onSelect={() => props.handlePeriod('الفترة الثانية')}>
          <Text> الفترة الثانية</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

function SubjectTypeMenu(props) {
  return (
    <Menu style={styles.menu}>
      <MenuTrigger text="اختيار نوع المادة" />
      <MenuOptions>
        <MenuOption onSelect={() => props.handleSubjectType(true)}>
          <Text>مادة اساسية</Text>
        </MenuOption>
        <MenuOption onSelect={() => props.handleSubjectType(false)}>
          <Text> مادة فرعية</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

function LevelMenu(props) {
  return (
    <Menu style={styles.menu}>
      <MenuTrigger text="اختيار  المستوى" />
      <MenuOptions>
        <MenuOption onSelect={() => props.handleLevel('براعم')}>
          <Text> براعم</Text>
        </MenuOption>
        <MenuOption onSelect={() => props.handleLevel('المستوى الاول')}>
          <Text> المستوى الاول</Text>
        </MenuOption>
        <MenuOption onSelect={() => props.handleLevel('المستوى الثاني')}>
          <Text> المستوى الثاني</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
