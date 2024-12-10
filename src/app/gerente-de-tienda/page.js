'use client'

import { useSession } from "next-auth/react";
import Sidebar from "./components/sidebar";
import PageContainer from "./components/pageContainer";
import { GetUserInfo } from '../../lib/actions/users/getUserInfo'
import { useEffect, useState } from "react";
import { getStrByUserId } from "../../lib/actions/stores/getStores";

export default function ShopDashboard() {

    const { data: session } = useSession()
    const [userId, setUserId] = useState(null)
    const [userData, setUserData] = useState(null)
    const [step, setStep] = useState(1)
    const [searchOpen, setSearchOpen] = useState(false)
    const [storeOpen, setStoreOpen] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [stores, setStores] = useState(null)
    const [listings, setListings] = useState(null)
    const [activeListings, setActiveListings] = useState(null)
    const [expiredListings, setExpiredListings] = useState(null)
    const [soldOutListings, setSoldOutListings] = useState(null)
    const [refreshStr , setRefreshStr] = useState(false)



    useEffect(() => {

        if (session) {
            // console.clear()
            // console.log(session)
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
                // console.clear();
                // console.log(userInfo)
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


    // Get active listings
    useEffect(() => {
        const getStores = async () => {
            console.clear()
            try {
                const Listings = await getStrByUserId(userId)

                console.log(listings)

                setListings(Listings)
                const str = { count: Listings[0].store_count, store_name: Listings[0].store_name , logo :  Listings[0].s_logo , id : Listings[0].s_id , delivery_dates : Listings[0].delivery_dates}
                setStores(str)

                const activeListingsObg = []
                const expiredListingsObg = []
                const soldOutListingsObg = []

                Listings &&
                    Listings.forEach((listing) => {
                        switch (listing.status) {
                            case 'active':
                                activeListingsObg.push(listing)
                                break
                            case 'expired':
                                expiredListingsObg.push(listing)
                                break
                            case 'sold_out':
                                soldOutListingsObg.push(listing)
                                break
                            default:
                                activeListingsObg.push(listing)
                                break
                        }
                    })

                setActiveListings(activeListingsObg)
                setExpiredListings(expiredListingsObg)
                setSoldOutListings(soldOutListingsObg)
            } catch (error) {
                console.log(error)
                setStores(null)
            }
        }

        userId && getStores()
    }, [userId , refreshStr])



    return (
        <>
            {/* mobile header */}
            {step === 1 ?

                <div className="lg:hidden flex justify-between p-2 shadow-sm items-center">
                    <div className="w-[80%] relative">
                        <img className="w-4 absolute left-0 top-[50%] translate-y-[-50%]" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/search.svg" />
                        <input type="text" placeholder='Buscar...' className='border-b border-[#ccc] p-2 pl-5 w-full' />
                    </div>
                    <a onClick={(e) => setSidebarOpen(true)} className="rounded-full block w-[20%] text-right"><img className="block ml-auto w-12 h-12 rounded-full" src={userData && userData[0].identity_url} /></a>
                </div>

                :

                <div className="lg:hidden">
                    <a className="flex p-3 shadow-md justify-center items-center gap-5 w-full" onClick={e => setStep(1)}><img className="rotate-180 w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/right-arrow.svg" /> Regresar al panel de control</a>
                </div>


            }


            <div className="flex">
                <Sidebar userData={userData} stores={stores} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setStep={setStep} setSearchOpen={setSearchOpen} storeOpen={storeOpen} setStoreOpen={setStoreOpen} />
                <PageContainer refreshStr = {refreshStr }  setRefreshStr = {setRefreshStr} storeDta = {{stores , listings , activeListings , expiredListings, soldOutListings}} setStep={setStep} step={step} userData={userData} searchOpen={searchOpen} setSearchOpen={setSearchOpen} storeOpen={storeOpen} setStoreOpen={setStoreOpen} />
            </div>
        </>
    )
}