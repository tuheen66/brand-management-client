// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDywekNrdCb5PHYWGwjBNTLGTAEydicT00",
  authDomain: "brand-management-client.firebaseapp.com",
  projectId: "brand-management-client",
  storageBucket: "brand-management-client.appspot.com",
  messagingSenderId: "639090416420",
  appId: "1:639090416420:web:a41adb326c458bec79f1b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;