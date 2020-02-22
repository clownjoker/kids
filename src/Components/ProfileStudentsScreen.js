import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {
  ProfileStyles as styles,
  ProfileStudentStyle as styles2,
} from '../Assets/Styles';
import {H2, H3} from 'native-base';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomModal from '../SubComponents/modal';
import RateModal from '../SubComponents/rate.modal';
import AddActivityModal from '../SubComponents/addActivity.modal';

export default class ProfileStudentsScreen extends Component {
  state = {
    modalStatus: false,
  };
  toggleModal = () => {
    this.setState({modalStatus: !this.state.modalStatus});
  };
  handleComment = Comment => {
    console.log(Comment);
    this.setState({modalStatus: false});
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.profileInfo}>
            <View style={styles.profileImage}>
              <View style={styles.image}></View>
            </View>
            <View style={styles.profileName}>
              <H2>Profile Name</H2>
              <Text>Level</Text>
            </View>
          </View>
          <CommentSystem />
        </ScrollView>
        <TouchableOpacity onPress={this.toggleModal} style={styles2.Circle}>
          <Icon name="md-paper" size={30} />
        </TouchableOpacity>
        <Modal
          backdropOpacity={0.4}
          isVisible={this.state.modalStatus}
          children={
            <CustomModal
              handleComment={this.handleComment}
              toggleModal={this.toggleModal}
            />
          }></Modal>
      </View>
    );
  }
}

class CommentSystem extends Component {
  state = {
    addRate: false,
    addActivity: false,
  };
  toggleRate = () => {
    this.setState({addRate: !this.state.addRate});
  };
  toggleAddActivity = () => {
    this.setState({addActivity: !this.state.addActivity});
  };
  render() {
    return (
      <View>
        <View style={styles2.container}>
          <TouchableOpacity
            onPress={this.toggleRate}
            style={styles2.buttonRate}>
            <Text>Rate</Text>
          </TouchableOpacity>
          {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          <TouchableOpacity
            onPress={this.toggleAddActivity}
            //   !!!!!
            style={{...styles2.buttonRate, backgroundColor: '#2a7886'}}>
            <Text>Add Activity</Text>
          </TouchableOpacity>
        </View>
        <View style={{...styles2.container, ...styles2.rate}}>
          <Text>
            testdvewwegw hrrgv rgg gj owjgwogjw ojggjwgjo
            berwgkrgkrgkewrkgbekbrb krmgkrb rbr{' '}
          </Text>
        </View>
        <Modal
          backdropOpacity={0.4}
          isVisible={this.state.addRate}
          children={<RateModal toggleModal={this.toggleRate} />}
        />
        <Modal
          backdropOpacity={0.4}
          isVisible={this.state.addActivity}
          children={<AddActivityModal toggleModal={this.toggleAddActivity} />}
        />
        <View style={{...styles2.container, flexDirection: 'column'}}>
          <H3>Comments</H3>
          <Comments />
          <Comments />
        </View>
      </View>
    );
  }
}

class Comments extends Component {
  render() {
    if (this.props) {
      return (
        <View>
          <View
            style={{
              ...styles2.container,
              ...styles2.rate,
            }}>
            <Text>
              testdvewwegw hrrgv rgg gj owjgwogjw ojggjwgjo
              berwgkrgkrgkewrkgbekbrb krmgkrb rbr{' '}
            </Text>
          </View>
        </View>
      );
    } else return null;
  }
}
