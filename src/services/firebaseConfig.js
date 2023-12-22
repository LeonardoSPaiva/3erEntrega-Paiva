import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAeiqAw0gUygE1AynJE8tedsUfhZ6QLVHU",
    authDomain: "proyecto-bfb16.firebaseapp.com",
    databaseURL: "https://proyecto-bfb16-default-rtdb.firebaseio.com",
    projectId: "proyecto-bfb16",
    storageBucket: "proyecto-bfb16.appspot.com",
    messagingSenderId: "17307115874",
    appId: "1:17307115874:web:006b4eb4670cf65b6a4c3b",
    measurementId: "G-E0D5C6HK1X"
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)