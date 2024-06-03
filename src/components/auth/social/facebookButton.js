import { signIn } from 'next-auth/react';

export default function FacebookButton() {
    const handleFacebookLogin = async (event) => {
        event.preventDefault();
        await signIn("facebook");
    };

    return (
        <button onClick={handleFacebookLogin} className="w-full flex justify-center py-2 px-4 border border-black rounded-2xl shadow-sm text-sm font-medium text-black hover:text-white bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Iniciar sesión con Facebook
        </button>
    );
}
