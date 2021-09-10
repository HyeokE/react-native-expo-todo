import * as React from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './Components/context';
import Home from './screen/Home';
import Note from './screen/Note';
import CheckedList from './screen/CheckedList';
import UncheckedList from './screen/UncheckedList';
import Support from './screen/Support';
import Setting from './screen/Setting';
import Login from './screen/Login';
import { DrawerContent } from './DrawerContent';
import * as Google from 'expo-google-app-auth';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeCheck = () => {
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
    };
    const [userState, setUserState] = useState([
        {
            email: '',
            name: '',
        },
    ]);
    const Drawer = createDrawerNavigator();

    const authContext = React.useMemo(() => ({
        signInWithGoogleAsync: async (navigation) => {
            try {
                const config = await Google.logInAsync({
                    androidClientId: '599204465404-8tf419t9h3ruj189dmvtb2e9o1m8hggs.apps.googleusercontent.com',
                    iosClientId: '599204465404-gnnehch96gvf816n44s24t3gqiroahsv.apps.googleusercontent.com',
                    scopes: ['profile', 'email'],
                });
                if (config.type === 'success') {
                    Alert.alert('Google Login Successful');
                    setIsLoggedIn(true);
                    setTimeout(() => navigation.navigate('Home'), 1000);
                    /*put your logic here, I set some states and navigate to home screen 
                       after successful signin.*/
                    const googleUser = config.user;
                    setUserState({
                        email: googleUser.email,
                        name: googleUser.name,
                    });
                    return config.accessToken;
                } else {
                    Alert.alert('Login Cancelled');
                    return { cancelled: true };
                }
            } catch (e) {
                Alert.alert('LoginError', e.message);
                console.log(e);
                return { error: true };
            }
        },
    }));
    function DrawerNavigate() {
        return (
            <AuthContext.Provider value={authContext}>
                <Drawer.Navigator
                    // 헤더 삭제 후 버튼 제작 할 것
                    screenOptions={{ headerShown: false, headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0, shadowColor: 'transparent' } }}
                    drawerContent={(props) => <DrawerContent isLoggedIn={isLoggedIn} userState={userState} changeCheck={changeCheck} {...props} />}
                >
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Note" component={Note} />
                    <Drawer.Screen name="CheckedList" component={CheckedList} />
                    <Drawer.Screen name="UncheckedList" component={UncheckedList} />
                    <Drawer.Screen name="Support" component={Support} />
                    <Drawer.Screen name="Setting" component={Setting} />
                    <Drawer.Screen name="Login" component={Login} />
                </Drawer.Navigator>
            </AuthContext.Provider>
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
