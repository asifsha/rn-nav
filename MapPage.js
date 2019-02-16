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
        const  latitude= 24.858392;
        const longitude =67.001037;
      
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
  

  