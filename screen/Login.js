import React from 'react';
import { useState } from 'react';
import { Button, View, StyleSheet, Text, Item, Label, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import IoIcons from 'react-native-vector-icons/Ionicons';
import { toLogin } from '../Components/frbase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onChangeID = (text) => {
        setEmail(text);
        console.log(email);
    };
    const onChangePW = (text) => {
        setPassword(text);
        console.log(password);
    };
    const loginBtnPress = async ({ email, password }) => {
        try {
            const user = await toLogin({ email, password });
            Alert.alert('Login', user.email);
            console.log(user.email);
        } catch (e) {
            Alert.alert('LoginError', e.message);
            console.log(e);
        }
    };
    return (
        <>
            <View style={Styles.Header}>
                <Text style={{ fontSize: 30 }}>오늘 뭐 해야 되지?</Text>
            </View>
            <View>
                <View style={Styles.EmailContent}>
                    <Text style={Styles.EmailPwText}>Email</Text>
                    <KeyboardAvoidingView style={Styles.taskarea}>
                        <TextInput name="email" autoCorrect={false} autoCapitalize="none" style={Styles.EmailPwInput} onChangeText={onChangeID} />
                    </KeyboardAvoidingView>
                </View>
                <View style={Styles.PwContent}>
                    <Text style={Styles.EmailPwText}>Password</Text>
                    <KeyboardAvoidingView style={Styles.taskarea}>
                        <TextInput name="password" autoCorrect={false} autoCapitalize="none" style={Styles.EmailPwInput} onChangeText={onChangePW} />
                    </KeyboardAvoidingView>
                </View>

                <View style={Styles.LoginRegister}>
                    <TouchableOpacity onPress={loginBtnPress}>
                        <View style={Styles.LoginBtn}>
                            {/* <Button rounded success title="Login"></Button> */}
                            <Text style={Styles.LoginText}>로그인</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={Styles.RegisterBtn}>
                            {/* <Button rounded success title="Login"></Button> */}
                            <Text style={Styles.RegisterText}>회원가입</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Styles.anotherLogin}>
                    <View>
                        <TouchableOpacity>
                            <View style={Styles.WithAnother}>
                                {/* <Button rounded success title="Login"></Button> */}
                                <Text style={Styles.WithAnotherText}>Continue with Google</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.WithAnother}>
                                {/* <Button rounded success title="Login"></Button> */}
                                <Text style={Styles.WithAnotherText}>Continue with Github</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}
const Styles = StyleSheet.create({
    // TopIcon: {
    //     paddingTop: 37,
    //     paddingLeft: 20,
    //     paddingBottom: 5,
    //     flexDirection: 'row',
    // },
    Header: {
        marginTop: '30%',
        marginBottom: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 30,
    },
    EmailContent: {
        marginLeft: '10%',
        marginTop: '5%',
    },
    EmailPwText: {
        marginLeft: '3%',
        marginBottom: '1%',
        fontSize: 16,
    },
    EmailPwInput: {
        paddingHorizontal: 20,
        width: '90%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 45,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        shadowRadius: 2,
        shadowColor: '#c0c0c0',
        fontSize: 18,
    },
    PwContent: {
        marginLeft: '10%',
        marginTop: '5%',
    },
    taskarea: {
        height: '10%',
    },

    LoginRegister: {
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    LoginBtn: {
        marginHorizontal: 10,
        width: '90%',
        borderRadius: 15,
        height: 45,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#c0c0c0',
        shadowRadius: 2,
        shadowColor: '#c0c0c0',
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
    },
    LoginText: {
        fontSize: 15,
        marginHorizontal: 50,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    RegisterBtn: {
        marginHorizontal: 10,
        width: '90%',
        borderRadius: 15,
        height: 45,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#c0c0c0',
        shadowRadius: 2,
        shadowColor: '#c0c0c0',
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
    },
    RegisterText: {
        fontSize: 15,
        marginHorizontal: 48,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    anotherLogin: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    WithAnother: {
        marginTop: 30,
        marginHorizontal: 70,
        width: 250,
        borderRadius: 15,
        height: 40,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#c0c0c0',
        shadowRadius: 2,
        justifyContent: 'space-around',
        shadowColor: '#c0c0c0',
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
    },
    WithAnotherText: {
        fontSize: 15,
        marginHorizontal: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
    },
});

export default Login;
