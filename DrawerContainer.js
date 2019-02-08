import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

let iconSize = 25;

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props)
  }


  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }


  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View>

            {/* <ImageBackground
              style={{
                flex: 1,
                width: '100%',
                height: 170,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
              source={require('../assets/bg_drawer.png')}> */}

              <View style={{ marginLeft: 10 }}>
                <TouchableOpacity>
                  
                  <Ionicons name='md-home' size={iconSize} style={styles.drawerIcon} />
                </TouchableOpacity>

                <Text style={{ color: 'white', fontSize: 14, marginTop: 10 }}>
                  John Doe
                </Text>
                <Text style={{ color: 'white', fontSize: 14 }}>
                  johndoe@gmail.com
                </Text>

              </View>

            {/* </ImageBackground> */}



            <View style={styles.navSectionStyle}>
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('HomePage')}>
                <Ionicons name='md-home' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Home</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionHeadingStyle}> Section 1 </Text>

            <View style={styles.navSectionStyle}>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('TimeLinePage')}>
                <Ionicons name='md-list' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Time Line</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('ListPage')}>
                <Ionicons name='md-clipboard' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle}>List</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('CalendarPage')}>
                <Ionicons name='md-calendar' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle}>Calendar</Text>
              </TouchableOpacity>

            </View>

            <Text style={styles.sectionHeadingStyle}> Section 2 </Text>

            <View style={styles.navSectionStyle}>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('MyPage4')}>
                <Ionicons name='logo-rss' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Page 4</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('MyPage5')}>
                <Ionicons name='logo-apple' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Page 5</Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.drawerMenu}>
            <Ionicons name='md-log-out' size={iconSize} style={styles.drawerIcon} />
            <Text style={styles.navItemStyle} >Code For Fun !</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  navItemStyle: {
    padding: 15,
    marginLeft: 20,

  },
  navSectionStyle: {
    marginLeft: 20,
  },

  drawerIcon: {
    color: "grey"
  },

  drawerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#E0E0E0',
    color: '#003759'
  },
  footerContainer: {
    padding: 20,
    backgroundColor: '#fcc358',
  }
})