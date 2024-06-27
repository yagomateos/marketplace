export default function FirstStoreStepForm() {
    return (
        <div className='store-step-form-wrapper px-2'>
            <h2 className='text-center text-xl lg:text-3xl'>Preferencias de la tienda</h2>
            <p className='pb-4 text-sm lg:text-md text-center'>¡Empecemos! Cuéntanos algo sobre ti y tu tienda.</p>
            <div className='store-step-form-box-wrapper border border-[#f2f2f2] p-8 my-3 flex justify-between'>
                <div className='left w-full lg:w-[50%] text-sm'>
                    <form>
                        <div className='lg:flex gap-4 flex-wrap mb-6'>
                            <label className='lg:w-[40%] font-semibold'>Idioma de la tienda  *</label>
                            <select className='block p-3 border border-[#f2f2f2] w-[100%] lg:w-[57%]'>
                                <option value={'Español'}>Español</option>
                            </select>
                        </div>
                        <div className='lg:flex gap-4 flex-wrap mb-6'>
                            <label className='lg:w-[40%] font-semibold'>País de la tienda  *</label>
                            <select className='block p-3 border border-[#f2f2f2] w-[100%] lg:w-[57%]'>
                                <option value={'España'}>España</option>
                            </select>
                        </div>
                        <div  className='lg:flex gap-4 flex-wrap mb-6'>
                            <label className='lg:w-[40%] font-semibold'>Divisa de la tienda  *</label>
                            <select className='block p-3 border border-[#f2f2f2] w-[100%] lg:w-[57%]'>
                                <option value={'EUR'}>€ Euro</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className='right w-full lg:w-[50%] hidden lg:block text-sm pl-20'>
                <p className='pb-4'>El idioma predeterminado que usarás para describir tus artículos. ¡Elige con cuidado! No puedes cambiarlo una vez que lo guardes, pero podrás añadir otros más adelante.</p>
                <p className='pb-4'>Dinos dónde está tu tienda. ¿No ves tu país? Es posible que Etsy aún no esté disponible en esa ubicación, pero no nos pierdas la pista. <a href="/">Más información</a></p>
                <p>La divisa que usarás para poner precio a los artículos que vendes en Etsy. Los compradores verán los precios automáticamente en su divisa local.</p>
                </div>
            </div>
        </div>
    )
}
