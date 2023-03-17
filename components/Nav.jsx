import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full bg-gradient-to-r from-slate-400 to-slate-600 fixed top-0 left-0 right-0 z-10 h-10 xl:h-14">
      <div className="justify-between md:justify-evenly xl:justify-evenly font-semibold flex px-4 mr-5 mx-auto lg:max-w-7xl md:items-center md:px-8 h-10">
      <a href='/#main'>
        <h1 className='font-bold text-2xl xl:text-3xl hover:scale-110 duration-200 text-yellow-500 xl:mt-3'>Lawyer Site</h1></a>
        <div>
          <ul className='hidden text-sm uppercase xl:text-lg md:flex text-yellow-500 xl:mt-3'>
            <li className='ml-10 hover:scale-110 duration-200'>
            <a href='/#main'>Home</a>
            </li>
            <li className='ml-10 hover:scale-110 duration-200'>
            <a href='/#about'>About</a>
            </li>
            <li className='ml-10 hover:scale-110 duration-200'>
            <a href='/#services'>Services</a>
            </li>
            <li className='ml-10 hover:scale-110 duration-200'>
            <a href='/#attorneys'>Attorneys</a>
            </li>
            <li className='ml-10 hover:scale-110 duration-200'>
            <a href='/#testimonial'>Testimonials</a>
            </li>
            <li className='ml-10 hover:scale-110 duration-200'>
            <a href='/#contact'>Contact</a>
            </li>
            <li className='ml-5 hover:scale-110 duration-200'>
            <p className='cursor-pointer'>+ 206 777 8888</p>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            className='md:hidden mt-1.5 ml-auto hover:scale-105 duration-200 text-yellow-500'
            onClick={handleNav}><AiOutlineMenu size={25} />
          </div>
          </div>
        </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-r from-slate-400 to-slate-600 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <div
                onClick={handleNav}
                className='rounded-full text-yellow-500 bg-slate-300 p-3 cursor-pointer'>
                <AiOutlineClose size={20} />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase text-yellow-500'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
              <a href='/'>Home</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
              <a href='/#about'>About</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
              <a href='/#services'>Services</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
              <a href='/#attorneys'>Attorneys</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
              <a href='/#testimonial'>Testimonials</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
              <a href='/#contact'>Contact</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
              <p>+ 206 777 8888</p>
              </li>
            </ul>
            <div className='pt-20'>
              <p className='uppercase tracking-widest text-yellow-500'>
                Stay in Touch</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%] text-yellow-500'>
                <a href='https://twitter.com/?lang=en'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsTwitter size={20} />
                  </div>
                </a>
                <a href='https://www.facebook.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFacebook size={20} />
                  </div>
                </a>
                <a href='https://www.instagram.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsInstagram size={20} />
                  </div>
                </a>
                <a href='mailto:yourlawyercompany@gmail.com'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;