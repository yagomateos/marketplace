'use client'

import React, { Suspense, useEffect, useState } from 'react'
import PublicPageContainer from '../../components/containers/publicPageContainer';
import { useRouter, useSearchParams } from 'next/navigation';
import { getProductsByCategoryID } from '../../lib/actions/products/getProducts'
import SingleFeaturedProduct from '../../components/public/sections/snippets/singleFeaturedProduct';

function CategoryFunc() {
    const searchParams = useSearchParams();
    const catId = searchParams.get('catid')
    const [products, setProducts] = useState(null)
    const [catename, setCatName] = useState(null)

    useEffect(() => {

        if (catId) {
            const getProducts = async () => {
                try {
                    const products = await getProductsByCategoryID(catId)
                    setProducts(products)
                    products && products.length > 0 && setCatName(products[0].category_name)

                } catch (error) {
                    setProducts(null)
                }
            }

            getProducts()
        }

    }, [catId])


    console.log(products, catename)

    return (
        <PublicPageContainer>
            <div className='py-8 px-4 lg:max-w-7xl ml-auto mr-auto'>
                <div>
                    <div className="lg:flex gap-4 justify-start items-center">
                        {catename && (<h1 className='text-3xl'>{(catename)}</h1>)}
                        {products && (<span className='text-sm'>{'\u0028'}más de {products.length} resultados relevantes, incluye anuncios{'\u0029'}</span>)}
                    </div>


                    {products ? (
                        <>
                            {/* // filters */}
                            <div className='py-4 lg:flex justify-between items-center'>
                                <div className='mb-4 lg:mb-0 flex gap-4 items-center'>
                                    <span className='border border-[#ccc] py-2 px-4 rounded-full cursor-pointer'>precio <span className='text-xs'>{'\u25BC'}</span></span>
                                </div>

                                <div>
                                    <span className='border border-[#ccc] py-2 px-4 rounded-full cursor-pointer'>Ordenar por: Relevancia <span className='text-xs'>{'\u25BC'}</span></span>
                                </div>
                            </div>

                            {/* show featured product here */}

                            <div class="w-full grid gap-4 grid-cols-2 lg:grid-cols-4" bis_skin_checked="1">
                                {products && products.map((product, key) =>
                                    (<SingleFeaturedProduct key={key} featuredProduct={product} />)
                                )}
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>


        </PublicPageContainer>

    )
}

export default function Category() {
    <Suspense fallback={<div>Loading...</div>}>
        <CategoryFunc />
    </Suspense>
}
