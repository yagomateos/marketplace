export default function SecondStoreStepForm() {
    return (
        <div className='store-step-form-wrapper px-3 lg:max-w-3xl ml-auto mr-auto'>
            <h2 className='text-center text-xl lg:text-3xl mb-4'>Ponle un nombre a tu tienda</h2>
            <p className='pb-4 text-sm lg:text-md lg:text-center'>¡No te preocupes! Puedes usar un nombre temporal ahora y cambiarlo más adelante. Muchas veces, los vendedores se inspiran en lo que venden, en su estilo... En cualquier cosa, prácticamente. Más consejos para elegir un nombre</p>
            <div className='store-step-form-box-wrapper p-2 lg:p-8 my-3'>
                <div className='left w-full text-sm'>
                    <form>
                        <div className='lg:flex gap-4 flex-wrap mb-6'>
                            <input className="border border[#f2f2f2] w-full p-3" placeholder="Escribe el nombre de tu tienda" />
                        </div>
                    </form>
                </div>
                <div className='right w-full hidden lg:block text-sm '>
                    <ul className="pl-4">
                        <li className="list-disc">Entre 4 y 20 caracteres</li>
                        <li className="list-disc">Sin caracteres especiales, espacios ni letras con tilde</li>
                    </ul>
                    
                    
                </div>
            </div>
        </div>
    )
}
