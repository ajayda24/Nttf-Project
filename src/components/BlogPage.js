import aiultra from '../../public/assets/images/aiultra.png'
import whyaiultra from '../../public/assets/images/cyberworld.jpg'
import Image from 'next/image'

export default function BlogPage() {
  return (
    <>
      <div className='flex flex-wrap flex-col sm:flex-row  items-center gap-5 sm:gap-0  min-w-full bg-[#12141D] relative overflow-x-hidden p-3 sm:py-16'>
        <div className='rounded-md h-1/2 w-full md:w-1/2 bg-[#12141D]'>
          <div className='flex gap-1 items-baseline justify-center'>
            <h1 className='text-center text-white  font-extrabold text-xl sm:text-2xl'>
              What is{' '}
            </h1>
            <h1 className='text-center font-extrabold text-transparent text-3xl sm:text-4xl bg-clip-text bg-gradient-to-l from-[#FFC947] to-[#FC6739] p-4 '>
              AI Ultra
            </h1>
          </div>
          <div className='text-white p-3 sm:px-12 flex flex-col gap-5'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              accusamus voluptates omnis enim id, repellat debitis incidunt
              libero fugit sequi!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              accusamus voluptates omnis enim id, repellat debitis incidunt
              libero fugit sequi!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              accusamus voluptates omnis enim id, repellat debitis incidunt
              libero fugit sequi!
            </p>
          </div>
        </div>
        <div className='rounded-md h-fit w-full p-2 md:w-1/2 bg-[#282A37] flex justify-center items-center'>
          <Image alt='Image of ailutra website.' src={aiultra} />
        </div>
      </div>
      <div className='flex flex-wrap flex-col sm:flex-row  items-center gap-5 sm:gap-0  min-w-full bg-[#12141D] relative overflow-x-hidden p-3 sm:py-16'>
        <div className='rounded-md h-fit w-full p-2 md:w-1/2 bg-[#282A37] '>
          <Image alt='Image of ailutra website.' src={whyaiultra} width={500} />
        </div>
        <div className='rounded-md h-1/2 w-full md:w-1/2 bg-[#12141D]'>
          <div className='flex gap-1 items-baseline justify-center'>
            <h1 className='text-center text-white  font-extrabold text-xl sm:text-2xl'>
              Why{' '}
            </h1>
            <h1 className='text-center font-extrabold text-transparent text-3xl sm:text-4xl bg-clip-text bg-gradient-to-l from-[#FFC947] to-[#FC6739] p-4 '>
              AI Ultra
            </h1>
          </div>
          <div className='text-white p-3 sm:px-12 flex flex-col gap-5'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              accusamus voluptates omnis enim id, repellat debitis incidunt
              libero fugit sequi!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              accusamus voluptates omnis enim id, repellat debitis incidunt
              libero fugit sequi!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              accusamus voluptates omnis enim id, repellat debitis incidunt
              libero fugit sequi!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
