import { signIn } from 'next-auth/react';

export default function GoogleButton() {
    const handleGoogleLogin = async (event) => {
        event.preventDefault();
        await signIn("google");
    };

    return (
        <button onClick={handleGoogleLogin} className="w-full flex justify-center py-2 px-4 border border-black rounded-2xl shadow-sm text-sm font-medium text-black hover:text-white bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Iniciar sesión con Google
        </button>
    );
}
