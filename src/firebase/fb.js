
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBotUz3oLzPTbBoVS4GKoCCZdNvA0ydWCE",
  authDomain: "expense-split-3998e.firebaseapp.com",
  projectId: "expense-split-3998e",
  storageBucket: "expense-split-3998e.appspot.com",
  messagingSenderId: "992404134232",
  appId: "1:992404134232:web:bfe8305fff9e56573c2d2d",
  measurementId: "G-DLJ92TYB45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app