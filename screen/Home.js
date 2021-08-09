import React from 'react';
import { Text, View, StyleSheet, ToastAndroid } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Todobox from '../Components/Todobox';
import CalendarContent from '../Components/CalendarContent';

function Home() {
    return (
        <>
            <View style={styles.Homepage}>
                <View>
                    <CalendarContent style={styles.Calendar} />
                </View>
                <View style={{ backgroundColor: '#fff' }}>
                    <Todobox text="hi"></Todobox>
                    <Todobox text="hi1"></Todobox>
                    <Todobox text="hi2"></Todobox>
                    <Todobox text="hi3"></Todobox>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    Homepage: {
        backgroundColor: '#fff',
    },
    Calendar: {},
});

export default Home;
