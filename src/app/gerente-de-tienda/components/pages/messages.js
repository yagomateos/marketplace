'use client';

import { useState } from 'react';
import Inbox from './message-screens/inbox'
import Vendalia from './message-screens/vendalia'
import Sent from './message-screens/sent'
import Unread from './message-screens/unread'

export default function Messages() {

  const [step, setStep] = useState(0)

  const returnMessageStep = () => {
    switch (step) {
      case 0:
        return <Inbox />
      case 1:
        return <Vendalia />
      case 2:
        return <Sent />
      case 3:
        return <Unread />
      default:
        break;
    }
  }

  return (
    <div className="w-full">
      {/* header */}
      <div className="flex justify-between border-b border-b-[#ccc] py-4">
        <h2 className="text-xl font-semibold">Mensajes</h2>

      </div>

      {/* listings body */}
      <div className="mt-6 flex flex-col lg:flex-row justify-start">
        {/* left side */}
        <div className='w-full lg:w-[25%] lg:border-r border-[#ccc] p-4 lg:min-h-[80vh] overflow-x-auto'>
          <ul className='flex overflow-x-auto lg:flex-col'>
            <li className='w-full min-w-[100%]'>
              <a onClick={(e) => { e.preventDefault(); setStep(0); }}
                className={`w-full cursor-pointer py-2 px-4 mb-2 lg:mb-6 block rounded-full whitespace-nowrap ${step === 0 ? 'bg-[#f2f2f2]' : ''}`}>
                Bandeja de entrada
              </a>
            </li>
            <li className='w-full min-w-[100%]'>
              <a onClick={(e) => { e.preventDefault(); setStep(1); }}
                className={`w-full cursor-pointer py-2 px-4 mb-2 lg:mb-6 block rounded-full whitespace-nowrap ${step === 1 ? 'bg-[#f2f2f2]' : ''}`}>
                Desde Vendalia
              </a>
            </li>
            <li className='w-full min-w-[100%]'>
              <a onClick={(e) => { e.preventDefault(); setStep(2); }}
                className={`w-full cursor-pointer py-2 px-4 mb-2 lg:mb-6 block rounded-full whitespace-nowrap ${step === 2 ? 'bg-[#f2f2f2]' : ''}`}>
                Enviado
              </a>
            </li>
            <li className='w-full min-w-[100%]'>
              <a onClick={(e) => { e.preventDefault(); setStep(3); }}
                className={`w-full cursor-pointer py-2 px-4 mb-2 lg:mb-6 block rounded-full whitespace-nowrap ${step === 3 ? 'bg-[#f2f2f2]' : ''}`}>
                No leído
              </a>
            </li>
          </ul>

        </div>

        {/* right side */}
        <div className='p-4 border border-[#ccc] lg:border-0'>
          {returnMessageStep()}
        </div>
      </div>
    </div>
  )
}
