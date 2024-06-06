"use client"

import { usePathname, useRouter } from 'next/navigation'



export default function Navbar() {

    const router = useRouter();
    const pathname = usePathname()
    return (
        <div className="px-4 py-4 mx-auto max-w-8xl sm:px-6 lg:px-8 border border-gray">
            <div className="flex justify-between items-center px-0 py-0 mx-auto w-full sm:px-6 lg:px-8">
                <div className="left flex items-center">
                    <h2 className="text-xl font-semibold"><img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/logo.svg" className='w-48' /></h2>
                </div>
                <div className="right">
                    <nav>
                        <ul className="flex space-x-4">
                            {pathname === '/inicio' && (
                                <li className="text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer"><a onClick={() => router.push('/registro')}>Registro</a></li>
                            )}
                            {pathname === '/registro' && (
                                <li className="text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer"><a onClick={() => router.push('/entrar')}>Entrar</a></li>
                            )}

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
