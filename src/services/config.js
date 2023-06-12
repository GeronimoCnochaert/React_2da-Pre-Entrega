// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6yVNYBFpTZq9Q0D_ptvHsiXbTP1AN89Q",
  authDomain: "tienda-gero-bestshop.firebaseapp.com",
  projectId: "tienda-gero-bestshop",
  storageBucket: "tienda-gero-bestshop.appspot.com",
  messagingSenderId: "628583050708",
  appId: "1:628583050708:web:f7cb0cfd87353bd3657a41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);