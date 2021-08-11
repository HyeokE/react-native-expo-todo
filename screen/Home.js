import React from 'react';
import { Text, View, StyleSheet, ToastAndroid, KeyboardAvoidingView, TextInput } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Todobox from '../Components/Todobox';
import CalendarContent from '../Components/CalendarContent';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            <KeyboardAvoidingView style={styles.taskinput}>
                <TextInput style={styles.input} placeholder={'할 일 추가하기'}></TextInput>
                <TouchableOpacity>
                    <View style={styles.addbtn}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    Homepage: {
        // backgroundColor: '#fff',
    },
    Calendar: {},
    taskinput: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {},
    addbtn: {},
});

export default Home;
