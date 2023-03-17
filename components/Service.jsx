import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

function Service({img, name, description}) {

  return (
    <div className='w-full text-center items-center bg-white border-4 rounded-lg text-slate-500 md:h-60 xl:h-72'>
        <Image src={img} width={60} alt='service' className='mx-auto bg-yellow-500 rounded-2xl mt-5 hover:scale-110 duration-200'/>
        <Link href='/Criminal'><h1 className='text-sm md:text-xl xl:text-3xl mt-3 text-yellow-500 hover:scale-110 duration-200 cursor-pointer'>{name}</h1></Link>
    <p className='text-xs md:text-sm xl:text-xl md:mr-10 md:ml-10 mt-3'>{description}</p>
    </div>
  );
};

export default Service;