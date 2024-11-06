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
import './home-slider.css'
import SliderCountdown from './snippets/slider-countdown'

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
                modules: [Navigation, Pagination],
                loop: true,
                navigation: {
                    nextEl: '.home-slider-next',
                    prevEl: '.home-slider-prev',
                },
            });

        }
    }, [slider]);


    return (
        <div className="container mx-auto my-0 px-0 max-w-7xl sm:px-6 lg:px-8 px-4 h-full">
            <div className="flex flex-col lg:flex-row justify-between items-stretch w-full px-0 py-0 gap-8 h-full">
                <div className="left w-full lg:w-2/3 overflow-hidden relative h-full flex-grow">
                    <div className="home-slider-wrapper h-full">
                        <div className="swiper-wrapper">
                            {slider && slider.map((slide, key) => (
                                <div key={key} className='swiper-slide'>
                                    <div
                                        className="single-banner-item kd-home-slider-element h-80 p-11 bg-cover rounded-lg"
                                        style={{
                                            backgroundImage: slide && slide.banner_image ? `url(${slide.banner_image})` : '',
                                            backgroundSize: 'initial'  // Cambia la posicion del slider
                                        }}
                                    >
                                        <p className="text-white mb-2 text-sm font-semibold">
                                            {slide && slide.small_title && slide.small_title}
                                        </p>
                                        <h2 className="text-white text-4xl lg:text-6xl font-bold mb-3">{slide && slide.large_title && slide.large_title}</h2>
                                        <p className="text-white mb-4 font-semibold">{slide && slide.description && slide.description}</p>
                                        {slide && slide.url && (
                                            <a
                                                href={slide.url}
                                                className="inline-block px-10 py-3 text-black bg-white text-sm font-semibold rounded-md"
                                            >
                                                {slide && slide.button_title && slide.button_title}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='slider-navigation absolute bottom-11 left-11 hidden lg:flex gap-4 z-10'>
                            <a className='home-slider-prev w-10 h-10 bg-white rounded-full text-gray-500 flex justify-center items-center cursor-pointer text-lg '>
                                <img className="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/caret-left.svg" />
                            </a>
                            <a className='home-slider-next w-10 h-10 bg-white rounded-full text-gray-500 flex justify-center items-center cursor-pointer text-lg '>
                                <img className="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/caret-right.svg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="right lg:w-1/3 flex-grow">
                    <SliderCountdown />
                </div>
            </div>
        </div>

    )
}
