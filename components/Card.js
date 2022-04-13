import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Card({ id, image, title, text, left, right, aosStyle, aosDuration }) {

    useEffect(() => {
        AOS.init({
          duration: 2000
        })
      }, [])

    return (
        <div id={id} className="lg:flex w-2/3 my-12 mx-auto bg-white/75 shadow-lg rounded-lg overflow-hidden" data-aos={aosStyle} data-aos-duration={aosDuration}>
            {left &&
                <div className="w-full bg-cover h-auto">
                    <img src={image} alt={title} className="h-full" />
                </div>
            }
            <div className="w-full lg:w-2/3 p-4 my-auto">
                <h1 className="text-gray-900 font-bold text-2xl">
                    {title}
                </h1>
                <p className="mt-2 text-gray-600 text-sm md:text-lg">
                    {text}
                </p>
            </div>
            {right &&
                <div className="w-full bg-cover h-auto">
                    <img src={image} alt={title} className="h-full" />
                </div>
            }
        </div>

    )
}




