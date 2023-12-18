// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDxxHqbp8B6bGZCj82_UkqwpDPSzr3i1z4",
  authDomain: "temple-9583b.firebaseapp.com",
  projectId: "temple-9583b",
  storageBucket: "temple-9583b.appspot.com",
  messagingSenderId: "711928563364",
  appId: "1:711928563364:web:5cda3437e39860e2e24831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db,app}