"use client"

import { useSession} from "next-auth/react"
import Navbar from '../../components/auth/navbar/navbar'
import { useRouter } from 'next/navigation';



export default function layout({ children }) {
    const router = useRouter();
    const { data: session } = useSession()

    console.log(session)
    if (!session) {
        return (
            <>
                <Navbar />
                {children}
            </>
        )
    }else{
        router.push('/')
    }

}
