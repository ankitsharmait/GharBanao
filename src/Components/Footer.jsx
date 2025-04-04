import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb:8 md:mb-0'>
                <div className="flex items-center gap-2">
                    <img src='/favicon.svg' className='bg-blue' alt="" />
                    <h1 className="text-xl md:text-2xl font-bold text-blue-700 tracking-wide gharbanao-title">
                        GharBanao
                    </h1>
                    </div>
                    <p className='text-gray-400 mt-4'>We are committed to helping you find the perfect place to call home. With years of experience and a passion for excellence, we connect buyers and sellers with ease.</p>

                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4 '>
                        Company
                    </h3>
                    <ul className='flex flex-col gap-2 text-gray-400 '>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About Us</a>
                        <a href="#Contact" className='hover:text-white'>Contact Us</a>
                        <a href="#" className='hover:text-white'>Privacy policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4 '>Subscribe to our newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80 '>Working with this team made the home buying process simple and stress-free. Highly recommended!</p>
                    <div className='flex gap-2'>
                        <input type="email" placeholder='Enter Your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                        <button className='py-2 px-4 rounded bg-blue-500 text-white '>Subscribe</button>
                    </div>
                </div>

            </div>
            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500 '>
                Copyright 2025 @ Ankit All Right Reserved.
            </div>
        </div>
    )
}

export default Footer
