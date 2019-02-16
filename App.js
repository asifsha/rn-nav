import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import DrawerContainer from "./DrawerContainer";

import { HomePage } from "./HomePage";
import TimeLinePage from "./TimeLinePage";
import CalendarPage from "./CalendarPage";
import VideoPage from "./VideoPage";
import ChartsPage from "./ChartsPage";
import MapPage from "./MapPage";

const HomeStack = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Home Page",
      headerLeft: (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Ionicons name="md-menu" size={35} />
          </TouchableOpacity>
        </View>
      )
    })
  }
});

const DrawerStack = createDrawerNavigator(
  {
    HomePage: { screen: HomeStack },
    TimeLinePage: { screen: TimeLinePage },
    CalendarPage: { screen: CalendarPage },
    VideoPage: { screen: VideoPage },
    ChartsPage: { screen: ChartsPage },
    MapPage: { screen: MapPage }
  },
  {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  }
);

const MyApp = createAppContainer(DrawerStack);

export default class App extends React.Component {
  render() {
    return <MyApp style={{ paddingTop: 22, flex: 1 }} />;
  }
}

