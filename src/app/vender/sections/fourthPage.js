'use client'

import React, { useState } from 'react'

export default function FourthPage({ setStep, options, setOptions }) {

    const [err, setErr] = useState(null)

    const setOptionsFunc = (e) => {
        const value = e.target.value
        const newOptions = [...options, value]
        console.log(newOptions)
        setOptions(newOptions)
    }

    const changeStep = (what) => {
        if (what == 'submit') {
            options.length > 0 ? setStep(4) : setErr('por favor selecciona una opcion')
        } else {
            setOptions('skipped')
            setStep(4)
        }
    }

    return (
        <div className='flex'>
            <div className='w-[50%] fourthpage-left bg-cover bg-center hidden lg:block'>

            </div>
            <div className='w-full lg:w-[50%] py-12 px-[12%]'>
                <h2 className='text-3xl'>¿Necesitas ayuda con algo?</h2>
                <p className='mt-3'>Elige todos los temas que quieras. Compartiremos recursos para ayudarte a crecer.</p>
                <div className='mt-4 flex flex-wrap gap-4'>
                    <div className='w-[46%]  lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox' value="decide-what-to-sell" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/neckless.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>
                    </div>
                    <div className='w-[46%] lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox' value="store-name-and-branding" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/speaker.svg" />
                            <p className="mb-4">Nombre y branding de la tienda</p>
                        </div>
                    </div>
                    <div className='w-[46%] lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox' value="selling-on-internet" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/internet.svg" />
                            <p className="mb-4">Vender por Internet</p>
                        </div>
                    </div>
                    <div className='w-[46%] lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox' value="photography" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/camera.svg" />
                            <p className="mb-4">Fotografiar mis artículos</p>
                        </div>
                    </div>
                    <div className='w-[46%] lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox' value="appear-in-search" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/magnifire.svg" />
                            <p className="mb-4">Aparecer en la búsqueda</p>
                        </div>
                    </div>
                    <div className='w-[46%] lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox' value="packaging" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/box.svg" />
                            <p className="mb-4">Embalaje y envío</p>
                        </div>
                    </div>
                    <div className='w-[46%] lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox' value="pricing" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/price-tag.svg" />
                            <p className="mb-4">Poner precio a mis artículos</p>
                        </div>
                    </div>
                    <div className='w-[46%] lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox' value="understanding-rates" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/finance.svg" />
                            <p className="mb-4">Entender mis finanzas y tarifas</p>
                        </div>
                    </div>
                    <div className='w-[46%] lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg single-help-box'>
                        <input type='checkbox' value="importing-existing-products" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/import.svg" />
                            <p className="mb-4">Importar a Vendalia anuncios que ya tengo</p>
                        </div>
                    </div>
                    <div className='w-[46%] lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg single-help-box'>
                        <input type='checkbox' value="promote-to-new-audiance" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/promote.svg" />
                            <p className="mb-4">Promocionar mi tienda a audiencias nuevas</p>
                        </div>

                    </div>
                    <div className='w-[46%] lg:w-[48%] border-2 border-[#ccc] p-2 rounded-lg single-help-box'>
                        <input type='checkbox' value="internet-sales" onChange={e => setOptionsFunc(e)}></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/globe.svg" />
                            <p className="mb-4">Ventas internacionales</p>
                        </div>

                    </div>
                </div>


                <div className='flex justify-end gap-2 flex-col lg:flex-row mt-6 lg:mt-0'>
                    <a href="/" className=' inline-flex justify-center items-center py-3 px-6 bg-transparent border-2 border-black rounded-full text-black lg:my-6' onClick={(e) => { e.preventDefault(); changeStep('skip') }}>Omitir esta pregunta</a>
                    <a href="/" className=' inline-flex justify-center items-center py-3 px-6 bg-black rounded-full text-white lg:my-6' onClick={(e) => { e.preventDefault(); changeStep('submit') }}>Siguiente</a>
                </div>
                {err && (<div className='err-wrapper text-red-700 text-right text-sm'>{(err)}</div>)}

            </div>
        </div>
    )
}
