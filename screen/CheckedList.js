import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import IoIcons from 'react-native-vector-icons/Ionicons';

export default function CheckedList({ navigation }) {
    return (
        <>
            <View style={Styles.TopIcon}>
                <IoIcons name="menu" size={30} onPress={() => navigation.openDrawer()} />
                <Text style={Styles.Header}>완료 목록</Text>
            </View>
            <View>
                <Text>CheckedList</Text>
            </View>
        </>
    );
}
const Styles = StyleSheet.create({
    TopIcon: {
        paddingTop: 37,
        paddingLeft: 20,
        paddingBottom: 5,
        flexDirection: 'row',
    },
    Header: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 3,
        justifyContent: 'center',
    },
});
