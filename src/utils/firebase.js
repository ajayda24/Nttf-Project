import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APP_KEY,
  authDomain: "nttf-project.firebaseapp.com",
  projectId: "nttf-project",
  storageBucket: "nttf-project.appspot.com",
  messagingSenderId: "718829558450",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
