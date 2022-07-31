// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
export default db;