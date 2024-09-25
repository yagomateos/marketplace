import { useEffect, useState } from 'react'
import { updatePasswordFunc, updateEmailFunc, updateCommunicationFunc } from '../../../lib/actions/users/updateUser'
import sendEmail from '../../../lib/utils/sendMail'
import { useSession } from 'next-auth/react';

export default function Account({ setStep, userInfo, userId }) {

    const [formattedDate, setFormattedDate] = useState(null)
    const { data: session } = useSession();

    // password fields
    const [existingPassword, setExistingPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [passwordSuccess, setPasswrdSuccess] = useState(null)

    // email fields
    const [newEmail, setNewEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [emailResetPass, setEmailResetPass] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [emailSuccess, setEmailSuccess] = useState(null)

    const [confirmEmailSuccess, setConfirmEmailSuccess] = useState(null)
    const [confirmEmailError, setConfirmEmailError] = useState(null)

    // coomunication fields

    const [emailAllowed, setEmailAllowed] = useState(false)
    const [phoneAllowed, setPhoneAllowed] = useState(false)
    const [communicationError, setCommunicationError] = useState(false)
    const [communicationSuccess, setCommunicationSuccess] = useState(false)

    // password update
    const handlePasswordUpdate = async (e) => {
        e.preventDefault()
        // console.clear();
        // console.log(userId, existingPassword, newPassword, confirmPassword)
        if (newPassword === confirmPassword) {

            setNewPassword('')
            setConfirmPassword('')
            setExistingPassword('')

            try {
                const updatePassword = await updatePasswordFunc(userId, existingPassword, newPassword)
                console.log(updatePassword)
                if (updatePassword) {
                    setPasswordError(null)
                    setPasswrdSuccess('Contraseña actualizada exitosamente')
                    // send an email to the user
                    sendEmail(session.user.email , 'passwordsuccess')
                }

            } catch (error) {
                console.log(error)
                setPasswordError('La contraseña existente que ingresó no es correcta')
                setPasswrdSuccess(null)
            }

        } else {
            setPasswordError('Las contraseñas no coinciden')
            setPasswrdSuccess(null)
        }
    }

    // email update
    const handleEmailUpdate = async (e) => {
        e.preventDefault()
        if (newEmail === confirmEmail) {
            console.clear();
            console.log('comes here')
            try {
                const userUpdated = await updateEmailFunc(userId, newEmail, emailResetPass)
                if (userUpdated) {
                    setEmailError(null)
                    setEmailSuccess('Correo electrónico actualizado con éxito')
                     // send an email to the user
                     sendEmail(newEmail , 'emailsuccess')
                }
            } catch (error) {
                setEmailError('Contraseña incorrecta')
                setEmailSuccess(null)
            }

        } else {
            setEmailError('Los correos electrónicos no coinciden')
            setEmailSuccess(null)
        }
    }

    useEffect(() => {

        if (userInfo && userInfo.registered_date) {
            const formattedDate = new Date(userInfo.registered_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            setFormattedDate(formattedDate)
        }

    }, [userInfo])

    // handle communication update
    const handleCommunicationupdate = async (e) => {
        e.preventDefault()
        try {
            const communicationUpdated = await (updateCommunicationFunc(userId, emailAllowed, phoneAllowed))
            console.clear();
            console.log(communicationUpdated)
            if (communicationUpdated) {
                setCommunicationError(false)
                setCommunicationSuccess('Información actualizada con éxito')
                setTimeout(() => {
                    setStep(1)
                }, 1000);
            }
        } catch (error) {
            setCommunicationError('¡Algo salió mal!')
            setCommunicationSuccess(false)
        }
    }

    // handle verification email sending
    const handleEmailConfirmation = async (user) => {
        console.clear()
        console.log('comes here')

        // const email = user ? user.email_address : null
        const email = session?.user?.email;

        if (email) {
            try {
                const mailSent = sendEmail(email, 'confirmEmail')
                if (mailSent) {
                    setConfirmEmailSuccess('Correo electrónico de confirmación enviado con éxito')
                    setConfirmEmailError(null)
                } else {
                    setConfirmEmailSuccess(null)
                    setConfirmEmailError('¡Algo salió mal!')
                }
            } catch (error) {
                console.log(error)
                setConfirmEmailSuccess(null)
                setConfirmEmailError('¡Algo salió mal!')
            }
        }else{
            setConfirmEmailSuccess(null)
                setConfirmEmailError('¡Algo salió mal!')
        }

    }


    return (
        <>
            {/* first box */}
            <div className="p-4 rounded-lg border border-[#ccc] mb-4">
                <h3 className="text-2xl font-semibold mb-4">Sobre ti</h3>
                <ul>
                    <li className="mb-4"><b>Nombre</b><br />{userInfo && userInfo.username}</li>
                    <li><b>En Vendalia desde</b><br />{formattedDate && formattedDate}</li>
                </ul>
                <a onClick={() => setStep(2)} className="p-2 border-2 border-[#000] rounded-full mt-8 inline-block cursor-pointer">Editar perfil público</a>
            </div>

            {/* second box */}
            <div className="p-4 rounded-lg border border-[#ccc]  mb-4">
                <h3 className="text-2xl font-semibold">Ajustes de ubicación</h3>
                <p className="mb-4">Indica dónde vives, qué idioma hablas y la divisa que usas.</p>
                <div className="mb-4">
                    <label className="block font-semibold mb-3">País</label>
                    <select className="block p-3 border rounded-lg w-full">
                        <option>España</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-3">Idioma</label>
                    <select className="block p-3 border rounded-lg w-full">
                        <option>Español</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-3">Divisa</label>
                    <select className="block p-3 border rounded-lg w-full">
                        <option>Euro</option>
                    </select>
                </div>

                <a className="mb-3 rounded-full p-3 bg-black text-white font-semibold inline-block cursor-pointer">Guardar configuración</a>
            </div>

            {/* third box */}
            <div className="p-4 rounded-lg border border-[#ccc]  mb-4">
                <h3 className="text-2xl font-semibold mb-4">Contraseña</h3>
                <form onSubmit={(e) => handlePasswordUpdate(e)}>
                    <div className="mb-4">
                        <label className="block font-semibold mb-3">Contraseña actual</label>
                        <input type='password' value={existingPassword} onChange={(e) => { setExistingPassword(e.target.value) }} className="block p-3 border rounded-lg w-full" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-3">Nueva contraseña</label>
                        <input type='password' value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} className="block p-3 border rounded-lg w-full" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-3">Confirmar la nueva contraseña</label>
                        <input type='password' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} className="block p-3 border rounded-lg w-full" />
                    </div>
                    <button type='submit' className="mb-3 rounded-full p-3 bg-black text-white font-semibold inline-block cursor-pointer">Cambiar contraseña</button>
                    {passwordError && <div className='mt-3 text-sm text-red-700'>{passwordError}</div>}
                    {passwordSuccess && <div className='mt-3 text-sm text-green-700'>{passwordSuccess}</div>}
                </form>
            </div>

            {/* fourth box */}
            <div className="p-4 rounded-lg border border-[#ccc]  mb-4">
                <h3 className="text-2xl font-semibold mb-4">Correo electrónico</h3>
                <div className="mb-4">
                    <label className="block font-semibold mb-3">Correo electrónico actual</label>
                    <span>{session?.user?.email}</span>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-3">Estado</label>
                    {userInfo && userInfo.confirmed == 1 ? <span className="block">Correo electrónico confirmado</span> :
                        <>
                            <span className="block">No confirmada</span>
                            <a className="p-3 border border-[#ccc] rounded-full cursor-pointer inline-block mb-4" onClick={() => handleEmailConfirmation(userInfo)}>Reenviar correo de confirmación</a>
                            {confirmEmailSuccess ? <div className='mt-3 text-sm text-green-700'>{confirmEmailSuccess}</div> : ''}
                            {confirmEmailError ? <div className='mt-3 text-sm text-red-700'>{confirmEmailError}</div> : ''}
                        </>}


                </div>
                <hr className="h-[1px] bg-[#ccc]" />
                <div className="pt-4">
                    <h3 className="text-lg font-semibold mb-4">Cambiar tu correo electrónico</h3>
                    <div className="mb-4">
                        <label className="block font-semibold mb-3">Correo electrónico nuevo</label>
                        <input className="block p-3 border rounded-lg w-full" value={newEmail} onChange={(e) => { setNewEmail(e.target.value) }} />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-3">Confirmar correo electrónico nuevo</label>
                        <input className="block p-3 border rounded-lg w-full" value={confirmEmail} onChange={(e) => { setConfirmEmail(e.target.value) }} />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-3">Tu contraseña de Vendalia</label>
                        <input className="block p-3 border rounded-lg w-full" value={emailResetPass} onChange={(e) => { setEmailResetPass(e.target.value) }} />
                    </div>
                </div>

                <a onClick={(e) => handleEmailUpdate(e)} className="mb-3 rounded-full p-3 bg-black text-white font-semibold inline-block cursor-pointer">Cambiar correo electrónico</a>
                {emailError && <div className='mt-3 text-sm text-red-700'>{emailError}</div>}
                {emailSuccess && <div className='mt-3 text-sm text-green-700'>{emailSuccess}</div>}
            </div>

            {/* fifth box */}
            <div className="p-4 rounded-lg border border-[#ccc]  mb-4">
                <h3 className="text-2xl font-semibold mb-4">Comunicación de Etsy</h3>
                <div className="mb-4">
                    <label className="block font-semibold mb-3">Correo postal</label>
                    <input checked={emailAllowed} onClick={(e) => setEmailAllowed(!emailAllowed)} type="radio" />
                    <p className="inline-block ml-3">Permitir que Etsy me envíe correo postal</p>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-3">Llamadas telefónicas</label>
                    <input checked={phoneAllowed} onClick={(e) => setPhoneAllowed(!phoneAllowed)} type="radio" />
                    <p className="inline-block ml-3">Permitir que Etsy contacte conmigo por teléfono</p>
                </div>
                <a onClick={(e) => handleCommunicationupdate(e)} className="mb-3 rounded-full p-2 text-center lg:p-3 bg-black text-white font-semibold inline-block cursor-pointer">Guardar preferencias de comunicación</a>
                {communicationError && <div className='mt-3 text-sm text-red-700'>{communicationError}</div>}
                {communicationSuccess && <div className='mt-3 text-sm text-green-700'>{communicationSuccess}</div>}
            </div>
        </>
    )
}
