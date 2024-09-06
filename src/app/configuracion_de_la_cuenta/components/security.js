'use client';

import { useState } from "react";
import { signIn, useSession } from 'next-auth/react';

export default function Security({ setStep, userInfo }) {

    const { data: session } = useSession();
    const [twoStepSetup, setupTwostepSetup] = useState(false)
    const linkedProviders = session?.user?.providers || [];
    const providers = [
        { name: 'Google', icon: 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/google-icon.svg', id: 'google' },
        { name: 'Facebook', icon: 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/facebook-icon.svg', id: 'facebook' },
        { name: 'Apple', icon: 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/apple-icon.svg', id: 'apple' }
      ];

      

        // Function to handle provider authentication and redirect back to the same page
  const handleProviderSignIn = async (providerId) => {
    // Redirect the user to the current page after successful sign-in
    const callbackUrl = window.location.pathname;

    try {
      // Trigger the sign-in process for the selected provider
      await signIn(providerId, { callbackUrl });
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };


    return (
        twoStepSetup ?
            <>
                <div className="p-4 mb-4 max-w-3xl ml-auto mr-auto">
                    <h2 className="text-2xl mb-4 text-center">Protege tu cuenta con un paso más de seguridad</h2>
                    <p className="text-left">Ayúdano
                        s a proteger nuestra comunidad activando la verificación en dos pasos. Si alguien intenta iniciar sesión desde un nuevo dispositivo o navegador, tendrá que verificar que tiene permiso para acceder a tu cuenta usando una aplicación de autenticación o código único.
                        <br />
                        Para que la experiencia sea óptima, recomendamos usar una aplicación de autenticación, ya que es posible que no siempre puedas recibir códigos por SMS o una llamada de teléfono en algunos países.</p>
                </div>
            </> :
            <>
                {/* first box */}
                <div className="p-4 rounded-lg border border-[#ccc] mb-4">
                    <h3 className="text-2xl font-semibold mb-4">Verificación en dos pasos</h3>
                    <b>Verificación en dos pasos: desactivada</b>
                    <p>Cuando está activada, quien intente iniciar sesión desde un nuevo dispositivo o navegador tendrá que verificar que tiene permiso para acceder a la cuenta.</p>
                    {userInfo && !userInfo.confirmed ? <>
                        <hr className="h-[1px] bg-[#ccc] my-4" />
                        <div className="lg:p-3">
                            <div className="p-4 bg-orange-300 rounded-lg text-sm">
                                ! Verifica tu correo electrónico para poder activar la verificación en dos pasos.
                            </div>
                        </div>
                    </> : <><a href="#" onClick={(e) => { e.preventDefault(); setupTwostepSetup(true) }} className="inline-block mt-3 p-2 rounded-full bg-black text-white">Activar verificación en dos pasos</a></>}
                </div>

                {/* second box */}
                <div className="p-4 rounded-lg border border-[#0a0606] mb-4">
                    <h3 className="text-2xl font-semibold mb-4">Cuentas de terceros</h3>
                    <p className="mb-4">Vincula tus cuentas de terceros a tu cuenta de Vendalia para iniciar sesión y completar el pedido más rápido. Cuando hayas añadido una cuenta de terceros, podrás desvincularla cuando quieras aquí.</p>
                    
                    {providers.map(provider => {
                        const isLinked = linkedProviders.includes(provider.id); // Check if the provider is linked

                        return (
                            <div key={provider.id}>
                                <img className="w-[22px] inline-block" src={provider.icon} alt={`${provider.name} icon`} />
                                &nbsp;&nbsp;
                                {isLinked ? (
                                    <span className="text-sm">
                                        Cuenta de {provider.name} vinculada: {session?.user?.email}
                                    </span>
                                ) : (
                                    <a className="underline text-sm" href={`/api/auth/signin/${provider.id}`} onClick={(e) => {
                                        e.preventDefault();
                                        handleProviderSignIn(provider.id); // Trigger sign-in for the selected provider
                                      }}>
                                        Vincula tu cuenta de {provider.name}
                                    </a>
                                )}
                                <hr className="h-[1px] bg-[#ccc] my-4" />
                            </div>
                        );
                    })}
                   
                </div>
            </>
    )
}
