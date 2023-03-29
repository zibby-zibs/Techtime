import {useState} from 'react'
import {faq} from '../utils/data'
import {AiOutlineMinus, AiOutlinePlus} from  'react-icons/ai'

type Props = {}

function Enroll({}: Props) {

    const [modalVisibility, setModalVisibility] = useState(Array(faq.length).fill(false));

    const handleModalToggle = (index: number) => {
        setModalVisibility(
          modalVisibility.map((_, i) => (i === index ? !modalVisibility[index] : false))
        );
      };
  return (
    <main className='flex flex-col items-center space-y-5 font-satoshi p-2 md:p-24'>
        <article className='w-full text-center capitalize flex flex-col items-center max-w-3xl'>
            <h1 className='text-2xl font-clash font-semibold md:text-4xl'>frequently asked questions</h1>
            <p className='text-silver-c-700 text-[0.75rem]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
        </article>

        <article className='w-full transition-all ease-in-out .4s space-y-3'>
            {faq.map((faq, index)=>{
                return (
                    <div key={faq.id}>
                        <h1 className={`flex justify-between font-semibold text-xl md:text-xl capitalize py-5  border-t-[1px] border-silver-c-600 ${modalVisibility[index] ? 'text-cobalt-700' : ''}`}>{faq.title} <span>{modalVisibility[index] ? <AiOutlineMinus onClick={() => handleModalToggle(index)} /> : <AiOutlinePlus  onClick={() => handleModalToggle(index)} />}</span>
                        </h1>
                        {modalVisibility[index] && 
                            <p className={`mt-2 text-silver-c-700 ${modalVisibility ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-1000 ease-in-out overflow-hidden`}>{faq.answer}</p>
                        }
                    </div>
                )
            })}
        </article>
    </main>
  )
}

export default Enroll