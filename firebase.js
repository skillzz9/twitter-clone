// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPRq42wN_Mg5mtuibSGPVjhe2F9IlrWSQ',
  authDomain: 'twitter-clone-23982.firebaseapp.com',
  projectId: 'twitter-clone-23982',
  storageBucket: 'twitter-clone-23982.appspot.com',
  messagingSenderId: '1046862154028',
  appId: '1:1046862154028:web:84b301b7ab2f485d0c4489',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
