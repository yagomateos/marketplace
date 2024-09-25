'use client'

import React, { Suspense, useEffect, useState } from 'react'
import PublicPageContainer from '../../components/containers/publicPageContainer'
import { getUserInfoByEmail } from '../../lib/actions/users/getUserInfo'
import sendEmail from '../../lib/utils/sendMail'
import { useRouter, useSearchParams } from 'next/navigation'
import { matchEmailToken } from '../../lib/utils/tokenManager'
import { updatePasswordByEmailFunc } from '../../lib/actions/users/updateUser'

function ResetPasswordFunc() {

    const [email, setEmail] = useState('')
    const [emailSuccess, setEmailSuccess] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [emailParam, setEmailParam] = useState(null)
    const [emailToken, setEmailToken] = useState(null)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [resetPasswrdError, setResetPasswordError] = useState(null)
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState(null)
    const [formShown, setFormShown] = useState(1)
    const [globalError, setGlobalError] = useState(null)
    const router = useRouter();

    const searchParams = useSearchParams();

    useEffect(() => {
        const emailParam = searchParams.get('email')
        const emailToken = searchParams.get('token')

        emailParam && setEmailParam(emailParam)
        emailToken && setEmailToken(emailToken)
        if (searchParams.get('email') && searchParams.get('token')) {
            setFormShown(2)
        }


    }, [searchParams])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email)
        // check if email exist
        try {
            const user = await getUserInfoByEmail(email)
            if (user && user.length > 0) {
                try {
                    const mailSent = sendEmail(email, 'resetPassword')
                    if (mailSent) {
                        setEmailError(null)
                        setEmailSuccess('¡Enlace de restablecimiento de contraseña enviado a su dirección de correo electrónico!')
                    } else {
                        setEmailError('¡Algo salió mal! ¡Por favor, inténtalo de nuevo!')
                    }
                } catch (error) {
                    setEmailError('¡Algo salió mal! ¡Por favor, inténtalo de nuevo!')
                }

            } else {
                setEmailError('no user found')
            }
        } catch (error) {
            setEmailError(error)
        }
    }


    const handlePasswrdReset = async (e) => {
        e.preventDefault();
        console.log(password, confirmPassword)
        if (password === confirmPassword) {
            // check if the user exists and token matches
            try {
                const tokenMatched = await matchEmailToken(emailParam, emailToken)
                if (tokenMatched) {
                    // UPDATE PASSWORD
                    setGlobalError(null)
                    try {
                        const passwordUpdated = await updatePasswordByEmailFunc(emailParam, password)
                        console.log(passwordUpdated)
                        setResetPasswordSuccess('Contraseña actualizada exitosamente')
                        setResetPasswordError(null)
                        router.push('/')
                    } catch (error) {
                        setResetPasswordSuccess(null)
                        setResetPasswordError('¡Algo salió mal! Por favor, inténtalo de nuevo')
                    }

                } else {
                    setGlobalError('¡El token no coincide! ¡Inténtalo de nuevo!')
                    setFormShown(1)
                }
            } catch (error) {
                setGlobalError('¡El token no coincide! ¡Inténtalo de nuevo!')
                setFormShown(1)
            }
        } else {
            setResetPasswordSuccess(null)
            setResetPasswordError('Las contraseñas no coinciden')
        }
    }

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        console.log(e.target)
        const inputField = e.target.previousElementSibling;
        inputField.type = inputField.type === 'password' ? 'text' : 'password';
    };

    return (
        <PublicPageContainer>

            {globalError &&
                <div className='max-w-4xl mr-auto ml-auto mt-4 p-4 border border-red-600 rounded-lg text-red-900 text-sm'>
                    {globalError}
                </div>
            }


            {formShown === 1 ? (
                <div className='p-16'>
                    <div className='max-w-4xl border border-[#ccc] rounded-xl mr-auto ml-auto p-4'>
                        <h2 className='text-2xl mb-3'>Restablece tu contraseña</h2>
                        <p>Introduce tu dirección de correo electrónico y te enviaremos un enlace para que restablezcas tu contraseña.</p>
                        <form className='flex flex-col' onSubmit={(e) => handleSubmit(e)}>
                            <label>Tu dirección de correo electrónico</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='p-3 w-full h-[45px] flex justify-center items-center my-4 border border-[#ccc]' type='email' />
                            <button type='submit' className='py-3 px-6 rounded-full bg-black text-white lg:max-w-[40%]' >Envíame un enlace de inicio de sesión</button>
                        </form>
                        {emailError && <div className='text-red-700 text-sm mt-3'>Ningún usuario encontrado</div>}
                        {emailSuccess && <div className='text-green-700 text-sm mt-3'>{emailSuccess}</div>}
                    </div>
                </div>
            ) : (
                <div className='p-16'>
                    <div className='max-w-4xl border border-[#ccc] rounded-xl mr-auto ml-auto p-4'>
                        <h2 className='text-2xl mb-3'>¡Restablece tu contraseña!</h2>
                        <form className='flex flex-col' onSubmit={(e) => handlePasswrdReset(e)}>
                            <div>
                                <label>Nueva contraseña</label>
                                <div className='flex items-center'>
                                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='p-3 w-full h-[45px] flex justify-center items-center my-4 border border-[#ccc]' type='password' />
                                    <img onClick={togglePasswordVisibility} className='w-5 block ml-3 cursor-pointer' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-eye-50.png" />
                                </div>
                            </div>

                            <div>
                                <label>Confirmar Contraseña</label>
                                <div className='flex items-center'>
                                    <input value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} className='p-3 w-full h-[45px] flex justify-center items-center my-4 border border-[#ccc]' type='password' />
                                    <img onClick={togglePasswordVisibility} className='w-5 block ml-3 cursor-pointer' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-eye-50.png" />
                                </div>
                            </div>

                            <button type='submit' className='py-3 px-6 rounded-full bg-black text-white lg:max-w-[40%]' >Reiniciar</button>
                        </form>
                        {resetPasswrdError && <div className='text-red-700 text-sm mt-3'>{resetPasswrdError}</div>}
                        {resetPasswordSuccess && <div className='text-green-700 text-sm mt-3'>{resetPasswordSuccess}</div>}
                    </div>
                </div>
            )}

        </PublicPageContainer >
    )
}

export default function ResetPassword() {
    return (
        <Suspense fallback={<div className="w-full h-full fixed text-center flex items-center justify-center text-lg text-green-700">Loading...</div>}>
            <ResetPasswordFunc />
        </Suspense>
    )
}
