
import { Banner, Contact, Footer, Header, SocialNetworks, Telegram } from "../../component"



const index = () => {
    const title = "К сообществу BTCA"
    const text = "Социальные сети, Телеграмм-каналы, онлайн-обсуждения, ответы на ваши самые сложные вопросы можно найти тут."
    const image = "/image/banner-image (2).png"
    return (
        <>
            <Header />
            <main className="main bg-mainBg w-full  bg-cover bg-no-repeat bg-center">
                <Banner 
                title={title}
                text={text}
                image={image}
                    />
                <SocialNetworks />
                <Telegram />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default index