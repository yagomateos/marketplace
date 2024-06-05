'use client'

import { useEffect, useState } from "react"
import { FeaturedProductsAction } from '../../../lib/actions/products/featuredProducts'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
                loop: true,
                slidesPerView: 2,
                spaceBetween: 15,
                autoplay: {
                    delay: 3000, // Autoplay delay in milliseconds
                    disableOnInteraction: false, // Keep autoplay running after user interaction
                },
                navigation: {
                    nextEl: '.swiper-button-next', // Class for the next button
                    prevEl: '.swiper-button-prev', // Class for the previous button
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

            {featuredProducts && (
                <div className="featured-products-slider overflow-hidden w-full py-4 relative">
                    <div className="swiper-wrapper">
                        {featuredProducts && featuredProducts.map((featuredProduct, key) => (
                            <div className="swiper-slide" key={key}>
                                <div className="single-featured-product-inner">
                                    {featuredProduct.main_image_url && (<img className="w-full h-36 lg:h-80 object-cover" src={featuredProduct.main_image_url} />)}
                                    {featuredProduct.category_name && (
                                        <p className="text-sm p-1">{featuredProduct.category_name}</p>
                                    )}
                                    {featuredProduct.name && (
                                        <p className="p-1">{featuredProduct.name}</p>
                                    )}
                                    {featuredProduct.username && (
                                        <p className="p-1 text-sm">{featuredProduct.username}</p>
                                    )}

                                    {featuredProduct.sale_price && (
                                        <div className="flex justify-start gap-2 items-center">
                                            <p className="p-1 text-red-800">{featuredProduct.sale_price}</p>
                                            <p className="line-through">{featuredProduct.regular_price}</p>
                                        </div>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="navigation-wrapper">
                        <a className="swiper-button-prev h-10 w-10 bg-white text-xs text-gray-500 shadow-sm shadow-slate-500 rounded-full flex items-center justify-center"></a>
                        <a className="swiper-button-next"></a>
                    </div>
                </div>
            )}

        </div>
    )
}
