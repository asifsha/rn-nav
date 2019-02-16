import React from 'react';
import { TouchableOpacity, View, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation";

import { Ionicons } from "@expo/vector-icons";
import { MapView } from "expo";

class MapPage extends React.Component {
    constructor() {
      super();
     
    }
  
    render() {
        //const { navigate } = this.props.navigation;
        // const latitude = navigate.getParam('latitude', 37.78825);
        // const longitude = navigate.getParam('longitude', -122.4324);
        const  latitude= 24.858392;
        const longitude =67.001037;

        //const latitude = parseFloat(this.props.navigation.state.params.venue.latitude, 10);
        //const longitude = parseFloat(this.props.navigation.state.params.venue.longitude, 10);       


        return (

            <MapView style={{
                flex: 1
            }}
                initialRegion={{
                    latitude: latitude,
                    longitude : longitude,                    
                    latitudeDelta: 0.3,
                    longitudeDelta: 0.4

                }}
            >
                <MapView.Marker
                    coordinate={{ latitude: latitude, longitude: longitude }}
                    title={'Karachi - Pakistan'}
                    description={'Hello from Karachi!'}
                />

            </MapView>

        );
    }
  }
  
  export default (MapStack = createStackNavigator({
    MapPage: {
      screen: MapPage,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Map",
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
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 20,
//       paddingTop: 65,
//       backgroundColor: "white"
//     },
//     list: {
//       flex: 1,
//       marginTop: 20
//     }
//   });
  