import React from 'react';
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
      <Text>
          Welcome to Home Page
      </Text>
      </View>
    );
  }
}
