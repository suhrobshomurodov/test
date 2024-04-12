/* eslint-disable react/jsx-key */


import { Icons } from "../../assets/icons"
import { telegramData } from "../data"

import Title from "../title"

const Telegram = () => {

   

    return (
        <section className="mt-20">
            <div className="container">
                <Title text={"Telegram - каналы"} />
        
                <div className="flex items-center justify-between gap-[30px] mt-11">
                    {
                        telegramData.map(el => (
                            <div key={el.id} className="rounded-2xl w-full bg-[rgba(255,255,255,0.05)] px-4 py-6  backdrop-blur-lg border-[1px] border-slate-6zz0">
                            <h3 className="text-white text-lg leading-8 font-semibold uppercase mb-4">{el.title}</h3>
    
                            <a href={el.link} className="w-full flex items-center justify-between py-4 px-5 bg-[rgb(13,17,29)] rounded-xl text-lg font-bold text-white  ">{el.link}<span><Icons.linkIcon /></span></a>
                        </div>
                        ))
                    }
                   

                </div>
            </div>
        </section>
    )
}


export default Telegram