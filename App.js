import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import { MyHomeScreen } from './MyHomeScreen';
import { MyNotificationsScreen } from './MyNotificationsScreen';
import { Platform } from 'react-native';
import { FooScreen } from './FooScreen';
import { BarScreen } from './BarScreen';
import { Ionicons } from '@expo/vector-icons';


// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });

// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });


//const MyApp = createAppContainer(MyDrawerNavigator);

//export default MyApp;
// export default class App extends React.Component {
//   render() {
//     return <MyApp style={{paddingTop: 22, flex:1}} />;
//   }
// }

const FooStackNavigator = createStackNavigator({
  Foo: { 
    screen: FooScreen, 
    navigationOptions: {
      title: 'Foo',
      tabBarIcon : <Ionicons name="md-home" size={32} color="green" />,
      icon : <Ionicons name="md-home" size={32} color="green" />,
      drawerIcon : <Ionicons name="md-home" size={32} color="green" />,
    }
  },
});
const BarStackNavigator = createStackNavigator({
  Bar: { 
    screen: BarScreen, 
    navigationOptions: {
      title: 'Bar',
      tabBarIcon: <Ionicons name="md-notifications" size={32} color="green" />
    }
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  FooStack: { 
    screen: FooStackNavigator,
    label: 'Foo Stack',
    navigationOptions: {
      drawer: () => ({
        label: 'Foo',
        tabBarIcon: ({ tintColor }) => (
          // <Icon name="credit-card" size={22} color={tintColor} />
          <Ionicons name="md-home" size={32} color="green" />
        ),
        headerLeft: ({ tintColor }) => (
          // <Icon name="credit-card" size={22} color={tintColor} />
          <Ionicons name="md-home" size={32} color="green" />
        ),
        icon: ({ tintColor }) => (
          // <Icon name="credit-card" size={22} color={tintColor} />
          <Ionicons name="md-home" size={32} color="green" />
        ),
      })
    },
  },
  BarStack: { 
    screen: BarStackNavigator,
    label: 'Bar Stack',
    navigationOptions: {
      drawer: () => ({
        label: 'Bar',
        drawerIcon: ({ tintColor }) => (
          // <Icon name="tag" size={22} color={tintColor} />
          <Ionicons name="md-notifications" size={32} color="green" />
        ),
      })
    },
  }
});

const AppNavigator = createStackNavigator({
  Drawer: { screen: MyDrawerNavigator },
}, {
  headerMode: 'none',
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
      return <AppContainer style={{paddingTop: 22, flex:1}} />;
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
