import React from 'react';
import { Button, Text, View, StyleSheet, Keyboard, FlatList } from 'react-native';

import Todobox from '../Components/Todobox';
import CalendarContent from '../Components/CalendarContent';

import { useState } from 'react';
import IoIcons from 'react-native-vector-icons/Ionicons';
import TaskInsert from '../Components/TaskInsert';

// import firbase from '../Components/frbase';
// import { authService } from '../Components/frbase';
// console.log(authService.currentUser);

function Home({ navigation }) {
    var dt = new Date();
    var nowMonth = dt.getMonth() + 1;
    var nowDate = dt.getDate();

    if (dt.getMonth().toString().length == 1) {
        nowMonth = '0' + (dt.getMonth() + 1).toString();
    }
    if (dt.getDate().toString().length == 1) {
        nowDate = '0' + dt.getDate().toString();
    }

    var str = dt.getFullYear() + '-' + nowMonth + '-' + nowDate;

    const [taskItems, setTaskItems] = useState([]);
    const [day, setDay] = useState(str);
    const addDay = (date) => {
        setDay(date);
        // console.log('day: ' + day);
    };
    const deleteTask = (key) => {
        console.log('delete');
        setTaskItems((prevTask) => {
            return prevTask.filter((taskItems) => taskItems.key != key);
        });
    };
    const AddTask = (text) => {
        setTaskItems((prevTask) => {
            return [{ day: day, key: Math.random().toString(), text: text, check: false }, ...prevTask];
        });
        Keyboard.dismiss();
        // taskItems.map((day) => {
        //     console.log(day.day);
        // });
        console.log(taskItems);
        // console.log('day:' + day);
    };

    // const checkedTask = () => {};

    return (
        <>
            <View style={Styles.TopIcon}>
                <IoIcons name="menu" size={30} onPress={() => navigation.openDrawer()} />
                <Text style={Styles.Header}>오늘 뭐 해야 되지?</Text>
            </View>
            <View style={Styles.Homepage}>
                <View style={Styles.Calendar_Task}>
                    <View>
                        <CalendarContent style={Styles.Calendar} onSelectDay={addDay} />
                    </View>
                    {/* <ScrollView style={Styles.taskview}> */}
                    <View>
                        <FlatList data={taskItems} renderItem={({ item }) => <Todobox item={item} deleteTask={deleteTask} />} />
                    </View>

                    {/* </ScrollView> */}
                </View>
            </View>

            <TaskInsert AddTask={AddTask} />
            {/* <TaskInsert onAddTodo={AddTask} /> */}
            {/* <KeyboardAvoidingView style={Styles.taskarea}>
                <TextInput
                    style={Styles.input}
                    placeholder={'할 일 추가하기'}
                    value={task}
                    onChangeText={(task) => {
                        setTask(task);
                    }}
                ></TextInput>
                <TouchableOpacity onPress={() => AddTask(task)}>
                    <View style={Styles.addbtn}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView> */}
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
