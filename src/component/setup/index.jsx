import React from 'react'
import Title from '../title'
import Card from '../card'
import CardTwo from '../cardtwo'
import img from '../../assets/image/setup-imge.png'

function Setup() {
    return (
        <section>
            <div className="container">
            <div className='p-[10px] text-center' >
            <Title text={'Setup'} />
            </div>
                <div className='text-center flex gap-4 items-center justify-between'>
                    <CardTwo image={img} title={"Создать адрес SHIELD"} text={"Создайте защищенный или прозрачный адрес, по которому вы хотите получать свои чаевые"} />
                    <CardTwo image={img} title={"Создать адрес SHIELD"} text={"Создайте защищенный или прозрачный адрес, по которому вы хотите получать свои чаевые"} />
                    <CardTwo image={img} title={"Создать адрес SHIELD"} text={"Создайте защищенный или прозрачный адрес, по которому вы хотите получать свои чаевые"} />


                </div>
                

            </div>
        </section>
    )
}

export default Setup
