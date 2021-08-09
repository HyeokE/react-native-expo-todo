import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Todobox(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 13,
        paddingBottom: 13,
        borderWidth: 1,
        borderColor: '#9f9f9f9f',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15,
    },
    itemLeft: {
        flexDirection: 'row', //가로로 배치
        alignItems: 'center', //상하정렬
        flexWrap: 'wrap',
        marginLeft: 0,
        paddingLeft: 0,
    },
    square: {
        width: 20,
        height: 20,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 20,
        marginLeft: 0,
    },
    itemText: {
        maxWidth: '80%',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 2,
    },
});
