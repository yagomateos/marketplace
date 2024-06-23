'use client'

import React, { useState } from 'react'
import PublicPageContainer from '../../components/containers/publicPageContainer'
import FirstPage from './sections/firstPage'
import SecondPage from './sections/secondPage'
import ThirdPage from './sections/thirdPage'
import './vender.css'

export default function Vender() {

    const [step, setStep] = useState(0)

    return (
        <PublicPageContainer>
            {step === 0 && (<FirstPage setStep={setStep}/>)}
            {step === 1 && (<SecondPage setStep={setStep}/>)}
            {step === 2 && (<ThirdPage setStep={setStep}/>)}
        </PublicPageContainer>
    )
}
