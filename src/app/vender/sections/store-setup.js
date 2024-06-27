'use client'

import { useState } from 'react'
import StoreSetupSteps from './snippets/store-setup-steps'
import FirstStoreStepForm from './snippets/store-forms/first-forms'
import SecondStoreStepForm from './snippets/store-forms/second-form'
import ThirdStoreStepForm from './snippets/store-forms/third-form'
import FourthStoreStepForm from './snippets/store-forms/fourth-form'

export default function Storesetup() {

    const [storeStep, setStoreStep] = useState(0)

    return (
        <div className='store-setup-wrapper'>
            <div className='store-setup-inner'>
                <StoreSetupSteps storeStep={storeStep} />
                <hr />
                <div className='store-forms-wrapper py-4 flex w-full justify-center'>
                    <div className='w-full lg:max-w-7xl'>
                        {storeStep == 0 && <FirstStoreStepForm />}
                        {storeStep == 1 && <SecondStoreStepForm />}
                        {storeStep == 2 && <ThirdStoreStepForm />}
                        {storeStep == 3 && <FourthStoreStepForm />}
                    </div>
                </div>

                <hr />
                <div className='py-6 flex w-full justify-center'>
                    <div className='w-full lg:max-w-7xl flex'>
                        <a href="#" onClick={() => { setStoreStep(storeStep + 1) }} className='rounded-full bg-black text-white ml-auto mr-auto lg:mr-0 py-4 px-6'>Guardar y continuar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
