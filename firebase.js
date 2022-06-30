import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVey5tYUCrfLjTHnSFoMJWClb1cDHeKDQ",
  authDomain: "uber-clone-19a8e.firebaseapp.com",
  projectId: "uber-clone-19a8e",
  storageBucket: "uber-clone-19a8e.appspot.com",
  messagingSenderId: "680872775499",
  appId: "1:680872775499:web:0d937431048781ae6ce2ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
