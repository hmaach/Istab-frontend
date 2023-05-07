import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkG-N8H7ZktUvkdhFa7sHymfdnjLxb6sE",
  authDomain: "twitter-clone-ozngrsc.firebaseapp.com",
  projectId: "twitter-clone-ozngrsc",
  storageBucket: "twitter-clone-ozngrsc.appspot.com",
  messagingSenderId: "401046930670",
  appId: "1:401046930670:web:fc429babbdc5655ae69fff",
  measurementId: "G-KMGXRC6RRK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
