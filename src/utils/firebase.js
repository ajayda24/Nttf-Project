import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBSPvkBWC2KaaDsLn_jhS5ytaZOMjf2BLE',
  authDomain: 'nttf-project.firebaseapp.com',
  projectId: 'nttf-project',
  storageBucket: 'nttf-project.appspot.com',
  messagingSenderId: '718829558450',
  appId: '1:718829558450:web:9f3951ae83a27057b1c7ab',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
