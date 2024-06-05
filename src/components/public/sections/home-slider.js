'use client'

import { useEffect, useState } from 'react'
import { GetSlider } from '../../../lib/actions/content/slider'
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Homeslider() {

    const [slider, setSlider] = useState(null)

    useEffect(() => {

        const getSlider = async () => {
            try {
                const slider = await GetSlider();
                setSlider(slider);
            } catch (error) {
                console.log(error)
            }
        }

        getSlider();
    }, [])

    // init Swiper:
    useEffect(() => {
        if (typeof window !== 'undefined') {
          new Swiper('.home-slider-wrapper', {
            loop: true,
          });
        }
      }, []);


    return (
        <div className="container mx-auto my-0 px-0 max-w-7xl sm:px-6 lg:px-8 px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full px-0 py-0">
                <div className="left w-full lg:w-2/3 overflow-hidden">
                    <div className="home-slider-wrapper">
                        <div className="swiper-wrapper">
                            {slider && slider.map((slide, key) => (
                                <div key={key} className='swiper-slide'>
                                    <div
                                        className="single-banner-item h-96 p-8 bg-cover"
                                        style={{
                                            backgroundImage: slide && slide.banner_image ? `url(${slide.banner_image})` : '',
                                        }}
                                    >
                                        <p className="text-white mb-2">
                                            <small>{slide && slide.small_title && slide.small_title}</small>
                                        </p>
                                        <h2 className="text-white text-4xl font-bold mb-4">{slide && slide.large_title && slide.large_title}</h2>
                                        <p className="text-white mb-6">{slide && slide.description && slide.description}</p>
                                        {slide && slide.url && (
                                            <a
                                                href={slide.url}
                                                className="inline-block px-4 py-2 text-white border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-300"
                                            >
                                                {slide && slide.button_title && slide.button_title}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right hidden lg:block lg:w-1/3">
                    here goes the right banner
                </div>
            </div>
        </div>

    )
}
