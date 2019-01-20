import React from 'react';
import { Button } from 'react-native';
import { Ionicons, View } from '@expo/vector-icons';
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
    headerTitle : (<Button
        onPress={() => alert('This is a header!')}
        title="Info"
        color="#fff"
      />),
    headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
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
        
        <Button style={{paddingTop:42}}
         onPress={() => this.props.navigation.navigate('Notifications')} title="Go to notifications" />
        
        );
  }
}
