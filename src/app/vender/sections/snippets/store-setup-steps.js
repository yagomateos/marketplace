'use client'

import './steps.css'

export default function StoreSetupSteps({storeStep , setStoreStep , completedStep}) {

    const setStep = (step)=>{
        console.log(completedStep)
        const nextStep = step-1
console.clear()
        console.log(nextStep ,completedStep)
        if(completedStep>=nextStep){
            setStoreStep(step)
        }
    }

    return (
        <div className='store-setup-header-wrapper flex justify-center w-full p-5'>
            <div className='store-setup-header-inner w-full lg:max-w-7xl'>
                <ul className='store-setup-heading-list flex justify-center'>
                    <li className='w-1/6'>
                        <a className='flex flex-col items-center' onClick={e=>{e.preventDefault(); setStep(0)}}>
                            <span className={`${storeStep==0? 'active-round' : ''} w-3 h-3 rounded-full bg-[#f2f2f2] inline-block mb-4 z-10`}></span>
                            <p className='text-sm text-center hidden lg:block'>Preferencias de la tienda</p>
                        </a>
                    </li>
                    <li className='w-1/6 before-enabled relative'>
                        <a className='flex flex-col items-center' onClick={e=>{e.preventDefault(); setStep(1)}}>
                            <span className={`${storeStep==1? 'active-round' : ''} w-3 h-3 rounded-full bg-[#f2f2f2] inline-block mb-4 z-10`}></span>
                            <p className='text-sm text-center hidden lg:block'>Ponle un nombre a tu tienda</p>
                        </a>
                    </li>
                    <li className='w-1/6 before-enabled relative'>
                        <a className='flex flex-col items-center' onClick={e=>{e.preventDefault(); setStep(2)}}>
                            <span className={`${storeStep==2? 'active-round' : ''} w-3 h-3 rounded-full bg-[#f2f2f2] inline-block mb-4 z-10`}></span>
                            <p className='text-sm text-center hidden lg:block'>Añade inventario a tu tienda</p>
                        </a>
                    </li>
                    <li className='w-1/6 before-enabled relative'>
                        <a className='flex flex-col items-center' onClick={e=>{e.preventDefault(); setStep(3)}}>
                            <span className={`${storeStep==3? 'active-round' : ''} w-3 h-3 rounded-full bg-[#f2f2f2] inline-block mb-4 z-10`}></span>
                            <p className='text-sm text-center hidden lg:block'>Cómo recibirás los pagos</p>
                        </a>
                    </li>
                    <li className='w-1/6 before-enabled relative'>
                        <a className='flex flex-col items-center' onClick={e=>{e.preventDefault(); setStep(4)}}>
                            <span className={`${storeStep==4? 'active-round' : ''} w-3 h-3 rounded-full bg-[#f2f2f2] inline-block mb-4 z-10`}></span>
                            <p className='text-sm text-center hidden lg:block'>Completa tu información de facturación</p>
                        </a>
                    </li>
                    {/* <li className='w-1/6 before-enabled relative'>
                        <a className='flex flex-col items-center'>
                            <span className={`${storeStep==5? 'active-round' : ''} w-3 h-3 rounded-full bg-[#f2f2f2] inline-block mb-4 z-10`}></span>
                            <p className='text-sm text-center hidden lg:block'>La seguridad de tu tienda</p>
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}
