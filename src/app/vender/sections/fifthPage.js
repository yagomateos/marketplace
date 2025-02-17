import React from 'react'

export default function FifthPage({ setStep }) {
    return (
        <div className='flex'>
            <div className='w-[50%] fifthpage-left bg-cover bg-center lg:block'>

            </div>
            <div className='w-full lg:w-[50%] py-12 px-[12%] flex flex-col justify-center min-h-[80vh]'>
                <h2 className='text-3xl'>¡Ahora viene lo más divertido!</h2>
                <p className='mt-3'>Te guiaremos por el proceso de creación de la tienda y te explicaremos cómo añadir artículos.</p>

                <div className='flex justify-start gap-2'>
                    <a href="/" className=' inline-flex justify-center items-center py-3 px-6 bg-black rounded-full text-white my-6' onClick={(e) => { e.preventDefault();setStep(5) }}>Abrir tu tienda</a>
                </div>


            </div>
        </div>
    )
}
