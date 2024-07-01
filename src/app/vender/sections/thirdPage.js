import React from 'react'

export default function ThirdPage({ setStep }) {
    return (
        <div className='flex'>
            <div className='w-[50%] thirdpage-left bg-cover bg-center hidden lg:block'>

            </div>
            <div className='w-full lg:w-[50%] py-12 px-[12%] min-h-[80vh] flex justify-center flex-col'>
                <h2 className='text-3xl'>¿Por qué estás en Vendalia?</h2>
                <p className='mt-3'>Te guiaremos para que tu tienda vaya sobre ruedas, tanto si tienes experiencia en esto como si es la primera vez que vendes.</p>

                <div className='my-6'>
                    <form>
                        <div className='mb-5'><input type="radio" /> &nbsp; Acabo de empezar</div>
                        <div className='mb-5'><input type="radio" /> &nbsp; Tengo un negocio y quiero vender en Internet por primera vez</div>
                        <div className='mb-5'><input type="radio" /> &nbsp; Quiero ampliar mi negocio digital vendiendo también en Vendalia</div>
                        <div><input type="radio" /> &nbsp; Estoy aquí para curiosear</div>
                    </form>
                </div>

                <div className='flex justify-end gap-2 flex-col lg:flex-row'>
                    <a href="/" className=' inline-flex justify-center items-center py-3 px-6 bg-transparent border-2 border-black rounded-full text-black lg:my-6' onClick={(e) => { e.preventDefault(); setStep(3) }}>Omitir esta pregunta</a>
                    <a href="/" className=' inline-flex justify-center items-center py-3 px-6 bg-black rounded-full text-white lg:my-6' onClick={(e) => { e.preventDefault(); }}>Siguiente</a>
                </div>


            </div>
        </div>
    )
}
