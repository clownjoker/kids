import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  AddstudentStyle as styles,
  RegesterStyles as styles2,
  LoginStyle as styles3,
} from '../Assets/Styles';
import {postData} from '../utils/axios';
export default class AddKindergartenScreen extends Component {
  addNewKindergarten = data => {
    postData(data, 'auth/addKindergarten')
      .then(res => {
        // console.log(res);
        this.props.navigation.navigate('LoginScreen');
        // ...
      })
      .catch(err => {
        // console.log(err);
        alert(err);
        //
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.formContainer}>
          <Form addNewKindergarten={this.addNewKindergarten} />
        </ScrollView>
      </View>
    );
  }
}

class Form extends Component {
  state = {
    isAdmin: true,
    isTeacher: false,
  };

  render() {
    return (
      <View style={styles.form}>
        <View style={styles.formBody}>
          <TextInput
            style={styles2.input}
            placeholder="Kindergarten Name"
            onChangeText={KN => this.setState({K_Name: KN})}
          />
        </View>
        <View style={styles.formBody}>
          <TextInput
            style={styles2.input}
            placeholder="Kindergarten Address"
            onChangeText={KA => this.setState({K_Address: KA})}
          />
        </View>
        <View style={styles.formBody}>
          <TextInput
            style={styles2.input}
            placeholder="Description"
            onChangeText={Desc => this.setState({Description: Desc})}
          />
        </View>

        <View style={styles.formBody}>
          <TextInput
            style={styles2.input}
            keyboardType="number-pad"
            placeholder="License"
            onChangeText={Lic => {
              this.setState({License: Lic});
            }}
          />
        </View>
        <View style={styles.formBody}>
          <TextInput
            style={styles2.input}
            placeholder="Expire Date"
            keyboardType="phone-pad"
            onChangeText={ED => this.setState({ExpireDate: ED})}
          />
        </View>

        <View style={styles.formBody}>
          <TextInput
            style={styles2.input}
            placeholder="Admin Name"
            onChangeText={admainname => this.setState({Name: admainname})}
          />
        </View>
        <View style={styles.formBody}>
          <TextInput
            style={styles2.input}
            keyboardType="number-pad"
            placeholder="Admin Phone"
            onChangeText={phone => this.setState({Phone: phone})}
          />
        </View>
        <View style={styles.formBody}>
          <TextInput
            style={styles2.input}
            placeholder="Address"
            onChangeText={address => this.setState({Address: address})}
          />
        </View>
        <View style={styles.formBody}>
          <TextInput
            style={styles2.input}
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={email => this.setState({Email: email})}
          />
        </View>
        <View style={styles.formBody}>
          <TextInput
            style={styles2.input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={password => this.setState({Password: password})}
          />
        </View>

        <TouchableOpacity
          onPress={() => this.props.addNewKindergarten(this.state)}
          style={styles3.buttonlogin}>
          <Text style={styles3.login}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
