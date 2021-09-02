import React from 'react';
import { Button, View, StyleSheet, Text, Item, Label, TextInput } from 'react-native';
import IoIcons from 'react-native-vector-icons/Ionicons';

function Login() {
    return (
        <>
            <View style={Styles.TopIcon}>
                <Text style={Styles.Header}>오늘 뭐 해야 되지?</Text>
            </View>
            <View>
                <View>
                    <Text>Email</Text>
                    <TextInput autoCorrect={false} autoCapitalize="none" />
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput autoCorrect={false} autoCapitalize="none" />
                </View>
                <View>
                    <Button rounded success title="Login" style={Styles.LoginBtn} />
                </View>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
    },
    LoginBtn: {},
});

export default Login;
