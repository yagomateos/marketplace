'use client'

import { useEffect, useState } from 'react'
import '../store-forms.css'
import FileUploader from './snippets/fileUploader'

export default function InventorySecondStep({setProductInfo2} ) {

    const [prodTitle, setProdTitle] = useState(null)
    const [photos, setPhotos] = useState(null)
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [sku, setSku] = useState(null)
    const [material, setMaterial] = useState(null)
    const [maincolor, setMaincolor] = useState(null)
    const [seconcolor, setseconcolor] = useState(null)
    const [festivity, setfestivity] = useState(null)
    const [tags, setTags] = useState([])
    const [materials, setmaterials] = useState([])


    // manage tags
    const [currentTag, setCurrentTag] = useState(null)
    const [currentMat, setCurrentMat] = useState(null)

    const addTagsFunc = (e) => {
        currentTag && tags.indexOf(currentTag) === -1 && setTags([...tags, currentTag])
        e.target.previousElementSibling.value=""
    }

    const removeTags = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    }

    const addMaterialsFunc = (e) => {
        console.log('comes here')
        currentMat && materials.indexOf(currentMat) === -1 && setmaterials([...materials, currentMat])
        e.target.previousElementSibling.value=""
    }

    const removeMaterials = (matToRemove) => {
        setmaterials(materials.filter(mat => mat !== matToRemove));
    }


    useEffect(() => {
        if (prodTitle && photos && description && price && quantity && sku && material && maincolor && seconcolor && festivity && tags && materials) {
            console.log('all good')
            setProductInfo2([prodTitle, photos, description, price, quantity, sku, material, maincolor, seconcolor, festivity, tags, materials])
        }
    }, [prodTitle, photos, description, price, quantity, sku, material, maincolor, seconcolor, festivity, tags, materials])



    return (
        <div className='store-step-form-wrapper bg-[#f2f2f2] relative'>
            <div className='flex flex-wrap'>
                <div className='hidden lg:block lg:w-[30%] p-8 '>
                    <ul className=''>
                        <li className='kd-single-prod-step py-3'><a href="#basic-info">Información básica</a></li>
                        <li className='kd-single-prod-step py-3'><a href="#price-info">Precio e inventario</a></li>
                        {/* <li className='kd-single-prod-step py-3'><a href='#varient-info'>Variantes</a></li> */}
                        <li className='kd-single-prod-step py-3'><a href='#tags-info'>Etiquetas y atributos</a></li>
                        <li className='kd-single-prod-step py-3'><a href='#details-info'>Detalles</a></li>
                        {/* <li className='kd-single-prod-step py-3'><a>Configuración</a></li> */}
                    </ul>
                </div>

                <div className='lg:w-[70%] p-8'>
                    <h3 className='text-2xl lg:text-3xl mb-3'>Añade más información</h3>
                    <p>Añade algunas fotos y detalles sobre el artículo. Rellena lo que puedas por ahora, podrás modificarlo más adelante. Obtén más información sobre los tipos de artículos permitidos en Vendalia.</p>

                    <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]" id="basic-info" >
                        <h3 className='text-xl font-semibold'>Información básica</h3>
                        <p className='text-sm mb-6'>Cuéntale al mundo por qué le va a encantar tu artículo.</p>

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

                        <div className='mt-3'>
                            <p className='text-lg'>Descripción  <span className='text-red-700'>*</span></p>
                            <p className='text-sm mb-3'>¿Qué hace que tu artículo sea especial? Los compradores solo verán las primeras líneas a menos que expandan la descripción.</p>
                            <textarea className='border border-{#ccc] w-full rounded-lg' rows="6" onChange={e => setDescription(e.target.value)}></textarea>

                        </div>
                    </div>

                    {/* price information */}

                    <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]" id="price-info" >
                        <h3 className='text-xl font-semibold '>Precio e inventario</h3>
                        <p className='mb-3 text-sm'>Fija un precio e indica el número de unidades disponible.</p>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>Precio  <span className='text-red-700'>*</span></p>
                            <input type='number' onChange={e => setPrice(e.target.value)} className='lg:w-50 p-3 border border-[#ccc] rounded-lg' />
                            <span className='absolute left[50%] translate-x-[-120%] top-[50%] '>EUR</span>
                        </div>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>Cantidad  <span className='text-red-700'>*</span></p>
                            <input type='number' onChange={e => setQuantity(e.target.value)} className='lg:w-50 p-3 border border-[#ccc] rounded-lg' />
                        </div>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>SKU  <span className='text-red-700'>*</span></p>
                            <input onChange={e => setSku(e.target.value)} className='lg:w-50 p-3 border border-[#ccc] rounded-lg' />
                        </div>
                    </div>

                    {/* varients */}

                    {/* <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]" id="varient-info" >
                        <div className='flex justify-between items-center'>
                            <div>
                                <h3 className='text-xl font-semibold '>Variantes</h3>
                                <p className='mb-3 text-sm'>Si tu artículo está disponible en distintos colores, tallas, tamaños, materiales, etc.</p>
                            </div>
                            <div>
                                <a href="/" className='py-4 px-6 rounded-full border border-[#ccc]'>Añadir variantes</a>
                            </div>
                        </div>
                    </div> */}

                    {/* tags and attributes */}
                    <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]" id="tags-info" >
                        <h3 className='text-xl font-semibold '>Etiquetas y atributos</h3>
                        <p className='mb-3 text-sm'>Describe con precisión el artículo para que sea más fácil encontrarlo en la búsqueda y ayudar a los compradores a hacerse una idea de lo que pueden esperar.</p>

                        <div>
                            <h4>Atributos</h4>
                            {/* <div className='mt-5'>
                                <p className='text-lg'>Tipo de artesanía   <span className='text-red-700'>*</span></p>
                                <p className='text-sm mb-3'>Selecciona hasta 5</p>
                                <input className='w-full p-3 border border-[#ccc] rounded-lg' placeholder='seleccionar…' />
                            </div> */}

                            <div className='mt-5'>
                                <p className='text-lg'>Material</p>
                                <select onChange={e => setMaterial(e.target.value)} className='w-full p-4 border border-[#ccc] rounded-lg'>
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

                    {/* Details */}
                    {/* <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]" id="details-info" >
                        <h3 className='text-xl font-semibold '>Detalles</h3>
                        <p className='mb-3 text-sm'>Comparte algunos detalles más sobre el artículo para que sea más fácil encontrarlo en la búsqueda y ayudar a los compradores a hacerse una idea de lo que pueden esperar.</p>

                        <div>
                            <h4>Información básica </h4>
                            <div className='mt-5 p-4 rounded-lg border border-[#ccc]'>
                                
                            </div>

                            <div className='mt-5'>
                                <p className='text-lg'>Categoría <span className='text-red-700'>*</span></p>
                                <input className='p-3 border border-[#ccc] rounded-full w-full' placeholder='Busca una categoría. Por ejemplo: Sombreros, Anillos, Cojines, etc.' />
                            </div>

                            <div className='mt-5 p-4 rounded-lg border border-[#ccc]'>
                                
                            </div>

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
