'use client';

import { useSession } from 'next-auth/react';
import Swiper from 'swiper';
import './product-page.css'
import { Suspense, useEffect, useState } from 'react';
import PublicPageContainer from '../../components/containers/publicPageContainer';
import { useRouter, useSearchParams } from 'next/navigation';
import { gtProductsByIds, getProductImages } from '../../lib/actions/products/getProducts'; // Ensure this path is correct
import { getReviewsFunc } from '../../lib/actions/reviews/getReviews'
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import FeaturedProducts from '../../components/public/sections/featured-products';
import { addToCartFunc } from '../../lib/actions/cart/addToCart'
import { setFavourite, getFavorites } from '../../lib/actions/products/favourite'
import { useAppContext } from '../context/AppContext';

function ListingFunc() {

    const searchParams = useSearchParams();
    const pid = searchParams.get('pid');

    const { state, dispatch } = useAppContext();

    const [product, setProduct] = useState(null);

    const [mainImg, setMainImg] = useState(null);
    const [galleryImgs, setGalleryImgs] = useState([])
    const [allImages , setAllImages] = useState([])

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [err, setErr] = useState(null);
    const [reviews, setReviews] = useState(null)
    const [reviewsAmount, setReviewsAmount] = useState(null)
    const [reviewsPresentage, setReviewsPresentage] = useState(null)

    const [moreInfoOpened, setMoreInfoOpened] = useState(true)
    const [shippingInfoOpened, setShippingOpened] = useState(null)

    const [availableQuantity, setAvailableQuantity] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [cartError, setCartError] = useState(null)

    const router = useRouter();
    const { data: session } = useSession()

    // favorites
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {

        try {
            const favouriteProds = getFavorites();
            console.log(favouriteProds);
            setFavourites(favouriteProds);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const favouritesSet = (what = 'add', product_id) => {
        setFavourites((prevFavourites) => {
            let newFavourites;
            if (what === 'add') {
                newFavourites = [...prevFavourites, product_id];
            } else {
                newFavourites = prevFavourites.filter(id => id !== product_id);
            }
            try {
                setFavourite(what, product_id);
            } catch (error) {
                console.log(error);
            }
            return newFavourites;
        });
    };

    const return_fav_Button = (product_id) => {
        if (favourites) {
            if (favourites.indexOf(product_id) !== -1) {
                return (
                    <a href="/" onClick={(e) => { e.preventDefault(); favouritesSet('remove', product_id) }} className={`flex justify-center items-center py-3 px-6 transition-all ease-linear hover:bg-[#f2f2f2] rounded-full text-black lg:my-6`} >
                        <img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/heart-filled.svg" alt="Filled Heart" />
                        &nbsp;  Añadir a una colección
                    </a>
                );
            } else {
                return (
                    <a href="/" onClick={(e) => { e.preventDefault(); favouritesSet('add', product_id) }} className={`flex justify-center items-center py-3 px-6 transition-all ease-linear hover:bg-[#f2f2f2] rounded-full text-black lg:my-6`} >
                        <img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/heart.svg" alt="Empty Heart" />
                        &nbsp;  Añadir a una colección
                    </a>
                );
            }
        } else {
            return (
                <a href="/" onClick={(e) => { e.preventDefault(); favouritesSet('add', product_id) }} className={`flex justify-center items-center py-3 px-6 transition-all ease-linear hover:bg-[#f2f2f2] rounded-full text-black lg:my-6`} >
                <img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/heart.svg" alt="Empty Heart" />
                &nbsp;  Añadir a una colección
            </a>
            );
        }
    };

    const singleCheckout = (itemId , sale_price = '' , regular_price = 0 , name=null)=>{
        console.clear();
        console.log()
        dispatch({ type: 'SET_CHECKOUT_ITEM', payload: { checkoutItem:  {Id : itemId , sale_price : sale_price , regular_price:regular_price , cartQuantity:quantity , name:name } , checkoutType:'single' , checkoutQty : quantity } });
        router.push('/verificar')
    }


    useEffect(() => {
        if (pid) {

            // get product information
            const getProductInfo = async () => {
                try {
                    const productInst = await gtProductsByIds(`${pid}`);
                    console.clear();
                    console.log(productInst)
                    productInst && setProduct(productInst);
                    productInst && productInst[0] && setAvailableQuantity(productInst[0].quantity);

                    // Set lightbox images
                    if (productInst && productInst[0] && productInst[0].main_image_url) {

                        const allImgs = []
                        setMainImg(productInst[0].main_image_url)
                        allImgs.push(productInst[0].main_image_url)

                        if(productInst[0].gallery_images){
                            const galleryImgs = productInst[0].gallery_images.split(",")
                            setGalleryImgs(galleryImgs)
                            allImgs.push(...galleryImgs)
                        }


                        console.clear()
                        console.log(allImgs)
                        setAllImages(allImgs)
                        // get other images
                        // try {
                        //     const galleryImages = await getProductImages(`${pid}`)
                        //     console.clear()
                        //     console.log(galleryImages)
                        //     setGalleryImgs([{ image_url: productInst[0].main_image_url }, ...galleryImages])
                        // } catch (err) {
                        //     console.log(err)
                        // }

                    }
                } catch (error) {
                    setErr('Error fetching product');
                }
            };

            // get reviews information
            const getReviews = async () => {
                try {
                    const reviews = await getReviewsFunc(pid);
                    setReviews(reviews)
                } catch (error) {
                    console.log(err)
                }
            }

            getProductInfo();
            getReviews();
        }
    }, [pid]);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    useEffect(() => {
        if (galleryImgs.length > 0) {
            const lightBoxImgs = []
            if (lightboxImages.length < 2) {
                galleryImgs.forEach(galImg => {
                    lightBoxImgs.push({
                        src: galImg,
                        alt: ''
                    })
                })

                setLightboxImages(lightBoxImgs)
            }

        } else {
            setLightboxImages([{ src: mainImg, alt: '' }]);
        }

        // console.clear();
        console.log(lightboxImages)

    }, [mainImg, galleryImgs])

    const sortLightBox = (imageurl) => {

        console.clear();
        console.log(imageurl)
        // Copy the lightboxImages array to avoid mutating the original array
        const lightBoxImgGal = [...lightboxImages];

        // Find the item with the matching image_url
        const matchingItemIndex = lightBoxImgGal.findIndex(item => item.src === imageurl);

        // If the item is found, move it to the front of the array
        if (matchingItemIndex !== -1) {
            const [matchingItem] = lightBoxImgGal.splice(matchingItemIndex, 1);
            lightBoxImgGal.unshift(matchingItem);
        }

        setLightboxImages(lightBoxImgGal);

        // console.clear()
        console.log(lightBoxImgGal)
        console.log(lightboxImages)
    };


    useEffect(() => {
        if (typeof window !== 'undefined') {
            new Swiper('.gallery-imgs-wrapper', {
                loop: true,
                direction: 'vertical',
                slidesPerView: 4,
                spaceBetween: 30,
                freeMode: true,
            });

        }
    }, [galleryImgs]);


    useEffect(() => {
        if (reviews && reviews.length > 0) {
            let totalStars = 0;
            let allReviews = reviews.length;

            reviews.forEach((review) => {
                totalStars += review.star;
            });

            const averageStars = totalStars / allReviews;
            setReviewsAmount(allReviews);
            setReviewsPresentage(averageStars);
        } else {
            setReviewsAmount(0);
            setReviewsPresentage(0);
        }
    }, [reviews]);


    // useEffect(() => {
    //     console.clear()
    //     console.log(product)

    // }, [product])

    const updateQuantity = (e) => {
        e.preventDefault();
        if (availableQuantity > e.target.value) {
            setQuantity(e.target.value)
            setCartError(null)
        } else {
            setQuantity(0)
            setCartError('no hay suficiente cantidad')
        }
    }

    const addToCart = async (e) => {
        e.preventDefault();
        // update cart
        if (session && quantity > 0) {
            const data = {
                product_id: product[0].id,
                user_id: session.user.id,
                quantity: quantity
            }

            try {
                const addedToCart = await addToCartFunc(data)
                if (addedToCart) {
                    console.log(addedToCart)
                    router.push('/carro')

                    // update redux state or context in cart
                }
            } catch (error) {
                setCartError('¡Carrito no actualizado! Intentar otra vez')
            }

            console.log(data)
        }

    }


    const renderStars = (percentage) => {
        const fullStars = Math.floor(percentage);
        const halfStar = percentage % 1 !== 0;
        const emptyStars = 5 - Math.ceil(percentage);

        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <span key={index} className="star filled">&#9733;</span>
                ))}
                {/* {halfStar && <span className="star half">&#9733;</span>} */}
                {[...Array(emptyStars)].map((_, index) => (
                    <span key={index} className="star">&#9733;</span>
                ))}
            </>
        );
    };

    const renderReviews = () => {

        if (reviews && reviews.length > 0) {
            return (
                <>
                    <div className='reviews mt-10 flex items-center justify-between mb-5'>
                        <h3 className='text-3xl font-light text-gray-700'>{(reviewsAmount)} reseñas de productos</h3>
                        <div>
                            {renderStars(reviewsPresentage)}
                        </div>
                    </div>

                    {reviews.map((review, key) => (
                        <div key={key} className='py-6 border-b border-[#ccc]'>
                            {renderStars(review.star)}
                            <div>
                                {review.review}
                            </div>
                            <div>
                                <p>{review.user_name}</p>

                            </div>
                        </div>
                    ))}
                </>
            )
        } else {
            return (
                <div className='reviews mt-10 flex items-center justify-between mb-5'>
                    <h3 className='text-3xl font-light text-gray-700'>0 reseñas de productos</h3>
                    <div>
                        {renderStars(0)}
                    </div>
                </div>)

        }

    }

    const renderProductForm = () => {

        if (product[0].quantity && product[0].quantity > 0) {
            return (
                <div>
                    <input onChange={(e) => updateQuantity(e)} className='p-3 mt-5 w-full rounded-lg border border-black' type='number' max={product[0].quantity} min={0} placeholder='Cantidad' />
                    <a href="/" onClick={(e)=>{e.preventDefault(); singleCheckout(product[0].id , product[0].sale_price , product[0].regular_price , product[0].name )}} className='flex justify-center items-center py-3 px-6 bg-transparent border-2 border-black rounded-full text-black my-3 lg:my-6'> Comprar ahora</a>
                    <a href="/" onClick={(e) => { addToCart(e) }} className={`flex justify-center items-center py-3 px-6 border-2 border-black rounded-full text-white ${cartError ? 'bg-[#ccc] cursor-text' : 'bg-black cursor-pointer'} my-3 lg:my-6`} > Añadir al carrito</a>
                    {return_fav_Button(product[0].id)}

                    {cartError && <div className='text-red-700 text-sm mt-4'>{cartError}</div>}
                </div>)
        } else {
            return (
                <div>
                    <p className='text-red-700 text-lg mb-3'>Agotado</p>
                    <a disabled className='flex justify-center items-center py-3 px-6 bg-transparent border-2 border-black rounded-full text-[#ccc] lg:my-6'> Comprar ahora</a>
                    <a disabled className='flex justify-center items-center py-3 px-6 border-2 border-black rounded-full text-white bg-[#f2f2f2] lg:my-6'> Añadir al carrito</a>

                </div>)
        }
    }


    return (
        <>
            <div className='container mx-auto my-8 px-4 max-w-7xl sm:px-6 lg:px-8'>
                <div className='flex items-center gap-5 w-full'>
                    {product ? (
                        <div className='py-12 px-4 flex justify-center items-center'>
                            <div className='lg:flex justify-between items-start gap-4 lg:max-w-7xl'>
                                <div className='w-full lg:w-[55%]'>
                                    <div className='lg:px-12'>
                                        <div className='flex flex-row'>

                                            <div className='gallery-imgs-wrapper w-[20%] lg:h-[600px] max-h-[460px] overflow-hidden lg:pr-5 pr-3'>
                                                <div className="swiper-wrapper">
                                                    {allImages && allImages.map((galImg, key) => (
                                                        <div key={key} className='swiper-slide'>
                                                            <a href="/" onClick={(e) => { e.preventDefault(); setMainImg(galImg); sortLightBox(galImg) }}><img src={galImg} className='w-full h-[100px] object-cover' /></a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className='w-[80%]'>
                                                {product[0] && product[0].main_image_url && (
                                                    <img className='w-full'
                                                        src={mainImg}
                                                        alt={product[0].name}
                                                        onClick={() => openLightbox(0)}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {/* reviews */}

                                        {renderReviews()}

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
                                        {/* <p className='mt-5'>{product[0] && product[0].description}</p> */}
                                        <p className='mt-5'>{product[0] && product[0].tags}</p>

                                        {renderProductForm()}

                                        {/* other product information */}
                                        <div>
                                            <ul>

                                                <li><a className={`${moreInfoOpened && ('bg-[#ccc]')} text-lg font-semibold flex justify-between p-4 rounded-full bg-transparent hover:bg-[#ccc] text-black block`} onClick={(e) => setMoreInfoOpened(!moreInfoOpened)}><p>detalles del artículo</p> &nbsp; <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/angle-right.svg" className='w-[20px]' /></a></li>
                                                {moreInfoOpened && (
                                                    <div className='p-4 mt-3'>
                                                        <h3 className='text-md font-semibold'>Puntos destacables</h3>
                                                        <p>Hecho por <a className='underline' href={`/tiendas/${product[0] && product[0].store_id}`}>{product[0] && product[0].store_name}</a></p>
                                                        <h3 className='text-md font-semibold mt-3'>Sobre este artículo</h3>
                                                        {product[0] && product[0].description}
                                                    </div>
                                                )}

                                                <li><a className={`${shippingInfoOpened && ('bg-[#ccc]')} text-lg font-semibold flex justify-between p-4 rounded-full bg-transparent hover:bg-[#ccc] text-black block`} onClick={(e) => setShippingOpened(!shippingInfoOpened)}><p>Políticas de envío y devolución</p> &nbsp; <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/angle-right.svg" className='w-[20px]' /></a></li>
                                                {shippingInfoOpened &&
                                                    (
                                                        <div className='p-4 mt-3'>
                                                            Envío en España: 5-10€ (3-5 días), Baleares: 7-15€ (4-6 días), Canarias, Ceuta, Melilla: 10-20€ (5-7 días). Envío gratuito en pedidos superiores a 50€ Seguimiento proporcionado en todos los pedidos.
                                                        </div>
                                                    )
                                                }

                                            </ul>
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

                {/* more items */}
                <div>
                    <FeaturedProducts />
                </div>
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={lightboxImages}
                currentIndex={currentImageIndex}
                onIndexChange={setCurrentImageIndex}
            />
        </>
    );
}

export default function Listing() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PublicPageContainer>
                <ListingFunc />
            </PublicPageContainer>
        </Suspense>
    );
}
