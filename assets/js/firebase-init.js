/* ==========================================================================
   FIREBASE INITIALIZATION (THE BRIDGE)
   Connects Al-Khat Al-Mudi to Google Cloud
   ========================================================================== */

// 1. Import the specific tools we need (App + Database + Analytics)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    doc, 
    getDoc, 
    setDoc 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. Your Specific Keys (Direct from your console)
const firebaseConfig = {
    apiKey: "AIzaSyDT5mqFBwSBea1_5RMXv3_59V4Y5LUy5to",
    authDomain: "al-khat-backend.firebaseapp.com",
    projectId: "al-khat-backend",
    storageBucket: "al-khat-backend.firebasestorage.app",
    messagingSenderId: "310033181926",
    appId: "1:310033181926:web:9a028807fa7c7ab31c5f27",
    measurementId: "G-ZSZJQ55488"
};

// 3. Start the Engine
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Tracking
const db = getFirestore(app);        // Database (The King)

// 4. Export these tools so checkout.html and invoice.html can use them
export { db, analytics, collection, addDoc, doc, getDoc, setDoc };