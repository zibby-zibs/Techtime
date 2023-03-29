import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from './Header'
import { frame } from '../utils/data'
import { socials } from '../utils/data'

type Props = {}

function Hero({}: Props) {
  return (
    <>
        <Head>
         <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300&display=swap" rel="stylesheet" />
         <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap" rel="stylesheet"></link>
        </Head>
        <Header />
        <main className='overflow-x-hidden md:pt-11'>
            <section className='relative w-full p-3 pb-0 h-full font-satoshi bg-cobalt-800 flex flex-col justify-center md:flex-row md:justify-between items-center md:px-11 text-white'>
                <aside className='text-center flex flex-col items-center md:w-[40%] space-y-3'>
                    <h1 className='font-clash font-semibold text-3xl md:text-6xl leading-11'>Grow your skills to advance your career path</h1>
                    <p className='capitalize text-md font-light'>build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>

                    <div className='relative flex space-x-3'>
                        <p className='border-2 border-white p-3 rounded-md'>Get started now</p>
                        <p className='p-3 bg-white text-cobalt-800 rounded-md'>Enroll now</p>

                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='flex -space-x-5 hover:space-x-1'>
                            {frame.map((frame)=>{
                                return (
                                    <img key={frame.id} src={frame.link} alt="" />
                                )
                            })}
                        </div>
                        <h3 className='flex flex-col text-xl'>225k+ <span className='text-sm'>previews</span></h3>
                    </div>
                    
                </aside>
                <aside className='relative'>
                    <Image 
                        src={'/hero.png'}
                        alt=""
                        height={0}
                        width={0}
                        sizes="100vw"
                        className='h-full w-full'
                    />
                
                </aside>
            </section>
            <section className='flex w-full justify-center gap-5 md:gap-16 bg-cobalt-100'>
                        {socials.map((social)=>{
                            return (
                                <img key={social.id} src={social.link} alt="" className='h-16 w-16 md:h-36 md:w-36 object-contain'/>
                            )
                        })}
            </section>
        </main>
        
    </>
  )
}

export default Hero