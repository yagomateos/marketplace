

import { useState } from "react";
import { quickSearch } from '../../../../lib/actions/search/quickSearch'

export default function SearchForm() {

    const [searchResults, setSearchResults] = useState(null)

    const quickSearchHandler = async (e) => {
        e.preventDefault();
        console.log(e.target.value)

        if (e.target.value) {
            try {
                let searchResult = await quickSearch(e.target.value);
                searchResult &&  searchResult!=='' ? setSearchResults(searchResult) : setSearchResults(null)
                console.log(searchResult)
            } catch (error) {
                console.log(error)
            }
        }

    }

    return (
        <>
            <form className="w-full relative kd-navbar-search-form rounded-full overflow-hidden" action={'/search'}>
                <input type="text" name="searchQuery" placeholder="Busca lo que se te ocurra" className="border-2 border-zinc-950 px-3 py-2 w-full h-12 rounded-full" onKeyUp={e => quickSearchHandler(e)} />
                <button type="submit" className="search-submit-btn p-1  rounded-full bg-green-500 text-white absolute flex justify-center items-center">
                    <img className='w-4' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/search.svg" />
                </button>
            </form>

            {searchResults && (
                <div className="bg-white py-4 overflow-hidden rounded-2xl absolute w-[90%] top-[120%] shadow-xl shadow-[#00000025]">
                    <ul>
                        {searchResults.map((res , key) => {
                            return (<li key={key}><a className="py-3 px-6 block hover:bg-[#00000025]" href="/">{res.category_name}</a></li>)
                        })}
                    </ul>

                </div>
            )}
        </>

    )
}
