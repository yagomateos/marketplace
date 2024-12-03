import React, { useEffect, useState } from 'react'
import { addStoreManagers, deleteMemberFunc, getStoremanagersFunc, uploadImages } from '../../../../../lib/actions/stores/storeManagers'
import { updateStoreHistoryFunc } from '../../../../../lib/actions/stores/updateStore'
import { getStoresInformationFunc } from '../../../../../lib/actions/stores/getStores'

export default function AboutSettings({ userId }) {
    const [selectedTab, setSelectedTab] = useState(1)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [image, setImage] = useState(null)
    const [userImage, setUserImage] = useState(null)
    const [name, setName] = useState(null)
    const [biology, setBiology] = useState(null)
    const [existingMembers, setExistingMembers] = useState([])
    const [updated, setUpdated] = useState(false)

    const [historyTitle, setHistoryTitle] = useState(null)
    const [historyDesc, setHistoryDesc] = useState(null)


    useEffect(() => {
        // get store managers
        const getStrMembers = async () => {
            try {
                const storeManagers = await getStoremanagersFunc(userId)
                console.clear();
                console.log(storeManagers)
                setExistingMembers(storeManagers)
            } catch (error) {
                console.log(error)
            }
        }

        // get history

        const getHistory = async () => {
            try {
                const storeDta = await getStoresInformationFunc(userId)
                console.clear();
                console.log(storeDta)
                storeDta&&storeDta[0]&&setHistoryTitle(storeDta[0].history_title)
                storeDta&&storeDta[0]&&setHistoryDesc(storeDta[0].history_desc)
            } catch (error) {
                console.log(error)
            }
        }

        if (userId) {
            getStrMembers()
            getHistory()
        }
    }, [userId, updated])


    const setUserImg = (e) => {

        e.preventDefault();
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);

        if (file) {
            setImage(file)
            setUserImage(imageUrl)
        }
    }

    const handleSave = async () => {
        console.clear();
        console.log(image)

        const storeDta = { name: name, bio: biology }
        let uploadedImg = null;

        const imgFormDta = new FormData();
        imgFormDta.append('file', image);

        try {
            const imgUploaded = await uploadImages(imgFormDta)
            console.log(imgUploaded)
            uploadedImg = imgUploaded;
        } catch (error) {
            console.log(error)
        }

        try {
            const storeUpdated = await addStoreManagers(userId, storeDta, uploadedImg)
            console.log(storeUpdated);
            setUpdated(storeUpdated)

            setUserImage(null)
            setName('')
            setBiology('')

            setShowSuccessMessage(true)
            setTimeout(() => {
                setShowSuccessMessage(false)
            }, 3000) // Message will disappear after 3 seconds
        } catch (error) {
            throw error
        }
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.clear();
        try {
            const memberDeleted = await deleteMemberFunc(id)
            setUpdated(parseInt(updated) * -1)
        } catch (error) {
            console.log(error)
        }
    }

    const updateHistory = async (e) => {
        e.preventDefault()
        console.clear();

        try {
            const historyUpdated = await updateStoreHistoryFunc(userId, { title: historyTitle, desc: historyDesc })
            console.log(historyUpdated)
            setShowSuccessMessage(true)
            setTimeout(() => {
                setShowSuccessMessage(false)
            }, 3000) // Message will disappear after 3 seconds
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='max-w-5xl'>

            <div>
                <ul className='flex border-b mb-6 border-[#ccc] lg:px-6'>
                    <li className='min-w-[50%] lg:min-w-max'><a className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer ${selectedTab == 1 && 'bg-[#f2f2f2]'}`} onClick={(e) => { e.preventDefault(); setSelectedTab(1) }}>Miembros</a></li>
                    <li className='min-w-[50%] lg:min-w-max'><a className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer border-l-0 ${selectedTab == 2 && 'bg-[#f2f2f2]'}`} onClick={(e) => { e.preventDefault(); setSelectedTab(2) }}>Historia</a></li>
                </ul>
            </div>

            {selectedTab == 1 ? (
                <div className='w-full text-left flex justify-start items-start flex-col'>
                    <h2 className='text-2xl font-semibold mb-4'>Miembros de la tienda</h2>
                    <p className='mb-2'>Déjanos saber quién ayuda con la creación de tus artículos o la gestión de tu tienda.</p>
                    <p className='mb-6'>Las personas listadas aquí aparecerán en la página pública &quot;Acerca de&quot; de tu tienda.</p>

                    <div className='my-6 w-full'>
                        {existingMembers && existingMembers.map((existingMember, key) => {
                            return <div className='flex justify-between mb-4 border-b border-b-[#ccc] pb-4' key={key}>
                                <div className='w-[10%]'>
                                    <img className='w-16 h-16 rounded-full' src={existingMember.image} />
                                </div>
                                <div className='w-[30%] text-left'>
                                    <h3>{existingMember.name}</h3>
                                </div>
                                <div className='w-[50%] text-left'>{existingMember.bio}</div>
                                <div className='w-[10%] text-right'>
                                    <a href="#" onClick={(e) => handleDelete(e, existingMember.id)}>x</a>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className='w-full p-3 lg:p-6 border border-[#ccc] rounded-lg'>
                        <h3 className='mb-5'>Crea tu propio perfil</h3>
                        <div className='flex flex-col lg:flex-row lg:p-4'>
                            <div className='w-full lg:w-[20%] lg:px-4'>
                                <label htmlFor="fileInput">
                                    <img src={`${userImage ? userImage : 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/default_avatar_400x400.png'}`} alt="Owner profile" className='w-32 h-32 rounded-full mb-4 cursor-pointer' />
                                </label>
                                <input id="fileInput" type="file" onChange={(e) => setUserImg(e)} className="hidden" />
                            </div>
                            <div className='w-full lg:w-[40%] lg:px-4'>
                                <label>Nombre</label>
                                <input className='p-2 border border-[#ccc] w-full' value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" />
                            </div>
                            <div className='w-full lg:w-[40%] lg:px-4 mt-3 lg:mt-0'>
                                <label>Biografía</label>
                                <textarea value={biology} onChange={e => setBiology(e.target.value)} className='p-2 border border-[#ccc] w-full min-h-[80px]' placeholder="Biografía" />
                            </div>
                        </div>
                        <hr className='my-6' />
                        <div className='flex flex-col gap-3 lg:gap-0 lg:flex-row justify-end'>
                            {/* <button className='w-full lg:w-min py-2 px-5 bg-gray-400 text-white rounded-md cursor-pointer mr-2'>Cancelar</button> */}
                            <button onClick={handleSave} className='w-full lg:w-min py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
                        </div>
                        {showSuccessMessage && (
                            <p className='text-green-700 text-sm mt-4'>Cambios guardados con éxito.</p>
                        )}
                    </div>
                </div>
            ) : (
                <>
                    {/* Box 1: Shop Story */}
                    <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 mb-6'>
                        <h3 className='mb-4'>Historia de la tienda</h3>
                        <div className='flex flex-col lg:flex-row mb-4'>
                            <div className='w-full lg:w-[20%] lg:px-4'>
                                <label>Título de la historia</label>
                            </div>
                            <div className='w-full lg:w-[80%] lg:px-4'>
                                <input value={historyTitle} onChange={(e) => { setHistoryTitle(e.target.value) }} className='p-2 border border-[#ccc] w-full' placeholder="Escribe el título de la historia" />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <div className='w-full lg:w-[20%] lg:px-4'>
                                <label>Historia</label>
                            </div>
                            <div className='w-full lg:w-[80%] lg:px-4'>
                                <textarea value={historyDesc} onChange={(e) => { setHistoryDesc(e.target.value) }} className='p-2 border border-[#ccc] w-full min-h-[80px]' placeholder="Escribe la historia de la tienda"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Box 2: Shop Video */}
                    {/* <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 mb-6 overflow-hidden'>
                        <div className='flex flex-col lg:flex-row'>
                            <div className='w-full lg:w-[30%] lg:px-4'>
                                <label className='text-sm lg:text-base'>Tienes un video listo para cargar</label>
                            </div>
                            <div className='w-full lg:w-[40%] lg:px-4'>
                                <a href='#' className='underline text-sm lg:text-base'>Ver la FAQ del video de la tienda</a>
                            </div>
                            <div className='w-full lg:w-[30%] lg:px-4'>
                                <input className='text-sm lg:text-base' type="file" />
                            </div>
                        </div>
                    </div> */}

                    {/* Box 3: Shop Photos */}
                    <div className='border border-[#ccc] rounded-lg p-3 lg:p-6'>
                        <h3 className='mb-2'>Fotos de la tienda</h3>
                        <p className='mb-4 text-sm lg:text-base '>Sube hasta 10 fotos que representan tu tienda o productos.</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className='w-full'>
                                    <input type="file" className=' text-sm lg:text-base p-2 border border-[#ccc] w-full' />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cancel and Save buttons */}
                    <div className='flex flex-col lg:flex-row justify-end mt-6 gap-2 lg:gap-0'>
                        {/* <button className='w-full lg:w-min py-2 px-5 bg-gray-400 text-white rounded-md cursor-pointer mr-2'>Cancelar</button> */}
                        <button onClick={(e) => updateHistory(e)} className='w-full lg:w-min py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
                    </div>
                    {showSuccessMessage && (
                        <p className='text-green-700 text-sm mt-4'>Cambios guardados con éxito.</p>
                    )}
                </>
            )}
        </div>
    )
}
