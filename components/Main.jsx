import React from 'react';

function Main() {
  return (
    <section id='main' className='w-full h-screen flex items-center justify-center bg-black opacity-70' >
      <div className='text-center text-white'>
        <p className='text-2xl md:text-3xl xl:text-5xl font-bold'>Best law agency</p>
        <h1 className='text-4xl md:text-6xl xl:text-8xl font-bold'>We're fighting for your justice</h1>
        <a href='#contact' className='mt-8 inline-block py-4 px-8 text-lg xl:text-2xl font-semibold text-white border-2  bg-yellow-600 border-yellow-600 rounded-lg hover:scale-110 duration-200'>Get an appointment</a>
      </div>
    </section>
  );
};

export default Main;

// style={{backgroundImage: `url(${main.src})`}} 