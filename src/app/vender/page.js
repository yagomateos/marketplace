'use client'

import React, { useEffect, useState } from 'react'
import PublicPageContainer from '../../components/containers/publicPageContainer'
import FirstPage from './sections/firstPage'
import SecondPage from './sections/secondPage'
import ThirdPage from './sections/thirdPage'
import FourthPage from './sections/fourthPage'
import FifthPage from './sections/fifthPage'
import Storesetup from './sections/store-setup'
import './vender.css'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

export default function Vender() {

  return <div>comes here</div>

//     const [step, setStep] = useState(0)
//     const { data: session , status } = useSession()
//     const [reason, setReason] = useState(null)
//     const [options, setOptions] = useState([])

//     const router = useRouter()

//  useEffect(() => {
//     if (status === "loading") {
//       // Session is still being fetched, no action needed yet
//       return;
//     }

//     if (status === "unauthenticated") {
//       // If the user is not logged in, redirect them to the login page or home
//       router.push("/");
//     }
//   }, [status, router]);

//     const scrollToTop = () => {
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth'
//         });
//       };

//       useEffect(() => {
//         scrollToTop()
//       }, [step])
      

//     return (
//         <PublicPageContainer>
//             {step === 0 && (<FirstPage setStep={setStep} />)}
//             {step === 1 && (<SecondPage setStep={setStep} user={session.user} />)}
//             {step === 2 && (<ThirdPage setStep={setStep} reason={reason} setReason={setReason} scrollToTop={scrollToTop}/>)}
//             {step === 3 && (<FourthPage setStep={setStep} options={options} setOptions={setOptions} />)}
//             {step === 4 && (<FifthPage setStep={setStep} />)}
//             {step === 5 && (<Storesetup reason={reason} options={options} />)}
//         </PublicPageContainer>
//     )
}
