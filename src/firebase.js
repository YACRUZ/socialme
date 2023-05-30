// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZc6rinl8NOv6FgAoj2s1hDVu-s-n1ePM",
  authDomain: "socialme-54935.firebaseapp.com",
  projectId: "socialme-54935",
  storageBucket: "socialme-54935.appspot.com",
  messagingSenderId: "162695506636",
  appId: "1:162695506636:web:71db2979785eee56a1b069"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);


export{
  storage, firestore as default,
  app,
  auth
}