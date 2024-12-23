/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>

        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-start items-start gap-6'>

          <p className='font-semibold text-x1 text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Krishna Nagar Mathura <br /> Mathura, Uttarpradesh </p>
          <p className='text-gray-500'>Tel: (+91) 8272825651 <br /> Email:Forever@gmail.com </p>
          <p className='text-gray-600 font-semibold text-xl'> Careers at Forever</p>
          <p className='text-gray-500'>Learn more About tems and job opening</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 ' > Explore Job</button>


        </div>

      </div>

      <NewsLetterBox />

    </div>
  )
}

export default Contact
