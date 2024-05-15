'use client'
import { signOut } from 'next-auth/react';

export default function PublicNavbar() {

    const signOutUser = async (e)=>{
        e.preventDefault();
        signOut({ redirect: true, callbackUrl: '/login' })
    }
    return (
        <div className="px-4 py-4 mx-auto max-w-8xl sm:px-6 lg:px-8 border border-gray">
            <div className="flex justify-between items-center px-0 py-0 mx-auto w-full sm:px-6 lg:px-8">
                <div className="left flex items-center">
                    <h2 className="text-xl font-semibold">Marketplace</h2>
                </div>
                <div className="right">
                    <nav>
                        <ul className="flex space-x-4">
                            <li></li>
                            <li><a href="/" onClick={(event)=>{signOutUser(event)}}>Logout</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
