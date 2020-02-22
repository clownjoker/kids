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
import CustomModal from '../SubComponents/UpdateModel';

export default class Kindergarten extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.profileInfo}>
            <View style={styles.profileName}>
              <H2>Profile Kindergarten</H2>
              <Text>Kindergarten Name</Text>
            </View>
          </View>
          <View style={styles.profileSetting}>
            <ProfileItem title={'Address'} value={'KH, Sudan'} />
            <ProfileItem title={'Phone'} value={'091836564'} />
            <ProfileItem title={'License'} value={'00000000'} />
            <ProfileItem title={'Subscription Date'} value={'1/2/2024'} />
          </View>
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
