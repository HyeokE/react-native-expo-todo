import React from 'react';
import { Button, Text, View, StyleSheet, ToastAndroid, KeyboardAvoidingView, TextInput, SafeAreaView, ScrollView, Keyboard } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Todobox from '../Components/Todobox';
import CalendarContent from '../Components/CalendarContent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import IoIcons from 'react-native-vector-icons/Ionicons';
import Header from '../Components/Header';

function Home({ navigation }) {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const AddTask = () => {
        Keyboard.dismiss();
        if (setTask == null) {
        }
        setTaskItems([...taskItems, task]);
        setTask(null);
    };
    const checkedTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    };

    return (
        <>
            <Header />

            <View style={styles.Homepage}>
                <View style={styles.Calendar_Task}>
                    <View>
                        <CalendarContent style={styles.Calendar} />
                    </View>
                    <ScrollView style={styles.taskview}>
                        <View>
                            {taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => checkedTask(index)}>
                                        <Todobox text={item} />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
            <KeyboardAvoidingView style={styles.taskarea}>
                <TextInput style={styles.input} placeholder={'할 일 추가하기'} value={task} onChangeText={(task) => setTask(task)}></TextInput>
                <TouchableOpacity onPress={() => AddTask()}>
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
        height: '100%',
    },
    taskview: {
        height: '36%',
    },
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
    },
});

export default Home;
