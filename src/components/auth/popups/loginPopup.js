import React from 'react'
import LoginForm from '../forms/loginForm';
import GoogleButton from '../social/googleButton'
import FacebookButton from '../social/facebookButton'
import './enter-popup.css'

export default function LoginPopup({ setOpenedPopup }) {
    return (
        <div>
            <div className="sign-in-popup px-4 py-8 mx-auto w-full sm:px-6 lg:px-8">
                <div className='w-full flex justify-between items-center pb-4'>
                    <div>
                        <h2 className='text-lg font-semibold'>Entrar</h2>
                    </div>
                    <div>
                        <a className='text-sm font-medium py-2 px-4 border border-[#ccc] rounded-full' href="/" onClick={(e) => { e.preventDefault(); setOpenedPopup('register'); }}>Registrarme</a>
                    </div>
                </div>
                <div className="manual-sign-in bg-white">
                    <LoginForm />
                </div>
                <div className="separator my-8 text-center relative">
                    <p className="text-sm text-gray-500">O</p>
                </div>
                <div className="social-sign-in space-y-4">
                    <GoogleButton />
                    <FacebookButton />
                </div>
                <div className="agreement text-sm mt-6 text-gray-950">
                    <p>Al hacer clic en &quot;Iniciar sesión&quot; Continuar con Google, Facebook, o Apple, aceptas las <a className='text-blue-700' href="/condiciones-de-uso">condiciones de uso</a> y la <a className='text-blue-700' href="/politica-de-privacidad">política de privacidad</a> de vendalia.es.</p>
                    <br/>
                    <p>Vendalia.es podría enviarte mensajes y notificaciones. Puedes cambiar tus preferencias en la configuración de tu cuenta. Nunca publicaremos sin tu permiso.</p>
                </div>
            </div>
        </div>
    )
}
