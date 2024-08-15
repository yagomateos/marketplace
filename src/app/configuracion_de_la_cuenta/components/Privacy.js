'use client'
import React, { useState } from 'react'

export default function Privacy({ setStep }) {

    const [resentAdsSuccess, setrecentAdsSuccess] = useState(null)
    const [downloadDtaSuccess, setDownloadDtaSuccess] = useState(null)
    const [deleteDataSuccess, setDeleteDataSuccess] = useState(null)

    const handleRecentAds = async (e) => {
        e.preventDefault();
        setTimeout(() => {
        setrecentAdsSuccess('¡Solicitado exitosamente!')
        },1000);

    }

    const handleDownload = async (e) => {
        e.preventDefault();
        setTimeout(() => {
            setDownloadDtaSuccess('¡Solicitado exitosamente!')
        }, 1000);
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        setTimeout(() => {
            setDeleteDataSuccess('¡Solicitado exitosamente!')
        }, 1000);
    }

    console.clear()
    console.log(resentAdsSuccess,
        downloadDtaSuccess,
        deleteDataSuccess)

    return (
        <>
            {/* first box */}
            <div className="p-4 rounded-lg border border-[#ccc] mb-4">
                <h3 className="text-2xl font-semibold mb-4">Artículos que has visto recientemente</h3>
                <p>Si borras tus anuncios vistos recientemente, dejaremos de mostrarlos en el sitio. Seguiremos registrando los que veas en el futuro.</p>
                <a onClick={(e) => handleRecentAds(e)} className="p-1 text-center lg:p-2 border-2 border-[#000] rounded-full mt-8 inline-block cursor-pointer">Borrar anuncios vistos recientemente</a>
                {resentAdsSuccess && <div className='mt-3 text-sm text-green-700'>{resentAdsSuccess}</div>}
            </div>
            {/* second box */}
            <div className="p-4 rounded-lg border border-[#ccc] mb-4">
                <h3 className="text-2xl font-semibold mb-4">Descargar datos</h3>
                <p>Descarga un archivo ZIP con tu información personal de Vendalia, en formato CSV y JSON.</p>
                <a onClick={(e) => handleDownload(e)} className="p-1 text-center lg:p-2 border-2 border-[#000] rounded-full mt-8 inline-block cursor-pointer">Solicitar la descarga de mis datos</a>
                {downloadDtaSuccess && <div className='mt-3 text-sm text-green-700'>{downloadDtaSuccess}</div>}
            </div>
            {/* third box */}
            <div className="p-4 rounded-lg border border-[#ccc] mb-4">
                <h3 className="text-2xl font-semibold mb-4">Cierra y elimina de forma permanente tu cuenta de Vendalia</h3>
                <p>Cierra y elimina tu cuenta de forma permanente. Una vez eliminada, no se puede recuperar.</p>
                <a onClick={(e) => handleDelete(e)} className="p-1 text-center lg:p-2 border-2 border-[#000] rounded-full mt-8 inline-block cursor-pointer">Solicitar la eliminación de mis datos</a>
                {deleteDataSuccess && <div className='mt-3 text-sm text-green-700'>{deleteDataSuccess}</div>}
            </div>
            {/* fourth box */}
            <div className="p-4 rounded-lg border border-[#ccc] mb-4">
                <h3 className="text-2xl font-semibold mb-4">Configuración de la privacidad</h3>
                <h4 className="text-lg font-semibold mb-4">¿Quieres que te encuentren?</h4>
                <span className='flex w-full justify-between'><p>¿Quieres que otros puedan ver tu dirección de correo electrónico? Se mostrará públicamente.</p> <input type='radio' /></span>
                <b className='mt-3 block'>Consentimiento</b>
                <p className='text-sm'>Etsy usa cookies y tecnologías similares para ofrecerte una mejor experiencia al permitir lo siguiente:</p>
                <ul className='text-sm mt-3'>
                    <li>Funciones básicas del sitio</li>
                    <li>Garantizar transacciones seguras</li>
                    <li>Acceder a tu cuenta de forma segura</li>
                    <li>Recordar la cuenta, el explorador y las preferencias regionales</li>
                    <li>Recordar la configuración de privacidad y seguridad</li>
                    <li>Analizar el tráfico y el uso del sitio</li>
                    <li>Búsqueda, contenido y recomendaciones personalizadas</li>
                    <li>Ayudar a los vendedores a entender a su audiencia</li>
                    <li>Mostrar anuncios pertinentes y segmentados dentro y fuera de Etsy</li>
                </ul>
                <p className='text-sm mt-3'>Puedes encontrar más información en la <a href="/politica-de-privacidad" className='underline'> política de privacidad de Vendalia.</a></p>

                <b className='mt-3 block'>Cookies y tecnologías necesarias</b>

                <p className='text-sm mt-3'>Algunas de las tecnologías que usamos son necesarias para funciones básicas como la seguridad y la integridad del sitio, la autenticación de la cuenta, las preferencias de seguridad y privacidad, datos internos de uso del sitio y mantenimiento, y para que el sitio funcione correctamente mientras exploras y durante las transacciones.</p>

                <b className='mt-3 block'>Personalización del sitio</b>
                <span className='flex w-full justify-between'><p>Usamos cookies y tecnologías similares para mejorar tu experiencia en cuestiones como:</p> <input type='radio' /></span>
                <ul className='text-sm mt-3'>
                    <li>Recordar el inicio de sesión y las preferencias generales y regionales</li>
                    <li>Personalizar el contenido, la búsqueda, las recomendaciones y las ofertas</li>
                </ul>

                <p className='text-sm mt-3'>Sin estas tecnologías, funciones como las recomendaciones personalizadas, las preferencias de la cuenta o la localización podrían no funcionar correctamente. Obtén más información en nuestra <a href="/politica-de-privacidad" className='underline'> política de privacidad de Vendalia.</a></p>

                <span className='flex w-full justify-between mt-3'><b className='block'>Publicidad personalizada</b> <input type='radio' /></span>
                <p className='text-sm mt-3'>Para activar la publicidad personalizada (como anuncios basados en intereses), podremos compartir tus datos con nuestros socios de marketing y de publicidad usando cookies y otras tecnologías. Esos socios pueden tener información propia que hayan recopilado sobre ti. Desactivar el ajuste de publicidad personalizada no evitará que veas los anuncios de Vendalia, pero hará que los anuncios que ves sean menos relevantes o más repetitivos.</p>

                {/* <a onClick={() => setStep(2)} className="p-2 border-2 border-[#000] rounded-full mt-8 inline-block cursor-pointer">Actualizar configuración</a> */}

            </div>
        </>
    )
}
