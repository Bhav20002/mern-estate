// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-c245e.firebaseapp.com",
    projectId: "mern-estate-c245e",
    storageBucket: "mern-estate-c245e.appspot.com",
    messagingSenderId: "1030535073984",
    appId: "1:1030535073984:web:ac9d7ce549710493181d25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);