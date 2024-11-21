// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKTY5jIsU8E1YWxRP9In0fHcK2RbsDhKw",
  authDomain: "next-project-firebase-ch-f464e.firebaseapp.com",
  projectId: "next-project-firebase-ch-f464e",
  storageBucket: "next-project-firebase-ch-f464e.firebasestorage.app",
  messagingSenderId: "940645227790",
  appId: "1:940645227790:web:91dda7688c84a860638b5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
