import React from 'react';
import { StyleSheet, ScrollView, Keyboard } from 'react-native';
import Todobox from '../Components/Todobox';

const TodoComponent = (taskItems, deleteTask, check) => {
    return (
        <ScrollView style={Styles.taskview}>
            {Array.from(taskItems).map((task) => (
                <Todobox key={task.id} {...task} deleteTask={deleteTask} check={check} />
            ))}
        </ScrollView>
    );
};
const Styles = StyleSheet.create({
    taskview: {
        height: '36%',
    },
});
export default TodoComponent;
