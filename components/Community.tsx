import Image from 'next/image'
import React from 'react'

type Props = {}

function Community({}: Props) {
  return (
    <main className='p-2 md:p-5 bg-cobalt-800 text-white font-satoshi flex flex-col items-center space-y-5'>
        <article className='text-center space-y-3 max-w-lg text-sm'>
            <p className='uppercase font-light'>join our community</p>
            <h1 className='font-semibold md:text-4xl font-clash text-2xl'>Are you ready to connect with the future talent of the tech world</h1>
            <p className='capitalize font-light text-sm'>meet up with other techstars and grow together</p>
        </article>
        <figure>
            <Image 
                src={"/Frame 209.png"}
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className='w-full h-auto object-contain'
            />
        </figure>
    </main>
  )
}

export default Community