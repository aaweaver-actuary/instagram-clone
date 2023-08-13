// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBBMszUylyr-YDagx8tknqRbAUw9ToVGLg',
  authDomain: 'andy-gram.firebaseapp.com',
  projectId: 'andy-gram',
  storageBucket: 'andy-gram.appspot.com',
  messagingSenderId: '676026837461',
  appId: '1:676026837461:web:a8058c4907bf866ce3f55c',
  measurementId: 'G-VQBM9VF8P3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
