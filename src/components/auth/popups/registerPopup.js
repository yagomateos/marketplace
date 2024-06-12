import React from 'react'
import RegisterForm from '../forms/registerForm';
import GoogleButton from '../social/googleButton'
import FacebookButton from '../social/facebookButton'

export default function RegisterPopup() {
    return (
        <div>
            <div className="sign-in-popup px-4 py-8 mx-auto w-full sm:px-6 lg:px-8">
                <div className='w-full flex justify-between items-center pb-4'>
                    <div>
                        <h2 className='text-lg font-semibold'>Crea tu cuenta</h2>
                    </div>
                    
                </div>
                <div className="manual-sign-in bg-white">
                    <RegisterForm />
                </div>
                <div className="separator my-8 text-center">
                    <p className="text-sm text-gray-500">O</p>
                </div>
                <div className="social-sign-in space-y-4">
                    <GoogleButton />
                    <FacebookButton />
                </div>
                <div className="agreement text-sm mt-6 text-gray-600">
                    <p>Al hacer clic en Continuar con Google o Facebook, aceptas los Términos de Uso y la Política de Privacidad del mercado.</p>
                    <p><small>El mercado puede enviarte comunicaciones; puedes cambiar tus preferencias en la configuración de tu cuenta. Nunca publicaremos sin tu permiso.</small></p>
                </div>
            </div>
        </div>
    )
}
