// assets/js/global-auth.js

import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDT5mqFBwSBea1_5RMXv3_59V4Y5LUy5to",
    authDomain: "al-khat-backend.firebaseapp.com",
    projectId: "al-khat-backend",
    storageBucket: "al-khat-storage-doha",
    messagingSenderId: "310033181926",
    appId: "1:310033181926:web:9a028807fa7c7ab31c5f27"
};

// Tactical Check: Only initialize if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

// 1. THE RADAR: SCAN FOR ACTIVE IDENTITIES GLOBALLY
onAuthStateChanged(auth, (user) => {
    const profileSection = document.getElementById('user-profile-section');
    const displayName = document.getElementById('user-display-name');
    const sideMenuAuth = document.querySelector('.auth-buttons'); 

    // Safety check in case a page doesn't have the header
    if (profileSection) {
        if (user) {
            // Agent Detected -> Unhide Orb, Inject Name
            profileSection.classList.add('active');
            
            // Easter Egg: Check if it's the Alpha Admin
            if(user.uid === "EOQEt04azKTTWcmNXVtpgSVsRxt2") {
                if(displayName) displayName.innerText = "COMMANDER";
                const orb = profileSection.querySelector('.user-orb');
                if(orb) {
                    orb.style.background = "var(--brand-magenta)";
                    orb.style.color = "white";
                    orb.style.borderColor = "var(--brand-magenta)";
                }
            } else {
                if(displayName) displayName.innerText = user.displayName || "Agent";
            }

            // Hide the "Log In / Sign Up" buttons in the side menu
            if(sideMenuAuth) sideMenuAuth.style.display = 'none';

        } else {
            // Civilian Detected -> Hide Orb
            profileSection.classList.remove('active');
            if(sideMenuAuth) sideMenuAuth.style.display = 'flex';
        }
    }
});

// 2. GLOBAL LOGOUT PROTOCOL
window.handleLogout = function() {
    signOut(auth).then(() => {
        window.location.href = "index.html"; // Always bounce back to home on logout
    });
};

// 3. SECRET ALPHA COMMAND BACKDOOR (HOTKEY)
document.addEventListener('keydown', (e) => {
    // Trigger: Ctrl + Shift + A
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        const user = auth.currentUser;
        if (user && user.uid === "EOQEt04azKTTWcmNXVtpgSVsRxt2") {
            console.log("> Alpha Command Override Initiated...");
            window.location.href = "alpha.html";
        }
    }
});