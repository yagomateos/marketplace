import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginForm() {

    const [loginError, setLoginError] = useState(null)
    const [loginSuccess, setLoginSuccess] = useState(null)

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
            // console.error('Failed to sign in:', result.error);
            setLoginError('¡El correo electrónico o la contraseña son incorrectos!')
            setLoginSuccess(null)
        } else {
            console.log('comes here')
            // Handle successful login
            // console.log('Successfully signed in:', result);
            setLoginError(null)
            setLoginSuccess('Se ha iniciado sesión correctamente')
        }
    };

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        console.log(e.target)
        const inputField = e.target.previousElementSibling;
        inputField.type = inputField.type === 'password' ? 'text' : 'password';
    };

    return (
        <>
            <form onSubmit={handleCustomLogin} className="my-4 ">
                <div className="form-group mb-4">
                    <label htmlFor="email-address" className="block text-sm font-medium text-black">Dirección de correo electrónico</label>
                    <input type="email" id="email-address" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-black">Contraseña</label>
                    <div className='flex items-center'>
                        <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                        <img onClick={togglePasswordVisibility} className='w-5 block ml-3 cursor-pointer' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-eye-50.png" />
                    </div>
                </div>
                <div className='flex justify-between items-center pb-4'>
                    <div>
                        <input type='checkbox' value="remember-me" /> &nbsp; Mantener la sesión iniciada
                    </div>
                    <div>
                        <a className='text-sm underline leading-tight' href='/olvidado_tu_contrasena'>¿Has olvidado tu contraseña?</a>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gray-950 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-[#0009] hover:scale-[102%] transition-all">Entrar</button>
                </div>
                {loginError && <div className='text-red-700 text-sm mt-3'>{loginError}</div>}
                {loginSuccess && <div className='text-green-700 text-sm mt-3'>{loginSuccess}</div>}
            </form>
            <a href="/" className='block text-center text-sm underline'>¿Tienes problemas para iniciar sesión?</a>
        </>

    )
}
