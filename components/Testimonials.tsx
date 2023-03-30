import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { testimonials } from '../utils/data'

type Props = {}

function Testimonials({}: Props) {

    const [activeIndex, setActiveIndex] = useState(0)

    const handleCircleClick = (index:number) => {
        setActiveIndex(index);
      
      };

  return (
    <main className='bg-cobalt-50 font-satoshi flex flex-col p-3 md:p-5 text-center space-y-8'>
        <article className='flex flex-col items-center capitalize space-y-3'>
            <h1 className='font-clash font-semibold text-xl md:text-4xl'>what our clients are saying</h1>
            <p className='text-silver-c-600'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
        </article>
        <article className='flex overflow-x-auto text-silver-c-600 space-x-2 md:space-x-11 scrollbar-hide'>
            {testimonials.map((testimonial, i)=>{
                return (
                    <div key={i} className='bg-white p-2 flex-shrink-0 w-full max-w-3xl rounded-xl space-y-3'>
                        <p className='text-sm'>{testimonial?.text}</p>
                        <div className='flex gap-2 items-center'>
                            <Image 
                                src={testimonial?.image_src}
                                alt=""
                                height={0}
                                width={0}
                                sizes="100vw"
                                className='w-8 md:w-16 h-auto object-contain'
                            />
                            <div>
                                <p className='text-black capitalize text-sm font-semibold'>{testimonial?.name}</p>
                                <p className='capitalize text-sm'>{testimonial?.title}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </article>
                <div className="w-full flex justify-center">
                    {testimonials.map((testimonial, index) => {
                        return (
                            <div 
                                key={index}
                                onClick={()=>handleCircleClick(index)}
                                className={`w-4 h-4 rounded-full mx-1 cursor-pointer transition-opacity duration-500 ease-in-out ${
                                    index === activeIndex? 'bg-blue-500 opacity-100' : 'bg-gray-400 opacity-50'
                                    }`}
                            >
                                
                            </div>
                        )
                    })}
                </div>
    </main>
  )
}

export default Testimonials