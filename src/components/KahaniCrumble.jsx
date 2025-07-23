import React, {useState} from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.png'

const images = [img1, img2, img3, img4, img5];

const KahaniCrumble = () => {
    const [selected , setSelected] = useState(null);
  return (
    <>
      <div className='bg-[#050897] w-full overflow-x-hidden'>
        <h1 className='text-white text-2xl font-bold text-center py-10'>
            Kahani Crumble Ki
        </h1>
        <p className='text-white md:px-85 text-left px-4'>
            Who would’ve thought that a simple craving from a university dorm room would turn into 
            Pakistan’s most loved cookie brand?<br className="hidden lg:inline" />
            It all started in the hostel rooms of GIKI Islamabad, where a shared love for baking turned into 
            something bigger. What began as a small countertop stall inside campus soon became the talk of
            the town — or at least the campus! Students, teachers, and staff all fell in love with our soft, 
            gooey cookies.<br className="hidden lg:inline" />
            Back then, Crumble wasn’t a business — it was a homegrown dream. Amma ka oven, doston ka 
            support, aur har cookie mein thoda pyaar zyada. We baked day and night, making each batch 
            with heart (and chocolate chips, of course).<br className="hidden lg:inline" />
            As demand grew, so did our ambition. We took a leap of faith and opened our first official outlet
            in Chaklala Scheme 3, Rawalpindi. That’s where Crumble truly came to life.<br className="hidden lg:inline" />
            Today, Crumble Pakistan delivers joy, warmth, and melt-in-your-mouth cookies across the <br className="hidden lg:inline" />
            nation. From a humble hostel to homes all over Pakistan — this is just the beginning of our story.
        </p>

        <div className='flex justify-center items-center py-16 px-4 relative overflow-x-auto '>
            {images.map((img, index) => (
                <div
                key={index}
                onclick={() => setSelected(index)}
                className={`
                    transition-all duration-300 ease-in-out cursor-pointer relative -ml-16 first:ml-0
                    ${selected === index ? 'z-30 scale-125' : 'z-10  hover:z-20 hover:scale-110'}`}
                    style={{ transitionProperty : 'transfrom, z-inex' }}>
                        <img src={img} alt={'img-${index}'}
                        className='w-[200px] h-[260px] object-cover rounded-xl shadow-xl'/>
                        </div>
                        
            ))}
        </div>
      </div>
    </>
  )
}

export default KahaniCrumble
