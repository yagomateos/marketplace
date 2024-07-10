'use client'

import { useState } from 'react'
import StoreSetupSteps from './snippets/store-setup-steps'
import FirstStoreStepForm from './snippets/store-forms/first-forms'
import SecondStoreStepForm from './snippets/store-forms/second-form'
import ThirdStoreStepForm from './snippets/store-forms/third-form'
import PaymentsReceivfeForm from './snippets/store-forms/payments-receive-form'
import BillingInfoForm from './snippets/store-forms/billingInfoForm'

export default function Storesetup() {

    // error
    const [err, setErr] = useState(null)

    // store information
    const [storeName, setStoreName] = useState(null)


    // first product
    const [productInfo1, setProductInfo1] = useState(null)
    const [productInfo2, setProductInfo2] = useState(null)

    // billing information
    const [paymentInfo, setPaymentInfo] = useState(null)

    // verify identity
    const [identityInfo, setIdentityInfo] = useState(null)

    // card information
    const [billingInfo, setBillingInfo] = useState(null)


    const [storeStep, setStoreStep] = useState(0)
    const [inventoryStep, setInventoryStep] = useState(0)
    const [bankStep, setBankStep] = useState(0)

    const [formEl , setFormEl] = useState(null)

    console.log(storeName)

    const setSteps = () => {
        console.clear();
        console.log(storeStep)
        console.log(formEl)

        // ======================verify store steps

        // check store name in first step
        if (storeStep == 1) {
            console.log(storeName)
            if (storeName) {
                setErr(null)
                setStoreStep(storeStep + 1)
            } else {
                setErr('Por favor agregue el nombre de la tienda')
            }
        }

        else if (storeStep == 2) {
            if (productInfo1) {
                if (inventoryStep < 2) {
                    // setInventoryStep(inventoryStep + 1)
                    if (inventoryStep == 0) {
                        if (productInfo1) {
                            setInventoryStep(inventoryStep + 1)
                            setErr(null)
                        } else {
                            setErr('Por favor complete el formulario anterior');
                        }
                    } else if (inventoryStep == 1) {
                        if (productInfo2) {
                            setInventoryStep(inventoryStep + 1)
                            setErr(null)
                        } else {
                            setErr('Por favor complete el formulario anterior');
                        }
                    }
                } else {
                    setStoreStep(storeStep + 1)
                }
            } else {
                setErr('Por favor complete el formulario anterior');
            }


        } else if (storeStep == 3) {
            if (bankStep == 0) {
                if (paymentInfo) {
                    setBankStep(bankStep + 1)
                } else {
                    setErr('Por favor complete el formulario anterior');
                }
            } else if (bankStep == 1) {
                if (identityInfo) {
                    // setBankStep(bankStep + 1)
                    setStoreStep(storeStep + 1)
                } else {
                    setErr('Por favor complete el formulario anterior');
                }
            } else {
                setStoreStep(storeStep + 1)
            }

        } else if (storeStep == 4) {
            if (billingInfo) {
                if(formEl && formEl.current){
                    formEl.current.click()
                }
            } else {
                setErr('Por favor complete el formulario anterior');
            }
        }

        else {
            setStoreStep(storeStep + 1)
        }

    }

    return (
        <div className='store-setup-wrapper'>
            <div className='store-setup-inner'>
                <StoreSetupSteps storeStep={storeStep} setStoreStep={setStoreStep} />
                <hr />
                <div className='store-forms-wrapper py-4 flex w-full justify-center'>
                    <div className='w-full lg:max-w-7xl'>
                        {storeStep == 0 && <FirstStoreStepForm />}
                        {storeStep == 1 && <SecondStoreStepForm setStoreName={setStoreName} />}
                        {storeStep == 2 && <ThirdStoreStepForm inventoryStep={inventoryStep} setProductInfo1={setProductInfo1} setProductInfo2={setProductInfo2} productInfo2={productInfo2} />}
                        {storeStep == 3 && <PaymentsReceivfeForm bankStep={bankStep} setPaymentInfo={setPaymentInfo} setIdentityInfo={setIdentityInfo} />}
                        {storeStep == 4 && <BillingInfoForm setBillingInfo={setBillingInfo} setFormEl={setFormEl} />}
                    </div>
                </div>

                <hr />
                <div className='py-6 flex w-full justify-center'>
                    <div className='w-full lg:max-w-7xl flex'>
                        <a href="#" onClick={() => { setSteps() }} className='rounded-full bg-black text-white ml-auto mr-auto lg:mr-0 py-4 px-6'>Guardar y continuar</a>
                    </div>
                </div>
                {err && (<div className='lg:max-w-7xl ml-auto mr-auto pb-5 err-wrapper text-red-700 text-center lg:text-right text-sm'>{(err)}</div>)}
            </div>
        </div>
    )
}
