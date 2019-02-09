import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

class CalendarPage extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#eee"
        }}
      >
        <Calendar
          // Initially visible month. Default = Date()
          current={new Date()}
          
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"MMM yyyy"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={direction => <Arrow />}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}

          markedDates={
            {'2019-02-20': {textColor: '#FFA500'},
             '2019-02-22': {startingDay: true, color: 'moccasin'},
             '2019-02-23': {selected: true, endingDay: true, color: '#FFA500', textColor: 'gray'},
             '2019-02-04': {startingDay: true, color: 'moccasin', endingDay: true}
            }}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType={'period'}
          theme={{
            dayTextColor: '#FFDAB9',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                color:'red',
                
              }
            },
            dayTextColor: '#FF7F50',
            calendarBackground: '#333248',
        }}
        />
      </View>
    );
  }
}

export default (CalendarStack = createStackNavigator({
  CalendarPage: {
    screen: CalendarPage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Calendar",
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
