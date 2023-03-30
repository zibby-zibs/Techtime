import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Header({}: Props) {

    const [showModal, setShowModal] = useState(false)
    const [activeClass, setActiveClass] = useState('')

    const handleLinkClick = (link:string) => {
        setActiveClass(link);
      };
  return (
    <header className='fixed top-0 left-0 flex w-full justify-between items-center py-5 px-2 pb-2 md:px-11 bg-cobalt-800 text-white z-50'>
        <Link href='#home'>
            <img src="/techtime.png" alt="" className='w-16 md:w-20 cursor-pointer' />
        </Link>

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
            <Link href='#enroll'>
                <li className='bg-white text-cobalt-800 px-3 py-2 font-semibold rounded-lg cursor-pointer animate-pulse'>Enroll Now</li>
            </Link>
        </ul>
        <FiMenu className='md:hidden' onClick={()=>setShowModal(!showModal)}/>
        { showModal && 
            <section className='absolute top-11 h-screen bg-white p-5 right-0 z-50 flex flex-col justify-around pt-0'>
                <ul className=' text-2xl  font-satoshi text-cobalt-900 flex flex-col gap-8' onClick={()=>setShowModal(!showModal)}>
                    <Link href='#home'>
                        <li className={`cursor-pointer ${activeClass === 'home' ? 'border-b-2 border-cobalt-300 font-semibold' : ''}`} onClick={() => handleLinkClick('home')}>
                            Home
                        </li>
                    </Link>
                    <Link href='#about'>
                        <li className={`cursor-pointer ${activeClass === 'about' ? 'border-b-2 border-cobalt-300 font-semibold' : ''}`} onClick={() => handleLinkClick('about')}>
                            About Us
                        </li>
                    </Link>
                    <Link href='#courses'>
                        <li className={`cursor-pointer ${activeClass === 'courses' ? 'border-b-2 border-cobalt-300 font-semibold' : ''}`} onClick={() => handleLinkClick('courses')}>
                            Courses
                        </li>
                    </Link>
                    <Link href='#testimonial'>
                        <li className={`cursor-pointer ${activeClass === 'testimonial' ? 'border-b-2 border-cobalt-300 font-semibold' : ''}`} onClick={() => handleLinkClick('testimonial')}>
                            Testimonial
                        </li>
                    </Link>
                    <Link href='#community'>
                        <li className={`cursor-pointer ${activeClass === 'community' ? 'border-b-2 border-cobalt-300 font-semibold' : ''}`} onClick={() => handleLinkClick('community')}>
                            Community
                        </li>
                    </Link>
                    <Link href='#enroll'>
                        <li className={`cursor-pointer font-semibold ${activeClass === 'enroll' ? 'border-b-2 border-cobalt-300' : ''}`} onClick={() => handleLinkClick('enroll')}>
                            Enroll Now
                        </li>
                    </Link>

                </ul>
                    <footer>
                    <ul className='flex space-x-4 font-light'>
                        <li><SocialIcon url='https://facebook.com'/></li>
                        <li><SocialIcon url='https://twitter.com/talentplusinc/'/></li>
                        <li><SocialIcon url='https://youtube.com'/></li>
                        <li><SocialIcon url='https://instagram.com/TalentPlusInc'/></li>
                        <li><SocialIcon url='https://discord.com'/></li>
                    </ul>
                    </footer>
            </section>
          
        }
    </header>
  )
}

export default Header