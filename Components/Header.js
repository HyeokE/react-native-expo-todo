import React from 'react';
import IoIcons from 'react-native-vector-icons/Ionicons';
import { Button, Text, View, StyleSheet } from 'react-native';

function Header() {
    return (
        <>
            <View style={styles.TopIcon}>
                <IoIcons name="menu" size={30} onPress={() => navigation.openDrawer()} />
                <Text style={styles.Header}>오늘 뭐 해야 되지?</Text>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    TopIcon: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    Header: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 3,
        justifyContent: 'center',
    },
});

export default Header;
