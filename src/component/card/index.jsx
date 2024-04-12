import React from 'react'
import { Icons } from '../../assets/icons';

const Card = ({image, title, subtitle, id}) => {
  return (
    <div className="rounded-2xl p-[30px] bg-card-bg w-[350px] h-[387px]">
                        <div className='w-[146px] mx-auto h-[146] rounded-[27px] overflow-hidden'>
                            <img src={image} alt={title} className='w-full h-full object-contain' />
                        </div>
                        <h3 className="mt-4 text-xl font-extrabold leading-6 text-center text-white">{title}</h3>
                        <p className='mt-4 text-center text-white uppercase'>{subtitle}</p>
                        <div className='w-full flex items-center justify-between border-t-[1px] border-slate-500 mt-5 py-[22px]'>
                            <div className='flex items-center gap-5'>
                            <Icons.discordIconWhite />
                                <span className='text-base font-bold leading-6 text-white'>{id}</span>
                            </div>
                            <div className='flex items-center gap-[18px]'>
                                <Icons.twitterIconGreen />
                                <Icons.githubIconGreen />

                            </div>
                        </div>
                        
                    </div>
  );
}

export default Card