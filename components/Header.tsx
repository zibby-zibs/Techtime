import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

type Props = {}

function Header({}: Props) {

  const [showModal, setShowModal] = useState(false)
  return (
    <header className='relative flex w-full justify-between items-center py-5 px-2 md:px-11 bg-cobalt-800 text-white'>
        <h1>
            TechTime
        </h1>

        <ul className='hidden md:flex md:justify-between md:gap-3 font-satoshi md:items-center text-silver-c-300'>
            <Link href='#home'>
                <li className='cursor-pointer hover:text-white'>Home</li>
            </Link>
            <Link href='#about'>
                <li className='cursor-pointer hover:text-white'>About Us</li>
            </Link>
            <Link href='#courses'>
                <li className='cursor-pointer hover:text-white'>Courses</li>
            </Link>
            <Link href='#testimonial'>
                <li className='cursor-pointer hover:text-white'>Testimonial</li>
            </Link>
            <Link href='#community'>
                <li className='cursor-pointer hover:text-white'>Community</li>
            </Link>
            <li className='bg-white text-cobalt-800 px-3 py-2 font-semibold rounded-lg cursor-pointer'>Enroll Now</li>
        </ul>
        <FiMenu className='md:hidden' onClick={()=>setShowModal(!showModal)}/>
        { showModal && 
          <ul className='absolute top-16 space-y-5 p-5 right-0 z-50 bg-silver-c-400 font-satoshi  text-silver-c-300'>
            <Link href='#home'>
                <li className='cursor-pointer hover:text-white'>Home</li>
            </Link>
            <Link href='#about'>
                <li className='cursor-pointer hover:text-white'>About Us</li>
            </Link>
            <Link href='#courses'>
                <li className='cursor-pointer hover:text-white'>Courses</li>
            </Link>
            <Link href='#testimonial'>
                <li className='cursor-pointer hover:text-white'>Testimonial</li>
            </Link>
            <Link href='#community'>
                <li className='cursor-pointer hover:text-white'>Community</li>
            </Link>
            <li className='bg-white text-cobalt-800 px-3 py-2 font-semibold rounded-lg cursor-pointer'>Enroll Now</li>
          </ul>
        }
    </header>
  )
}

export default Header