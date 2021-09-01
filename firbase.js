import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAECbqIJDhl17dH0FcQw2bHRdptNmOolW8',
    authDomain: 'todo-native-expo.firebaseapp.com',
    projectId: 'todo-native-expo',
    storageBucket: 'todo-native-expo.appspot.com',
    messagingSenderId: '599204465404',
    appId: '1:599204465404:web:06a2a89a80824929d66579',
};

export default firebase.initializeApp(firebaseConfig);
