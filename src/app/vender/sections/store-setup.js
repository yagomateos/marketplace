'use client'

import { useState } from 'react'
import StoreSetupSteps from './snippets/store-setup-steps'
import FirstStoreStepForm from './snippets/store-forms/first-forms'
import SecondStoreStepForm from './snippets/store-forms/second-form'
import ThirdStoreStepForm from './snippets/store-forms/third-form'
import PaymentsReceivfeForm from './snippets/store-forms/payments-receive-form'
import BillingInfoForm from './snippets/store-forms/billingInfoForm'

export default function Storesetup() {

    const [storeStep, setStoreStep] = useState(0)
    const [inventoryStep, setInventoryStep] = useState(0)
    const [bankStep, setBankStep] = useState(0)

    const setSteps = () => {
        console.clear();
        console.log(storeStep)

        if (storeStep == 2) {
            if (inventoryStep < 2) {
                setInventoryStep(inventoryStep + 1)
            } else {
                setStoreStep(storeStep + 1)
            }

        } else if (storeStep == 3) {
            console.log('comes here')
            if (bankStep < 2) {
                setBankStep(bankStep + 1)
            } else {
                setStoreStep(storeStep + 1)
            }
        } else {
            setStoreStep(storeStep + 1)
        }

    }

    return (
        <div className='store-setup-wrapper'>
            <div className='store-setup-inner'>
                <StoreSetupSteps storeStep={storeStep} />
                <hr />
                <div className='store-forms-wrapper py-4 flex w-full justify-center'>
                    <div className='w-full lg:max-w-7xl'>
                        {storeStep == 0 && <FirstStoreStepForm />}
                        {storeStep == 1 && <SecondStoreStepForm />}
                        {storeStep == 2 && <ThirdStoreStepForm inventoryStep={inventoryStep} />}
                        {storeStep == 3 && <PaymentsReceivfeForm bankStep={bankStep} />}
                        {storeStep == 4 && <BillingInfoForm />}
                    </div>
                </div>

                <hr />
                <div className='py-6 flex w-full justify-center'>
                    <div className='w-full lg:max-w-7xl flex'>
                        <a href="#" onClick={() => { setSteps() }} className='rounded-full bg-black text-white ml-auto mr-auto lg:mr-0 py-4 px-6'>Guardar y continuar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
