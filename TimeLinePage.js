import React from "react";
import { Button, View, Text , TouchableOpacity, } from "react-native";
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class TimeLinePage extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#eee"
        }}
      >
      <Text>
          Welcome to Time Line
      </Text>
      </View>
    );
  }
}

export default TimelineStack = createStackNavigator({

  TimeLinePage: {
    screen: TimeLinePage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Time line list",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Ionicons name='md-menu' size={35} /></TouchableOpacity></View>
    })
  },

});
