import React from 'react'
import Service from './Service';
import injury from '../public/services/injury.png'
import criminal from '../public/services/criminal.png'
import family from '../public/services/family.png'
import imigration from '../public/services/imigration.png'
import intelectual from '../public/services/intelectual.png'
import corporate from '../public/services/corporate.png'
import employment from '../public/services/employment.png'
import tax from '../public/services/tax.png'

function Services() {
  return (
    <section id='services' className='w-full h-full flex items-center'>
        <div className='justify-self-center text-center mt-5 pt-5 p-5'>
            <h1 className='text-4xl mb-5 md:text-6xl md:mt-5 text-yellow-500'> Our Services </h1>
            <p className='text-sm md:text-xl ml-10 mr-10 text-slate-500'>
            At [Your Law Firm], we provide comprehensive legal services tailored to your individual needs. Our experienced team of lawyers offers a wide range of expertise. We are committed to delivering personalized and effective legal solutions to our clients, no matter the complexity of the case. Contact us today to schedule a consultation and see how we can assist you.
            </p>
            <div className='text-center grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 md:mr-10 md:ml-10'>
            <Service img={injury} name={'Personal Injury Law'} description={'Represents clients who have been injured due to the negligence of others and seeks compensation on their behalf.'}/>
            <Service img={criminal} name={'Criminal Law'} description={'Represents clients accused of crimes, and defends them in court to minimize or avoid penalties and convictions.'}/>
            <Service img={family} name={'Family Law'} description={'Deals with legal issues related to family relationships, such as divorce, child custody, and adoption.'}/>
            <Service img={imigration} name={'Immigration Law'} description={'Helps clients obtain legal status in a new country through citizenship, visas, and residency services.'}/>
            <Service img={intelectual} name={'Intellectual Property Law'} description={'Protects intellectual property rights, such as trademarks, patents, and copyrights, and helps clients register and enforce them.'}/>
            <Service img={corporate} name={'Corporate Law'} description={'Assists businesses with forming companies, drafting contracts, and resolving disputes with partners or other companies.'}/>
            <Service img={employment} name={'Employment Law'} description={'Protects employee rights and helps resolve workplace disputes, such as discrimination, harassment, and wrongful termination.'}/>
            <Service img={tax} name={'Tax Law'} description={'Provides guidance on tax planning, preparation, and disputes with tax authorities, including audits, appeals, and litigation.'}/>

            </div>
        </div>
    </section>
  );
};

export default Services;