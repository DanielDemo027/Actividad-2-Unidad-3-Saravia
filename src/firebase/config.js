// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Luhc6PXVInmB1SynJTGxD4lTNBX1pJQ",
  authDomain: "fir-crud-f8050.firebaseapp.com",
  projectId: "fir-crud-f8050",
  storageBucket: "fir-crud-f8050.appspot.com",
  messagingSenderId: "510877616931",
  appId: "1:510877616931:web:601ffba7eef4a6458f9a96",
  measurementId: "G-14KRTN1RZM"
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);