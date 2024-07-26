'use client'

import { useEffect, useState } from "react"
import { categorySearchFunc } from '../../../../../../lib/actions/search/categorySearch'

export default function InventoryFirstStep({ setProductInfo1 }) {


    const [categories, setCategories] = useState(null)

    const [selectedCategory, setselectedCategory] = useState(null)
    const [selectedCategoryName, setselectedCategoryName] = useState(null)
    const [productType, setProductType] = useState(null)
    const [productVendor, setProductVendor] = useState(null)
    const [whatProduct, setWhatProduct] = useState(null)
    const [productAge, setProductAge] = useState(null)

    const searchCategories = async (e) => {
        const query = e.target.value

        if (query) {
            try {
                const categories = await categorySearchFunc(query)
                console.log(categories)
                setCategories([...categories])
            } catch (error) {
                console.log(error)
            }
        }
    }

    const setValueWithPopup = (value , name) => {
        setselectedCategory(value)
        setselectedCategoryName(name)
        setCategories(null)
    }

    useEffect(() => {
        if (selectedCategory && productAge && productType && productVendor && whatProduct) {

            setProductInfo1([selectedCategory, productAge, productType, productVendor, whatProduct])
        }

        console.clear()
        console.log(selectedCategory)

    }, [selectedCategory, productAge, productType, productVendor, whatProduct])


    console.log(selectedCategory, productAge, productType, productVendor, whatProduct)

    return (
        <div className='store-step-form-wrapper px-3  ml-auto mr-auto'>
            <h2 className='text-left text-xl lg:text-3xl mb-4'>Cuéntanos qué es tu artículo</h2>
            <p className='pb-4 text-sm lg:text-md lg:text-left'>Esta información básica ayuda a Vendalia a entender los aspectos más básicos de tu anuncio y cómo cumple nuestras políticas. <a href="">Obtén más información sobre los tipos de artículos permitidos en Vendalia.es.</a></p>

            <div className='store-step-form-box-wrapper p-2 lg:p-8 my-3 bg-[#f2f2f2] rounded-xl'>
                <div className='left w-full text-sm'>
                    <form>
                        <div className='lg:flex gap-4 flex-wrap mb-6 relative'>
                            <label className="font-semibold">Categoría <span className="text-red-700">*</span></label>
                            <input value={selectedCategoryName} onKeyUp={e => searchCategories(e)} className="border border-[#ccc] w-full p-3 rounded-full bg-transparent" placeholder="Busca una categoría. Por ejemplo: Sombreros, Anillos, Cojines, etc." />

                            {categories && (
                                <div className="absolute bg-white border border-[#ccc] px-4 top-[100%] w-full">
                                    <ul>
                                        {
                                            categories.map((cat, key) =>
                                            (
                                                <li className="cursor-pointer py-3" key={key} onClick={(e) => { setValueWithPopup(cat.id , cat.category_name) }}>{(cat.category_name)}</li>
                                            )
                                            )

                                        }
                                    </ul>
                                </div>
                            )}

                        </div>
                        <div>
                            <label className="mb-3 block font-semibold">¿Qué tipo de artículo es? <span className="text-red-700">*</span></label>
                            <div className="flex justify-between gap-4">
                                <div className="w-full lg:w-[49%] border border-[#000] p-4 rounded-2xl">
                                    <div className="text-right"><input onChange={(e) => setProductType(e.target.value)} name="product-type" type="radio" /></div>
                                    <div>
                                        <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/physical-product.svg" className="w-20" />
                                        <h4 className="text-xl mt-3 font-medium">Artículo físico</h4>
                                        <p className="text-sm">Un artículo tangible que enviarás a los compradores.</p>
                                    </div>
                                </div>

                                <div className="w-full lg:w-[49%] border border-[#000] p-4 rounded-2xl">
                                    <div className="text-right"><input onChange={(e) => setProductType(e.target.value)} name="product-type" type="radio" /></div>
                                    <div>
                                        <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/digital-product.svg" className="w-20" />
                                        <h4 className="text-xl mt-3 font-medium">Artículo digital</h4>
                                        <p className="text-sm">Un producto digital que los compradores podrán descargar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="mb-3 block font-semibold">¿Quién lo hizo? <span className="text-red-700">*</span></label>
                            <ul>
                                <li><input value="me" type="radio" name="who-did-it" onChange={(e) => setProductVendor(e.target.value)} /> &nbsp; Lo hice yo</li>
                                <li><input value="Store-member" type="radio" name="who-did-it" onChange={(e) => setProductVendor(e.target.value)} /> &nbsp; Un miembro de mi tienda</li>
                                <li><input value="another-person" type="radio" name="who-did-it" onChange={(e) => setProductVendor(e.target.value)} /> &nbsp; Otra empresa o persona</li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <label className="mb-3 block font-semibold">¿Qué es?  <span className="text-red-700">*</span></label>
                            <ul>
                                <li><input type="radio" value="finished-product" onChange={(e) => setWhatProduct(e.target.value)} name="what-is-it" /> &nbsp; Un producto acabado</li>
                                <li><input type="radio" value="material" onChange={(e) => setWhatProduct(e.target.value)} name="what-is-it" /> &nbsp; Un material o una herramienta para hacer cosas</li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <label className="mb-3 block font-semibold">¿Cuándo se hizo?  <span className="text-red-700">*</span></label>
                            <select onChange={(e) => setProductAge(e.target.value)} name="when-it-done" className="w-full p-4 border border-[#ccc] rounded-xl">
                                <option value="">¿Cuándo lo hiciste?</option>
                                <optgroup label="Aún no se ha hecho">
                                    <option value="made_to_order">Hecho por encargo</option>
                                </optgroup>
                                <optgroup label="Recientemente">
                                    <option value="2020_2024">2020 - 2024</option>
                                    <option value="2010_2019">2010 - 2019</option>
                                    <option value="2005_2009">2005 - 2009</option>
                                </optgroup>
                                <optgroup label="Vintage"><option value="before_2005">Antes de 2005</option>
                                    <option value="2000_2004">2000 - 2004</option>
                                    <option value="1990s">Década de 1990</option>
                                    <option value="1980s">Década de 1980</option>
                                    <option value="1970s">Década de 1970</option>
                                    <option value="1960s">Década de 1960</option>
                                    <option value="1950s">Década de 1950</option>
                                    <option value="1940s">Década de 1940</option>
                                    <option value="1930s">Década de 1930</option>
                                    <option value="1920s">Década de 1920</option>
                                    <option value="1910s">Década de 1910</option>
                                    <option value="1900s">1900 - 1909</option>
                                    <option disabled="" value="1800s">Siglo XIX</option>
                                    <option disabled="" value="1700s">Siglo XVIII</option>
                                    <option disabled="" value="before_1700">Antes de XVIII</option>
                                </optgroup>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
