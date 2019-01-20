import React from 'react';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      // <Image
      //   source={require('./notif-icon.png')}
      //   style={[styles.icon, {tintColor: tintColor}]}
      // />
      <Ionicons name="md-notifications" size={32} color="green" />),
  };
  render() {
    return (<Button style={{paddingTop:22}} onPress={() => this.props.navigation.goBack()} title="Go back home" />);
  }
}
