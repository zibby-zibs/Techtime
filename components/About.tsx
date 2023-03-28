import Image from 'next/image'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <main className='relative bg-cobalt-50 md:p-16'>
        <section className='w-full flex flex-col md:flex-row justify-between md:mb-28'>
            <article className='flex flex-col items-center md:items-start w-full text-center p-3 space-y-3 md:text-left'>
                <h1 className='font-clash relative text-black text-3xl md:text-5xl font-semibold'>High quality video, audio & live classes</h1>
                <p className='capitalize text-silver-c-800'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                <p className='bg-cobalt-600 p-4 capitalize text-white'>view courses</p>
                <article className='flex flex-col space-y-3 capitalize w-full'>
                    <div className='flex  gap-16 pt-8'>
                        <p className='bg-white p-3 px-5 rounded-lg'>audio classes</p>
                        <p className='bg-white p-3 px-5 rounded-lg'>live classes</p>
                    </div>
                    <div className='flex  gap-16'>
                        <p className='bg-white p-3 px-5 rounded-lg'>recorded classes</p>
                        <p className='bg-white p-3 px-5 rounded-lg'>50+ Notes</p>      
                    </div>
                    
                </article>
            </article>
            <figure className='w-full relative mb-[90%] md:mb-11 '>
                <Image 
                    src={"/laptop-f.png"}
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    className='absolute top-3 right-2 w-[80%] h-auto object-contain '
                />
                <Image 
                    src={"/laptop-f2.png"}
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    className='absolute top-48 left-2 w-[50%] h-auto object-cover border-2 border-cobalt-700 rounded-lg'
                />
            </figure>

        </section>
        <article className='font-satoshi text-center md:text-left flex flex-col md:flex-row items-center md:justify-between space-y-5'>
            <section className='space-y-3 p-3'>
                <h1 className='font-clash capitalize text-4xl md:text-5xl font-semibold'>this is why we are best from others</h1>
                <p className='text-silver-c-600 capitalize md:text-[0.8rem]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                <Image 
                    src={"/laptop-f2.png"}
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    className='left-2 w-full h-auto object-cover rounded-lg'
                />
            </section>
            <section className='flex flex-col w-full text-left p-3 space-y-3 '>
                <aside className='flex justify-between space-x-3'>
                    <div className='bg-white p-3 md:p-5 leading-8 md:leading-9  md:w-80 space-y-3'>
                        <img src="/ex-affordable.png" alt="" />
                        <h1 className='text-black capitalize text-2xl'>experienced mentors</h1>
                        <p className='text-silver-c-600 capitalize md:text-[0.8rem]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>
                    </div>
                    <div className='bg-white p-3 md:p-5 leading-8 md:leading-9  md:w-80 space-y-3'>
                        <img src="/ex-flexible.png" alt="" />
                        <h1 className='text-black capitalize text-2xl'>affordable prices</h1>
                        <p className='text-silver-c-600 capitalize md:text-[0.8rem]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>
                    </div>
                </aside>
                <aside className='flex justify-between space-x-3'>
                    <div className='bg-white p-3 md:p-5 leading-8  md:leading-9 md:w-80 space-y-3'>
                        <img src="/ex-mentor.png" alt="" />
                        <h1 className='text-black capitalize text-2xl'>affordable prices</h1>
                        <p className='text-silver-c-600 capitalize md:text-[0.8rem]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>
                    </div>
                    <div className='bg-white p-3 md:p-5 leading-8 md:leading-9 md:w-80 space-y-3'>
                        <img src="/ex-prices.png" alt="" />
                        <h1 className='text-black capitalize text-2xl'>flexible learning</h1>
                        <p className='text-silver-c-600 capitalize md:text-[0.8rem]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>
                    </div>
                </aside>
                
            </section>
        </article>
    </main>
  )
}

export default About