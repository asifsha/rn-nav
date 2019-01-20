import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import { MyHomeScreen } from './MyHomeScreen';
import { MyNotificationsScreen } from './MyNotificationsScreen';
import { Platform } from 'react-native';

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});


const MyApp = createAppContainer(MyDrawerNavigator);

//export default MyApp;
export default class App extends React.Component {
  render() {
    return <MyApp style={{paddingTop: 22, flex:1}} />;
  }
}

// export default class App extends React.Component {
//     render() {
//       return (
//         <View style={styles.container}>
//           <MyApp />
//         </View>
//       );
//     }
//   }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
