import React, { Component } from "react"
import { TextInput, TouchableOpacity, View, Text } from "react-native"
import { RegistStyle as styles } from "../Assets/Styles"
import { H3 } from "native-base"
import { postData } from "../utils/axios"

export default class SignupScreen extends Component {
  // state = {
  //   _id: null,
  //   KindergartenId: null,
  //   Phone: null,
  // };

  // componentDidMount() {
  //   const {_id, Kindergarten, Phone} = this.props.route.params;
  //   this.setState({_id, KindergartenId: Kindergarten, Phone});
  // }

  handleSignup = (data) => {
    if (data.Password === data.ConfirmPassword) {
      postData(data, "auth/signup")
        .then(() => {
          this.props.navigation.navigate("LoginScreen")
        })
        .catch((err) => {
          alert(err)
        })
    } else {
      alert(false)
    }
  }

  render() {
    return (
      <View style={styles.registContiner}>
        <Signup handleSignup={this.handleSignup} />
      </View>
    )
  }
}

class Signup extends Component {
  state = {
    Name: null,
    Email: null,
    Address: null,
    Password: null
  }
  render() {
    return (
      <View style={styles.form}>
        <View style={styles.formRegist}>
          <H3>Signup </H3>
          <TextInput
            style={styles.inputRegist}
            onChangeText={(Name) => this.setState({ Name })}
            placeholder="Name"
          />
          <TextInput
            style={styles.inputRegist}
            keyboardType={"email-address"}
            placeholder="Email"
            onChangeText={(Email) => this.setState({ Email })}
          />
          <TextInput
            style={styles.inputRegist}
            onChangeText={(Address) => this.setState({ Address })}
            placeholder="Address"
          />
          <TextInput
            style={styles.inputRegist}
            onChangeText={(Phone) => this.setState({ Phone })}
            placeholder="0912345678"
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.inputRegist}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(Password) => this.setState({ Password })}
          />
          <TextInput
            style={styles.inputRegist}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(ConfirmPassword) => this.setState({ ConfirmPassword })}
          />
          <TouchableOpacity
            onPress={() => this.props.handleSignup(this.state)}
            style={styles.buttonRegist}>
            <Text style={styles.login}>Registration</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
