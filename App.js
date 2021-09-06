import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';
import Note from './screen/Note';
import CheckedList from './screen/CheckedList';
import UncheckedList from './screen/UncheckedList';
import Support from './screen/Support';
import Setting from './screen/Setting';
import Login from './screen/Login';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigate() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const changeCheck = () => {
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
    };

    return (
        <Drawer.Navigator
            // 헤더 삭제 후 버튼 제작 할 것
            screenOptions={{ headerShown: false, headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0, shadowColor: 'transparent' } }}
            drawerContent={(props) => <DrawerContent isLoggedIn={isLoggedIn} changeCheck={changeCheck} {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Note" component={Note} />
            <Drawer.Screen name="CheckedList" component={CheckedList} />
            <Drawer.Screen name="UncheckedList" component={UncheckedList} />
            <Drawer.Screen name="Support" component={Support} />
            <Drawer.Screen name="Setting" component={Setting} />
            <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
    );
}

function Sidebar() {
    return (
        <>
            <NavigationContainer>
                <DrawerNavigate />
            </NavigationContainer>
        </>
    );
}

export default function App() {
    return (
        <>
            <Sidebar style={{ width: 100 }} />
        </>
    );
}
const styles = StyleSheet.create({
    header: {
        alignContent: 'space-between',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: 20,
    },
});
