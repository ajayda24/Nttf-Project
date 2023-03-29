import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

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

const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    console.log(user)
    return [false, 'Signed in with google successfully.']
  } catch (err) {
    console.error(err)
    return [true, 'Signed in with google failed.']
  }
}

const signInWithTwitter = async () => {
  signInWithPopup(auth, twitterProvider)
    .then((result) => {
      const user = result.user
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
}

const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider)
    const user = res.user
    console.log(user)
    return [false, 'Signed in with facebook successfully.']
  } catch (err) {
    console.error(err)
    return [true, 'Signed in with facebook failed.']
  }
}

const logout = () => {
  signOut(auth)
}

export { auth, signInWithGoogle, logout, signInWithTwitter, signInWithFacebook }
