import Image from 'next/image'
import React from 'react'
import about from '../public/img/about.jpg'

function About() {
  return (
    <section id='about' className='w-full h-full flex items-center'>
        <div className='text-center m-5 p-5 md:grid grid-cols-2 gap-5'>
        <div className='justify-self-center mt-5 pt-5 text-slate-500'>
        <h1 className='text-4xl mb-5 md:text-6xl md:mt-5 text-yellow-500'>About Us</h1>
        <h2 className='text-1xl mb-3 md:text-3xl font-semibold'>We Provide Reliable and Effective Legal Services</h2>
        <p className='text-sm md:text-xl md:mt-5'>Welcome to our law firm. We are committed to providing our clients with expert legal services and representation. Our experienced team of lawyers specializes in various areas of law. We are dedicated to upholding our values of integrity, professionalism, and client satisfaction, and we strive to achieve the best possible outcomes for our clients. With a proven track record of success, we have earned the trust and respect of our clients and peers in the legal community. Thank you for considering our firm for your legal needs.</p>
        </div>
        <div className='w-full items-center justify-center grid md:mt-10 pt-10'><Image src={about} width={400} alt='' />
        </div>
        </div>
    </section>
  );
};

export default About;