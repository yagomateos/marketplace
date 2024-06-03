"use client"

import { usePathname, useRouter } from 'next/navigation'



export default function Navbar() {

    const router = useRouter();
    const pathname = usePathname()
    return (
        <div className="px-4 py-4 mx-auto max-w-8xl sm:px-6 lg:px-8 border border-gray">
            <div className="flex justify-between items-center px-0 py-0 mx-auto w-full sm:px-6 lg:px-8">
                <div className="left flex items-center">
                    <h2 className="text-xl font-semibold">Marketplace</h2>
                </div>
                <div className="right">
                    <nav>
                        <ul className="flex space-x-4">
                            {pathname === '/login' && (
                                <li className="text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer"><a onClick={()=>router.push('/register')}>Register</a></li>
                            )}
                            {pathname === '/register' && (
                                <li className="text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer"><a onClick={()=>router.push('/login')}>Login</a></li>
                            )}

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
