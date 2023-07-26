import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBVVl2DxQswWw5F1MKzjl7tgoS1j6dUfGM",
  authDomain: "barewithbottle.firebaseapp.com",
  projectId: "barewithbottle",
  storageBucket: "barewithbottle.appspot.com",
  messagingSenderId: "975681050295",
  appId: "1:975681050295:web:5049477c5f2ac53746df32",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider();
const db = getFirestore(app);
export { auth, providerGoogle, providerFacebook, providerGithub, db, database };
