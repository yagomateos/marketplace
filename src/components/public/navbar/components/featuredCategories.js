'use client'

import { useEffect, useState } from 'react';
import { getfeaturedCategories } from '../../../../lib/actions/products/categories'

export default function Featuredcategories() {
    const [featuredCategories, setFeaturedcategories] = useState(null);

    useEffect(() => {
        const fetchFeaturedCategories = async () => {
            try {
                const categories = await getfeaturedCategories(8);
                setFeaturedcategories(categories);
                console.log('here')
            } catch (error) {
                console.log(error);
            }
        };

        fetchFeaturedCategories();
    }, []);

    return (
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 justify-between items-left lg:items-center w-full">
            {featuredCategories && featuredCategories.map((category, key) => (
                <li className='text-sm' key={key}><a href="/">{category.category_name}</a></li>
            ))}
        </ul>
    )
}
