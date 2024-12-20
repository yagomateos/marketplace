'use client'


import React, { useEffect, useState } from 'react'
import { getStrId } from '../../../lib/actions/stores/getStores';
import PublicPageContainer from '../../../components/containers/publicPageContainer';

export default function Viveres({ params }) {


    const [storeData, setStoreData] = useState(null)
    const [testimonials, setTestimonials] = useState(null)
    const [starCount, setStarCount] = useState(0)
    const [sales, setSales] = useState(null)
    const { id } = params;

    useEffect(() => {

        // get all store data
        console.log(id)

        const getallStoreData = async () => {
            try {
                const storeData = await getStrId(id);

                storeData && storeData.store && setStoreData(storeData.store)
                storeData && storeData.test && setTestimonials(storeData.test)
                storeData && storeData.order_count && setSales(storeData.order_count)

                let starCount = 0;
                let testCount = 0;

                if (storeData && storeData.test) {
                    storeData.test.map((test, ky) => {
                        starCount += parseInt(test.star)
                        testCount++;
                    })
                    let averageRating = testCount > 0 ? (starCount / testCount) : 0;

                    setStarCount(averageRating)
                }



            } catch (error) {
                console.log(error)
            }
        }

        id && getallStoreData()



    }, [id])

    console.log(testimonials)

    return (
        <PublicPageContainer>
            {/* main banner */}
            <div className='w-full'>
                {storeData && storeData[0] && storeData[0].banner_image ?
                    <img className='w-full h-[80px] lg:h-[400px] object-cover' src={storeData[0].banner_image} />
                    :
                    <div className='h-[80px] bg-green-500 w-full'></div>
                }
            </div>

            {/* user information */}
            <div className='w-full bg-[#f8f8f8]'>
                <div className='max-w-7xl mr-auto ml-auto px-4 py-6 flex justify-between'>
                    <div className='flex gap-6'>
                        <div className='w-[25%] lg:w-[12%]'>
                            {storeData && storeData[0] && storeData[0].logo ? <img className='w-full h-16 lg:w-32 lg:h-32 object-cover rounded' src={storeData[0].logo} /> : ''}
                        </div>
                        <div className='w-[82%]'>
                            <h2 className='text-lg lg:text-3xl'>{storeData && storeData[0] && storeData[0].sttore_title ? storeData[0].sttore_title : ''}</h2>
                            <p className='text-xs lg:text-sm'>{storeData && storeData[0] && storeData[0].intro ? storeData[0].intro : ''}</p>
                            <p className='text-lg'>
                                {sales && `${sales} Ventas |`}
                                {[...Array(5)].map((_, index) => (
                                    <span key={index}>
                                        {index < Math.round(starCount) ? "★" : "☆"}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* announcements */}
            <div className='max-w-7xl mr-auto ml-auto flex px-4 py-6 flex-col lg:flex-row'>
                <div className='w-full lg:w-[20%]'>
                    <h3 className='text-xl font-semibold '>Anuncio</h3>
                </div>
                <div className='w-full lg:w-[80%]'>
                    <p>{storeData && storeData[0] && storeData[0].announcements ? storeData[0].announcements : ''}</p>
                </div>


            </div>

            {/* {/* listings */}
            <div className='max-w-7xl ml-auto mr-auto px-4 py-6'>
                <div className='p-3'>
                    <ul className='flex gap-8'>
                        <li><a href="#listings" className='py-2 hover:border-b border-[black]'>Listados</a></li>
                        <li><a className='py-2 hover:border-b border-[black]' href="#reviews">Reseñas</a></li>
                        <li><a className='py-2 hover:border-b border-[black]' href="#about">Acerca de</a></li>
                    </ul>
                </div>
                <div className='p-4 flex gap-6 flex-wrap' id='listings'>
                    {storeData && storeData.map((listing, key) => {
                        return <a key={key} className='block w-full lg:w-[23%] hover:border hover:shadow-xl shadow-[#ccc] rounded-md p-4 border-[#ccc]' href={`/listado?pid=${listing.id}`}>
                            <div className='w-full h-[220px] lg:h-[300px] bg-[#f8f8f8]'>
                                <img className='w-full h-full  block object-cover' src={listing.main_image_url} />
                            </div>
                            <h3>
                                {listing.name.length > 90
                                    ? `${listing.name.slice(0, 90)}...`
                                    : listing.name}
                            </h3>
                            <h4 className='text-lg font-bold'>€ {listing.regular_price}</h4>
                        </a>
                    })}
                </div>
                <div id='reviews' className='py-6 px-4'>
                    <h3 className='text-xl font-semibold mb-6'>Reseñas <small className='ml-6 text-md font-normal'>Reseñas de artículos promedio {[...Array(5)].map((_, index) => (
                        <span key={index}>
                            {index < Math.round(starCount) ? "★" : "☆"}
                        </span>
                    ))} ({sales} Ventas)</small></h3>
                    <div className=''>
                        {testimonials && testimonials.map((testimonial, key) => {
                            return <a href={`/listado/?pid=${testimonial.id}`} className="block mb-5 py-4 border-b border-[#ccc]" key={key}>
                                <p>{testimonial.user_name}</p>
                                <div>
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index}>
                                            {index < Math.round(testimonial.star) ? "★" : "☆"}
                                        </span>
                                    ))}
                                </div>
                                <p>{testimonial.review}</p>
                                <div className='flex gap-3 mt-4 items-center'>
                                    <div className='w-[25%] lg:w-auto'>
                                        <img className='w-[120px] h-[120px] rounded-md border border-[#ccc]' src={testimonial.main_image_url} />
                                    </div>
                                    <div className='w-[72%] lg:w-auto'>
                                        <p className='text-sm'>{testimonial.name}</p>
                                    </div>
                                </div>
                            </a>
                        })}
                    </div>

                </div>

                <div className='max-w-7xl mr-auto ml-auto px-4 py-6' id="about">
                    <div className='flex items-center mb-4'>
                        {storeData && storeData[0] && storeData[0].logo ? <img className='w-[100px] h-[100px] object-cover mr-6 block border border-[#ccc] rounded-lg' src={storeData[0].logo} /> : ''}

                        <h2 className='mb-2 text-xl font-semibold'>{storeData && storeData[0] && storeData[0].sttore_title ? storeData[0].sttore_title : ''}</h2>
                    </div>
                    <div
                        
                        className="max-w-7xl mr-auto ml-auto"
                        dangerouslySetInnerHTML={{ __html: storeData && storeData[0] && storeData[0].full_description ? storeData[0].full_description : '' }}
                    >
                    </div>
                </div>


            </div>

        </PublicPageContainer>

    )
}
