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

const fbSignUp = async (email, password, url) => { 
  try {
    auth.createUserWithEmailAndPassword(email, password)
    .then(firebaseUser => {
      db.collection("users").add({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        url: url
      });
      return firebaseUser;
    })
    .catch(function(error) {
      alert(error)
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

const fbSignIn = async (email, password) => {
  try {
    auth.signInWithEmailAndPassword(email, password)
    .then(firebaseUser => {
      db.collection("users")
      .where("uid", "==", firebaseUser.uid)
      .get()
      .then(userInfo => userInfo)
    })  
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

const fbSignOut = () => {
  auth.signOut();
}

const saveReportToDB = (uid, reportData) => {
  try {
    db.collection("reports").add({
      uid: uid,
      report: reportData
    });
  } catch(err) {
    console.error(err);
    alert(err);
  }
}

const getReportsByUid = async (uid) => {
  db.collection('reports')
  .where("uid", "==", uid)
  .get()
  .then(querySnapshot => {
    const reports = [];
    querySnapshot.forEach(doc => {
      reports.push({
        ...doc.data()
      });
    });
    return reports;
  })
  .catch(err => {
    console.log(err);
  })
}

export { auth, fbSignIn, fbSignUp, fbSignOut, saveReportToDB, getReportsByUid };
export default db;