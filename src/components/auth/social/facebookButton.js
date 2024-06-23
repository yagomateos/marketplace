import { signIn } from 'next-auth/react';
import './socialBtns.css'

export default function FacebookButton() {
    const handleFacebookLogin = async (event) => {
        event.preventDefault();
        await signIn("facebook");
    };

    return (
        <button onClick={handleFacebookLogin} className="social-btn w-full flex justify-center py-3 px-4 border-2 border-black rounded-full shadow-sm text-sm font-medium text-black bg-transparent transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <img className='w-5 inline-block mr-4' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/facebook-nw.svg"/> Continuar con Facebook
        </button>
    );
}
