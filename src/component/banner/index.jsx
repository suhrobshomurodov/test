/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"

const Banner = ({title, text, image}) => {
    return <section>
        <div className="container">
            <div className="flex items-center justify-between pt-[115px] pb-[98px] gap-7" >
                <div className="w-1/2">
                    <h1 className="text-[56px] font-extrabold text-white mb-4 leading[61px]">{title}</h1>
                    <p className="text-lg leading-8  font-semibold text-white">{text}</p>
                </div>


                <div className="w-1/2 flex items-center justify-center">
                    <img src={image} className="max-w-[581px] h-[362px] " alt={title} />
                </div>

            </div>
        </div>
    </section>;


}

export default Banner;