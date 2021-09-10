import React from 'react';
import { useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple } from 'react-native-paper';
import { Button, Text, View, StyleSheet, Keyboard, FlatList, TouchableOpacity, Alert } from 'react-native';
import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
function LoginContent(props) {
    return (
        <>
            <TouchableOpacity
                style={Styles.LoginView}
                onPress={() => {
                    props.props.navigation.navigate('Login');
                }}
            >
                <AntDesign name="login" label="Login" size={20} style={Styles.LoginIcon} />
                <Text style={Styles.LoginText}>로그인, 회원가입하기</Text>
            </TouchableOpacity>
        </>
    );
}

export function DrawerContent(props) {
    const { isLoggedIn, changeCheck, userState } = props;
    const name = props.userState.name;
    const press = () => {
        console.log(name);
    };

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                {/* 이름, 아이디 */}
                <View style={{ alignItems: 'center', alignContent: 'center' }}>
                    <View style={{ marginHorizontal: 20, flexDirection: 'column', marginVertical: 20 }}>
                        <View>{props.isLoggedIn ? <Text style={Styles.title} text={props.userState.name} /> : <LoginContent props={props} />}</View>
                    </View>
                </View>

                <View style={Styles.Drawer}>
                    {/* 사이드 바 메뉴 */}
                    <Drawer.Section style={{ marginTop: 10 }}>
                        <DrawerItem
                            style={Styles.DrawerItem}
                            icon={({ color, size }) => <AntDesign name="home" color={color} size={size} />}
                            label="홈"
                            onPress={() => {
                                press();
                                props.navigation.navigate('Home');
                            }}
                        />
                        <DrawerItem
                            style={Styles.DrawerItem}
                            icon={({ color, size }) => <FontAwesome name="sticky-note-o" color={color} size={size} />}
                            label="메모"
                            onPress={() => {
                                props.navigation.navigate('Note');
                            }}
                        />
                        <DrawerItem
                            style={Styles.DrawerItem}
                            icon={({ color, size }) => <FontAwesome5 name="calendar-check" color={color} size={size} />}
                            label="완료 목록"
                            onPress={() => {
                                props.navigation.navigate('CheckedList');
                            }}
                        />
                        <DrawerItem
                            style={Styles.DrawerItem}
                            icon={({ color, size }) => <FontAwesome5 name="calendar-times" color={color} size={size} />}
                            label="미완료 목록"
                            onPress={() => {
                                props.navigation.navigate('UncheckedList');
                            }}
                        />
                        <DrawerItem
                            style={Styles.DrawerItem}
                            icon={({ color, size }) => <AntDesign name="infocirlceo" color={color} size={size} />}
                            label="문의하기"
                            onPress={() => {
                                props.navigation.navigate('Support');
                            }}
                        />
                        <DrawerItem
                            style={Styles.DrawerItem}
                            icon={({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} />}
                            label="설정하기"
                            onPress={() => {
                                props.navigation.navigate('Setting');
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <View>
                {props.isLoggedIn ? (
                    <Drawer.Section style={{ marginLeft: 30 }}>
                        <DrawerItem
                            icon={({ color, size }) => <AntDesign name="logout" color={color} size={size} />}
                            label="로그아웃"
                            onPress={() => {
                                console.log(changeCheck, isLoggedIn);
                                try {
                                    changeCheck();
                                    Alert.alert('로그아웃 되었습니다.');
                                } catch (e) {
                                    console.log(e.message);
                                }
                            }}
                        />
                    </Drawer.Section>
                ) : (
                    <Text />
                )}
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    LoginView: {
        marginHorizontal: 10,

        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#c0c0c0',
        shadowRadius: 2,
        shadowColor: '#c0c0c0',
    },
    LoginText: {
        fontSize: 20,
        padding: 0,
    },
    setrow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    caption: { fontSize: 15 },
    Paragraph: {
        fontWeight: 'bold',
        marginRight: 10,
        marginLeft: 5,
        fontSize: 15,
    },
    setSection: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 11,
    },
    setSidebarText: {
        fontSize: 14,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    Drawer: {
        // paddingLeft: 8,
    },
    DrawerItem: {
        paddingTop: 0,
        paddingBottom: 10,
        paddingLeft: 25,
    },
});
