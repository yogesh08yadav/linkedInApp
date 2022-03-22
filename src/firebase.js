// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
// import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4s6meUXFOlBcoJPl_-Id24PXD1_sElwI",
  authDomain: "linkedin-clone-b51d0.firebaseapp.com",
  projectId: "linkedin-clone-b51d0",
  storageBucket: "linkedin-clone-b51d0.appspot.com",
  messagingSenderId: "982414488831",
  appId: "1:982414488831:web:66235d54d36902303308ca",
  measurementId: "G-DPQH34DRDD"
};

// Initialize Firebase
const firebaseApp  = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const analytics = getAnalytics(app);
const auth = firebase.auth();

export {db, auth};