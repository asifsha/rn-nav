import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation";

import { Ionicons } from "@expo/vector-icons";

import { LineChart, ProgressChart } from "react-native-chart-kit";

class ChartsPage extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 5,
          backgroundColor: "#eee"
        }}
      >
        <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width - 10} // from react-native
          height={320}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(33, 29, 27, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />

        <ProgressChart
          data={[0.4, 0.6, 0.8]}
          width={Dimensions.get("window").width - 10}
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(33, 29, 27, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
        />
      </View>
    );
  }
}

export default (ChartsStack = createStackNavigator({
  ChartsPage: {
    screen: ChartsPage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Graph",
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
