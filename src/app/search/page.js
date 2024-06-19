'use client';

import { Suspense, useEffect, useState } from 'react';
import PublicPageContainer from '../../components/containers/publicPageContainer';
import { searchProducts } from '../../lib/actions/search/searchProducts';
import { useRouter, useSearchParams } from 'next/navigation';
import SingleFeaturedProduct from '../../components/public/sections/snippets/singleFeaturedProduct';

function SearchResultComponent() {
    const [result, setResult] = useState(null);
    const [err, setErr] = useState(null)

    const router = useRouter();
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('searchQuery');

    useEffect(() => {
        // Ensure searchQuery is available
        if (searchQuery) {
            console.log(searchQuery);

            const getSearchResults = async () => {
                try {
                    const searchResult = await searchProducts(searchQuery);
                    console.log(searchResult);
                    if (searchResult && searchResult != '') {
                        setResult(searchResult)
                        setErr(null)
                    } else {
                        setResult(null);
                        setErr('no products found')
                    }
                } catch (error) {
                    console.log(error.message);
                    setResult(null)
                    setErr(error.message)
                }
            };

            getSearchResults();

            // You can add any other code that depends on the searchQuery here
        }
    }, [searchQuery]);

    return (
        <PublicPageContainer>
            <div className='container mx-auto my-8 px-4 max-w-7xl sm:px-6 lg:px-8'>
                <div className='flex items-center gap-5 w-full'>
                    {/* if we have result */}
                    {result && result.map((rst, key) => (
                        <SingleFeaturedProduct key={key} featuredProduct={rst} />
                    ))}

                    {/* if there's an error */}
                    {err && (
                        <div className='container flex justify-center w-full'>
                            <div className='w-full lg:w-8/12 py-14 lg:py-[60px] px-4'>
                                <img className='w-full mb-6' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/desert.jpg" />
                                <p className='font-medium text-2xl leading-snug lg:text-3xl mb-4'>No hemos encontrado resultados para {(searchQuery)}</p>
                                <p>Prueba a buscar otra cosa</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PublicPageContainer>
    );
}

export default function SearchResult() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResultComponent />
        </Suspense>
    );
}
