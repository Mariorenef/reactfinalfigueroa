import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { config } from "../../config/config";

console.log(config.apiKey);

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Verificación de inicialización
console.log("Firebase app initialized:", app);
console.log("Firestore initialized:", db);
console.log("Auth initialized:", auth);
console.log("Analytics initialized:", analytics);
console.log("Firestore initialized:", db);

export { db, auth, provider };
