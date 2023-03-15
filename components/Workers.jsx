import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Workers({img, name, area}) {
  return (
    <div className='w-full text-center items-center bg-white border-4 rounded-lg md:h-70'>
    <Link href='/Lawyer'><h1 className='text-sm md:text-xl mt-1 text-yellow-500 hover:scale-110 duration-200 cursor-pointer'>{name}</h1></Link>
    <p className='text-sm md:text-xl mr-10 ml-10 mt-1 text-slate-500'>{area}</p>
    <Image src={img} width={180} alt='' className='mx-auto rounded-2xl mt-2 p-2 md:p-0 mb-2'/>
    </div>
  );
};

export default Workers;