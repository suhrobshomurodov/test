    /* eslint-disable no-unused-vars */
import React from "react";
import Title from "../title";
import { useState } from "react";


const Contact = () => {

    const [email, setEmail] = useState('');
    const chartId = 6495439542;
    const token = '7145921425:AAHYFTMVEPngTSzfhOLPmH21vM5QOLGHels';
    const message = `Email: ${email}`

    async function onSubmit(e) {
        e.prevenDefault();

        const res = await fetch(
            `https://api.telegram.org/bot${token}/sendMessage?text=${message}&chat_id=${chartId}`
        );

        if (res.status == 200) {
            alert('succes!')
            setEmail("")
        }
    }

    console.log(email);


    return (
        <section>
            <div className="container">
                <div className="bg-contact-bg w-full h-[402px] bg-center bg-no-repeat bg-cover rounded-[28px] mt-[100px] mb-20 px-14 py-[76px]">

                    <Title text={"Никогда не пропускайте обновления"} />
                    <p className="mt-4 max-w-[507px] w-full text-lg font-semibold leading-8 text-white"> Подпишитесь на информационный бюллетень и будьте первым, кто получит новейшие оповещения, объявления и обновления о разработках BTCA.</p>

                    <form onSubmit={(e) => onSubmit(e)} 
                    className="mt-8 flex items-center justify-between max-w-[661px] w-full rounded-[14px] bg-[rgba(255,255,255,0.1)] border-slate-500 overflow-hidden py-2 pr-3 pl-8 border-[1px]">
                        <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        className="bg-transparent w-full focus:outline-none text-base font-normal leading-[22px] text-white " 
                        placeholder="Ваш e-mail" 
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                        <button type="submit" className="px-8 py-[14px] bg-[rgb(39,157,136)] rounded-full text-base font-bold leading-[22px] text-white">Подписаться</button>
                    </form>
                </div>
            </div>
        </section>
    )
}


export default Contact