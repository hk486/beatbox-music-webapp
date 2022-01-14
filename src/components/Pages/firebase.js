// import firebase from 'firebase/compat/app';
// Other libraries might need to also be prefixed with "compat":
// import "firebase/compat/auth";
// import firebase from 'firebase/app';
// import 'firebase/firestore';
import { firebase } from '@firebase/app';
import '@firebase/firestore'
import '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDasWpvAGOnc5Lr7nRBf2YWyvE0BBg1dj0",
  authDomain: "beat-box-25ec2.firebaseapp.com",
  projectId: "beat-box-25ec2",
  storageBucket: "beat-box-25ec2.appspot.com",
  messagingSenderId: "719986493208",
  appId: "1:719986493208:web:222c8aff229f91d8f2c06d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider};