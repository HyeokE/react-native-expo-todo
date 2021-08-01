import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as AiIcons from 'react-icons/ai';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
    return (
        <View style={styles.container}>
            <Ionicons name="menu" style={styles.icon} />
            <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
    },
    icon: {
        fontSize: 50,
    },
});
