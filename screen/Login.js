import Expo from "expo";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import * as firebase from "firebase";
import { AuthContext } from "../Components/context";
const { signInWithGoogleAsync } = React.useContext(AuthContext);

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeID = (text) => {
    setEmail(text);

    console.log(email);
  };
  const onChangePW = (text) => {
    setPassword(text);

    console.log(password);
  };

  const onLoginBtnClick = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {});
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
            <TextInput
              name="email"
              autoCorrect={false}
              autoCapitalize="none"
              style={Styles.EmailPwInput}
              onChangeText={onChangeID}
            />
          </KeyboardAvoidingView>
        </View>
        <View style={Styles.PwContent}>
          <Text style={Styles.EmailPwText}>Password</Text>
          <KeyboardAvoidingView style={Styles.taskarea}>
            <TextInput
              name="password"
              autoCorrect={false}
              autoCapitalize="none"
              style={Styles.EmailPwInput}
              onChangeText={onChangePW}
            />
          </KeyboardAvoidingView>
        </View>
        <View style={Styles.LoginRegister}>
          <TouchableOpacity
            onPress={() => {
              onLoginBtnClick();
            }}
          >
            <View style={Styles.LoginBtn}>
              <Text style={Styles.LoginText}>로그인</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.RegisterBtn}>
              <Text style={Styles.RegisterText}>회원가입</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.anotherLogin}>
          <View>
            <TouchableOpacity
              onPress={() => {
                signInWithGoogleAsync(navigation);
              }}
            >
              <View style={Styles.WithAnother}>
                {/*<Image*/}
                {/*  source={require("../assets/google.png")}*/}
                {/*  style={styles.googleIcon}*/}
                {/*/>*/}
                <Text style={Styles.WithAnotherText}>Continue with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Styles.WithAnother}>
                <Text style={Styles.WithAnotherText}>Continue with Github</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    marginTop: "45%",
    marginBottom: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 30,
  },
  EmailContent: {
    marginLeft: "10%",
    marginTop: "5%",
  },
  EmailPwText: {
    marginLeft: "3%",
    marginBottom: "1%",
    fontSize: 16,
  },
  EmailPwInput: {
    paddingHorizontal: 20,
    width: "90%",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 45,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    shadowRadius: 2,
    shadowColor: "#c0c0c0",
    fontSize: 18,
  },
  PwContent: {
    marginLeft: "10%",
    marginTop: "5%",
  },
  taskarea: {
    height: "10%",
  },

  LoginRegister: {
    marginTop: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  LoginBtn: {
    marginHorizontal: 10,
    width: "90%",
    borderRadius: 15,
    height: 45,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#c0c0c0",
    shadowRadius: 2,
    shadowColor: "#c0c0c0",
    backgroundColor: "#fff",
    alignContent: "center",
    alignItems: "center",
  },
  LoginText: {
    fontSize: 15,
    marginHorizontal: 50,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  RegisterBtn: {
    marginHorizontal: 10,
    width: "90%",
    borderRadius: 15,
    height: 45,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#c0c0c0",
    shadowRadius: 2,
    shadowColor: "#c0c0c0",
    backgroundColor: "#fff",
    alignContent: "center",
    alignItems: "center",
  },
  RegisterText: {
    fontSize: 15,
    marginHorizontal: 48,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  anotherLogin: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  WithAnother: {
    marginTop: 30,
    marginHorizontal: 70,
    width: 250,
    borderRadius: 15,
    height: 40,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#c0c0c0",
    shadowRadius: 2,
    justifyContent: "space-around",
    shadowColor: "#c0c0c0",
    backgroundColor: "#fff",
    alignContent: "center",
    alignItems: "center",
  },
  WithAnotherText: {
    fontSize: 15,
    marginHorizontal: 30,
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
});

export default Login;
