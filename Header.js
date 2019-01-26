import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Header extends React.Component {
    render() {
        return (
            <Ionicons style={styles.header} name="md-menu" size={28} color="green" />
        );
    }
}

const styles = StyleSheet.create(
    {
        header:
        {
            paddingLeft: 10,           
        }
    });