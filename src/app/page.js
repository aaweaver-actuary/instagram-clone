'use client';
import PrimaryButton from './components/PrimaryButton.component';
import SecondaryButton from './components/SecondaryButton.component';

import { googleSignIn } from '../firebase-web-app';

export default function Home() {
  const handleSignUp = () => {
    console.log('Sign up with Google');
  };

  const handleSignIn = () => {
    googleSignIn()
      .then((data) => {
        // Handle success
        console.log('User signed in', data.user);
      })
      .catch((error) => {
        // Handle error
        console.error('Sign-in error', error);
      });
  };

  return (
    <section
      className={`
      flex flex-col items-center justify-center
      h-screen w-screen
    `}
    >
      <h1>andy-gram</h1>
      <div className="flex flex-col items-center justify-center">
        <PrimaryButton onClick={handleSignUp} style={{ marginBottom: '1rem' }}>
          Sign up with Google
        </PrimaryButton>
        <SecondaryButton onClick={handleSignIn} style={{ marginTop: '10px' }}>
          Sign in with Google
        </SecondaryButton>
      </div>
    </section>
  );
}
