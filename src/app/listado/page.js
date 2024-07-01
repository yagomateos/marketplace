'use client';

import { Suspense, useEffect, useState } from 'react';
import PublicPageContainer from '../../components/containers/publicPageContainer';
import { useRouter, useSearchParams } from 'next/navigation';
import { gtProductsByIds } from '../../lib/actions/products/getProducts'; // Ensure this path is correct
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

function ListingFunc() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pid = searchParams.get('pid');

    const [product, setProduct] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [err, setErr] = useState(null);

    useEffect(() => {
        if (pid) {
            const getProductInfo = async () => {
                try {
                    const productInst = await gtProductsByIds(`${pid}`);
                    setProduct(productInst);

                    // Set lightbox images
                    if (productInst && productInst[0] && productInst[0].main_image_url) {
                        setLightboxImages([{ src: productInst[0].main_image_url, alt: productInst[0].name }]);
                    }
                } catch (error) {
                    console.log(error);
                    setErr('Error fetching product');
                }
            };

            getProductInfo();
        }
    }, [pid]);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <PublicPageContainer>
            <div className='container mx-auto my-8 px-4 max-w-7xl sm:px-6 lg:px-8'>
                <div className='flex items-center gap-5 w-full'>
                    {product ? (
                        <div className='py-12 px-4 flex justify-center items-center'>
                            <div className='flex justify-between items-start gap-4 lg:max-w-7xl'>
                                <div className='w-full lg:w-[55%]'>
                                    <div className='px-12'>
                                        {product[0] && product[0].main_image_url && (
                                            <img
                                                src={product[0].main_image_url}
                                                alt={product[0].name}
                                                onClick={() => openLightbox(0)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className='lg:w-[45%] w-full'>
                                    <div>
                                        <h2 className='text-3xl font-bold'>{product[0] && product[0].name}</h2>
                                        <p className='text-sm mb-4'>{product[0] && product[0].category_name}</p>
                                        <p className='text-md text-green-700'>
                                            {product[0] && product[0].availability === 1
                                                ? "En stock"
                                                : (<span className='text-red-700'>Artículo excepcional</span>)}
                                        </p>
                                        {product[0] && product[0].sale_price ? (
                                            <h2>
                                                <span className='text-green-700 font-semibold text-4xl mr-4'>
                                                    EUR {product[0].sale_price}
                                                </span>
                                                {product[0].regular_price && (
                                                    <small className='line-through text-sm'>
                                                        EUR {product[0].regular_price}
                                                    </small>
                                                )}
                                            </h2>
                                        ) : (
                                            <h2>
                                                {product[0] && product[0].regular_price && ('EUR' + product[0].regular_price)}
                                            </h2>
                                        )}
                                        <p className='mt-5'>{product[0] && product[0].description}</p>
                                        <div>
                                            <a href="/" className='flex justify-center items-center py-3 px-6 bg-transparent border-2 border-black rounded-full text-black lg:my-6'> Comprar ahora</a>
                                            <a href="/" className='flex justify-center items-center py-3 px-6 border-2 border-black rounded-full text-white bg-black lg:my-6'> Añadir al carrito</a>
                                            <a href="/" className='flex justify-center items-center py-3 px-6 transition-all ease-linear hover:bg-[#f2f2f2] rounded-full text-black lg:my-6'>
                                                <img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/heart-filled.svg" alt="Filled Heart" />
                                                &nbsp;  Añadir a una colección
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='container flex justify-center w-full'>
                            <div className='w-full lg:w-8/12 py-14 lg:py-[60px] px-4'>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={lightboxImages}
                currentIndex={currentImageIndex}
                onIndexChange={setCurrentImageIndex}
            />
        </PublicPageContainer>
    );
}

export default function Listing() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ListingFunc />
        </Suspense>
    );
}
