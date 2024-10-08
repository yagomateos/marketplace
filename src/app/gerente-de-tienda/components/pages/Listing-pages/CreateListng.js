import { useState } from 'react'
import ProductFormFirst from '../../../../../components/admin/ProductFormFirst'
import FileUploader from '../../../../vender/sections/snippets/store-forms/inventory-steps/snippets/fileUploader'
import { categorySearchFunc } from '../../../../../lib/actions/search/categorySearch'

export default function CreateListng({ createPopup, setCreatePopup, setCreateListing }) {

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

    const [selectedCategory, setselectedCategory] = useState(null)

    console.log(selectedCategory, selectedCategoryName)

    const popupSubmit = (e) => {
        e.preventDefault();
        console.log(productType)
        if (productType &&
            productVendor &&
            whatProduct &&
            productAge) {
            setCreatePopup(false)
        } else {
            setPopupErr('Por favor, rellene todos los campos obligatorios')
        }
    }

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

    return (
        <div className='w-full relative'>
            {/* popup */}
            {createPopup &&
                <div className='fixed w-full h-full min-h-screen bg-[#00000061] left-0 top-0 z-10 flex justify-center items-center'>
                    <div className='w-full lg:w-[40%] bg-white rounded-lg p-6'>
                        <h2>Primero, cuéntenos sobre su anuncio.</h2>
                        <p>Esta información básica nos ayuda a comprender sus listados y cómo cumplen con nuestras políticas.</p>
                        <ProductFormFirst setProductType={setProductType}
                            setProductVendor={setProductVendor}
                            setWhatProduct={setWhatProduct}
                            setProductAge={setProductAge} />

                        {/* popup footer */}
                        <div className='flex justify-between mt-8'>
                            <a href="#" onClick={(e) => {
                                e.preventDefault(); setCreatePopup(false);
                                setCreateListing(false)
                            }}>Cancelar</a>
                            <a className='py-3 px-6 bg-black text-white rounded-full' onClick={(e) => { popupSubmit(e); }} href="#">Continuar</a>
                        </div>

                        {popupErr && <div className='text-green-700 text-sm'>{popupErr}</div>}
                    </div>
                </div>
            }
            {/* create listing */}
            <div>
                <div className='mb-6 p-3'>
                    <a className='underline' href='#' onClick={e => { e.preventDefault(); setCreateListing(false) }}> Volver a los listados</a>
                    <h2 className='mt-3 text-lg lg:text-3xl leading-tight font-semibold'>Nuevo listado</h2>
                </div>

                <div className='w-full'>
                    <ul className='flex w-full flex-col lg:flex-row border-b mb-6 border-[#ccc] lg:px-6'>
                        <li><a className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer `} href="#about-box">Acerca de</a></li>
                        <li><a className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer lg:border-l-0 `} href="#price-box">Variaciones</a></li>
                        <li><a className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer lg:border-l-0 `} href="#details-box">Detalles</a></li>
                    </ul>
                </div>

                <div className='p-0 lg:p-5'>
                    {/* about box */}
                    <div id='about-box' className='w-full p-3 lg:p-6 bg-white border border-[#c5c5c5] rounded-2xl'>
                        <h2 className='text-2xl font-semibold'>Acerca de</h2>
                        <p>Cuéntanos sobre tu artículo y por qué les encanta.</p>
                        <div>
                            <p className='text-lg'>Título <span className='text-red-700'>*</span></p>
                            <p className='text-sm mb-3'>Incluye palabras clave que los compradores usarían para encontrar este artículo</p>
                            <input onChange={e => setProdTitle(e.target.value)} className='w-full p-4 rounded-lg border border-[#f2f2f2]' />
                        </div>

                        <div className='mt-3'>
                            <p className='text-lg'>Fotos y vídeo <span className='text-red-700'>*</span></p>
                            <p className='text-sm mb-3'>Añade hasta 7 fotos. (Se recomiendan 980 px x 1180 px)</p>
                            <div className='border border-dashed border-[#ccc] round-md p-6 relative'>
                                <div class="file-upload-wrapper w-full flex flex-col items-center justify-center ">
                                    <p className='text-center'>Arrastra y suelta, o bien</p>
                                    <FileUploader setPhotos={setPhotos} />

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* price information */}

                    <div id="price-box" className="bg-white rounded-2xl p-3 lg:p-6 mt-6 border border-[#c5c5c5] w-ful"  >
                        <h3 className='text-xl font-semibold '>Precio e inventario</h3>
                        <p className='mb-3 text-sm'>Fija un precio e indica el número de unidades disponible.</p>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>Precio  <span className='text-red-700'>*</span></p>
                            <input type='number' onChange={e => setPrice(e.target.value)} className='lg:w-50 w-full p-3 border border-[#ccc] rounded-lg' />
                            <span className='absolute left[50%] translate-x-[-120%] top-[50%] '>EUR</span>
                        </div>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>Cantidad  <span className='text-red-700'>*</span></p>
                            <input type='number' onChange={e => setQuantity(e.target.value)} className='lg:w-50 w-full p-3 border border-[#ccc] rounded-lg' />
                        </div>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>SKU  <span className='text-red-700'>*</span></p>
                            <input onChange={e => setSku(e.target.value)} className='lg:w-50 w-full p-3 border border-[#ccc] rounded-lg' />
                        </div>
                    </div>

                    {/* details box */}
                    <div id="details-box" className="bg-white rounded-2xl p-3 lg:p-6 mt-6 border border-[#c5c5c5]"  >
                        <h3 className='text-xl font-semibold '>Detalles</h3>
                        <p className='mb-3 text-sm'>Comparta algunos detalles más de su artículo para que sea más fácil encontrarlo en la búsqueda y ayude a los compradores a saber qué esperar.</p>

                        <h3 className='text-lg font-semibold'>Detalles básicos</h3>
                        <div className='p-4 border border-[#c5c5c5] mt-3 rounded-xl lg:max-w-[70%]'>
                            {productType == "physical" ? <div className='flex flex-col lg:flex-row gap-6 items-center'>
                                <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/physical-product.svg" className="w-20" />
                                <div>
                                    <h4 className="text-xl mt-3 font-medium">Artículo físico</h4>
                                    <p className="text-sm">Un artículo tangible que enviarás a los compradores.</p>
                                </div>

                            </div> : <div className='flex flex-col lg:flex-row gap-6 items-center'>
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
                                <select onChange={e => setMaterial(e.target.value)} className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">seleccionar…</option>
                                    <option>Plata</option>
                                    <option>Acero inoxidable</option>
                                    <option>Acero</option>
                                    <option>Fibra sintética</option>
                                    <option>Estaño</option>
                                    <option>Titanio</option>
                                    <option>Oro blanco</option>
                                    <option>Madera</option>
                                </select>
                            </div>

                            <div className='mt-5'>
                                <p className='text-lg'>Color principal</p>
                                <select onChange={e => setMaincolor(e.target.value)} className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">seleccionar…</option>
                                    <option>Negro</option>
                                    <option>Azul</option>
                                    <option>Marrón</option>
                                    <option>Verde</option>
                                    <option>Gris</option>
                                    <option>Naranja</option>
                                    <option>Rosa</option>
                                    <option>Morado</option>
                                    <option>Rojo</option>
                                    <option>Blanco</option>
                                    <option>Amarillo</option>
                                    <option>Beis</option>
                                    <option>Oro</option>
                                    <option>Plata</option>
                                    <option>Bronce</option>
                                    <option>Oro rosa</option>
                                    <option>Cobre</option>
                                    <option>Transparente</option>
                                    <option>Arcoíris</option>
                                </select>
                            </div>

                            <div className='mt-5'>
                                <p className='text-lg'>Color secundario</p>
                                <select onChange={e => setseconcolor(e.target.value)} className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">seleccionar…</option>
                                    <option>Negro</option>
                                    <option>Azul</option>
                                    <option>Marrón</option>
                                    <option>Verde</option>
                                    <option>Gris</option>
                                    <option>Naranja</option>
                                    <option>Rosa</option>
                                    <option>Morado</option>
                                    <option>Rojo</option>
                                    <option>Blanco</option>
                                    <option>Amarillo</option>
                                    <option>Beis</option>
                                    <option>Oro</option>
                                    <option>Plata</option>
                                    <option>Bronce</option>
                                    <option>Oro rosa</option>
                                    <option>Cobre</option>
                                    <option>Transparente</option>
                                    <option>Arcoíris</option>
                                </select>
                            </div>

                            <div className='mt-5'>
                                <p className='text-lg'>Festividad</p>
                                <select onChange={e => setfestivity(e.target.value)} className='w-full p-4 border border-[#ccc] rounded-lg'>
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

                <div className='flex justify-end mt-2'>
                    <a href="" className='py-3 px-6 bg-black text-white rounded-full'>Publicar</a>
                </div>

            </div>
        </div >
    )
}
