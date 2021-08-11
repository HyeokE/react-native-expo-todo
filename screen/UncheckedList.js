import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import IoIcons from 'react-native-vector-icons/Ionicons';

function UncheckedList({ navigation }) {
    return (
        <>
            <View style={Styles.TopIcon}>
                <IoIcons name="menu" size={30} onPress={() => navigation.openDrawer()} />
                <Text style={Styles.Header}>미완료 목록</Text>
            </View>
            <View>
                <Text>UncheckedList</Text>
            </View>
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
});

export default UncheckedList;
