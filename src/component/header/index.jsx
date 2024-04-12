/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../assets/icons'

const Header = () => {
  return (
    <header className='bg-blue-950'>
        <div className="container flex justify-between items-center">
            <div className='flex items-center justify-between py-3'>
               <div className='flex items-center gap-9'>
               <Link to='/'>
                    <Icons.logoIcon />
                </Link>

                <nav className='flex items-center gap-11'>
                    <Link to='/' className='text-gray text-sm leading-5 hover:text-white duration-0.4'>Home</Link>
                    <Link to='/team' className='text-gray text-sm leading-5 hover:text-white  duration-0.4'>Team</Link>
                    <Link to='/desktop' className='text-gray text-sm leading-5 hover:text-white duration-0.4'>Desktop</Link>
                </nav>
               </div>
            </div>

            <div className='flex items-center gap-[10px]'>
                <button type='button' className='flex items-center gap-[6px] py-[6px] px-[10px]  bg-[rgba(255,255,255,0.15)] rounded-lg text-white uppercase border-[1px] border-stone-400 backdrop-blur shadow-btnShadow'> <Icons.globalIcon/> Rus</button>
                <button type='button' className='flex items-center gap-[6px] py-[6px] px-[10px]  bg-[rgba(255,255,255,0.15)] rounded-lg text-white uppercase border-[1px] border-stone-400 backdrop-blur shadow-btnShadow'> <Icons.bitcoinSmallIcon/> 10.834</button>
            </div>
        </div>
    </header>
  )
}

export default Header