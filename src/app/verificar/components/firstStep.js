'use client'

import { useEffect, useState } from "react"
import { GetUserInfo } from '../../../lib/actions/users/getUserInfo'
import { updateAddressFunc } from "../../../lib/actions/users/updateUser"

export default function FirstStep({ userId, setCheckoutAddress, setCheckoutStep }) {

    const [userInfo, setUserInfo] = useState(null)
    const [addressNumber, setAddressNumber] = useState(null)
    const [street, setStreeet] = useState(null)
    const [addressLine1, setAddressLine1] = useState(null);
    const [addressLine2, setAddressLine2] = useState(null);
    const [city, setCity] = useState(null);
    const [postalCode, setPostalCode] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [addressSuccess, setAddressSuccess] = useState(false)
    const [addressError, setAddressError] = useState(false)

    const [editAddress, setEditAddress] = useState(false)

    useEffect(() => {

        const getUserInformation = async () => {

            // console.clear();
            // console.log('hukapan')
            try {
                const userInfo = await GetUserInfo(userId)
                // console.clear()
                console.log(userInfo)
                setUserInfo(userInfo)
                setAddressNumber(userInfo[0].address_number);
                setStreeet(userInfo[0].street);
                setAddressLine1(userInfo[0].address_number + ' ' + userInfo[0].street);
                setAddressLine2(userInfo[0].floor);
                setCity(userInfo[0].city);
                setPostalCode(userInfo[0].postal_code)
                setPhoneNumber(userInfo[0].phone_number)
            } catch (error) {
                console.log(error)
            }

        }

        if (userId) {
            getUserInformation()
        }
    }, [userId])

    const submitAddressForm = (e) => {
        e.preventDefault();
        console.clear();
        console.log('it is here')
        const fullAddress = { line1: addressLine1, line2: addressLine2, city: city, postCode: postalCode, phoneNumber: phoneNumber }
        setCheckoutAddress(fullAddress)
        setCheckoutStep(2)
    }

    const handleAddressUpdate = async (e) => {
        try {
            const userUpdated = await updateAddressFunc(userId, addressNumber, street, addressLine2, city, postalCode, phoneNumber);
            if (userUpdated) {
                setAddressError(false)
                setAddressSuccess('¡Dirección actualizada exitosamente!')
                setEditAddress(false)

            } else {
                setAddressError('¡Algo salió mal!')
                setAddressSuccess(false)
            }
        } catch (error) {
            console.clear();
            console.log(error)
            setAddressError('¡Algo salió mal!')
            setAddressSuccess(false)
        }
    }


    return (
        <div className='max-w-2xl mr-auto ml-auto py-14 '>
            <h2 className='text-3xl mb-8'>Elige una dirección de envío</h2>
            <div className="flex justify-between">
                <div className="w-[60%]">
                    <ul className={!editAddress ? 'block' : 'hidden'}>
                        <li>{addressLine1}</li>
                        <li>{addressLine2}</li>
                        <li>{city}</li>
                        <li>{postalCode}</li>
                        <li>{phoneNumber}</li>
                    </ul>

                    <div className={editAddress ? 'block' : 'hidden'}>
                        <div>
                            <input placeholder="Número" className="block w-80 p-2 mt-3 border border-[#ccc]" value={addressNumber} type="number" onChange={e => setAddressNumber(e.target.value)} />
                            <input placeholder="Calle" className="block w-80 p-2 mt-3 border border-[#ccc]" value={street} type="text" onChange={e => setStreeet(e.target.value)} />
                            <input placeholder="DirecciónLinea2" className="block w-80 p-2 mt-3 border border-[#ccc]" value={addressLine2} type="text" onChange={e => setAddressLine2(e.target.value)} />
                            <input placeholder="Ciudad" className="block w-80 p-2 mt-3 border border-[#ccc]" value={city} type="text" onChange={e => setCity(e.target.value)} />
                            <input placeholder="Código Postal" className="block w-80 p-2 mt-3 border border-[#ccc]" value={postalCode} type="number" onChange={e => setPostalCode(e.target.value)} />
                            <input placeholder="Número de teléfono" className="block w-80 p-2 mt-3 border border-[#ccc]" value={phoneNumber} type="number" onChange={e => setPhoneNumber(e.target.value)} />
                            <a className={`${editAddress ? 'block' : 'hidden'} font-semibold py-1 px-3 hover:bg-[#f2f2f2] cursor-pointer rounded-full mt-3 inline-block`} onClick={e => handleAddressUpdate(e)} > Ahorrar</a>
                        </div>
                    </div>

                    {addressError && <div className='mt-3 text-sm text-red-700'>{addressError}</div>}
                    {addressSuccess && <div className='mt-3 text-sm text-green-700'>{addressSuccess}</div>}
                </div>
                <div className="w-[40%]">
                    <a href="" className="py-3 px-6 bg-black rounded-full text-white w-full block mb-5 text-center" onClick={(e) => submitAddressForm(e)}>Enviar aquí</a>
                    <div className="flex justify-end">
                        <a href="#" className="py-2 px-5 bg-transparent hover:bg-[#f6f6f6] rounded-full font-semibold" onClick={(e) => { e.preventDefault(); setEditAddress(true) }}>Editar</a>
                        {/* <a href="#" className="py-2 px-5 bg-transparent hover:bg-[#f6f6f6] rounded-full">Eliminar</a> */}
                    </div>
                </div>

            </div>
        </div>
    )
}
