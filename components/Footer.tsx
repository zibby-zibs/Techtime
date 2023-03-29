import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Footer({}: Props) {
  return (
    <main className='font-satoshi p-2 space-y-5 bg-[#000F24] text-white md:flex justify-between'>
        <aside className='space-y-3'>
            <img src="/techtime.png" alt="" className='w-24 md:w-32' />
            <p className='font-light'>Reach out to us on any of our social media networks</p>
            <ul className='flex space-x-4 font-light'>
                <li><SocialIcon url='https://facebook.com'/></li>
                <li><SocialIcon url='https://twitter.com/talentplusinc/'/></li>
                <li><SocialIcon url='https://youtube.com'/></li>
                <li><SocialIcon url='https://instagram.com/TalentPlusInc'/></li>
                <li><SocialIcon url='https://discord.com'/></li>
            </ul>
        </aside>
        <aside>
            <h5 className='text-2xl font-clash font-semibold'>Useful Links</h5>
            <ul className='font-light'>
                <Link href='#home'>
                    <li className='cursor-pointer'>Home</li>
                </Link>
                <Link href='#about'>
                    <li className='cursor-pointer'>About Us</li>
                </Link>
                <Link href='#courses'>
                    <li className='cursor-pointer'>Courses</li>
                </Link>
                <Link href='#testimonial'>
                    <li className='cursor-pointer'>Testimonial</li>
                </Link>
                <Link href='#community'>
                    <li className='cursor-pointer'>Community</li>
                </Link>
            </ul>
        </aside>
        <aside>
            <h5 className='text-2xl font-clash font-semibold'>Community</h5>
            <ul className='font-light'>
                <li className='cursor-pointer'>Help Centers</li>
                <li className='cursor-pointer'>Partners</li>
                <li className='cursor-pointer'>Suggestion</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>Newsletter</li>
            </ul>
        </aside>
        <aside className='text-2xl font-semibold'>
            <h5 className='font-clash'>Subscribe Us</h5>
            <form className='flex items-center'>
                <input type="email" className='bg-silver-c-900 border-2 border-cobalt-700 placeholder:text-[1.2rem] md:placeholder:text-md p-2 w-[70%]' placeholder='example@xyz.com'/>
                <button className='bg-cobalt-700 text-sm p-3 font-light '>Send Message</button>
            </form>
        </aside>
    </main>
  )
}

export default Footer