'use client';

import RegisterForm from "../../../components/auth/forms/registerForm";
import FacebookButton from "../../../components/auth/social/facebookButton";
import GoogleButton from "../../../components/auth/social/googleButton";

export default function registerPage() {


    return (
        <>
            <div className="sign-in-wrapper px-4 py-12 mx-auto max-w-3xl sm:px-6 lg:px-8">
                <div className="manual-sign-in bg-white shadow-md rounded-lg p-8">
                    <h2 className="text-xl leading-6 font-medium text-gray-900">Regístrate en el mercado</h2>
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
        </>
    )
}
