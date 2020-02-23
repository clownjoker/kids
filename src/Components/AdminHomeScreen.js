import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { privatePost, getItemFromAsyncStorage } from "../utils/axios"
import {
  AddstudentStyle as styles,
  RegesterStyles as styles2,
  LoginStyle as styles3
} from "../Assets/Styles"
import { Header, Left, Right } from "native-base"
// import {} from '../utils/axios';

export default class AdminHomeScreen extends Component {
  render() {
    return (
      <View>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Text>Add Teacher</Text>
          </Left>
          <Right>
            <Text>Home</Text>
          </Right>
        </Header>
        <Form handleAddTeacher={this.handleAddTeacher} />
      </View>
    )
  }

  handleAddTeacher = async (data) => {
    const extra = {
      isTeacher: true,
      isAdmin: false
    }

    let kid = await getItemFromAsyncStorage("KindergartenId")

    privatePost({ ...data, ...extra }, "users/addUser/" + kid)
      .then(({ data }) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

class Form extends Component {
  state = {}
  render() {
    return (
      <View style={styles.form}>
        <View style={styles.formBody}>
          <TextInput placeholder="الاسم" onChangeText={(name) => this.setState({ Name: name })} 
          styles={styles2.inputHandler}/>
        </View>

        <View style={styles.formBody}>
          <TextInput
          styles={styles2.inputHandler}
            placeholder="العنوان"
            onChangeText={(address) => this.setState({ Address: address })}
          />
        </View>
        <View style={styles.formBody}>
          <TextInput
          styles={styles2.inputHandler}
            keyboardType="phone-pad"
            placeholder="رقم الهاتف"
            onChangeText={(phone) => this.setState({ Phone: phone })}
          />
        </View>

        <TouchableOpacity
          onPress={() => this.props.handleAddTeacher(this.state)}
          style={styles3.buttonlogin}>
          <Text style={styles3.login}>حفظ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
