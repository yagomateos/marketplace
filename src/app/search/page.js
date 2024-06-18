'use client';

import { useEffect, useState } from 'react';
import PublicPageContainer from '../../components/containers/publicPageContainer';
import { searchProducts } from '../../lib/actions/search/searchProducts';
import { useRouter, useSearchParams } from 'next/navigation';
import SingleFeaturedProduct from '../../components/public/sections/snippets/singleFeaturedProduct';

export default function SearchResult() {

    const [result, setResult] = useState(null)

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
                    console.log(searchResult)
                    searchResult && searchResult != '' ? setResult(searchResult) : setResult(null)
                } catch (error) {
                    console.log(error)
                }
            }

            getSearchResults();

            // You can add any other code that depends on the searchQuery here
        }
    }, [searchQuery]);

    return (
        <PublicPageContainer>
            <div className='container mx-auto my-8 px-4 max-w-7xl sm:px-6 lg:px-8'>
                <div className='flex items-center gap-5 w-full'>
                    {result && result.map((rst, key) => {

                        return <SingleFeaturedProduct key={key} featuredProduct={rst} />

                    })}
                </div>
            </div>
        </PublicPageContainer>
    );
}
