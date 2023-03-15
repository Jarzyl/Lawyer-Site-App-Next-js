import React from 'react';
import free from '../public/img/free.jpg';

function Free() {
  return (
    <div className='w-full flex items-center justify-center mt-10 md:mt-40 md:mb-20'
    style={{
        backgroundImage: `url(${free.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px'
      }} alt=''>
      <div className='text-center text-white'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          Call Us Now for a Free Consultation
        </h1>
        <a href='#contact'className='mt-8 inline-block py-4 px-8 text-lg font-semibold text-white  bg-yellow-600 border-yellow-600 rounded-lg hover:scale-110 duration-200'> Call Us Now</a>
      </div>
    </div>
  );
};

export default Free;
