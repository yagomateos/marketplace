'use client'
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import PublicPageContainer from '../../components/containers/publicPageContainer';
import Account from './components/account'
import Security from './components/security'
import Profile from './components/profile'
import Privacy from './components/Privacy'
import Address from './components/address'
import Mail from './components/mail'
import {GetUserInfo} from '../../lib/actions/users/getUserInfo'


export default function Page() {

    const [step, setStep] = useState(0)
    const { data: session } = useSession()
    const [userId, setUserId] = useState(null)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (session) {
            setUserId(session.user.id)
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
            getUserInfo(userId)
        }
    }, [userId])


    return (
        <PublicPageContainer>
            {/* tabs */}
            <div className='w-full lg:max-w-6xl mr-auto ml-auto'>
                <ul className='py-4 flex gap-8 lg:gap-10 lg:justify-center overflow-x-auto lg:overflow-hidden'>
                    <li className='lg:block'><a className={`${step == 0 ? 'border-b-2 border-[#000]' : ''} py-4  lg:text-xl font-semibold cursor-pointer whitespace-nowrap`} onClick={() => setStep(0)}>Cuenta</a></li>
                    <li className='lg:block'><a className={`${step == 1 ? 'border-b-2 border-[#000]' : ''} py-4  lg:text-xl font-semibold cursor-pointer whitespace-nowrap`} onClick={() => setStep(1)}>Seguridad</a></li>
                    <li className='lg:block'><a className={`${step == 2 ? 'border-b-2 border-[#000]' : ''} py-4  lg:text-xl font-semibold cursor-pointer whitespace-nowrap`} onClick={() => setStep(2)}>Perfil público</a></li>
                    <li className='lg:block'><a className={`${step == 3 ? 'border-b-2 border-[#000]' : ''} py-4  lg:text-xl font-semibold cursor-pointer whitespace-nowrap`} onClick={() => setStep(3)}>Privacidad</a></li>
                    <li className='lg:block'><a className={`${step == 4 ? 'border-b-2 border-[#000]' : ''} py-4  lg:text-xl font-semibold cursor-pointer whitespace-nowrap`} onClick={() => setStep(4)}>Direcciones</a></li>
                    <li className='lg:block'><a className={`${step == 5 ? 'border-b-2 border-[#000]' : ''} py-4  lg:text-xl font-semibold cursor-pointer whitespace-nowrap`} onClick={() => setStep(5)}>Tarjetas de crédito</a></li>
                    <li className='lg:block'><a className={`${step == 6 ? 'border-b-2 border-[#000]' : ''} py-4  lg:text-xl font-semibold cursor-pointer whitespace-nowrap`} onClick={() => setStep(6)}>Correos</a></li>
                </ul>



                {/* forms */}
                <div className='mt-4 w-full lg:max-w-6xl mr-auto ml-auto p-[10px]'>
                    {step == 0 && (
                        <Account setStep={setStep} userInfo = {userData ? userData[0] : null} userId={userId ? userId : null} />
                    )}
                    {step == 1 && (
                        <Security setStep={setStep} userInfo = {userData ? userData[0] : null} userId={userId ? userId : null} />
                    )}
                    {step == 2 && (
                        <Profile setStep={setStep} userInfo = {userData ? userData[0] : null} userId={userId ? userId : null} />
                    )}
                    {step == 3 && (
                        <Privacy setStep={setStep} userId={userId ? userId : null} />
                    )}
                    {step == 4 && (
                        <Address userInfo = {userData ? userData[0] : null} userId={userId} />
                    )}
                    {step == 5 && (
                        <div className='text-center'>
                            Solo puedes añadir una nueva tarjeta de crédito durante la tramitación del pedido.
                        </div>
                    )}
                    {step == 6 && (
                        <Mail userId={userId} />
                    )}
                </div>
            </div>

        </PublicPageContainer>
    )
}
