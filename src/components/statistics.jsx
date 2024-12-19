import React from 'react'
import { statistics } from '../util/constatnts'


const Statistics = () => {
  return (
    <section id='stats' className='flex flex-row flex-wrap mb-6 sm:mb-20'>
        {statistics.map(item => (
            <div key={item.id} className={`flex flex-1 sm:justify-center justify-start items-center flex-row m-3`}>
                <h4 className='font-semibold font-montserrat xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{item.value}</h4>
                <p className='font-normal font-montserrat xs:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-gradiant uppercase ml-3'>{item.title}</p>
            </div>
        ))}
    </section>
  )
}

export default Statistics