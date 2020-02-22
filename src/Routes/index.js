import React, {Fragment} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import RegisterScreen from '../Components/RegesterScreen';
import LoginScreen from '../Components/LoginScreen';
import AddKinderScreen from '../Components/AddKindergartenScreen';
import SignupScreen from '../Components/SignupScreen';
import TeacherHomeScreen from '../Components/TeacherHomeScreen';
import AdminHomeScreen from '../Components/AdminHomeScreen';
// import TeacherScreen from '../Components/TeacherScreen';
import ProfileScreen from '../Components/ProfileScreen';
import AddStudentScreen from '../Components/AddStudentScreen';
import AddActivity from '../Components/AddActivity';
// import EvaluationOfPeriods from '../Components/EvaluationOfPeriods';
// import KindergartenFile from '../Components/KindergartenFile';
import StudentProfileScreen from '../Components/ProfileStudentsScreen';
import AddMainActivity from '../Components/AddMainActivity';
import KindergartenScreen from '../Components/KindergartenFile';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ParentHomeScreen from '../Components/ParentHomeScreen';
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function RenderDrawer(props) {
  return (
    <Drawer.Navigator
      drawerStyle={{width: '85%'}}
      drawerContent={props => <ProfileScreen props={props} />}>
      <Drawer.Screen name={props.name} component={props.component} />
    </Drawer.Navigator>
  );
}

function RenderTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false, showIcon: true}}
      tabBarPosition="bottom"
      initialRouteName="Home">
      <Tab.Screen
        options={{tabBarIcon: () => <Icon name="md-home" size={25} />}}
        name={'Home'}>
        {() => <RenderDrawer name={'Home'} component={TeacherHomeScreen} />}
      </Tab.Screen>
      <Tab.Screen
        options={{tabBarIcon: () => <Icon name="md-book" size={25} />}}
        name={'AddActivity'}>
        {() => <RenderDrawer name={'Home'} component={AddActivity} />}
      </Tab.Screen>
      <Tab.Screen
        options={{tabBarIcon: () => <Icon name="md-add" size={25} />}}
        name={'AddStudentScreen'}>
        {() => <RenderDrawer name={'Home'} component={AddStudentScreen} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function ParentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home">
        {() => <RenderDrawer name="home" component={ParentHomeScreen} />}
      </Stack.Screen>

      <Stack.Screen name="StudentProfileScreen">
        {() => <RenderDrawer name="home" component={StudentProfileScreen} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function AdminTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false, showIcon: true}}
      tabBarPosition="bottom"
      initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="md-person-add" size={25} />,
        }}
        name={'Home'}>
        {() => (
          <RenderDrawer name={'Add Teacher'} component={AdminHomeScreen} />
        )}
      </Tab.Screen>
      <Tab.Screen
        options={{tabBarIcon: () => <Icon name="md-book" size={25} />}}
        name={'Add Activity'}>
        {() => <RenderDrawer name={'Home'} component={AddActivity} />}
      </Tab.Screen>
      <Tab.Screen
        options={{tabBarIcon: () => <Icon name="md-build" size={25} />}}
        name={'Kindergarten Profile'}>
        {() => <RenderDrawer name={'Home'} component={KindergartenScreen} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="AddKinderScreen" component={AddKinderScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TeacherHomeScreen">
          {() => <RenderTabs />}
        </Stack.Screen>
        <Stack.Screen name="ParentHomeScreen">
          {() => <ParentStack />}
        </Stack.Screen>
        <Stack.Screen name="AdminHomeScreen">
          {() => <AdminTabs />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
