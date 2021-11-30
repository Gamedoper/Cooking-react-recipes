import firebase from "firebase/app";
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyC71OAnTKtJfECW4fzTejWXJqACwIpL8r0",
    authDomain: "cooking-recipes-f36c7.firebaseapp.com",
    projectId: "cooking-recipes-f36c7",
    storageBucket: "cooking-recipes-f36c7.appspot.com",
    messagingSenderId: "1044429256879",
    appId: "1:1044429256879:web:429f2090da4815e50bfc5a"
};



// init FIrebase

firebase.initializeApp(firebaseConfig);


// init Firestore

const projectFirestore = firebase.firestore();

export { projectFirestore };