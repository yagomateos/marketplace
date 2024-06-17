import React from 'react'
import { registerUser } from "../../../lib/actions/users/register";
import { signIn } from 'next-auth/react';

export default function RegisterForm() {

    const handleRegister = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            const newUser = await registerUser(formData);
            if (newUser) {
                console.log('registered successfully')
                
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
            }
        } catch (error) {
            console.error(error)
        }


    }

  return (
    <form onSubmit={handleRegister} className="mt-4">
    <div className="form-group mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">nombre de usuario</label>
        <input type="text" id="username" name="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <div className="form-group mb-4">
        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Dirección de correo electrónico</label>
        <input type="email" id="email-address" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <div className="form-group mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
        <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <div className="form-group mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
        <input type="password" id="password-again" name="password-again" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>

    <div>
        <label className="mb-4 block text-lg">¿Quién eres? </label>
        <div className="flex gap-x-2 mb-6">
            <div>
                <label>Comprador</label> &nbsp;
                <input type="checkbox" value="buyer" name="user-type" />
            </div>
            <div>
                <label>Vendedor</label> &nbsp;
                <input type="checkbox" value="seller" name="user-type" />
            </div>
        </div>
    </div>


    <div className="form-group">
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registrarse</button>
    </div>
</form>
  )
}
