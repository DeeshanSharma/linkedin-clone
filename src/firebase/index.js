import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCuQKv7jHTBhlbaz67_JC01QTlIcP3bKVc",
    authDomain: "linkedout-358a2.firebaseapp.com",
    projectId: "linkedout-358a2",
    storageBucket: "linkedout-358a2.appspot.com",
    messagingSenderId: "626431839505",
    appId: "1:626431839505:web:32021e25db5c2527b290b0",
    measurementId: "G-112CGB8CS0"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
