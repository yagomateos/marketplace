import React, { useEffect, useState } from 'react'
import FileUploader from '../../../../vender/sections/snippets/store-forms/inventory-steps/snippets/fileUploader'
import { UploadMultipleImgs } from '../../../../../lib/utils/uploadImg'
import { updarteProductFunc } from '../../../../../lib/actions/products/updateProduct'


export default function EditListing({ selectedProduct, setEditListing }) {
    const [productType, setProductType] = useState(null)
    const [productVendor, setProductVendor] = useState(null)
    const [whatProduct, setWhatProduct] = useState(null)
    const [productAge, setProductAge] = useState(null)
    const [popupErr, setPopupErr] = useState(null)
    const [prodTitle, setProdTitle] = useState(null)
    const [photos, setPhotos] = useState(null)
    const [price, setPrice] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [sku, setSku] = useState(null)
    const [categories, setCategories] = useState(null)
    const [selectedCategoryName, setselectedCategoryName] = useState(null)
    const [tags, setTags] = useState([])
    const [material, setMaterial] = useState(null)
    const [maincolor, setMaincolor] = useState(null)
    const [seconcolor, setseconcolor] = useState(null)
    const [festivity, setfestivity] = useState(null)
    const [materials, setmaterials] = useState([])
    const [fileObjects, setFileObjects] = useState(null)

    const [selectedCategory, setselectedCategory] = useState(null)

    const [currentTag, setCurrentTag] = useState(null)
    const [currentMat, setCurrentMat] = useState(null)

    const addTagsFunc = (e) => {
        currentTag && tags.indexOf(currentTag) === -1 && setTags([...tags, currentTag])
        e.target.previousElementSibling.value = ""
    }

    const removeTags = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    }

    const addMaterialsFunc = (e) => {
        console.log('comes here')
        currentMat && materials.indexOf(currentMat) === -1 && setmaterials([...materials, currentMat])
        e.target.previousElementSibling.value = ""
    }

    const removeMaterials = (matToRemove) => {
        setmaterials(materials.filter(mat => mat !== matToRemove));
    }


    console.log(selectedProduct)

    useEffect(() => {
        if (selectedProduct) {
            selectedProduct.name && setProdTitle(selectedProduct.name)
            selectedProduct.product_type && setProductType(selectedProduct.product_type)
            selectedProduct.who_did_it && setProductVendor(selectedProduct.who_did_it)
            selectedProduct.what_product && setWhatProduct(selectedProduct.what_product)
            selectedProduct.regular_price && setPrice(parseFloat(selectedProduct.regular_price))
            selectedProduct.quantity && setQuantity(selectedProduct.quantity)
            selectedProduct.SKU && setSku(selectedProduct.SKU)
            selectedProduct.category_name && setselectedCategoryName(selectedProduct.category_name)
            selectedProduct.tags && setTags(selectedProduct.tags)
            selectedProduct.material && setMaterial(selectedProduct.material)
            selectedProduct.main_color && setMaincolor(selectedProduct.main_color)
            selectedProduct.second_color && setseconcolor(selectedProduct.second_color)
            selectedProduct.festivity && setfestivity(selectedProduct.festivity)
            selectedProduct.materials && setmaterials(selectedProduct.materials)
        }

    }, [selectedProduct])



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

    const setValueWithPopup = (value, name) => {
        setselectedCategory(value)
        setselectedCategoryName(name)
        setCategories(null)
    }

    const submitEditFunc = async (e) => {
        e.preventDefault()
        console.clear();
        console.log(prodTitle, price, quantity, sku, selectedCategoryName, material, maincolor, seconcolor, festivity, tags, materials)
        console.log(fileObjects)
        const fileObjectsFormDta = new FormData();
        fileObjects.forEach((file, index) => {
            fileObjectsFormDta.append(`file${index + 1}`, file); // `file1`, `file2`, etc.
        });

        try {
            const updateProduct = await updarteProductFunc(null , fileObjectsFormDta)
            console.log(updateProduct)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='w-full relative'>
            {/* create listing */}
            <div>
                <div className='mb-6 p-3'>
                    <a className='underline' href='#' onClick={e => { e.preventDefault(); setEditListing(false) }}> Volver a los listados</a>
                    <h2 className='mt-3 text-3xl font-semibold'><a target='blank' href={`/listado/?pid=${selectedProduct.id}`}>{selectedProduct.name}</a></h2>
                </div>

                <div>
                    <ul className='flex border-b mb-6 border-[#ccc] px-6'>
                        <li><a className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer `} href="#about-box">Acerca de</a></li>
                        <li><a className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer border-l-0 `} href="#price-box">Variaciones</a></li>
                        <li><a className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer border-l-0 `} href="#details-box">Detalles</a></li>
                    </ul>
                </div>

                <div className='p-5'>
                    {/* about box */}
                    <div id='about-box' className='p-6 bg-white border border-[#c5c5c5] rounded-2xl'>
                        <h2 className='text-2xl font-semibold'>Acerca de</h2>
                        <p>Cuéntanos sobre tu artículo y por qué les encanta.</p>
                        <div>
                            <p className='text-lg'>Título <span className='text-red-700'>*</span></p>
                            <p className='text-sm mb-3'>Incluye palabras clave que los compradores usarían para encontrar este artículo</p>
                            <input value={prodTitle} onChange={e => setProdTitle(e.target.value)} className='w-full p-4 rounded-lg border border-[#f2f2f2]' />
                        </div>

                        <div className='mt-3'>
                            <p className='text-lg'>Fotos y vídeo <span className='text-red-700'>*</span></p>
                            <p className='text-sm mb-3'>Añade hasta 7 fotos. (Se recomiendan 980 px x 1180 px)</p>
                            <div className='border border-dashed border-[#ccc] round-md p-6 relative'>
                                <div class="file-upload-wrapper w-full flex flex-col items-center justify-center ">
                                    <p className='text-center'>Arrastra y suelta, o bien</p>
                                    <FileUploader setPhotos={setPhotos} setFileObjects={setFileObjects} />

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* price information */}

                    <div id="price-box" className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]"  >
                        <h3 className='text-xl font-semibold '>Precio e inventario</h3>
                        <p className='mb-3 text-sm'>Fija un precio e indica el número de unidades disponible.</p>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>Precio  <span className='text-red-700'>*</span></p>
                            <input type='number' value={price} onChange={e => setPrice(e.target.value)} className='lg:w-50 p-3 border border-[#ccc] rounded-lg' />
                            <span className='absolute left[50%] translate-x-[-120%] top-[50%] '>EUR</span>
                        </div>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>Cantidad  <span className='text-red-700'>*</span></p>
                            <input type='number' value={quantity} onChange={e => setQuantity(e.target.value)} className='lg:w-50 p-3 border border-[#ccc] rounded-lg' />
                        </div>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>SKU  <span className='text-red-700'>*</span></p>
                            <input onChange={e => setSku(e.target.value)} className='lg:w-50 p-3 border border-[#ccc] rounded-lg' />
                        </div>
                    </div>

                    {/* details box */}
                    <div id="details-box" className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]"  >
                        <h3 className='text-xl font-semibold '>Detalles</h3>
                        <p className='mb-3 text-sm'>Comparta algunos detalles más de su artículo para que sea más fácil encontrarlo en la búsqueda y ayude a los compradores a saber qué esperar.</p>

                        <h3 className='text-lg font-semibold'>Detalles básicos</h3>
                        <div className='p-4 border border-[#c5c5c5] mt-3 rounded-xl lg:max-w-[70%]'>
                            {productType == "physical" ? <div className='flex gap-6 items-center'>
                                <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/physical-product.svg" className="w-20" />
                                <div>
                                    <h4 className="text-xl mt-3 font-medium">Artículo físico</h4>
                                    <p className="text-sm">Un artículo tangible que enviarás a los compradores.</p>
                                </div>

                            </div> : <div className='flex gap-6 items-center'>
                                <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/digital-product.svg" className="w-20" />
                                <div>
                                    <h4 className="text-xl mt-3 font-medium">Artículo digital</h4>
                                    <p className="text-sm">Un producto digital que los compradores podrán descargar.</p>
                                </div>

                            </div>}
                        </div>

                        {/* categories */}
                        <div className='lg:flex gap-4 flex-wrap mb-6 mt-6 relative'>
                            <label className="font-semibold">Categoría <span className="text-red-700">*</span></label>
                            <input value={selectedCategoryName} onKeyUp={e => searchCategories(e)} className="border border-[#ccc] w-full p-3 rounded-full bg-transparent" placeholder="Busca una categoría. Por ejemplo: Sombreros, Anillos, Cojines, etc." />

                            {categories && (
                                <div className="absolute bg-white border border-[#ccc] px-4 top-[100%] w-full">
                                    <ul>
                                        {
                                            categories.map((cat, key) =>
                                            (
                                                <li className="cursor-pointer py-3" key={key} onClick={(e) => { setValueWithPopup(cat.id, cat.category_name) }}>{(cat.category_name)}</li>
                                            )
                                            )

                                        }
                                    </ul>
                                </div>
                            )}

                        </div>

                        <hr />
                        <div className='mt-6'>
                            <h3 className='text-xl font-semibold '>Atributos</h3>

                            <div className='mt-5'>
                                <p className='text-lg'>Material</p>
                                <select value={material} onChange={e => setMaterial(e.target.value)} className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">seleccionar…</option>
                                    <option value='Plata'>Plata</option>
                                    <option value='Acero inoxidable'>Acero inoxidable</option>
                                    <option value='Acero'>Acero</option>
                                    <option value='Fibra sintética'>Fibra sintética</option>
                                    <option value='Estaño'>Estaño</option>
                                    <option value='Titanio'>Titanio</option>
                                    <option value='Oro blanco'>Oro blanco</option>
                                    <option value='Madera'>Madera</option>
                                </select>
                            </div>

                            <div className='mt-5'>
                                <p className='text-lg'>Color principal</p>
                                <select value={maincolor} onChange={e => setMaincolor(e.target.value)} className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">seleccionar…</option>
                                    <option value="Negro">Negro</option>
                                    <option value="Azul">Azul</option>
                                    <option value="Marrón">Marrón</option>
                                    <option value="Verde">Verde</option>
                                    <option value="Gris">Gris</option>
                                    <option value="Naranja">Naranja</option>
                                    <option value="Rosa">Rosa</option>
                                    <option value="Morado">Morado</option>
                                    <option value="Rojo">Rojo</option>
                                    <option value="Blanco">Blanco</option>
                                    <option value="Amarillo">Amarillo</option>
                                    <option value="Beis">Beis</option>
                                    <option value="Oro">Oro</option>
                                    <option value="Plata">Plata</option>
                                    <option value="Bronce">Bronce</option>
                                    <option value="Oro rosa">Oro rosa</option>
                                    <option value="Cobre">Cobre</option>
                                    <option value="Transparente">Transparente</option>
                                    <option value="Arcoíris">Arcoíris</option>
                                </select>
                            </div>

                            <div className='mt-5'>
                                <p className='text-lg'>Color secundario</p>
                                <select value={seconcolor} onChange={e => setseconcolor(e.target.value)} className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">seleccionar…</option>
                                    <option value="Negro">Negro</option>
                                    <option value="Azul">Azul</option>
                                    <option value="Marrón">Marrón</option>
                                    <option value="Verde">Verde</option>
                                    <option value="Gris">Gris</option>
                                    <option value="Naranja">Naranja</option>
                                    <option value="Rosa">Rosa</option>
                                    <option value="Morado">Morado</option>
                                    <option value="Rojo">Rojo</option>
                                    <option value="Blanco">Blanco</option>
                                    <option value="Amarillo">Amarillo</option>
                                    <option value="Beis">Beis</option>
                                    <option value="Oro">Oro</option>
                                    <option value="Plata">Plata</option>
                                    <option value="Bronce">Bronce</option>
                                    <option value="Oro rosa">Oro rosa</option>
                                    <option value="Cobre">Cobre</option>
                                    <option value="Transparente">Transparente</option>
                                    <option value="Arcoíris">Arcoíris</option>
                                </select>
                            </div>

                            <div className='mt-5'>
                                <p className='text-lg'>Festividad</p>
                                <select value={festivity} onChange={e => setfestivity(e.target.value)} className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">seleccionar…</option>
                                    <option value="Año Nuevo Lunar">Año Nuevo Lunar</option>
                                    <option value="Navidad">Navidad</option>
                                    <option value="Cinco de Mayo">Cinco de Mayo</option>
                                    <option value="Pascua">Pascua</option>
                                    <option value="Día del Padre">Día del Padre</option>
                                    <option value="Halloween">Halloween</option>
                                    <option value="Janucá">Janucá</option>
                                    <option value="Día de la Independenci">Día de la Independencia</option>
                                    <option value="Cuansa">Cuansa</option>
                                    <option value="Día de la Madre">Día de la Madre</option>
                                    <option value="Año Nuevo">Año Nuevo</option>
                                    <option value="Día de San Patricio">Día de San Patricio</option>
                                    <option value="Acción de Gracias">Acción de Gracias</option>
                                    <option value="Pascua judía">Pascua judía</option>
                                    <option value="San Valentín">San Valentín</option>
                                    <option value="Día del Veterano">Día del Veterano</option>
                                </select>
                            </div>

                            <div className='mt-12'>
                                <p className='text-lg'>Etiquetas</p>
                                <p className='text-sm'>Añade hasta 13 etiquetas para ayudar a las personas que buscan tus artículos.</p>
                                <div>
                                    <input onChange={e => setCurrentTag(e.target.value)} className='p-3 border border-[#ccc] inline-block mr-3 lg:mr-8 mt-5 rounded-lg w-2/3 lg:w-3/5' placeholder='Forma, color, estilo, función, etc.' />
                                    <a className="cursor-pointer" onClick={(e) => { e.preventDefault(); addTagsFunc(e) }}>Añadir</a>
                                </div>
                                <div className='flex flex-row flex-wrap mt-3'>
                                    {tags && tags.map((tag, key) => (
                                        <div className='p-4 border rounded-md relative' key={key} onClick={() => removeTags(tag)} style={{ cursor: 'pointer', margin: '0 5px' }}>
                                            {tag}
                                            <span className='absolute right-[50x] top-[5px] text-xs'>X</span>
                                        </div>

                                    ))}
                                </div>
                            </div>

                            <div className='mt-12'>
                                <p className='text-lg'>Materiales</p>
                                <p className='text-sm'>Los compradores valoran la transparencia: explícales que has usado para crear tu producto.</p>
                                <div>
                                    <input onChange={e => setCurrentMat(e.target.value)} className='p-3 border border-[#ccc] inline-block mr-3 lg:mr-8 mt-5 rounded-lg w-2/3 lg:w-3/5' placeholder='Forma, color, estilo, función, etc.' />
                                    <a className="cursor-pointer" onClick={(e) => { e.preventDefault(); addMaterialsFunc(e) }}>Añadir</a>
                                </div>

                                <div className='flex flex-row flex-wrap mt-3'>
                                    {materials && materials.map((mat, key) => (
                                        <div className='p-4 border rounded-md relative' key={key} onClick={() => removeMaterials(mat)} style={{ cursor: 'pointer', margin: '0 5px' }}>
                                            {mat}
                                            <span className='absolute right-[50x] top-[5px] text-xs'>X</span>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                <div className='flex justify-end'>
                    <a href="" className='py-3 px-6 bg-black text-white rounded-full' onClick={(e) => { submitEditFunc(e) }}>Publicar</a>
                </div>

            </div>
        </div >
    )
}
