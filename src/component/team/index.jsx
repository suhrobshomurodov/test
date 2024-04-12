import React from 'react'
import { teamData } from '../data'
import Title from '../title'
import Card from '../card'

const TeamMembers = () => {
    return (
        <section className='mt-[74px] bg-slate-950'>
            <div className="container">
                <div className='text-center max-w-[600px] w-full mx-auto'>
                    <Title text={'BTCA'}/>
                    <p className='text-lg font-semibold leading-8 text-white'>Основная команда - это сердце проекта, на котором зиждется неуклонное развитие и рост BTCA.</p>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-7">
                    {
                        teamData.map(el => (
                            <Card key={el.id} image={el.image} title={el.title} subtitle={el.subtitle} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamMembers