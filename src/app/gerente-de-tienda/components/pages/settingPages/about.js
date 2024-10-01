import React, { useState } from 'react'

export default function AboutSettings() {
    const [selectedTab, setSelectedTab] = useState(1)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const handleSave = () => {
        setShowSuccessMessage(true)
        setTimeout(() => {
            setShowSuccessMessage(false)
        }, 3000) // Message will disappear after 3 seconds
    }

    return (
        <div className='max-w-5xl'>

            <div>
                <ul className='flex border-b mb-6 border-[#ccc] px-6'>
                    <li><a className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer ${selectedTab == 1 && 'bg-[#f2f2f2]'}`} onClick={(e) => { e.preventDefault(); setSelectedTab(1) }}>Miembros</a></li>
                    <li><a className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer border-l-0 ${selectedTab == 2 && 'bg-[#f2f2f2]'}`} onClick={(e) => { e.preventDefault(); setSelectedTab(2) }}>Historia</a></li>
                </ul>
            </div>

            {selectedTab == 1 ? (
                <div className='w-full text-left flex justify-start items-start flex-col'>
                    <h2 className='text-2xl font-semibold mb-4'>Miembros de la tienda</h2>
                    <p className='mb-2'>Déjanos saber quién ayuda con la creación de tus artículos o la gestión de tu tienda.</p>
                    <p className='mb-6'>Las personas listadas aquí aparecerán en la página pública &quot;Acerca de&quot; de tu tienda.</p>

                    <div className='w-full p-6 border border-[#ccc] rounded-lg'>
                        <h3 className='mb-5'>Crea tu propio perfil</h3>
                        <div className='flex p-4'>
                            <div className='w-full lg:w-[20%] px-4'>
                                <label htmlFor="fileInput">
                                    <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/default_avatar_400x400.png" alt="Owner profile" className='w-32 h-32 rounded-full mb-4 cursor-pointer' />
                                </label>
                                <input id="fileInput" type="file" className="hidden" />
                            </div>
                            <div className='w-full lg:w-[40%] px-4'>
                                <label>Nombre</label>
                                <input className='p-2 border border-[#ccc] w-full' placeholder="Nombre" />
                            </div>
                            <div className='w-full lg:w-[40%] px-4'>
                                <label>Biografía</label>
                                <textarea className='p-2 border border-[#ccc] w-full min-h-[80px]' placeholder="Biografía" />
                            </div>
                        </div>
                        <hr className='my-6' />
                        <div className='flex justify-end'>
                            <button className='py-2 px-5 bg-gray-400 text-white rounded-md cursor-pointer mr-2'>Cancelar</button>
                            <button onClick={handleSave} className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
                        </div>
                        {showSuccessMessage && (
                            <p className='text-green-700 text-sm mt-4'>Cambios guardados con éxito.</p>
                        )}
                    </div>
                </div>
            ) : (
                <>
                    {/* Box 1: Shop Story */}
                    <div className='border border-[#ccc] rounded-lg p-6 mb-6'>
                        <h3 className='mb-4'>Historia de la tienda</h3>
                        <div className='flex mb-4'>
                            <div className='w-full lg:w-[20%] px-4'>
                                <label>Título de la historia</label>
                            </div>
                            <div className='w-full lg:w-[80%] px-4'>
                                <input className='p-2 border border-[#ccc] w-full' placeholder="Escribe el título de la historia" />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-full lg:w-[20%] px-4'>
                                <label>Historia</label>
                            </div>
                            <div className='w-full lg:w-[80%] px-4'>
                                <textarea className='p-2 border border-[#ccc] w-full min-h-[80px]' placeholder="Escribe la historia de la tienda"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Box 2: Shop Video */}
                    <div className='border border-[#ccc] rounded-lg p-6 mb-6'>
                        <div className='flex'>
                            <div className='w-full lg:w-[30%] px-4'>
                                <label>Tienes un video listo para cargar</label>
                            </div>
                            <div className='w-full lg:w-[40%] px-4'>
                                <a href='#' className='underline'>Ver la FAQ del video de la tienda</a>
                            </div>
                            <div className='w-full lg:w-[30%] px-4'>
                                <input type="file" />
                            </div>
                        </div>
                    </div>

                    {/* Box 3: Shop Photos */}
                    <div className='border border-[#ccc] rounded-lg p-6'>
                        <h3 className='mb-2'>Fotos de la tienda</h3>
                        <p className='mb-4'>Sube hasta 10 fotos que representan tu tienda o productos.</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className='w-full'>
                                    <input type="file" className='p-2 border border-[#ccc] w-full' />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cancel and Save buttons */}
                    <div className='flex justify-end mt-6'>
                        <button className='py-2 px-5 bg-gray-400 text-white rounded-md cursor-pointer mr-2'>Cancelar</button>
                        <button onClick={handleSave} className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
                    </div>
                    {showSuccessMessage && (
                        <p className='text-green-700 text-sm mt-4'>Cambios guardados con éxito.</p>
                    )}
                </>
            )}
        </div>
    )
}
