import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

import { getStorage } from "firebase/storage";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  providerGoogle,
  providerFacebook,
  providerGithub,
  db,
  database,
  storage,
};
