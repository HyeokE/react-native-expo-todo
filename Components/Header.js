import React from 'react';
import { Button, Text, View, StyleSheet, ToastAndroid, KeyboardAvoidingView, TextInput, SafeAreaView, ScrollView, Keyboard } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Todobox from '../Components/Todobox';
import CalendarContent from '../Components/CalendarContent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import IoIcons from 'react-native-vector-icons/Ionicons';

function Header({ navigation }) {
    return (
        <>
            <View style={styles.TopIcon}>
                <IoIcons name="menu" size={30} onPress={() => navigation.openDrawer()} />
                <Text style={styles.Header}>오늘 뭐 해야 되지?</Text>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    TopIcon: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    Header: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 3,
        justifyContent: 'center',
    },
});

export default Header;
