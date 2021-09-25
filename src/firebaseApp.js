import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = app.auth();
const db = firebase.firestore();

const fbSignUp = async (email, password) => { 
  try {
    const res = auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      authProvider: "local",
      email
    });
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

const fbSignIn = async (email, password) => {
  try {
    const res = auth.signInWithEmailAndPassword(email, password);
    const user = res.user;
    console.log("fbSignIn user: ", user);
    const userInfo = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    console.log("fbSignIn userInfo: ", userInfo);
    return userInfo;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

export { auth, fbSignIn, fbSignUp };
export default db;