import React from 'react';
import { useState } from 'react';
import { Button, View, StyleSheet, Text, Item, Label, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import IoIcons from 'react-native-vector-icons/Ionicons';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onChange = (event) => {
        console.log(event.target.name);
    };
    const onSubmit = (event) => {
        event.preventDefault();
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
                        <TextInput name="email" autoCorrect={false} autoCapitalize="none" style={Styles.EmailPwInput} onChange={onChange} />
                    </KeyboardAvoidingView>
                </View>
                <View style={Styles.PwContent}>
                    <Text style={Styles.EmailPwText}>Password</Text>
                    <KeyboardAvoidingView style={Styles.taskarea}>
                        <TextInput name="password" autoCorrect={false} autoCapitalize="none" style={Styles.EmailPwInput} onChange={onChange} />
                    </KeyboardAvoidingView>
                </View>
                <View style={Styles.Footer}>
                    <TouchableOpacity>
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

    Footer: {
        marginVertical: 50,
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
});

export default Login;
