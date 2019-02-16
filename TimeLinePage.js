import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import Timeline from "react-native-timeline-listview";

class TimeLinePage extends React.Component {
  constructor() {
    super();
    this.data = [
      {
        time: "09:00",
        title: "Stand up",
        description: "Daily status for React Native mobile app.",
        circleColor: "#009688",
        lineColor: "#009688"
      },
      {
        time: "09:15",
        title: "Q & A, discussion",
        description: "Discuss about product development."
      },
      { time: "12:00", title: "Lunch" },
      {
        time: "14:00",
        title: "Retro & Planning Meeting",
        description: "Sprint end meeting for Dev X team.",
        lineColor: "#009688"
      },
      {
        time: "16:30",
        title: "Code Review",
        description: "Code review for dev team.",
        circleColor: "#009688"
      }
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <Timeline
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{
            textAlign: "center",
            backgroundColor: "#FFA500",
            color: "white",
            padding: 5,
            borderRadius: 13
          }}
          descriptionStyle={{ color: "gray" }}
          options={{
            style: { paddingTop: 5 }
          }}
          innerCircle={"dot"}
        />
      </View>
    );
  }
}

export default (TimelineStack = createStackNavigator({
  TimeLinePage: {
    screen: TimeLinePage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Time line list",
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
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: "white"
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
