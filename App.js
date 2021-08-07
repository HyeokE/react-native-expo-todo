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
import Todobox from './Todobox';

import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

function Sidebar() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Note" component={Note} />
                <Drawer.Screen name="CheckedList" component={CheckedList} />
                <Drawer.Screen name="UncheckedList" component={UncheckedList} />
                <Drawer.Screen name="Support" component={Support} />
                <Drawer.Screen name="Setting" component={Setting} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default function App() {
    return <Sidebar style={{ width: 100 }} />;
}
const styles = StyleSheet.create({});
