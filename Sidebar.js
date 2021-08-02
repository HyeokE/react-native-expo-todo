import React from 'react';
import { ViewBase, Text, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Main from './pages/Main';
import Goal from './pages/Goal';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import { createMaterialBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Drawer = createDrawerNavigator();

export default function sidebar() {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Main" component={Main} />
                    <Drawer.Screen name="Goal" component={Goal} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    );
}
