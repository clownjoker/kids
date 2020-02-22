import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {RegesterStyles as styles} from '../Assets/Styles';
import {getData, getItemFromAsyncStorage} from '../utils/axios';

export default class RegisterScreen extends Component {
  state = {noAccount: false};
  async UNSAFE_componentWillMount() {
    let token = getItemFromAsyncStorage('token');
    token
      .then(async () => {
        let isTeacher = await getItemFromAsyncStorage('isTeacher');
        let isAdmin = await getItemFromAsyncStorage('isAdmin');
        console.log(isTeacher);

        if (isTeacher) {
          this.props.navigation.navigate('TeacherHomeScreen');
        } else if (isAdmin) {
          this.props.navigation.navigate('AdminHomeScreen');
        } else {
          this.props.navigation.navigate('ParentHomeScreen');
        }
      })
      .catch(err => {
        //
      });
  }
  handleRegistration = Phone => {
    getData('auth/getUserByPhone/' + Phone)
      .then(({data}) => {
        if (data.status === 404) {
          this.setState({noAccount: true});
        } else if (data.Name) {
          this.props.navigation.navigate('LoginScreen');
        } else {
          this.props.navigation.navigate('SignupScreen', data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  addKindergarten = () => {
    this.props.navigation.navigate('AddKinderScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Create Account.</Text>

            <Test navigation={this.props.navigation} />
          </View>
          {/* // !!! */}

          <Form
            noAccount={this.state.noAccount}
            addKindergarten={this.addKindergarten}
            handleRegistration={this.handleRegistration}
          />
        </View>
      </View>
    );
  }
}

class Form extends Component {
  state = {
    Phone: null,
  };
  render() {
    return (
      <View style={styles.form}>
        <View style={styles.formBody}>
          {this.props.noAccount ? (
            <View
              style={{backgroundColor: 'red', padding: 10, borderRadius: 5}}>
              <Text style={{color: 'white'}}>
                No user with this phone, to add new kindergarten{' '}
                <Text
                  onPress={this.props.addKindergarten}
                  style={{color: 'blue'}}>
                  click here
                </Text>
              </Text>
            </View>
          ) : null}
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            placeholder="phone number"
            onChangeText={e => this.setState({Phone: e})}
          />
          <TouchableOpacity
            onPress={() => this.props.handleRegistration(this.state.Phone)}
            style={styles.button}>
            <Text>Register Now</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.options}>Already have one!</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.loginHere}>
            <Text style={styles.log}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function Test(props) {
  return (
    <TouchableOpacity
      style={styles.loginHere}
      onPress={() => props.navigation.navigate('LoginScreen')}>
      <Text style={styles.log}>Do not have an account? create one.</Text>
    </TouchableOpacity>
  );
}
