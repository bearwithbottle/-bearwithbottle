import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/firestore";
const firebaseConfig = {};
const provider = new GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export { db, provider };
