import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail, reauthenticateWithCredential,  updatePassword, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, deleteDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyAUILb_AwBKwKTPlRHVorCiCdHZKwAuxnM",
    authDomain: "ecommerce-store-adb04.firebaseapp.com",
    projectId: "ecommerce-store-adb04",
    storageBucket: "ecommerce-store-adb04.firebasestorage.app",
    messagingSenderId: "155707578335",
    appId: "1:155707578335:web:75f759d22432e3b903566a",
    measurementId: "G-5VTF1X9J55"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {getAuth, auth,  createUserWithEmailAndPassword, doc, setDoc, db, sendEmailVerification, signInWithEmailAndPassword, getDoc,  collection, addDoc, getDocs, deleteDoc, updateDoc, sendPasswordResetEmail ,reauthenticateWithCredential,  updatePassword, EmailAuthProvider };