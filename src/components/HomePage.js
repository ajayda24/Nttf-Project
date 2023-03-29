import Image from 'next/image'
import HomePageImage from '../../public/assets/images/HomePage.png'
import { GiNestedHexagons } from 'react-icons/gi'

export default function HomePage() {
  return (
    <div className='min-h-screen min-w-full bg-[#12141D] relative overflow-x-hidden'>
      <nav className='flex justify-between items-center text-white p-8 px-8 sm:px-16'>
        <ul className='flex gap-14 items-center'>
          <li className='font-medium flex items-center justify-evenly gap-3'>
            <GiNestedHexagons />
            <a href='#'>AI ULTRA</a>
          </li>
          <li className='font-extralight text-sm text-[#e0e0e0] hidden md:block'>
            About
          </li>
          <li className='font-extralight text-sm text-[#e0e0e0] hidden md:block'>
            Blog
          </li>
        </ul>
        <ul className='flex gap-10'>
          <li>
            <a
              href='#'
              className='rounded-md p-2 px-6 text-xs bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] '
            >
              Sign In
            </a>
          </li>
        </ul>
      </nav>

      <h2 className='text-center text-white font-extrabold text-4xl sm:text-5xl pt-8 px-4'>
        Focus on what <br /> you think
      </h2>
      <h3 className='text-center font-extrabold text-transparent text-3xl sm:text-4xl bg-clip-text bg-gradient-to-l from-[#FFC947] to-[#FC6739] p-4 '>
        <a
          href='#'
          className='bg-gradient-to-r from-[#FFC947] to-[#FC6739] bg-[length:100%_1px] bg-no-repeat bg-bottom'
        >
          Transformation is a magic
        </a>
      </h3>
      <h5 className='text-center text-[#e0e0e0] block '>
        Let&apos;s transform your ideas and thoughts into images using the power
        of AI
      </h5>
      <div className='mx-auto block w-fit m-5  text-xs text-white'>
        <a
          href='#'
          className='rounded-md p-2 px-6 bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] '
        >
          Explore Now
        </a>
      </div>
      <Image
        alt='Image of Artificial Intelligence.'
        src={HomePageImage}
        width={300}
        className='mx-auto my-16'
      />

      <div className='w-72 h-72 blur-3xl rounded-full bg-[#A930FE]/10 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
      <div className='w-48 h-48 blur-3xl rounded-full bg-[#FC743A]/10 absolute top-2/3 left-10 transform -translate-x-1/2 -translate-y-1/2'></div>
      <div className='w-48 h-48 blur-3xl rounded-full bg-[#F9BC52]/10 absolute top-2/3 -right-36 transform -translate-x-1/2 -translate-y-1/2'></div>
      <div className='w-48 h-48 blur-3xl rounded-full bg-[#f00]/10 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
    </div>
  )
}
