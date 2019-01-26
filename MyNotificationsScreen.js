import React from "react";
import { Button, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: ({ tintColor }) => (
      // <Image
      //   source={require('./notif-icon.png')}
      //   style={[styles.icon, {tintColor: tintColor}]}
      // />
      <Ionicons name="md-notifications" size={32} color="green" />
    )
  };
  render() {
    return (
      <View>
      <Button
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex:1
        }}
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
      </View>
    );
  }
}
