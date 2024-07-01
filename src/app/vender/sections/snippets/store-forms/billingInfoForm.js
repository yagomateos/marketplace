import React from 'react'

export default function BillingInfoForm() {
    return (
        <div className='py-6'>
            <div className='w-full lg:w-1/2 ml-auto mr-auto text-center'>
                <h1 className='text-3xl text-center'>Completa tu información de facturación</h1>
                <p>Es el método que usarás para pagar tu factura de Etsy y la tarifa única de configuración para abrir tu tienda.</p>
            </div>

            <div className='my-6 p-4 flex flex-col lg:flex-row items-start gap-5'>
                <div className='my-6 p-4 border border-[#ccc] rounded-lg w-full lg:w-[65%]'>

                    <h3 className='text-3xl mb-8'>Añadir una tarjeta de crédito</h3>

                    {/* Card number */}
                    <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4 w-full'>
                        <div className='w-full lg:w-[20%]'>
                            <p className='text-sm'>Número de tarjeta  *</p>
                        </div>

                        <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                            <div className='w-full'>
                                <input type='number' className='p-2 border border-[#ccc] rounded-lg w-full' />
                            </div>
                        </div>
                    </div>
                    {/* expire date */}
                    <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4'>
                        <div className='w-full lg:w-[20%]'>
                            <p>Fecha de caducidad  *</p>
                        </div>

                        <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                            <div className='lg:w-[48%]'>
                                <select className='p-2 border border-[#ccc] rounded-lg w-full' >
                                    <option value="">
                                        Elige un mes
                                    </option>
                                    <option value="1">1 - Enero</option>
                                    <option value="2">2 - Febrero</option>
                                    <option value="3">3 - Marzo</option>
                                    <option value="4">4 - Abril</option>
                                    <option value="5">5 - Mayo</option>
                                    <option value="6">6 - Junio</option>
                                    <option value="7">7 - Julio</option>
                                    <option value="8">8 - Agosto</option>
                                    <option value="9">9 - Septiembre</option>
                                    <option value="10">10 - Octubre</option>
                                    <option value="11">11 - Noviembre</option>
                                    <option value="12">12 - Diciembre</option>
                                </select>
                            </div>
                            <div className='lg:w-[48%]'>
                                <select className='p-2 border border-[#ccc] rounded-lg w-full'>
                                    <option value="">
                                        Escoge un año
                                    </option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                    <option value="2035">2035</option>
                                    <option value="2036">2036</option>
                                    <option value="2037">2037</option>
                                    <option value="2038">2038</option>
                                    <option value="2039">2039</option>
                                    <option value="2040">2040</option>
                                    <option value="2041">2041</option>
                                    <option value="2042">2042</option>
                                    <option value="2043">2043</option>
                                    <option value="2044">2044</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* ccv */}

                    <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4 w-full'>
                        <div className='w-full lg:w-[20%]'>
                            <p className='text-sm'>CCV  *</p>
                        </div>

                        <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                            <div className='w-full'>
                                <input type='number' className='p-2 border border-[#ccc] rounded-lg w-full' />
                            </div>
                        </div>
                    </div>

                    {/* cardholder name */}
                    <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4 w-full'>
                        <div className='w-full lg:w-[20%]'>
                            <p className='text-sm'>Nombre del titular de la tarjeta  *</p>
                        </div>

                        <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                            <div className='w-full'>
                                <input type='text' className='p-2 border border-[#ccc] rounded-lg w-full' />
                            </div>
                        </div>
                    </div>

                    <h3 className='text-3xl mt-12 mb-8'>Dirección de facturación</h3>

                    <div className='mb-4'>
                        <label className='block'>Calle y número</label>
                        <input type='text' className='p-2 border border-[#ccc] rounded-lg w-full lg:w-[82%]' />
                    </div>

                    <div className='mb-4'>
                        <label className='block'>Piso/puerta/otros</label>
                        <input type='text' className='p-2 border border-[#ccc] rounded-lg w-full lg:w-[82%]' />
                    </div>

                    <div className='mb-4'>
                        <label className='block'>Ciudad</label>
                        <input type='text' className='p-2 border border-[#ccc] rounded-lg w-full lg:w-[82%]' />
                    </div>
                    <div className='mb-4'>
                        <label className='block'>Código postal</label>
                        <input type='text' className='p-2 border border-[#ccc] rounded-lg w-full lg:w-[82%]' />
                    </div>
                    <div className='mb-4'>
                        <label className='block'>Número de teléfono</label>
                        <input type='text' className='p-2 border border-[#ccc] rounded-lg w-full lg:w-[82%]' />
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
