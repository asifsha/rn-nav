import React from "react";
import { Button, View, Text } from "react-native";

export class HomePage extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#eee"
        }}
      >
        <Text style={{padding:10}}>
          React Native App with Custom Drawer, Calendar, Video, Charts, Timeline
          and Map.
        </Text>
      </View>
    );
  }
}
