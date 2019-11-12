// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_uBl_Rqv2QyOOJcn53h7u_al14BS7QeI",
    authDomain: "test-f527b.firebaseapp.com",
    databaseURL: "https://test-f527b.firebaseio.com",
    projectId: "test-f527b",
    storageBucket: "test-f527b.appspot.com",
    messagingSenderId: "942290991939",
    appId: "1:942290991939:web:9e6db2f36412b4ee760df6"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
