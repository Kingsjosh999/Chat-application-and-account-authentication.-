import { auth } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

/* =========================
   HELPER – Friendly Errors
========================= */

function getFriendlyErrorMessage(code) {
    const map = {
        // Registration
        "auth/email-already-in-use": "An account already exists with this email.",
        "auth/weak-password": "Password should be at least 6 characters.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/operation-not-allowed": "Email/password accounts are not enabled. Contact support.",
        // Login
        "auth/invalid-credential": "Invalid email or password. Please try again.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password.",
        "auth/too-many-requests": "Too many failed attempts. Please try again later.",
        // General
        "auth/network-request-failed": "Network error. Check your connection.",
    };
    return map[code] || `An error occurred (${code}). Please try again.`;
}

/* =========================
   ELEMENTS
========================= */

const errorElement = document.getElementById("error");

/* =========================
   REGISTER
========================= */

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener("click", async () => {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        errorElement.innerText = "";

        if (password !== confirmPassword) {
            errorElement.innerText = "Passwords do not match";
            errorElement.style.color = "#ef4444";
            return;
        }

        try {

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            await updateProfile(
                userCredential.user,
                { displayName: name }
            );

            alert("Account created successfully!");
            window.location.href = "login.html";

        } catch (error) {
            // Use friendly message based on error code
            errorElement.innerText = getFriendlyErrorMessage(error.code);
            errorElement.style.color = "#ef4444";
        }
    });
}

/* =========================
   LOGIN
========================= */

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", async () => {

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        errorElement.innerText = "";

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Login successful");
            window.location.href = "dashboard.html";

        } catch (error) {
            errorElement.innerText = getFriendlyErrorMessage(error.code);
            errorElement.style.color = "#ef4444";
        }
    });
}