import React from 'react';
import { StyleSheet, ScrollView, Keyboard } from 'react-native';
import Todobox from '../Components/Todobox';

const TodoComponent = (text, day) => {
    return (
        <ScrollView style={Styles.taskview}>
            <Todobox key={task.id} text={text} deleteTask={deleteTask} check={check} day={day} />
        </ScrollView>
    );
};
const Styles = StyleSheet.create({
    taskview: {
        height: '36%',
    },
});
export default TodoComponent;
