// import { setFavourite, getFavorites } from '../../../lib/actions/products/favourite'
'use client'

import { useEffect, useState } from "react";
import { setFavourite, getFavorites } from '../../../../lib/actions/products/favourite'
import { useRouter } from "next/navigation";
import './singleFeaturedProd.css'

export default function SingleStoreproduct({ product }) {

    // console.clear()
    console.log(product.img_url)

    const [favourites, setFavourites] = useState([]);
    const router = useRouter();

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
                {return_fav_img(product.id)}
            </span>
            <a href="/" onClick={(e)=>{e.preventDefault(); router.push(`/listado?pid=${product.id}`)}}>
                {product.img_url && (
                    <img
                        className="w-full object-cover"
                        src={product.img_url}
                        alt={product.name}
                    />
                )}

                {product.name && (
                    <p className="p-1 mt-2">{product.name}</p>
                )}
                {product.regular_price && (
                    <div className="">
                        <p className="text-green-800 text-lg">{product.sale_price&&product.sale_price}</p>
                        <p className={product.sale_price&&'line-through'}>{product.regular_price}</p>
                    </div>
                )}
            </a>
        </div>
    );
}
