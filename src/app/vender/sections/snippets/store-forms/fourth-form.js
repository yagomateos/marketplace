import './store-forms.css'

export default function FourthStoreStepForm() {
    return (
        <div className='store-step-form-wrapper bg-[#f2f2f2] relative'>
            <div className='flex flex-wrap'>
                <div className='lg:w-[30%] p-8 '>
                    <ul className=''>
                        <li className='kd-single-prod-step py-3'><a href="basic-info">Información básica</a></li>
                        <li className='kd-single-prod-step py-3'><a>Precio e inventario</a></li>
                        <li className='kd-single-prod-step py-3'><a>Variantes</a></li>
                        <li className='kd-single-prod-step py-3'><a>Etiquetas y atributos</a></li>
                        <li className='kd-single-prod-step py-3'><a>Detalles</a></li>
                        <li className='kd-single-prod-step py-3'><a>Configuración</a></li>
                    </ul>
                </div>

                <div className='lg:w-[70%] p-8'>
                    <h3 className='text-3xl mb-3'>Añade más información</h3>
                    <p>Añade algunas fotos y detalles sobre el artículo. Rellena lo que puedas por ahora, podrás modificarlo más adelante. Obtén más información sobre los tipos de artículos permitidos en Vendalia.</p>

                    <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]" id="basic-info" >
                        <h3 className='text-xl font-semibold'>Información básica</h3>
                        <p className='text-sm mb-6'>Cuéntale al mundo por qué le va a encantar tu artículo.</p>

                        <div>
                            <p className='text-lg'>Título <span className='text-red-700'>*</span></p>
                            <p className='text-sm mb-3'>Incluye palabras clave que los compradores usarían para encontrar este artículo</p>
                            <input className='w-full p-4 rounded-lg border border-[#f2f2f2]' />
                        </div>

                        <div className='mt-3'>
                            <p className='text-lg'>Fotos y vídeo <span className='text-red-700'>*</span></p>
                            <p className='text-sm mb-3'>Añade hasta 10 fotos y 1 vídeo.</p>
                            <div className='border border-dashed border-[#ccc] round-md p-6 relative'>
                                <div class="file-upload-wrapper w-full flex flex-col items-center justify-center ">
                                    <p className='text-center'>Arrastra y suelta, o bien</p>
                                    <button className="file-upload-button ml-auto mr-auto mt-4">Añade hasta 10 fotos y 1 vídeo</button>
                                    <input type="file" class="file-upload-input d-none" accept="image/*,video/*" multiple />
                                </div>
                            </div>
                        </div>

                        <div className='mt-3'>
                            <p className='text-lg'>Descripción  <span className='text-red-700'>*</span></p>
                            <p className='text-sm mb-3'>¿Qué hace que tu artículo sea especial? Los compradores solo verán las primeras líneas a menos que expandan la descripción.</p>
                            <textarea className='border border-{#ccc] w-full rounded-lg' rows="6"></textarea>

                        </div>
                    </div>

                    {/* price information */}

                    <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]" id="price-info" >
                        <h3 className='text-xl font-semibold '>Precio e inventario</h3>
                        <p className='mb-3 text-sm'>Fija un precio e indica el número de unidades disponible.</p>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>Precio  <span className='text-red-700'>*</span></p>
                            <input className='lg:w-50 p-3 border border-[#ccc] rounded-lg' />
                            <span className='absolute left[50%] translate-x-[-120%] top-[50%] '>EUR</span>
                        </div>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>Cantidad  <span className='text-red-700'>*</span></p>
                            <input className='lg:w-50 p-3 border border-[#ccc] rounded-lg' />
                        </div>

                        <div className='relative mt-4'>
                            <p className='text-md text-black'>SKU  <span className='text-red-700'>*</span></p>
                            <input className='lg:w-50 p-3 border border-[#ccc] rounded-lg' />
                        </div>
                    </div>

                    {/* varients */}

                    <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]" id="price-info" >
                        <div className='flex justify-between items-center'>
                            <div>
                                <h3 className='text-xl font-semibold '>Variantes</h3>
                                <p className='mb-3 text-sm'>Si tu artículo está disponible en distintos colores, tallas, tamaños, materiales, etc.</p>
                            </div>
                            <div>
                                <a href="/" className='py-4 px-6 rounded-full border border-[#ccc]'>Añadir variantes</a>
                            </div>
                        </div>
                    </div>

                    {/* tags and attributes */}
                    <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]" id="price-info" >
                        <h3 className='text-xl font-semibold '>Etiquetas y atributos</h3>
                        <p className='mb-3 text-sm'>Describe con precisión el artículo para que sea más fácil encontrarlo en la búsqueda y ayudar a los compradores a hacerse una idea de lo que pueden esperar.</p>

                        <div>
                            <h4>Atributos</h4>
                            <div className='mt-5'>
                                <p className='text-lg'>Tipo de artesanía   <span className='text-red-700'>*</span></p>
                                <p className='text-sm mb-3'>Selecciona hasta 5</p>
                                <input className='w-full p-3 border border-[#ccc] rounded-lg' placeholder='Escribe para buscar…' />
                            </div>

                            <div className='mt-5'>
                                <p className='text-lg'>Material</p>
                                <select className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">Escribe para buscar…</option>
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
                                <select className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">Escribe para buscar…</option>
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
                                <select className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">Escribe para buscar…</option>
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
                                <select className='w-full p-4 border border-[#ccc] rounded-lg'>
                                    <option value="">Escribe para buscar…</option>
                                    <option>Año Nuevo Lunar</option>
                                    <option>Navidad</option>
                                    <option>Cinco de Mayo</option>
                                    <option>Pascua</option>
                                    <option>Día del Padre</option>
                                    <option>Halloween</option>
                                    <option>Janucá</option>
                                    <option>Día de la Independencia</option>
                                    <option>Cuansa</option>
                                    <option>Día de la Madre</option>
                                    <option>Año Nuevo</option>
                                    <option>Día de San Patricio</option>
                                    <option>Acción de Gracias</option>
                                    <option>Pascua judía</option>
                                    <option>San Valentín</option>
                                    <option>Día del Veterano</option>
                                </select>
                            </div>

                            <div className='mt-12'>
                                <p className='text-lg'>Etiquetas</p>
                                <p className='text-sm'>Añade hasta 13 etiquetas para ayudar a las personas que buscan tus artículos.</p>
                                <div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
