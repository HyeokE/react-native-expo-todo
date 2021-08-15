import React from 'react';
import { Button, Text, View, StyleSheet, ToastAndroid, KeyboardAvoidingView, TextInput, SafeAreaView, ScrollView, Keyboard } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Todobox from './Todobox';
import CalendarContent from './CalendarContent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';

const TaskInsert = ({ OnAddTask }) => {
    const [Task, setTask] = useState('');

    const TaskInput = (newTask) => {
        setTask(newTask);
    };
    const AddTask = () => {
        OnAddTask(Task);
        setTask('');
    };

    <>
        <KeyboardAvoidingView style={Styles.taskarea}>
            <TextInput style={Styles.input} placeholder={'할 일 추가하기'} value={setTask} onChangeText={TaskInput}></TextInput>
            <TouchableOpacity onPress={() => AddTask()}>
                <View style={Styles.addbtn}>
                    <Text>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </>;
};
const Styles = StyleSheet.create({
    taskarea: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        marginLeft: 10,
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '70%',
        height: 40,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        shadowRadius: 2,
        shadowColor: '#c0c0c0',
    },
    addbtn: {
        backgroundColor: '#fff',
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderRadius: 30,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 2,
        shadowColor: '#c0c0c0',
    },
});
export default TaskInsert;
