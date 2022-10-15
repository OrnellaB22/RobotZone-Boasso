// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDri0SjJ0Ydc5GrwsEYGCPI1E6s8dKnFt0",
  authDomain: "robotzone-boasso.firebaseapp.com",
  projectId: "robotzone-boasso",
  storageBucket: "robotzone-boasso.appspot.com",
  messagingSenderId: "800089528326",
  appId: "1:800089528326:web:b6422f0fbb340d129f8b87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
