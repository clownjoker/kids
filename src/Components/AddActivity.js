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

export default class AddActivityScreen extends Component {
  state = {};

  handlePeriod = Period => {
    this.setState({Period});
  };
  handleSubjectType = Sort => {
    this.setState({Sort});
  };
  handleLevel = Level => {
    this.setState({Level});
  };

  handleSaveSubject = async () => {
    let KindId = await getItemFromAsyncStorage('KindergartenId');
    let UserId = await getItemFromAsyncStorage('_id');
    console.log(this.state);

    privatePost(this.state, `subjects/addSubject/${KindId}/${UserId}`)
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.type}</Text>
        <MenuProvider>
          <TextInput
            style={styles.input}
            placeholder="اسم المادة"
            onChangeText={Subject => this.setState({Subject})}
          />
          <PeriodMenu handlePeriod={this.handlePeriod} />
          <SubjectTypeMenu handleSubjectType={this.handleSubjectType} />
          <LevelMenu handleLevel={this.handleLevel} />
          <TouchableOpacity
            style={styles2.buttonlogin}
            onPress={this.handleSaveSubject}>
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
