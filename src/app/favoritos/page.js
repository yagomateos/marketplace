'use client'
import React, { useEffect, useState } from 'react';
import { getFavorites } from '../../lib/actions/products/favourite';
import PublicPageContainer from '../../components/containers/publicPageContainer';
import { gtProductsByIds } from '../../lib/actions/products/getProducts';
import SingleFeaturedProduct from '../../components/public/sections/snippets/singleFeaturedProduct';

export default function FavoritesComponent() {

    const [favourites, setFavourites] = useState(null)
    const [favouriteProducts, setFavproducts] = useState(null)
    const [err, setErr] = useState(null)

    useEffect(() => {
        const checkFavourites = async () => {
            try {
                const favourites = await getFavorites();
                // You can add more logic here to handle the retrieved favorites
                console.log(favourites);
                setFavourites(favourites)
                setErr(null)
            } catch (error) {
                setErr(error.message)
                setFavourites(null)
                // console.log(error);
            }
        };

        checkFavourites();
    }, []); // Empty dependency array ensures this runs once after the initial render

    useEffect(() => {

        const getFavouriteProducts = async () => {
            if (favourites && favourites.length > 0) {
                const productIdsString = favourites.join(',');

                try {
                    let favouriteProducts = await gtProductsByIds(productIdsString)
                    setFavproducts(favouriteProducts)
                } catch (error) {
                    setFavproducts(null)
                    setErr(error.message)
                }

            }else{
                setFavproducts(null)
                setErr('no favourites found')
            }
        }

        getFavouriteProducts();

    }, [favourites])


    return (
        <PublicPageContainer>
            <div className='w-full flex p-8 justify-center'>
                <div className='flex items-center gap-5 w-8/12'>

                    {/* if favourite products are there */}
                    {favouriteProducts && favouriteProducts.map(favouriteprod => (
                            <SingleFeaturedProduct featuredProduct={favouriteprod} />

                    ))}

                    {/* if an error */}
                    {err && (
                        <div className='text-center flex justify-center flex-col items-center w-full lg:py-[50px]'>
                            <img className='w-24' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/not-found.svg" />
                            <p className='text-xl lg:text-3xl mb-4 lg:mb-6'>Aún no hay nada por aquí</p>
                            <p>Empieza a marcar artículos como favorito para comparar, comprar y llevar el control de todo lo que te gusta.</p>
                        </div>
                    )}
                </div>
            </div>
        </PublicPageContainer>

    );
}
