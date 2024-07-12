'use client'

import { useEffect, useState } from "react"
import StripeCheckout from '../../../../../components/payment/checkout-form'

export default function BillingInfoForm({ setBillingInfo, setFormEl , setPaymentSuceeded }) {

    const [billingAddStreet, setCardBillingAddStreet] = useState(null)
    const [billingFloor, setCardBillingFloor] = useState(null)
    const [billingCity, setCardBillingCity] = useState(null)
    const [billingPostal, setCardBillingPostal] = useState(null)
    const [billingPhone, setCardBillingPhone] = useState(null)


    useEffect(() => {
        if (billingAddStreet, billingFloor, billingCity, billingPostal, billingPhone) {
            setBillingInfo({
                billingAddStreet: billingAddStreet, billingFloor: billingFloor, billingCity: billingCity, billingPostal: billingPostal, billingPhone: billingPhone
            })
        }
    }, [billingAddStreet, billingFloor, billingCity, billingPostal, billingPhone])


    return (
        <div className='py-6 px-3'>
            <div className='w-full lg:w-1/2 ml-auto mr-auto text-center'>
                <h1 className='text-3xl text-center'>Completa tu información de facturación</h1>
                <p>Es el método que usarás para pagar tu factura de Vendalia y la tarifa única de configuración para abrir tu tienda.</p>
            </div>

            <div className='my-6 p-4 flex flex-col lg:flex-row items-start gap-5'>
                <div className='my-6 p-4 border border-[#ccc] rounded-lg w-full lg:w-[65%]'>

                    <h3 className='text-3xl mb-8'>Añadir una tarjeta de crédito</h3>

                    <StripeCheckout amount={1400} setFormEl={setFormEl} setPaymentSuceeded={setPaymentSuceeded} />

                    <h3 className='text-3xl mt-12 mb-8'>Dirección de facturación</h3>

                    <div className='mb-4'>
                        <label className='block'>Calle y número</label>
                        <input type='text' className='p-2 border border-[#ccc] rounded-lg w-full lg:w-[82%]' onChange={e => setCardBillingAddStreet(e.target.value)} />
                    </div>

                    <div className='mb-4'>
                        <label className='block'>Piso/puerta/otros</label>
                        <input type='text' className='p-2 border border-[#ccc] rounded-lg w-full lg:w-[82%]' onChange={e => setCardBillingFloor(e.target.value)} />
                    </div>

                    <div className='mb-4'>
                        <label className='block'>Ciudad</label>
                        <input type='text' className='p-2 border border-[#ccc] rounded-lg w-full lg:w-[82%]' onChange={e => setCardBillingCity(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label className='block'>Código postal</label>
                        <input type='number' className='p-2 border border-[#ccc] rounded-lg w-full lg:w-[82%]' onChange={e => setCardBillingPostal(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label type="tel" className='block'>Número de teléfono</label>
                        <input type='text' className='p-2 border border-[#ccc] rounded-lg w-full lg:w-[82%]' onChange={e => setCardBillingPhone(e.target.value)} />
                    </div>

                </div>
                <div className='my-6 p-4 border border-[#ccc] rounded-lg w-full lg:w-[35%]'>
                    <p className='py-2 p-3 rounded-full text-sm bg-green-500 inline-block'>Se paga ahora</p>
                    <div className='flex justify-between my-4'>
                        <p>Tarifa única de configuración</p>
                        <p>EUR 14*</p>
                    </div>
                    <p className='text-sm'>
                        Esta tarifa nos ayuda a invertir en asistencia para vendedores nuevos y en mejores controles de seguridad para proteger nuestro mercado.
                    </p>
                    <br />
                    <p className='text-sm'>
                        Añadiremos una retención pendiente a tu tarjeta cuando avances al siguiente paso, pero no se te cobrará hasta que abras tu tienda.
                    </p>
                    <br />
                    <p className='text-sm'>* USD 15 (sin incluir impuestos), convertidos a tu divisa local</p>
                    <br />
                    <p className='text-xs underline'><a href='/'>Más información sobre la tarifa de configuración</a></p>

                    <hr className='block my-8' />

                    <p className='py-2 p-3 rounded-full text-sm bg-[#f2f2f2] inline-block'>Se paga más adelante</p>
                    <div className='flex justify-between my-4'>
                        <p>Tarifa por publicación</p>
                        <p>EUR 0.19*</p>
                    </div>
                    <p className='text-sm'>
                        Cobramos EUR 0.19* por cada anuncio que crees o renueves. Se paga el primer día del siguiente mes natural.
                    </p>
                    <br />
                    <p className='text-sm'>
                        Si haces tu primera venta antes de esa fecha, el coste se deducirá de tus ingresos.
                    </p>
                    <br />
                    <p className='text-sm'>
                        * USD 0.20 (sin incluir impuestos), convertidos a tu divisa local
                    </p>

                    <hr className='block my-8' />

                    <div className='flex justify-between my-4'>
                        <p>Total por pagar</p>
                        <p>EUR 14</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
