import React from 'react'


const CardTwo = ({image, title, text}) => {



  
  return (
    <div className='max-w-[350px] h-[504px] p-[30px]  bg-cardTwo-bg rounded-2xl '>
      <img className='w-full ' src={image} alt="error" />
      <h2 className='mt-[44px] text-xl font-extrabold leading-6 text-center text-white'>{title}</h2>
      <p className='mt-[22px] mb-[62px] text-center text-white uppercase'>{text}</p>
    </div>
  )
}

export default CardTwo




