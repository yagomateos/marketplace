'use client'
import { useState } from 'react';
import PublicPageContainer from '../../components/containers/publicPageContainer';
export default function Page() {

    const [step, setStep] = useState(0)

    return (
        <PublicPageContainer>
            {/* tabs */}
            <div className='w-full lg:max-w-7xl mr-auto ml-auto'>
                <ul className='py-4 flex gap-4 justify-center'>
                    <li><a className='py-4 text-xl font-semibold cursor-pointer' onClick={()=>setStep(0)}>Cuenta</a></li>
                    <li><a className='py-4 text-xl font-semibold cursor-pointer' onClick={()=>setStep(1)}>Seguridad</a></li>
                    <li><a className='py-4 text-xl font-semibold cursor-pointer' onClick={()=>setStep(2)}>Perfil público</a></li>
                    <li><a className='py-4 text-xl font-semibold cursor-pointer' onClick={()=>setStep(3)}>Privacidad</a></li>
                    <li><a className='py-4 text-xl font-semibold cursor-pointer' onClick={()=>setStep(4)}>Direcciones</a></li>
                    <li><a className='py-4 text-xl font-semibold cursor-pointer' onClick={()=>setStep(5)}>Tarjetas de crédito</a></li>
                    <li><a className='py-4 text-xl font-semibold cursor-pointer' onClick={()=>setStep(6)}>Listas de regalos</a></li>
                </ul>



                {/* forms */}
                <div>
                    {step == 0 && (
                        <div>Cuenta</div>
                    )}
                    {step == 1 && (
                        <div>Seguridad</div>
                    )}
                    {step == 2 && (
                        <div>Perfil</div>
                    )}
                    {step == 3 && (
                        <div>Privacidad</div>
                    )}
                    {step == 4 && (
                        <div>Direcciones</div>
                    )}
                    {step == 5 && (
                        <div>Tarjetas</div>
                    )}
                    {step == 6 && (
                        <div>Listas de regalos</div>
                    )}
                </div>
            </div>

        </PublicPageContainer>
    )
}
