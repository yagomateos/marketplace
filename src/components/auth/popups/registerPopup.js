import React from 'react'
import RegisterForm from '../forms/registerForm';
import GoogleButton from '../social/googleButton'
import FacebookButton from '../social/facebookButton'

export default function RegisterPopup() {
    return (
        <div>
            <div className="sign-in-popup px-4 py-8 mx-auto w-full sm:px-6 lg:px-8">
                <div className='w-full flex justify-between items-center pb-1'>
                    <div>
                        <h2 className='text-lg font-semibold'>Crea tu cuenta</h2>
                        <p>Registrarse es muy fácil.</p>
                    </div>
                    
                </div>
                <div className="manual-sign-in bg-white">
                    <RegisterForm />
                </div>
                <div className="separator my-8 text-center relative">
                    <p className="text-sm text-gray-500">O</p>
                </div>
                <div className="social-sign-in space-y-4">
                    <GoogleButton />
                    <FacebookButton />
                </div>
                <div className="agreement text-sm mt-6 text-gray-600">
                    <p>Vendalia.es podría enviarte mensajes y notificaciones. Puedes cambiar tus preferencias en la configuración de tu cuenta. Nunca publicaremos sin tu permiso.</p><br/>
                    {/* <p>El mercado puede enviarte comunicaciones; puedes cambiar tus preferencias en la configuración de tu cuenta. Nunca publicaremos sin tu permiso.</p> */}
                </div>
            </div>
        </div>
    )
}
