import React from 'react';
import { useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

export function DrawerContent(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                {/* 프로필 사진 */}
                <View style={Styles.setProfile}>
                    <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                        <Avatar.Image
                            // 프로필 사진source={{}}
                            size={50}
                        />
                        {/* 이름, 아이디 */}
                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <Title style={Styles.title}>User</Title>
                            <Caption style={Styles.caption}>@user</Caption>
                        </View>
                    </View>
                    {/* 팔로워 목록 */}
                    <View style={Styles.setrow}>
                        <View style={Styles.setSection}>
                            <Paragraph style={(Styles.setCaption, Styles.setParagraph)}>00</Paragraph>
                            <Caption style={Styles.setParagraph}>Follower</Caption>
                            <Paragraph style={(Styles.setCaption, Styles.setParagraph)}>00</Paragraph>
                            <Caption style={Styles.setParagraph}>Following</Caption>
                        </View>
                    </View>
                    {/* 사이드 바 메뉴 */}
                    <Drawer.Section style={{ marginTop: 10 }}>
                        <DrawerItem
                            icon={({ color, size }) => <AntDesign name="home" color={color} size={size} />}
                            label="홈"
                            onPress={() => {
                                props.navigation.navigate('Home');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => <FontAwesome name="sticky-note-o" color={color} size={size} />}
                            label="메모"
                            onPress={() => {
                                props.navigation.navigate('Note');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => <FontAwesome5 name="calendar-check" color={color} size={size} />}
                            label="완료 목록"
                            onPress={() => {
                                props.navigation.navigate('CheckedList');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => <FontAwesome5 name="calendar-times" color={color} size={size} />}
                            label="미완료 목록"
                            onPress={() => {
                                props.navigation.navigate('UncheckedList');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => <AntDesign name="infocirlceo" color={color} size={size} />}
                            label="문의하기"
                            onPress={() => {
                                props.navigation.navigate('Support');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} />}
                            label="설정하기"
                            onPress={() => {
                                props.navigation.navigate('Setting');
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={{ marginLeft: 15 }}>
                <DrawerItem
                    icon={({ color, size }) => <AntDesign name="login" color={color} size={size} />}
                    label="로그인"
                    onPress={() => {
                        props.navigation.navigate('Register');
                    }}
                />
            </Drawer.Section>
            <Drawer.Section style={{ marginLeft: 15 }}>
                <DrawerItem
                    icon={({ color, size }) => <AntDesign name="logout" color={color} size={size} />}
                    label="로그아웃"
                    // onPress{() => { }}
                />
            </Drawer.Section>
        </View>
    );
}

const Styles = StyleSheet.create({
    setrow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    setCaption: {
        fontSize: 13,
        lineHeight: 14,
    },
    setParagraph: {
        fontWeight: 'bold',
        marginRight: 5,
        marginLeft: 5,
    },
    setSection: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 11,
    },
    setProfile: {
        paddingLeft: 20,
    },
    setSidebarText: {
        fontSize: 14,
    },
    title: {
        fontSize: 23,
    },
});
