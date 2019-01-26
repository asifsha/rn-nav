import React from 'react';
import { Button , View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from './Header';
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }
export class MyHomeScreen extends React.Component {
  static navigationOptions = {   
  
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      // <Image
      //   source={require('./chats-icon.png')}
      //   style={[styles.icon, {tintColor: tintColor}]}
      // />
      <Ionicons name="md-home" size={32} color="green" />),
  };
  render() {
    return (
        <View>
        <Button style={{flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'}}
         onPress={() => this.props.navigation.navigate('Notifications')} title="Go to notifications" />
        </View>
        );
  }
}
