import React from 'react'
import Title from '../title'
import Card from '../card'
import CardTwo from '../cardtwo'
import img from '../../assets/image/setup-imge.png'

function Setup() {
    return (
        <section>
            <div className="container">
                <div className='text-center'>
                    <Title text={'Setup'} />
                    <CardTwo image={img} title={"Создать адрес SHIELD"} text={"Создайте защищенный или прозрачный адрес, по которому вы хотите получать свои чаевые"} />


                </div>
                

            </div>
        </section>
    )
}

export default Setup
