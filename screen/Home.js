import React from 'react';
import { Button, Text, View, StyleSheet, ToastAndroid, KeyboardAvoidingView, TextInput, SafeAreaView, ScrollView, Keyboard } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Todobox from '../Components/Todobox';
import CalendarContent from '../Components/CalendarContent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import IoIcons from 'react-native-vector-icons/Ionicons';

function Home({ navigation }) {
    const [task, setTask] = useState(null);
    const [taskItems, setTaskItems] = useState([]);
    const AddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask(null);
    };
    const checkedTask = () => {};

    const deleteTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    };

    return (
        <>
            <View style={Styles.TopIcon}>
                <IoIcons name="menu" size={30} onPress={() => navigation.openDrawer()} />
                <Text style={Styles.Header}>오늘 뭐 해야 되지?</Text>
            </View>
            <View style={Styles.Homepage}>
                <View style={Styles.Calendar_Task}>
                    <View>
                        <CalendarContent style={Styles.Calendar} onChange={() => this.onDayPress()} />
                    </View>
                    <ScrollView style={Styles.taskview}>
                        <View>
                            {taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            deleteTask();
                                        }}
                                    >
                                        <Todobox text={item} />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
            <KeyboardAvoidingView style={Styles.taskarea}>
                <TextInput
                    style={Styles.input}
                    placeholder={'할 일 추가하기'}
                    value={task}
                    onChangeText={(task) => {
                        setTask(task);
                    }}
                ></TextInput>
                <TouchableOpacity onPress={() => AddTask()}>
                    <View style={Styles.addbtn}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </>
    );
}

const Styles = StyleSheet.create({
    TopIcon: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    Header: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 4,
        justifyContent: 'center',
    },
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

export default Home;
