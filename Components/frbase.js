import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// const app = firebase.initializeApp(firebaseConfig);
const Auth = app.auth();
// firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const toLogin = ({ email, password }) => {
    const { user } = Auth.signInWithEmailAndPassword(email, password);
    return user;
};
// export default firebase.initializeApp(firebaseConfig);
