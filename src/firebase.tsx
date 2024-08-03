import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAxKv3OC1_MXliy9YQwQCaZYgdQWnJCAKc',
  authDomain: 'scissor-main.firebaseapp.com',
  projectId: 'scissor-main',
  storageBucket: 'scissor-main.appspot.com',
  messagingSenderId: '974354088868',
  appId: '1:974354088868:web:a6674199c2aaae0d3e3731',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, firestore, auth };
