import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';
import Note from './screen/Note';
import CheckedList from './screen/CheckedList';
import UncheckedList from './screen/UncheckedList';
import Support from './screen/Support';
import Setting from './screen/Setting';
import { DrawerContent } from './DrawerContent';
// import * as firebase from 'firebase/app';
import { firebase } from '@firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAKlOgKb2Mck6YbGAPfeNkoWA0KW0en5hA',
    authDomain: 'native-todo-10345.firebaseapp.com',
    projectId: 'native-todo-10345',
    storageBucket: 'native-todo-10345.appspot.com',
    messagingSenderId: '769850773741',
    appId: '1:769850773741:web:633325c2d7a79397433ce4',
    measurementId: 'G-CKSGW0F2WZ',
};

// const firebase = require('firebase');

const Drawer = createDrawerNavigator();

function DrawerNavigate() {
    return (
        <Drawer.Navigator
            // 헤더 삭제 후 버튼 제작 할 것
            screenOptions={{ headerShown: false, headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0, shadowColor: 'transparent' } }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Note" component={Note} />
            <Drawer.Screen name="CheckedList" component={CheckedList} />
            <Drawer.Screen name="UncheckedList" component={UncheckedList} />
            <Drawer.Screen name="Support" component={Support} />
            <Drawer.Screen name="Setting" component={Setting} />
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
    return <Sidebar style={{ width: 100 }} />;
}
const styles = StyleSheet.create({
    header: {
        alignContent: 'space-between',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: 20,
    },
});
