import React from 'react'

export default function FirstPage({ setStep }) {
    return (
        <div className='seller-landing-wrapper'>
            <div className='seller-landing-inner'>

                {/* header */}
                <div className='seller-landing-header bg-cover bg-center min-h-[60vh] flex items-center justify-center flex-col relative p-8'>
                    <div className='bg-[#0005] absolute w-full h-full left-0 top-0'></div>
                    <div className='relative z-10 text-center lg:w-[45%]'>
                        <h2 className='text-white text-2xl lg:text-[45px] font-normal'>Hay millones de compradores impacientes por ver lo que pondrás a la venta</h2>
                        <a href='/' className='py-4 px-8 rounded-full bg-gray-50 inline-block mt-6' onClick={(e) => { e.preventDefault(); setStep(1) }}>Empezar</a>
                    </div>

                </div>

            </div>
        </div>
    )
}
