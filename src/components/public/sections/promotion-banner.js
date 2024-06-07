'use client'

import { useEffect, useState } from "react"
import { Banners } from '../../../lib/actions/content/banners'

export default function PromotionBanner({ location , layout }) {

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
        <div className="container mx-auto mb-6 px-4 max-w-7xl sm:px-6 lg:px-8 hidden lg:block ">
            <div
                className="banner-container relative bg-cover bg-center p-12 rounded-lg overflow-hidden"
                style={{
                    backgroundImage: bannercontent && bannercontent.banner_image ? `url(${bannercontent.banner_image})` : '',
                    backgroundSize: 'cover',
                }}
            >
                {bannercontent && (
                    <>
                        <div className="background-overlay absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className={layout==='inline'? ('flex items-center justify-center gap-8 relative z-10') : ('relative z-10 text-center')} >
                            <h3 className="text-white text-3xl font-bold mb-2">
                                {bannercontent && bannercontent.title ? bannercontent.title : ''}
                            </h3>
                            <p className="text-white text-md">
                                {bannercontent && bannercontent.description ? bannercontent.description : ''}
                            </p>
                            {bannercontent && bannercontent.url ? (
                                <a
                                    href={bannercontent.url}
                                    className="inline-block px-4 py-2 text-sm font-semibold text-white border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-300"
                                >
                                    Descubre más
                                </a>
                            ) : (
                                ''
                            )}
                        </div>
                    </>
                )}

            </div>


        </div>
    )
}
