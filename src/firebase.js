// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-c8dab.firebaseapp.com",
  projectId: "real-estate-c8dab",
  storageBucket: "real-estate-c8dab.appspot.com",
  messagingSenderId: "723786944896",
  appId: "1:723786944896:web:e36d06cfa693bead867165",
  measurementId: "G-1Q9NHTTG2Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);