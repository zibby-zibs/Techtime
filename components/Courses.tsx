import Image from 'next/image';
import {useState} from 'react'
import {courses} from '../utils/data'

type Props = {}
interface Courses {
  id: number;
  category: string;
  course_title: string;
  watch_time: string;
  lesson_no: string;
  image_src: string;
  banner: string
  name: string;
  price: string;
}

function Courses({}: Props) {
    const allCategories = ['All Categories',...new Set(courses?.map(item => item?.category))]
    const [menuItems, setMenuItems] = useState<Courses[]>([]);
    const [categories, setCategories] = useState(allCategories);
    const [activeCategory, setActiveCategory] = useState('All Categories');

    const filterItems = (category: string) => {
        if (category === 'All Categories') {
          setMenuItems(courses);
          return;
        }
        const newItems = courses.filter((item) => item.category === category);
        setMenuItems(newItems);
      };

      const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
      };
    
  return (
    <main className='bg-cobalt-50 w-full flex flex-col justify-between font-satoshi pt-11'>
        <section className='w-full flex flex-col items-center p-3 md:p-5 space-y-5'>
            <h1 className='font-clash text-black font-semibold capitalize text-2xl md:text-4xl'>browse our popular courses</h1>
            <p className='text-silver-c-600 text-center w-[70%] md:w-[50%]'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            <div className="flex space-x-5 capitalize items-center text-silver-c-600 text-sm font-semibold md:text-xl">
              {categories?.map((category, i)=>{
                return (
                  <h1 key={i} className={activeCategory === category ? 'bg-white p-2 rounded-lg text-cobalt-600 transition-all .5s' : ''} onClick={()=>{handleCategoryClick(category), filterItems(category)}}>
                    {category}
                  </h1>
                )
              })}
            </div>
        </section>
        <section className='flex flex-wrap gap-3 justify-center'>
          {menuItems.map((menu)=> {
            return (
              <div key={menu?.id} className='bg-white p-2 py-2 min-w-[45%] max-w-[45%] md:max-w-[5rem] flex flex-col space-y-3'>
                <Image 
                  src={menu?.banner}
                  alt=""
                  height={0}
                  width={0}
                  sizes="100vw"
                  className='w-[100%] md:w-[100%] h-auto object-contain'
                />
                <article className='flex justify-between'>
                  <p className='bg-cobalt-200 text-cobalt-800 px-2 md:px-4 rounded-lg font-semibold text-sm'>{menu?.category}</p>
                  <p>4.7k</p>
                </article>
                <h1 className='capitalize text-sm font-semibold'>{menu?.course_title}</h1>
                <article className='flex justify-between text-[0.75rem]'>
                  <p>{menu?.watch_time}</p>
                  <p>{menu?.lesson_no}</p>
                </article>
                <div className='flex justify-between items-center text-sm'>
                  <div className='flex gap-2'>
                    <Image 
                      src={menu?.image_src}
                      alt=""
                      height={0}
                      width={0}
                      sizes="100vw"
                      className='w-[30%] h-auto object-contain'
                    />
                    <p>{menu?.name}</p>
                  </div>
                  <p>{menu?.price}</p>
                </div>
              </div>
            )
          })}
        </section>
        <button className='bg-cobalt-700 p-4 text-white rounded-lg w-fit mx-auto mt-5' onClick={()=>filterItems('All Categories')}>View Courses</button>
        
    </main>
  )
}

export default Courses