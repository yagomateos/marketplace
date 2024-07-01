'use client';

import React, { Suspense, useEffect, useState } from 'react';
import PublicPageContainer from '../../components/containers/publicPageContainer';
import { useSearchParams } from 'next/navigation';
import { getProductsByCategoryID } from '../../lib/actions/products/getProducts';
import SingleFeaturedProduct from '../../components/public/sections/snippets/singleFeaturedProduct';

function CategoryFunc() {
    const searchParams = useSearchParams();
    const catId = searchParams.get('catid');
    const [products, setProducts] = useState(null);
    const [catename, setCatName] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        if (catId) {
            const getProducts = async () => {
                try {
                    const products = await getProductsByCategoryID(catId);
                    setProducts(products);
                    if (products && products.length > 0) {
                        setCatName(products[0].category_name);
                    }
                } catch (error) {
                    console.log(error);
                    setProducts(null);
                    setErr('Error fetching products');
                }
            };

            getProducts();
        }
    }, [catId]);

    return (
        <PublicPageContainer>
            <div className='container mx-auto my-8 px-4 max-w-7xl sm:px-6 lg:px-8'>
                <div className="lg:flex gap-4 justify-start items-center">
                    {catename && <h1 className='text-3xl'>{catename}</h1>}
                    {products && (
                        <span className='text-sm'>
                            {'\u0028'}más de {products.length} resultados relevantes, incluye anuncios{'\u0029'}
                        </span>
                    )}
                </div>

                {products ? (
                    <>
                        <div className='py-4 lg:flex justify-between items-center'>
                            <div className='mb-4 lg:mb-0 flex gap-4 items-center'>
                                <span className='border border-[#ccc] py-2 px-4 rounded-full cursor-pointer'>
                                    precio <span className='text-xs'>{'\u25BC'}</span>
                                </span>
                            </div>
                            <div>
                                <span className='border border-[#ccc] py-2 px-4 rounded-full cursor-pointer'>
                                    Ordenar por: Relevancia <span className='text-xs'>{'\u25BC'}</span>
                                </span>
                            </div>
                        </div>

                        <div className="w-full grid gap-4 grid-cols-2 lg:grid-cols-4">
                            {products.map((product, key) => (
                                <SingleFeaturedProduct key={key} featuredProduct={product} />
                            ))}
                        </div>
                    </>
                ) : (
                    err && (
                        <div className='container flex justify-center w-full'>
                            
                        </div>
                    )
                )}
            </div>
        </PublicPageContainer>
    );
}

export default function Category() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CategoryFunc />
        </Suspense>
    );
}
