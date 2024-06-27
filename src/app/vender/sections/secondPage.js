import React from 'react'

export default function SecondPage({ setStep , user}) {
    return (
        <div className='flex'>
            <div className='w-[50%] secondpage-left bg-cover bg-center hidden lg:block'>

            </div>
            <div className='w-full lg:w-[50%] py-12 px-[12%]'>
                <h2 className='text-3xl'>¡Hola, {user&& (user.name)}</h2>
                <p className='mt-3'>Nos ilusiona que te unas a nuestro mercado de artículos únicos y creativos, donde brillan los artículos especiales con un toque humano. ¿Todo listo para darle vida a tu tienda?</p>
                <div className='exp-speps-wrapper mt-4'>
                    <div className='single-exp-step pb-8 pl-4'>
                        <h3 className='text-xl text-black mb-2'>Haz que tu tienda sea exclusivamente tuya</h3>
                        <p>Te guiaremos por cada paso, desde elegir el nombre hasta crear tu primer anuncio.</p>
                    </div>
                    <div className='single-exp-step pb-8 pl-4'>
                        <h3 className='text-xl text-black mb-2'>Cuéntanos algo sobre ti</h3>
                        <p>Comparte algo de información y configura cómo vas a recibir tus pagos con Etsy Payments.</p>
                    </div>
                    <div className='single-exp-step pb-8 pl-4'>
                        <h3 className='text-xl text-black mb-2'>Abre tu tienda y paga una tarifa única de configuración de 15 US$</h3>
                        <p>Esta tarifa nos ayuda a invertir en asistencia para vendedores nuevos y en mejores controles de seguridad para proteger nuestro mercado.</p>
                    </div>
                    <div className='single-exp-step last pl-4'>
                        <h3 className='text-xl text-black mb-2'>¡A por tu primera venta!</h3>
                        <p>Te daremos montones de consejos para que empieces a vender y a hacer crecer tu negocio.</p>
                    </div>
                </div>
                <a href="/" className=' min-w-[60%] inline-flex justify-center items-center py-3 px-6 bg-black rounded-full text-white my-6' onClick={(e) => { e.preventDefault(); setStep(2) }}>Vamos!</a>
                <p className='text-sm'>Al hacer clic en &quot;Vamos&quot; y abrir una tienda de Vendalia.es, aceptas nuestras <a className='text-blue-700' href="">condiciones de uso</a>, incluyendo la <a className='text-blue-700' href="/">política del vendedor</a> y la <a className='text-blue-700' href='/'>política de Payments</a>, además de nuestra <a className='text-blue-700' href="/">política de privacidad.</a></p>
            </div>
        </div>
    )
}
