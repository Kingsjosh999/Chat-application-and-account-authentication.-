import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAj4NF-7B-lKIcWrsbX1JhxhxFyuibT7EY",
  authDomain: "chat-5bb6e.firebaseapp.com",
  projectId: "chat-5bb6e",
  storageBucket: "chat-5bb6e.firebasestorage.app",
  messagingSenderId: "952294939368",
  appId: "1:952294939368:web:ff2c8c78504000bc82075d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);