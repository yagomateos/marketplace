import React, { useState } from 'react'

export default function Orders() {

  const [type , setType] = useState('new')

  return (
    <div className="w-full">
      {/* header */}
      <div className="flex justify-between border-b border-b-[#ccc] py-4">
        <h2 className="text-xl font-semibold">Pedidos y entregas</h2>

      </div>

      {/* listings body */}
      <div className="mt-6 flex justify-between">
        {/* order filter */}
        <div className='w-[75%] py-4 px-12'>
          <ul className='border-b border-[#ccc] flex gap-4'>
            <li><a onClick={(e)=>{e.preventDefault(); setType('new')}} className={`cursor-pointer py-3 block ${type=='new' ? 'border-b-2 border-[black]' : '' }`}>Nuevo</a></li>
            <li><a onClick={(e)=>{e.preventDefault(); setType('completed')}} className={`cursor-pointer py-3 block ${type=='completed' ? 'border-b-2 border-[black]' : '' }`}>Terminado</a></li>
          </ul>

          <div className='order-content min-h-[50vh] flex flex-col justify-center items-center'>
            <div className='p-4 bg-[#eee] rounded-full'>
            <img className='max-w-18' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-box-128.png" />
            </div>
            <p className='mt-2'>No hay pedidos para mostrar</p>
          </div>

          {/* order message */}

          <div className='p-4 border border-[#ccc] rounded-xl'>
            <h2 className='font-semibold text-lg mb-4'>¿Son precisos los tiempos de procesamiento?</h2>
            <p>Asegúrese de revisar todos los tiempos de procesamiento para asegurarse de que reflejen con precisión cuánto tiempo le lleva completar los pedidos. Esto les da a los compradores una idea de cuándo recibirán su pedido.</p>
            <a>Revisar tiempos de procesamiento</a>
          </div>
        </div>
        <div className='w-[25%]'>
          <h4 className='text-lg font-semibold mb-3'>Envío por fecha</h4>
          <ul>
            <li><input type='radio' name='dispatch-date' /> &nbsp; Todo</li>
            <li><input type='radio' name='dispatch-date' /> &nbsp; Atrasado</li>
            <li><input type='radio' name='dispatch-date' /> &nbsp; Hoy</li>
            <li><input type='radio' name='dispatch-date' /> &nbsp; Mañana</li>
            <li><input type='radio' name='dispatch-date' /> &nbsp; Dentro de una semana</li>
            <li><input type='radio' name='dispatch-date' /> &nbsp; Sin estimación</li>
          </ul>

          <h4 className='text-lg font-semibold mb-3 mt-5'>Destino</h4>
          <ul>
            <li><input type='radio' name='destination' /> &nbsp; Toda</li>
            <li><input type='radio' name='destination' /> &nbsp; España</li>
            <li><input type='radio' name='destination' /> &nbsp; En cualquier otro lugar</li>
          </ul>
        </div>

      </div>

    </div>
  )
}
