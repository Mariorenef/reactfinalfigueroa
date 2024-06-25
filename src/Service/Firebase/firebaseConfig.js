
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { config } from "../../config/config.js";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCycqxm8-QFm8J3JSP6hCCeyqdIvO4hh2A",
    authDomain: "proyecto-final-coderhous-270ae.firebaseapp.com",
    projectId: "proyecto-final-coderhous-270ae",
    storageBucket: "proyecto-final-coderhous-270ae.appspot.com",
    messagingSenderId: "201855426671",
    appId: "1:201855426671:web:fa340e129431cb1e00ed9a",
    measurementId: "G-ENL5FKWQHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db };