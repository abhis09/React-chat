// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2IBtqqEy68w312bjNrcRETKyMpXff4iA",
  authDomain: "react-chat-535ad.firebaseapp.com",
  projectId: "react-chat-535ad",
  storageBucket: "react-chat-535ad.appspot.com",
  messagingSenderId: "800340697941",
  appId: "1:800340697941:web:f5738df751e59d661ac5dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);