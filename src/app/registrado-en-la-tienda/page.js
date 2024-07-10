'use client';

// import { useSearchParams, useRouter } from 'next/navigation';
// import { useEffect } from 'react';

export default function RegisterSucceeded() {
    // const searchParams = useSearchParams();
    // const router = useRouter();
    
    // useEffect(() => {
    //     const succeeded = searchParams.get('redirect_status');
        
    //     if (succeeded !== 'succeeded') {
    //         router.push('/');
    //     }
    // }, [searchParams, router]);

    return (
        <div className='flex'>
            <div className='w-full lg:w-[60%] mr-auto ml-auto h-screen flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-semibold mb-2'>¡Tu tienda creada con éxito!</h1>
                <p>Ahora puedes vender en Vandalia. Utiliza los botones a continuación para ir a tu cuenta.</p>
                <div className='flex gap-4 justify-center mt-6'>
                    <a className='py-2 px-5 bg-black text-white rounded-full' href="/account">Mi cuenta</a>
                    <a className='py-2 px-5 bg-black text-white rounded-full' href="/">Hogar</a>
                </div>
            </div>
        </div>
    );
}
