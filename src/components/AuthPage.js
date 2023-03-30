import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { logIn } from '@/store/authSlice'

import { GiNestedHexagons } from 'react-icons/gi'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

import loginLogo from '../../public/assets/images/login.svg'

import {
  signInWithGoogle,
  signInWithTwitter,
  signInWithFacebook,
} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function AuthPage() {
  const router = useRouter()
  const dispatch = useDispatch()

  const socialSignUp = async (provider) => {
    let data
    if (provider == 'google') {
      data = await signInWithGoogle()
    } else if (provider == 'facebook') {
      data = await signInWithFacebook()
    } else {
      data = await signInWithTwitter()
    }
    const [error, user, message] = data
    if (!error) {
      dispatch(logIn({ authId: user.accessToken, userId: user.uid }))
      router.push('/dashboard')
    }
  }
  return (
    <div className=' flex justify-center items-center min-h-screen min-w-full bg-[#12141D] relative overflow-x-hidden p-5'>
      <div className='w-full sm:w-80 h-2/3 sm:h-2/4 bg-white/10 text-center text-white p-4 text-xl flex flex-col justify-start shadow-2xl'>
        <h3 className='text-left text-base flex  items-center gap-1 pb-5'>
          <GiNestedHexagons />
          <Link href='/'>AI ULTRA</Link>
        </h3>
        <h3 className='text-lg text-sky-200 px-6'>
          Welcome back you have been missed!
        </h3>
        <Image
          className='mx-auto'
          src={loginLogo}
          alt='Login Logo'
          width={200}
        />
        <button
          className='bg-white shadow-lg font-bold text-black text-base px-6 gap-3 py-2 flex  items-center  rounded-md'
          onClick={() => socialSignUp('google')}
        >
          <FcGoogle size={'1.3rem'} />
          <p> Continue with Google</p>
        </button>
        <button
          className='bg-blue-700 shadow-lg font-bold text-white text-base px-6 gap-3 py-2 flex  items-center mt-5 rounded-md'
          onClick={() => socialSignUp('facebook')}
          id='sign-in-phone'
        >
          <FaFacebook size={'1.5rem'} color='white' />
          <p> Continue with Facebook</p>
        </button>
        <button
          className='shadow-lg font-bold text-white bg-black text-base px-6 gap-3 py-2 flex  items-center mt-5 rounded-md'
          onClick={() => socialSignUp('twitter')}
        >
          <FaTwitter size={'1.5rem'} />
          <p> Continue with Twitter </p>
        </button>
      </div>
    </div>
  )
}
