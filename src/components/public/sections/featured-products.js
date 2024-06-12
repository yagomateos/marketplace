'use client'

import { useEffect, useState } from "react"
import { FeaturedProductsAction } from '../../../lib/actions/products/featuredProducts'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SingleFeaturedProduct from './snippets/singleFeaturedProduct'


export default function FeaturedProducts() {

    const [featuredProducts, setFeaturedProducts] = useState(null);


    useEffect(() => {

        const getFeaturedProducts = async () => {
            try {
                const featuredProducts = await FeaturedProductsAction();
                // console.log(featuredProducts)
                setFeaturedProducts(featuredProducts);
            } catch (error) {
                console.log(error)
            }
        }

        getFeaturedProducts();

    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            new Swiper('.featured-products-slider', {
                modules: [Navigation, Pagination],
                loop: true,
                slidesPerView: 2,
                spaceBetween: 15,
                autoplay: {
                    delay: 3000, // Autoplay delay in milliseconds
                    disableOnInteraction: false, // Keep autoplay running after user interaction
                },
                navigation: {
                    nextEl: '.feature-carousel-next', // Class for the next button
                    prevEl: '.feature-carousel-prev', // Class for the previous button
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2, // Show 2 items on mobile devices
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 4, // Show 4 items on desktop devices
                        spaceBetween: 20
                    },
                },
            });
        }
    }, [featuredProducts]);



    return (
        <div className="container mx-auto my-8 px-4 max-w-7xl sm:px-6 lg:px-8">


            {featuredProducts && (
                <>
                    {/* header */}
                    <div className="flex justify-between align-center">
                        <div>
                            <h2 className="text-2xl font-medium">Popular Products</h2>
                        </div>
                        <div>
                            <a href="#" className="text-sm underline">See all products</a>
                        </div>
                    </div>

                    {/* content */}
                    <div className=" w-full py-4 px-5 lg:px-0 relative">
                        <div className="featured-products-slider w-full overflow-hidden">
                            <div className="swiper-wrapper">
                                {featuredProducts && featuredProducts.map((featuredProduct, key) => (
                                    <div className="swiper-slide" key={key}>
                                        <SingleFeaturedProduct featuredProduct={featuredProduct}/>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='featured-product-navigation absolute bottom-1/2 left-0 flex gap-4 z-10 justify-between w-full'>
                            <a className='feature-carousel-prev w-10 h-10 bg-white shadow-sm shadow-gray-500 rounded-full text-gray-500 flex justify-center items-center cursor-pointer text-lg lg:-ml-8'><img className="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/caret-left.svg" /></a>
                            <a className='feature-carousel-next w-10 h-10 bg-white shadow-sm shadow-gray-500 rounded-full text-gray-500 flex justify-center items-center cursor-pointer text-lg lg:-mr-8'><img className="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/caret-right.svg" /></a>
                        </div>
                    </div>
                </>

            )}

        </div>
    )
}
