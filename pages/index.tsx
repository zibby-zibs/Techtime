import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Courses from '@/components/Courses'
import Testimonials from '@/components/Testimonials'
import Community from '@/components/Community'
import Enroll from '@/components/Enroll'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Techtime</title>
        <meta name="description" content="An e-learning platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overflow-x-hidden'>
        <section id='home' className='z-20'>
          <Hero />
        </section>
        <section id='about' className='z-20'>
          <About />
        </section>
        <section id='courses' className='z-20'>
          <Courses />
        </section>
        <section id='testimonial' className='z-20'>
          <Testimonials />
        </section>
        <section id='community' className='z-20'>
          <Community />
        </section>
        <section id='enroll' className='z-20'>
          <Enroll/>
        </section>
        <section>
          <Footer />
        </section>
        
        
        
        
        
        
        
        
      </main>
    </>
  )
}
