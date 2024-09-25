'use client'

import { useSession } from "next-auth/react";
import Sidebar from "./components/sidebar";
import PageContainer from "./components/pageContainer";
import { GetUserInfo } from '../../lib/actions/users/getUserInfo'
import { useEffect, useState } from "react";

export default function ShopDashboard() {

    const { data: session } = useSession()
    const [userId, setUserId] = useState(null)
    const [userData, setUserData] = useState(null)
    const [step, setStep] = useState(0)

    useEffect(() => {

        if (session) {
            console.clear()
            console.log(session)
            setUserId(session.user.id)
            console.log(userId)
        }
    }, [session])


    // get userdata
    useEffect(() => {
        const getUserInfo = async (userId) => {
            console.clear()
            try {
                const userInfo = await GetUserInfo(userId)
                console.clear();
                console.log(userInfo)
                setUserData(userInfo)
            } catch (error) {
                console.log(error)
            }
        }

        if (userId) {
            console.log('here')
            getUserInfo(userId)
        }
    }, [userId])

    return (
        <div className="flex">
            <Sidebar setStep={setStep} />
            <PageContainer step={step} userData={userData} />
        </div>
    )
}