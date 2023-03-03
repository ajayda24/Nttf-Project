import aiultra from '../../public/assets/images/ai.webp'
import whyaiultra from '../../public/assets/images/cyberworld.jpg'
import Image from 'next/image'

export default function BlogPage() {
  return (
    <div className=''>
      <BlogComponent title='Features' imageLeft={true} />
      <BlogComponent title='Tech' imageLeft={false} />
    </div>
  )
}

export function BlogComponent({ title, imageLeft }) {
  return (
    <div
      className={`flex flex-wrap flex-col ${
        imageLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
      }  justify-around items-center gap-5 sm:gap-0  min-w-full bg-[#12141D] relative overflow-x-hidden p-3 sm:px-16 sm:py-16`}
    >
      <div className='rounded-md h-1/2 w-full md:w-2/5 bg-[#12141D]'>
        <div className='flex gap-1 items-baseline justify-center'>
          <h1 className='text-center text-white  font-extrabold text-xl sm:text-2xl'>
            <span className='text-3xl sm:text-4xl'>O</span>ur{' '}
          </h1>
          <h1 className='text-center font-extrabold text-transparent text-3xl sm:text-4xl bg-clip-text bg-gradient-to-l from-[#FFC947] to-[#FC6739] p-4 '>
            {title}
          </h1>
        </div>
        <div className='text-white text-base sm:text-lg p-3 sm:px-12 flex flex-col gap-5'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            accusamus voluptates omnis enim id, repellat debitis incidunt libero
            fugit sequi!
          </p>
        </div>
      </div>
      <div className='rounded-md h-fit w-full p-2 md:w-fit bg-[#282A37] '>
        <Image alt='Image of ailutra website.' src={aiultra} />
      </div>
    </div>
  )
}
