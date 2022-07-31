// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDopuWyrhwlvnzGsStvN7_fl4oV745kPVE",
  authDomain: "twitter-clone-38cd0.firebaseapp.com",
  projectId: "twitter-clone-38cd0",
  storageBucket: "twitter-clone-38cd0.appspot.com",
  messagingSenderId: "577043902562",
  appId: "1:577043902562:web:e4eb4810984b7ed3d5613b"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
export default db;