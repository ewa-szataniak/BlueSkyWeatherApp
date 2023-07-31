// Importing the functions needed from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW3_Xa_KHZ7cqCrI0TKuqlf-6d-xaCxTg",
  authDomain: "blueskyweatherapp.firebaseapp.com",
  projectId: "blueskyweatherapp",
  storageBucket: "blueskyweatherapp.appspot.com",
  messagingSenderId: "581151477641",
  appId: "1:581151477641:web:b0ad3e8b7ab5f527189b58",
  measurementId: "G-8DMKC70R11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export default app;
