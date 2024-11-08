// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXUC-65Gn_fhiZZQjYfO5koi8QQefBWAQ",
  authDomain: "photofolio-cb51c.firebaseapp.com",
  projectId: "photofolio-cb51c",
  storageBucket: "photofolio-cb51c.firebasestorage.app",
  messagingSenderId: "358376845302",
  appId: "1:358376845302:web:daf190f4068518ab4b61d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);