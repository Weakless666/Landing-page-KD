// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATWti-qRpTl39pFfyao9h1y8zzW5sImd0",
  authDomain: "kd-landing-page.firebaseapp.com",
  projectId: "kd-landing-page",
  storageBucket: "kd-landing-page.firebasestorage.app",
  messagingSenderId: "506559380568",
  appId: "1:506559380568:web:e5dcb0d0283af2b3029e2d",
  measurementId: "G-26VC8CS0ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };