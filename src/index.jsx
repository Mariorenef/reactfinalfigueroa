import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCycqxm8-QFm8J3JSP6hCCeyqdIvO4hh2A",
  authDomain: "proyecto-final-coderhous-270ae.firebaseapp.com",
  projectId: "proyecto-final-coderhous-270ae",
  storageBucket: "proyecto-final-coderhous-270ae.appspot.com",
  messagingSenderId: "201855426671",
  appId: "1:201855426671:web:fa340e129431cb1e00ed9a",
  measurementId: "G-ENL5FKWQHW"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);