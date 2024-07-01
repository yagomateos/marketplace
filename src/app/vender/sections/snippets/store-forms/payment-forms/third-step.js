import React, { useRef } from 'react'

export default function PaymentThirdStep() {

    const fileInputRef = useRef(null);

    const handleFileInputClick = (e) => {
        e.preventDefault();
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='py-6'>

            <div className='w-full lg:w-1/2 ml-auto mr-auto text-center'>
                <h1 className='text-3xl text-center'>Cómo recibirás los pagos</h1>
                <p>Vendalia Payments ofrece a los compradores una amplia variedad de opciones de pago y te protege como vendedor de Etsy. <br /> <a href="">Más información</a></p>
            </div>


            <div className='bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]'>
                <h3 className='text-lg mb-3'>Vendalia Payments</h3>
                <hr />
                <p className='text-xs  mt-4'>Disfruta de nuestro nivel más alto de protección de pago, recibe ayuda y ofrece a los compradores la variedad más amplia de opciones de pago. Más información sobre Etsy Payments</p>

                <div className='mt-4'>
                    <p className='text-lg'>Programa de depósitos</p>
                    <div>
                        <select className='p-2 border border-[#ccc] rounded-lg w-full'>
                            <optgroup label="Selecciona la frecuencia">
                                <option selected="" disabled="" hidden=""> </option>
                                <option value="monthly">Una vez al mes (próxima vez el 01 July 2024)</option>
                                <option value="bi-weekly">Cada dos semanas (próxima vez el 01 July 2024)</option>
                                <option value="weekly">Una vez a la semana (próxima vez el 01 July 2024)</option>
                                <option value="daily">A diario (próxima vez el 01 July 2024)</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>

            <p className='text-sm mt-4'>¿Tienes preguntas? <a href="">Lee las preguntas frecuentes sobre pagos</a></p>
        </div>
    )
}
