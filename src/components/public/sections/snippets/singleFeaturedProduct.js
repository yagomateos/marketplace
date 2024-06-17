// import { setFavourite, getFavorites } from '../../../lib/actions/products/favourite'
'use client'

import { useEffect, useState } from "react";
import { setFavourite, getFavorites } from '../../../../lib/actions/products/favourite'
import './singleFeaturedProd.css'

export default function SingleFeaturedProduct({ featuredProduct }) {

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

    console.log(favourites);

    const favouritesSet = (what = 'add', product_id) => {
        console.log(what, product_id);

        setFavourites((prevFavourites) => {
            let newFavourites;
            if (what === 'add') {
                newFavourites = [...prevFavourites, product_id];
            } else {
                newFavourites = prevFavourites.filter(id => id !== product_id);
            }
            try {
                setFavourite(what , product_id);
            } catch (error) {
                console.log(error);
            }
            return newFavourites;
        });
    };

    const return_fav_img = (product_id) => {
        if (favourites) {
            if (favourites.indexOf(product_id) !== -1) {
                return (
                    <img 
                        className="w-6" 
                        data-prod_id={product_id} 
                        onClick={() => favouritesSet('remove', product_id)} 
                        src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/heart-filled.svg" 
                        alt="Filled Heart"
                    />
                );
            } else {
                return (
                    <img 
                        className="w-6" 
                        data-prod_id={product_id} 
                        onClick={() => favouritesSet('add', product_id)} 
                        src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/heart.svg" 
                        alt="Empty Heart"
                    />
                );
            }
        } else {
            return (
                <img 
                    className="w-6" 
                    data-prod_id={product_id} 
                    onClick={() => favouritesSet('add', product_id)} 
                    src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/heart.svg" 
                    alt="Empty Heart"
                />
            );
        }
    };

    return (
        <div className="single-featured-product-inner relative cursor-pointer">
            <span className="favorite-product w-8 h-8 bg-white rounded-full flex justify-center items-center absolute top-4 right-4 transition-all translate-y-4 opacity-0 ">
                {return_fav_img(featuredProduct.id)}
            </span>

            {featuredProduct.main_image_url && (
                <img 
                    className="w-full h-36 lg:h-80 object-cover" 
                    src={featuredProduct.main_image_url} 
                    alt={featuredProduct.name}
                />
            )}
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
    );
}
