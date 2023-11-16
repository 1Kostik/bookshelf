// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCueUsU1d0mcpHAngXb_ZLT9zY8yGpC2NA',
  authDomain: 'book-bd801.firebaseapp.com',
  databaseURL:
    'https://book-bd801-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'book-bd801',
  storageBucket: 'book-bd801.appspot.com',
  messagingSenderId: '728958539605',
  appId: '1:728958539605:web:6d42e4f70f332c7467c1dc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);