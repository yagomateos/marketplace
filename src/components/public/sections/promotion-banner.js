'use client'

import { useEffect, useState } from "react"
import { Banners } from '../../../lib/actions/content/banners'

export default function PromotionBanner({ location }) {

    const [bannercontent, setBannerContent] = useState(null);

    useEffect(() => {

        const getBanner = async () => {
            try {
                const banner = await Banners(location)
                setBannerContent(banner)
            } catch (error) {
                console.log(error)
            }
        }

        getBanner();
    }, [])


    return (
        <div className="container mx-auto mb-6 px-4 max-w-7xl sm:px-6 lg:px-8 hidden lg:block">
            <div
                className="banner-container relative bg-cover bg-center p-8"
                style={{
                    backgroundImage: bannercontent && bannercontent.banner_image ? `url(${bannercontent.banner_image})` : '',
                    backgroundSize: 'cover',
                }}
            >
                <div className="background-overlay absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10">
                    <h3 className="text-white text-3xl font-bold mb-2">
                        {bannercontent && bannercontent.title ? bannercontent.title : ''}
                    </h3>
                    <p className="text-white text-lg mb-4">
                        {bannercontent && bannercontent.description ? bannercontent.description : ''}
                    </p>
                    {bannercontent && bannercontent.url ? (
                        <a
                            href={bannercontent.url}
                            className="inline-block px-4 py-2 text-white border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            Read More
                        </a>
                    ) : (
                        ''
                    )}
                </div>
            </div>


        </div>
    )
}
