// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcNY7j3FFwN2bNWV8pr4ttQmCQWZsDeQ0",
  authDomain: "skillfactory-3e03c.firebaseapp.com",
  projectId: "skillfactory-3e03c",
  storageBucket: "skillfactory-3e03c.appspot.com",
  messagingSenderId: "637375015787",
  appId: "1:637375015787:web:15786ffab43f770df8fa2e",
  measurementId: "G-0N028YVV4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getFirestore(app);
