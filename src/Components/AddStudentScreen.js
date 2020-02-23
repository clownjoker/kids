import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {
  AddstudentStyle as styles,
  RegesterStyles as styles2,
  LoginStyle as styles3,
} from '../Assets/Styles/';

export default class AddStudentScreen extends Component {
  addNewStudents = data=>{

  }
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

class Form extends Component {
  state = {
    isAdmin: false,
    isTeacher: false,
    isActive
    
  };
  render (){
    return (
      <View style={styles.form}>
        <View style={styles.formBody}>
          <TextInput  
          placeholder="Name" styles={styles2.inputHandler} 
          onChangeText={(name)=> this.setState({Name:name})}/>
        </View>
        <View style={styles.formBody}>
          <TextInput 
           placeholder="Level" styles={styles2.inputHandler}
           onChangeText={(level)=> this.setState({Level:level})}/>
        </View>
        <View style={styles.formBody}>
          <TextInput  
          placeholder="Name Father" styles={styles2.inputHandler} 
          onChangeText={(father)=> this.setState({Father:father})}/>
        </View>
        <View style={styles.formBody}>
          <TextInput  placeholder="Phone" styles={styles2.inputHandler}
          onChangeText={(phone)=> this.setState({Phone:phone})} />
        </View>
        <View style={styles.formBody}>
          <TextInput  placeholder="Address" styles={styles2.inputHandler}
          onChangeText={(address)=> this.setState({Address:address})}/>
        </View>
        <View style={styles.formBody}>
          <TextInput  placeholder="Date of Birth" styles={styles2.inputHandler}
          onChangeText={(dateOfBirth)=> this.setState({DateOfBirth:dateOfBirth})}/>
        </View>

  
        <TouchableOpacity style={styles3.buttonlogin}>
        onPress={() => this.props.addNewStudents(this.state)}
    
          <Text style={styles3.login}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}
