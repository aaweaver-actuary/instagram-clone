// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

const webClient = {
  id: '676026837461-dg3ppupijqd7kq4ed8n49v3ssrn55on3.apps.googleusercontent.com',
  secret: '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',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

const googleSignIn = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        resolve({ token, user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        reject({ errorCode, errorMessage, email, credential });
      });
  });
};

export { app, googleSignIn };
