import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var app = firebase.initializeApp({
    apiKey: "AIzaSyD3ZAGglpIXheEuryFUycfGEjRa5Je96p0",
    authDomain: "e-commerce-toy-db.firebaseapp.com",
    databaseURL: "https://e-commerce-toy-db.firebaseio.com",
    projectId: "e-commerce-toy-db",
    storageBucket: "e-commerce-toy-db.appspot.com",
    messagingSenderId: "420768695577",
    appId: "1:420768695577:web:01060c6d232ce472737188",
    measurementId: "G-2HVD16N690"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
