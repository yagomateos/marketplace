'use client'
import PublicPageContainer from '../../../components/containers/publicPageContainer'
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getStrByName } from '../../../lib/actions/stores/getStores'

export default function Page() {
    const router = useRouter();
    const pathname = usePathname();
    const [id, setId] = useState(null);
    const [storeInfo, setStoreInfo] = useState(null)
    const [reviews, setReviews] = useState([])
    const [reviewsPresentage, setReviewPresentage] = useState(null)

    useEffect(() => {
        const pathParts = pathname.split('/');
        const dynamicId = pathParts[pathParts.length - 1];
        const decodedId = decodeURIComponent(dynamicId);
        setId(decodedId);
    }, [pathname]);

    console.log(id);
    //    fetch store data
    useEffect(() => {
        const getStore = async () => {
            try {
                const strInfo = await getStrByName(id)
                console.log(strInfo)
                if (strInfo) {
                    setStoreInfo(strInfo)
                    // check the reviews
                    console.log(strInfo)
                    let reviewsArr = [];

                    strInfo.forEach(strInf => {
                        if (strInf.review && strInf.review != '') {
                            const review = { userName: strInf.user_name, title: strInf.title, review: strInf.review, star: strInf.star }
                            reviewsArr.push(review)
                        }
                    })

                    reviewsArr && setReviews(reviewsArr)

                }
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            getStore();
        }
    }, [id])

    // create reviews presentage
    useEffect(() => {
        let totalStars = 0;
        const totalReviews = reviews.length;

        if (totalReviews > 0) {
            reviews.forEach(review => {
                totalStars += review.star;
            });

            const percentage = (totalStars / (totalReviews * 5)) * 100;
            const roundedPercentage = Math.floor(percentage); // To get integer percentage, no floating points

            setReviewPresentage(roundedPercentage);
        }
    }, [reviews]);


    const storeInformation = () => {
        if (storeInfo) {
            return (
                <div className='store-wrapper '>
                    {/* banner */}
                    <div className='store-banner h-[380px]'>
                        <img className='w-full h-full object-cover' src={storeInfo[0]?.banner_image ? storeInfo[0].banner_image : 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/uploads/banner-placeholder.jpg'} />
                    </div>
                    {/* banner bottom */}
                    <div className='bg-[#f8f8f8]'>
                        <div className='flex justify-between max-w-7xl mr-auto ml-auto py-5 '>
                            {/* first column */}
                            <div className='first-col'>
                                <div className='flex gap-4'>
                                    <img className='h-[150px] w-[150px] object-cover rounded-md' src={storeInfo[0]?.logo ? storeInfo[0].logo : 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/placeholder-image.jpg'} />
                                    <div className='p-4 flex justify-center flex-col'>
                                        <h3 className='text-3xl'>{storeInfo[0]?.store_name ? storeInfo[0].store_name : ''}</h3>
                                        <div className='flex gap-4 items-center'>
                                            <p>{reviews && reviews.length} reseñas</p>
                                            <ul className='flex items-center'>
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <li className='text-2xl' key={index}>
                                                        {index < reviewsPresentage / 20 ? '★' : '☆'}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second column */}
                            <div className='flex items-center'>
                                <p className='text-sm'><img className='w-5 inline-block' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/reviews.svg" /> Buenas reseñas La valoración media de las reseñas es 4,8 o más alta</p>
                            </div>
                            {/* third column */}
                            <div className='flex justify-center flex-col items-center'>
                                <img className='w-10' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/iusa_75x75.39643991_p7ag.webp" />
                                <a className='text-sm'>{storeInfo[0]?.store_name ? storeInfo[0].store_name : ''}</a>
                                <a className='text-sm font-semibold'>Contacto</a>
                            </div>
                        </div>
                    </div>


                    {/* store content */}
                    <div className='max-w-7xl mr-auto ml-auto flex gap-8 py-8'>
                        <div className='lg:w-[30%]'>
                            <h3 className='text-lg font-semibold'>Mensaje de la tienda</h3>
                        </div>
                        <div>
                            {storeInfo[0]?.intro ? storeInfo[0].intro : ''}
                        </div>
                    </div>
                </div>
            )

        } else {

        }
    }

    return (
        <PublicPageContainer>
            {(storeInformation())}
        </PublicPageContainer>
    );
}
