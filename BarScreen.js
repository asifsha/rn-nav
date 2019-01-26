import React from 'react';
import { Button , View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from './Header';

export class BarScreen extends React.Component {
//   static navigationOptions = {
//     header : (<Header></Header>)
//     ,
//     drawerLabel: 'Home',
//     drawerIcon: ({ tintColor }) => (
//       // <Image
//       //   source={require('./chats-icon.png')}
//       //   style={[styles.icon, {tintColor: tintColor}]}
//       // />
//       <Ionicons name="md-home" size={32} color="green" />),
//   };
  render() {
    return (
        <View style={{flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'}}>
        <Text>Bar Screen</Text>
        <Button 
         onPress={() => this.props.navigation.navigate('Notifications')} title="Go to notifications" />
        </View>
        );
  }
}
