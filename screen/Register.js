import React from 'react';
import { Button, Text, View, StyleSheet, KeyboardAvoidingView, TextInput, ScrollView, Keyboard, FlatList } from 'react-native';

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
