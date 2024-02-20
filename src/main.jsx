import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnU5j7PgYRNGZZt6jYtc9uBpjHhrghwmo",
  authDomain: "iwasin.firebaseapp.com",
  projectId: "iwasin",
  storageBucket: "iwasin.appspot.com",
  messagingSenderId: "306558467328",
  appId: "1:306558467328:web:3183e011d89ead7b0307e5"
};

// Initialize Firebase
initializeApp(firebaseConfig); //Por Algún motivo le elimino "const app = "


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
