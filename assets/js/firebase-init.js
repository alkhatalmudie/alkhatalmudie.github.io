/* ==========================================================================
   FIREBASE INITIALIZATION (App + Database + Analytics + STORAGE)
   ========================================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// NEW: Import Storage Tools
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Your Specific Keys
const firebaseConfig = {
    apiKey: "AIzaSyDT5mqFBwSBea1_5RMXv3_59V4Y5LUy5to",
    authDomain: "al-khat-backend.firebaseapp.com",
    projectId: "al-khat-backend",
    storageBucket: "al-khat-backend.firebasestorage.app", // <-- THE TRUE BUCKET NAME
    messagingSenderId: "310033181926",
    appId: "1:310033181926:web:9a028807fa7c7ab31c5f27",
    measurementId: "G-ZSZJQ55488"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Storage

// Export everything
export { db, analytics, storage, ref, uploadBytes, getDownloadURL, collection, addDoc, doc, getDoc, setDoc };