
import React from "react";
import Title from "../title";
import { lidersData } from "../data";
import Card from "../card";





const Liders = () => {
    return (
        <section>
            <div className="container">
                <div className="max-w-[600px] w-full text-center mx-auto">
                    <Title text={'BTCA'} />
                    <p className="text-lg font-semibold leading-8 text-white">
                        Архитекторы блокчейна, самые опытные в мире разработчики блокчейна с проверенным опытом, расширяют границы, предоставляя самые инновационные технологии для BTCA
                    </p>
                </div>

                <div className="mt-9 flex items-center justify-between">
                    {
                        lidersData.map(el => (
                            <Card key={el.id} id={el.userId} title={el.title} image={el.img} subtitle={el.subtitle} />
                        ))
                    }
                    
                    
                </div>
            </div>
        </section>
    )
}


export default Liders