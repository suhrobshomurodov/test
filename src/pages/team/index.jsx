import { Banner, Header, Liders, TeamMembers } from "../../component"

import img from "../../assets/image/team-banner-img.png"

const Team = () => {

    const title = "О BTCA";
    const text = "Исследуйте, вносите вклад и влияйте на будущее развитие вместе с BTCA и его процветающим глобальным сообществом.";

    return (
        <div>
            <Header />
          <main className="main bg-mainBg w-full h-[1300px]  bg-cover bg-no-repeat bg-center">
          <Banner title={title} text={text} image={img}/>
          <Liders/>
          <TeamMembers/>
          
          </main>
          
        </div>
    )
}

export default Team