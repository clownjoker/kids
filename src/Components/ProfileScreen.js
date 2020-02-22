import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {H2, H3} from 'native-base';
import {ProfileStyles as styles, RegesterStyles} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import CustomModal from '../SubComponents/modal';
import {logout} from '../utils/axios';

export default class ProfileScreen extends Component {
  handleLogout() {
    console.log(this.props);
    logout()
      .then(() => {
        this.props.navigation.navigate('LoginScreen');
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.profileInfo}>
            <View style={styles.profileImage}>
              <View style={styles.image}></View>
            </View>
            <View style={styles.profileName}>
              <H2>Profile Name</H2>
              <Text>Phone Number</Text>
            </View>
          </View>
          <View style={styles.profileSetting}>
            <ProfileItem title={'Email'} value={'Example@domain.com'} />
            <ProfileItem title={'Phone'} value={'0912345678'} />
            <ProfileItem title={'Address'} value={'KH, Sudan'} />
          </View>
          <TouchableOpacity
            onPress={this.handleLogout}
            style={{
              padding: 25,
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <Text>Log out</Text>
            <Icon name="ios-log-out" size={20} />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
class ProfileItem extends Component {
  state = {
    modalStatus: false,
  };
  toggleModal = () => {
    this.setState({modalStatus: !this.state.modalStatus});
  };

  render() {
    if (this.props) {
      return (
        <View style={styles.profileInfoItem}>
          <View style={styles.title}>
            <Text style={{fontWeight: 'bold'}}>{this.props.title}: </Text>
            <Text>{this.props.value}</Text>
          </View>
          <View style={styles.tools}>
            <TouchableOpacity onPress={this.toggleModal}>
              <Icon name="md-create" size={30} color="gray" />

              <Modal
                backdropOpacity={0.4}
                isVisible={this.state.modalStatus}
                children={
                  <CustomModal toggleModal={this.toggleModal} />
                }></Modal>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else return null;
  }
}
