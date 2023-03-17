import Image from 'next/image';
import React from 'react'
import op from '../public/img/opinion.png'
import op1 from '../public/img/opinion1.png'
import op2 from '../public/img/opinion2.jpg'

function Testimonial() {
  return (
    <section id='testimonial' className='w-full md:h-screen xl:h-screen pt-5 items-center'>
        <div className='text-white mt-12 xl:mt-24'>
        <h1 className='text-4xl md:text-6xl xl:text-8xl text-center mb-8 md:mb-16 text-yellow-500'> Testimonials </h1>
        <div className='justify-center grid md:flex gap-5 mt-5 mr-10 ml-10'>
        <div className='items-center border-4 border-solid h-64 w-60 bg-gradient-to-r from-slate-400 to-slate-600 xl:h-80'>
        <p className='mt-2 mb-2 text-center text-lg xl:text-2xl text-yellow-500'> Anna </p>
        <Image src={op} width={150} alt='' className='mx-auto w-20 h-20 rounded-full'/>
        <h1 className='text-xs xl:text-sm m-6 mt-2'>
        I had the pleasure of working with [Lawyer's Name] and was impressed by their expertise and professionalism. They kept me informed every step of the way and helped me achieve a successful outcome.
        </h1>
        </div>
        <div className='items-center  border-4 border-solid h-64 w-60 bg-gradient-to-r from-slate-400 to-slate-600 xl:h-80'>
        <p className='mt-2 mb-2 text-center text-lg xl:text-2xl text-yellow-500'> Mark </p>
        <Image src={op1} width={150} alt='' className='mx-auto w-20 h-20 rounded-full'/>
        <h1 className='text-xs xl:text-sm m-6 mt-2'>
        I highly recommend [Lawyer's Name] for anyone in need of legal services. They were attentive to my needs, responsive to my questions, and provided clear and concise guidance throughout the process.
        </h1>
        </div>
        <div className='items-center  border-4 border-solid h-64 w-60 bg-gradient-to-r from-slate-400 to-slate-600 xl:h-80'>
        <p className='mt-2 mb-2 text-center text-lg xl:text-2xl text-yellow-500'> Marco </p>
        <Image src={op2} width={150} alt='' className='mx-auto w-20 h-20 rounded-full'/>
        <h1 className='text-xs xl:text-sm m-6 mt-2'>
        Working with [Lawyer's Name] was a great experience. They were knowledgeable, patient, and truly cared about my case. I couldn't have asked for better representation.
        </h1>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Testimonial;

