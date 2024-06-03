'use client';

import { signIn } from 'next-auth/react';
import GoogleButton from '../../../components/auth/social/googleButton';
import FacebookButton from "../../../components/auth/social/facebookButton";

const LoginPage = () => {

    const handleCustomLogin = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result.error) {
            // Handle login error
            console.error('Failed to sign in:', result.error);
        } else {
            // Handle successful login
            console.log('Successfully signed in:', result);
        }
    };

    return (
        <>
            <div className="sign-in-wrapper px-4 py-12 mx-auto max-w-3xl sm:px-6 lg:px-8">
                <div className="manual-sign-in bg-white shadow-md rounded-lg p-8">
                    <h2 className="text-xl leading-6 font-medium text-gray-900">Inicia sesión para continuar</h2>
                    <form onSubmit={handleCustomLogin} className="mt-4">
                        <div className="form-group mb-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Dirección de correo electrónico</label>
                            <input type="email" id="email-address" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                            <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Iniciar sesión</button>
                        </div>
                    </form>
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
    );
};

export default LoginPage;
