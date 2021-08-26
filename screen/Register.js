import React from 'react';
import { Button, Text, View, StyleSheet, KeyboardAvoidingView, TextInput, ScrollView, Keyboard, FlatList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Todobox from '../Components/Todobox';
import CalendarContent from '../Components/CalendarContent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import IoIcons from 'react-native-vector-icons/Ionicons';
import math from 'react-native-math';
import TodoComponent from '../Components/TodoComponent';
import TaskInsert from '../Components/TaskInsert';
import * as firebase from 'firebase';

function Register() {
    const onSignup = () => {
        const { email, password, name } = this.state;
        firebase
            .auth()
            .createUserEmailPassword(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((result) => {
                console.log(error);
            });
    };
    return (
        <>
            <Item>
                <Label>Email</Label>
                <TextInput autoCorrect={false} autoCapitalize="none" />
            </Item>

            <Item>
                <Label>Password</Label>
                <TextInput autoCorrect={false} autoCapitalize="none" />
            </Item>

            <Button rounded success>
                Login
            </Button>
        </>
    );
}

export default Register;
