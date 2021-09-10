import React, {Component} from "react";
import {View, StyleSheet, ActivityIndicator} from "react-native";
import *as firebase from "firebase";

class LoadingScreen extends Component{

    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn =() => {
        firebase.auth().onAuthStateChanged( (user)=>
        {
            if(user){
                this.props.navigation.navigate('login');
            }else{
                this.props.navigation.navigate('Home');

            }
        })
    }
}