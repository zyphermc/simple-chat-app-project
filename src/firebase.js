import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7rh4km0OJPRCRCTHU-EsSB7FPQIcVP3Y",
  authDomain: "simple-chat-app-68e86.firebaseapp.com",
  projectId: "simple-chat-app-68e86",
  storageBucket: "simple-chat-app-68e86.appspot.com",
  messagingSenderId: "648232000675",
  appId: "1:648232000675:web:b65a3dc8b1c744cd607316",
  measurementId: "G-RY1GVT33RV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
