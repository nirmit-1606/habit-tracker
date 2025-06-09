// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsv_-kc7uS9DE6YZQUoagdISswOdF-LaY",
  authDomain: "habit-tracker-dd506.firebaseapp.com",
  projectId: "habit-tracker-dd506",
  storageBucket: "habit-tracker-dd506.firebasestorage.app",
  messagingSenderId: "1007983228080",
  appId: "1:1007983228080:web:b22911505a0fd9fd077775",
  measurementId: "G-KZ039SFEVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;