import React from 'react'
import { Banner, Header } from '../../component'
import Team from '../team'


import img from "../../assets/image/desktop-banner-img.png"
import Setup from '../../component/setup'
const Desktop = () => {
  return (
    <>
      <Header />
      <main className="main bg-mainBg w-full h-[1300px]  bg-cover bg-no-repeat bg-center"> 

     
      <Banner title={'About decstop app'} text={'Keep up with the newest technologies and start accepting new sources of revenue from a global community of PIVX users.'} image={img} />

      <Setup/>
      
      </main>

    </>
  )
}

export default Desktop
