import React, { Component, Fragment } from "react"
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image } from "react-native"
import { RegesterStyles as styles } from "../Assets/Styles"
import Icon from "react-native-vector-icons/FontAwesome"
import { getData, getItemFromAsyncStorage } from "../utils/axios"
import { WarningMessage } from "../FlashMessages"
import { Header, Left, Right } from "native-base"

export default class RegisterScreen extends Component {
  state = { noAccount: false }
  async UNSAFE_componentWillMount() {
    let token = getItemFromAsyncStorage("token")
    token
      .then(async () => {
        let isTeacher = await getItemFromAsyncStorage("isTeacher")
        let isAdmin = await getItemFromAsyncStorage("isAdmin")

        if (isTeacher) {
          this.props.navigation.navigate("TeacherHomeScreen")
        } else if (isAdmin) {
          this.props.navigation.navigate("AdminHomeScreen")
        } else {
          this.props.navigation.navigate("ParentHomeScreen")
        }
      })
      .catch((err) => {})
  }
  handleRegistration = (Phone) => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      getData("auth/getUserByPhone/" + Phone)
        .then(({ data }) => {
          this.setState({ isLoading: false })
          if (data.status === 404) {
            this.setState({ noAccount: true })
          } else if (data.isActive) {
            this.props.navigation.navigate("LoginScreen")
          } else if (data.isActive === false) {
            this.props.navigation.navigate("SignupScreen")
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }, 3000)
  }

  addKindergarten = () => {
    this.props.navigation.navigate("AddKinderScreen")
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Fragment>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <TouchableOpacity onPress={() => navigate("LoginScreen")}>
              <Text style={{ color: "skyblue" }}>Login</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity onPress={() => navigate("SignupScreen")}>
              <Text style={{ color: "skyblue" }}>Signup</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.header}>
              <View style={styles.about}>
                <Image
                  source={require("../Assets/Images/Icons/logo.webp")}
                  style={{ alignSelf: "center", width: 140, height: 140 }}
                />
                <Text style={{ textAlign: "center", fontSize: 17 }}>قم بتسجيل روضتك الان </Text>
              </View>
              <Text style={styles.headerTitle}>التأكد من رقم هاتفك</Text>
            </View>

            {this.state.noAccount ? (
              <WarningMessage
                title={"هل تريد تسجيل روضة خاصة بك! يمكنك الان بالضغط على الزر الاسفل"}
              />
            ) : null}
            <Form
              noAccount={this.state.noAccount}
              isLoading={this.state.isLoading}
              noAccount={this.state.noAccount}
              addKindergarten={this.addKindergarten}
              handleRegistration={this.handleRegistration}
            />
          </View>
        </View>
      </Fragment>
    )
  }
}

class Form extends Component {
  state = {
    Phone: null
  }
  render() {
    return (
      <View style={styles.form}>
        <View style={styles.formBody}>
          <View style={styles.inputHandler}>
            <Text>+249</Text>
            <TextInput
              keyboardType="phone-pad"
              style={styles.input}
              placeholder="912345678"
              onChangeText={(e) => this.setState({ Phone: e })}
            />
            <View>
              {this.props.isLoading ? (
                <ActivityIndicator size="large" style={{ flex: 1 }} />
              ) : (
                <Icon
                  onPress={() => this.props.handleRegistration(this.state.Phone)}
                  color="skyblue"
                  name="arrow-circle-right"
                  size={30}
                />
              )}
            </View>
          </View>
          {this.props.noAccount ? (
            <TouchableOpacity
              onPress={this.props.addKindergarten}
              style={{
                backgroundColor: "skyblue",
                width: 90,
                padding: 5,
                alignSelf: "center",
                alignItems: "center",
                marginTop: "45%",
                borderRadius: 30
              }}>
              <Icon color="white" name="arrow-right" size={30} />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.options}>كل الحقوق محفوظة 2020 ©. ScriptHouse</Text>
        </View>
      </View>
    )
  }
}
