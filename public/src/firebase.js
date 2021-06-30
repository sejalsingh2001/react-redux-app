import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBy6ChZmlw-qiGZQjuX5a3m2UwvmODZbr4",
  authDomain: "queue-ae261.firebaseapp.com",
  projectId: "queue-ae261",
  storageBucket: "queue-ae261.appspot.com",
  messagingSenderId: "81531559743",
  appId: "1:81531559743:web:46bcde20fbbacc8338fd8a",
  measurementId: "G-DCXEC06GBW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
