import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQ7mat4qK-hjRpk03YqXERov7m9X5zHj4",
  authDomain: "jobtrack-ca7e7.firebaseapp.com",
  projectId: "jobtrack-ca7e7",
  storageBucket: "jobtrack-ca7e7.appspot.com",
  messagingSenderId: "485463485824",
  appId: "1:485463485824:web:432b4742922c5b45cae565",
  measurementId: "G-HLFZFXXSPW",
};
// Initialize Firebase
firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const increment = (count: number) => {
  return firebase.firestore.FieldValue.increment(count);
};

const storage = firebase.storage();

export { firebase, db, auth, timestamp, increment, storage };
