import * as React from "react";
import {
  Button,
  View,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./Components/context";
import Home from "./screen/Home";
import Note from "./screen/Note";
import CheckedList from "./screen/CheckedList";
import UncheckedList from "./screen/UncheckedList";
import Support from "./screen/Support";
import Setting from "./screen/Setting";
import Login from "./screen/Login";
import { DrawerContent } from "./DrawerContent";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import { firebaseConfig } from "./Components/frbase.config";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  const Drawer = createDrawerNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeCheck = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };

  const onSignIn = (googleUser) => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function () {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        try {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .then(function (result) {
              console.log("user signed in ");
              setIsLoggedIn(true);
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref("/users/" + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now(),
                  })

                  .then(function (snapshot) {
                    // console.log('Snapshot', snapshot);
                  });
              } else {
                firebase
                  .database()
                  .ref("/users/" + result.user.uid)
                  .update({
                    last_logged_in: Date.now(),
                  });
              }
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } catch {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };
  const authContext = React.useMemo(() => ({
    signInWithGoogleAsync: async (navigation) => {
      try {
        const config = await Google.logInAsync({
          androidClientId:
            "599204465404-8tf419t9h3ruj189dmvtb2e9o1m8hggs.apps.googleusercontent.com",
          iosClientId:
            "599204465404-gnnehch96gvf816n44s24t3gqiroahsv.apps.googleusercontent.com",
          scopes: ["profile", "email"],
        });
        if (config.type === "success") {
          onSignIn(config);
          Alert.alert("로그인 성공하였습니다");
          setIsLoggedIn(true);
          setTimeout(() => navigation.navigate("Home"), 1000);

          return config.accessToken;
        } else {
          Alert.alert("로그인 취소되었습니다");
          return { cancelled: true };
        }
      } catch (e) {
        Alert.alert("LoginError", e.message);
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
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "transparent",
              elevation: 0,
              shadowOpacity: 0,
              shadowColor: "transparent",
            },
          }}
          drawerContent={(props) => (
            <DrawerContent
              isLoggedIn={isLoggedIn}
              changeCheck={changeCheck}
              {...props}
            />
          )}
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
    alignContent: "space-between",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: 20,
  },
});
