import { signIn } from 'next-auth/react';
import './socialBtns.css'

export default function GoogleButton() {
    const handleGoogleLogin = async (event) => {
        event.preventDefault();
        await signIn("google");
    };

    return (
        <button onClick={handleGoogleLogin} className="social-btn w-full flex justify-center py-3 px-4 border-2 border-black rounded-full shadow-sm text-sm font-medium text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
           <img className='w-5 inline-block mr-4' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/google.svg"/> Continuar con Google
        </button>
    );
}
