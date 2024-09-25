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
      <div className="mt-6 flex justify-start">
        {/* left side */}
        <div className='w-[25%] border-r border-[#ccc] p-4 min-h-[80vh]'>
          <ul>
            <li>
              <a onClick={(e) => { e.preventDefault(); setStep(0); }}
                className={`cursor-pointer py-2 px-4 mb-6 w-full block rounded-full ${step === 0 ? 'bg-[#f2f2f2]' : ''}`}>
                Bandeja de entrada
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); setStep(1); }}
                className={`cursor-pointer py-2 px-4 mb-6 w-full block rounded-full ${step === 1 ? 'bg-[#f2f2f2]' : ''}`}>
                Desde Vendalia
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); setStep(2); }}
                className={`cursor-pointer py-2 px-4 mb-6 w-full block rounded-full ${step === 2 ? 'bg-[#f2f2f2]' : ''}`}>
                Enviado
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); setStep(3); }}
                className={`cursor-pointer py-2 px-4 mb-6 w-full block rounded-full ${step === 3 ? 'bg-[#f2f2f2]' : ''}`}>
                No leído
              </a>
            </li>

          </ul>
        </div>

        {/* right side */}
        <div className='p-4'>
          {returnMessageStep()}
        </div>
      </div>
    </div>
  )
}
