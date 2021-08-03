import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Goal from './pages/Goal';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

function Sidebar() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="오늘 뭐 해야 되지?" component={Home} title="main page" />
                <Drawer.Screen name="목표" component={Goal} title="Goal" />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default function App() {
    return <Sidebar style={{ width: 100 }} />;
}
const styles = StyleSheet.create({});
