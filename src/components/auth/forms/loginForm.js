import { signIn } from 'next-auth/react';

export default function LoginForm() {
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
    )
}
