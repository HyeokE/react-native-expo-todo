import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import IoIcons from 'react-native-vector-icons/Ionicons';
import Header from '../Components/Header';

function Note({ navigation }) {
    return (
        <>
            <Header />
            <View>
                <Text>Notes</Text>
            </View>
        </>
    );
}
const styles = StyleSheet.create({});

export default Note;
