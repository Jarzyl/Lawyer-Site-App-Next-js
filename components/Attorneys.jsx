import React from 'react'
import team1 from '../public/img/team-1.jpg'
import team2 from '../public/img/team-2.jpg'
import team3 from '../public/img/team-3.jpg'
import team4 from '../public/img/team-4.jpg'
import feature from '../public/img/feature.jpg'
import Workers from './Workers'
import Image from 'next/image'

function Attorneys() {
  return (
    <section id='attorneys' className='w-full items-center'>
        <div className='justify-self-center text-center md:mt-24 pt-5 m-5 '>
            <h1 className='text-4xl mb-5 md:text-6xl xl:text-8xl mt-5 md:mt-5 text-yellow-500 xl:mt-24'> Our Attorneys </h1>
            <p className='text-sm md:text-xl xl:text-3xl md:ml-10 md:mr-10 text-slate-600'>
            Experienced and trusted lawyers dedicated to protecting your rights and interests.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-5 md:mr-10 md:ml-10'>
            <Workers img={team1} name={'Oliver'} area={'Criminal law'}/>
            <Workers img={team2} name={'Benjamin'} area={'Corporate law'}/>
            <Workers img={team3} name={'Emma'} area={'Family law'}/>
            <Workers img={team4} name={'Lucas'} area={'Tax law'}/>
            </div>
            <div className='grid md:grid-cols-2 gap-5 md:mt-28'>
            <div className='justify-self-center mt-5 pt-5 md:ml-10'>
            <h1 className='text-3xl mb-5 md:text-4xl xl:text-6xl md:mt-5 text-yellow-500'>Why choose Us</h1>
            <ol className='text-sm md:text-2xl text-slate-600'>
  <li className='flex items-center'>
    <div>
      <p className='text-md md:text-xl xl:text-3xl font-semibold text-gray-400'>Best Law Practices</p>
      <p className='text-md md:text-lg xl:text-2xl'>
        Excellence in legal representation with ethical standards and professionalism.
      </p>
    </div>
  </li>
  <li className='flex items-center mt-5'>
    <div>
      <p className='text-md md:text-xl xl:text-3xl font-semibold text-gray-400'>Efficiency & Trust</p>
      <p className='text-md md:text-lg xl:text-2xl'>
        Providing efficient and trustworthy legal services to meet your needs.
      </p>
    </div>
  </li>
  <li className='flex items-center mt-5'>
    <div>
      <p className='text-md md:text-xl xl:text-3xl font-semibold text-gray-400'>Results You Deserve</p>
      <p className='text-md md:text-lg xl:text-2xl'>
        Achieving the best possible outcomes for our clients with proven results.
      </p>
    </div>
  </li>
</ol>
            </div>
            <div className='w-full items-center justify-center grid md:mt-10'> <Image src={feature} width={400} />
            
            </div>
            </div>
            </div>
    </section>
  );
};

export default Attorneys;