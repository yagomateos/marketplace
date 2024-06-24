import React from 'react'

export default function FourthPage({ setStep }) {
    return (
        <div className='flex'>
            <div className='w-[50%] fourthpage-left bg-cover bg-center'>

            </div>
            <div className='w-[50%] py-12 px-[12%]'>
                <h2 className='text-3xl'>¿Necesitas ayuda con algo?</h2>
                <p className='mt-3'>Elige todos los temas que quieras. Compartiremos recursos para ayudarte a crecer.</p>
                <div className='mt-4 flex flex-wrap gap-4'>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/neckless.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>
                    </div>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/speaker.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>
                    </div>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/internet.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>
                    </div>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/camera.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>
                    </div>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/magnifire.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>
                    </div>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/box.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>
                    </div>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/price-tag.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>
                    </div>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg  single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/finance.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>
                    </div>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12 mb-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/import.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>
                    </div>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/promote.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>

                    </div>
                    <div className='w-[48%] border-2 border-[#ccc] p-2 rounded-lg single-help-box'>
                        <input type='checkbox'></input>
                        <div className="text-center flex justify-center flex-col items-center">
                            <img className="w-12" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/globe.svg" />
                            <p className="mb-4">Decidir qué vender</p>
                        </div>

                    </div>
                </div>


                <div className='flex justify-end gap-2'>
                    <a href="/" className=' inline-flex justify-center items-center py-3 px-6 bg-transparent border-2 border-black rounded-full text-black my-6' onClick={(e) => { e.preventDefault(); setStep(4) }}>Omitir esta pregunta</a>
                    <a href="/" className=' inline-flex justify-center items-center py-3 px-6 bg-black rounded-full text-white my-6' onClick={(e) => { e.preventDefault(); }}>Siguiente</a>
                </div>


            </div>
        </div>
    )
}
