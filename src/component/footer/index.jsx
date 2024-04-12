import { Link } from "react-router-dom"
import { Icons } from "../../assets/icons"
import Title from "../title"


const Footer = () => {

    return (
        <footer className="bg-black h-auto">
            <section className="flex ">
                <div className="container  ">
                   <div className="flex gap-10">
                   <div className="gap-[30px] mt-[48]">
                        <h2 className="text-white font-bold font text-2xl ">rovac</h2>
                        <nav className="flex gap-2 mt-3">
                            <Link> <Icons.andridIcon /> </Link>
                            <Link> <Icons.iphoneIcon /> </Link>
                            <Link> <Icons.terminalIcon /> </Link>
                            <Link> <Icons.windowsIcon /> </Link>
                        </nav>
                        <Title text={"Никогда не пропускайте обновления"} />
                        <form action="" className="mt-1 flex items-center justify-between max-w-[661px] w-full rounded-[14px] bg-[rgba(255,255,255,0.1)] border-slate-500 overflow-hidden  pr-1 pl-4 border-[1px]">
                            <input type="email" className="bg-transparent w-full focus:outline-none text-base font-normal leading-[22px] text-white " placeholder="Ваш e-mail" required />
                            <button type="submit" className="px-1 py-[5px] my-2 bg-[rgb(39,157,136)] rounded-full text-base font-bold leading-[22px] text-white">Подписаться</button>
                        </form>
                        
                    </div>
                    <div className="mt-[50px]">
                        <h2 className="text-[18px] text-white mb-[8px]">BTCA</h2>
                        <p className="text-[14px] text-gray mt-8">Получить PIV</p>
                        <p className="text-[14px] text-gray mt-4">Конфиденциальность Shield</p>
                        <p className="text-[14px] text-gray mt-4">Продвинутый PoS </p>
                        <p className="text-[14px] text-gray mt-4">Холодный Стекинг</p>
                        <p className="text-[14px] text-gray mt-4">Мастерноды</p>
                        <p className="text-[14px] text-gray mt-4">Управление</p>
                        <p className="text-[14px] text-gray mt-4">Экономика</p>
                    </div>
                    <div className="mt-[50px]">
                        <h2 className="text-[18px] text-white mb-[8px]">Ресурсы</h2>
                        <p className="text-[14px] text-gray mt-8">Кошельки</p>
                        <p className="text-[14px] text-gray mt-4">Coin Specs</p>
                        <p className="text-[14px] text-gray mt-4">Обозреватель блоков</p>
                        <p className="text-[14px] text-gray mt-4">Statistics</p>
                        <p className="text-[14px] text-gray mt-4">Инфопанель</p>
                        <p className="text-[14px] text-gray mt-4">НовостиЭкономика</p>
                        <p className="text-[14px] text-gray mt-4">Дорожная Карта</p>
                    </div>
                    <div className="mt-[50px]">
                        <h2 className="text-[18px] text-white mb-[8px]">Поддержка</h2>
                        <p className="text-[14px] text-gray mt-8">Руководства</p>
                        <p className="text-[14px] text-gray mt-4">Форум</p>
                        <p className="text-[14px] text-gray mt-4">Почему BTCA</p>
                        <p className="text-[14px] text-gray mt-4">Statistics</p>
                    </div>
                   </div>
                   <div className="flex justify-between ">
                <p className="text-gray text-lg  mb-5">© 2019-2021 BTCA Community & BTCA Foundation</p>
                        <p className="text-gray text-lg mb-5">Created by BTCA Community</p>
                </div>
                </div >
               
            </section>
        </footer>
    )
}

export default Footer



























