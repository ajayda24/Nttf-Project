import React from 'react'
import { CgSpinner } from 'react-icons/cg'

export default function Spinner() {
  return (
    <h1 className='flex justify-center items-center gap-2'>
      <p>Loading</p>
      <CgSpinner className='animate-spin  ' />
    </h1>
  )
}
