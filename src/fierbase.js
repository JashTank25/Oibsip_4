// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCeu7PUkFdQOfaPrGmPftoyt65NXUgGeY",
  authDomain: "loginpage-4ab0e.firebaseapp.com",
  projectId: "loginpage-4ab0e",
  storageBucket: "loginpage-4ab0e.appspot.com",
  messagingSenderId: "1037261654372",
  appId: "1:1037261654372:web:ebb991acf7e90e5efcd271",
  measurementId: "G-KXD3WVNT0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};