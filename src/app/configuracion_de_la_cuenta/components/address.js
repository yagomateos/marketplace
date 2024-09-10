import { useEffect, useState } from "react";
import { updateAddressFunc } from '../../../lib/actions/users/updateUser'

export default function Address({ userInfo, userId }) {

    const [addressNumber, setAddressNumber] = useState(null)
    const [street, setStreeet] = useState(null)
    const [addressLine1, setAddressLine1] = useState(null);
    const [addressLine2, setAddressLine2] = useState(null);
    const [city, setCity] = useState(null);
    const [postalCode, setPostalCode] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);

    const [editAddress, setEditAddress] = useState(false)

    const [addressError, setAddressError] = useState(false)
    const [addressSuccess, setAddressSuccess] = useState(false)


    useEffect(() => {
        if (userInfo) {
            setAddressNumber(userInfo.address_number);
            setStreeet(userInfo.street);
            setAddressLine1(userInfo.address_number + ' ' + userInfo.street);
            setAddressLine2(userInfo.floor);
            setCity(userInfo.city);
            setPostalCode(userInfo.postal_code)
            setPhoneNumber(userInfo.phone_number)
        }
    }, [userInfo])

    const handleAddressUpdate = async (e) => {
        e.preventDefault();
        try {
            const userUpdated = await updateAddressFunc(userId, addressNumber, street, addressLine2, city, postalCode, phoneNumber);
            if (userUpdated) {
                setAddressError(false)
                setAddressSuccess('¡Dirección actualizada exitosamente!')
                setTimeout(() => {
                    setEditAddress(false)
                }, 1000);
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
        <div className="p-3">
            <h2 className="lg:text-2xl font-semibold">Tus direcciones de envío</h2>
            {/* <a className="p-2 border-2 border-[#000] rounded-full mt-8 inline-block cursor-pointer">Añadir una dirección nueva</a> */}
            <div className="flex flex-col lg:flex-row gap-8 my-5">
                <div className="lg:flex-[50%]">
                    <div className="inline-block py-1 px-3 rounded-full bg-green-700 text-white text-sm">
                        Predeterminado
                    </div>
                    <ul className={!editAddress ? 'block' : 'hidden'}>
                        <li>{addressLine1}</li>
                        <li>{addressLine2}</li>
                        <li>{city}</li>
                        <li>{postalCode}</li>
                        <li>{phoneNumber}</li>
                    </ul>

                    <div className={editAddress ? 'block' : 'hidden'}>
                        <input placeholder="Número" className="block w-80 p-2 mt-3 border border-[#ccc]" value={addressNumber} type="number" onChange={e => setAddressNumber(e.target.value)} />
                        <input placeholder="Calle" className="block w-80 p-2 mt-3 border border-[#ccc]" value={street} type="text" onChange={e => setStreeet(e.target.value)} />
                        <input placeholder="DirecciónLinea2" className="block w-80 p-2 mt-3 border border-[#ccc]" value={addressLine2} type="text" onChange={e => setAddressLine2(e.target.value)} />
                        <input placeholder="Ciudad" className="block w-80 p-2 mt-3 border border-[#ccc]" value={city} type="text" onChange={e => setCity(e.target.value)} />
                        <input placeholder="Código Postal" className="block w-80 p-2 mt-3 border border-[#ccc]" value={postalCode} type="number" onChange={e => setPostalCode(e.target.value)} />
                        <input placeholder="Número de teléfono" className="block w-80 p-2 mt-3 border border-[#ccc]" value={phoneNumber} type="number" onChange={e => setPhoneNumber(e.target.value)} />
                    </div>
                    <a className={`${!editAddress ? 'block' : 'hidden'} font-semibold py-1 px-3 hover:bg-[#f2f2f2] cursor-pointer rounded-full mt-3 inline-block"`} onClick={e => setEditAddress(true)}> Editar</a>
                    <a className={`${editAddress ? 'block' : 'hidden'} font-semibold py-1 px-3 hover:bg-[#f2f2f2] cursor-pointer rounded-full mt-3 inline-block`} onClick={e => handleAddressUpdate(e)} > Ahorrar</a>
                    &nbsp;&nbsp;<a className={`${editAddress ? 'block' : 'hidden'} font-semibold py-1 px-3 hover:bg-[#f2f2f2] cursor-pointer rounded-full mt-3 inline-block`} onClick={e => setEditAddress(false)}> Cancelar</a>
                    {/* &nbsp;&nbsp;<a className="font-semibold py-1 px-3 hover:bg-[#f2f2f2] cursor-pointer rounded-full mt-3 inline-block">Eliminar</a> */}
                    {addressError && <div className='mt-3 text-sm text-red-700'>{addressError}</div>}
                    {addressSuccess && <div className='mt-3 text-sm text-green-700'>{addressSuccess}</div>}
                </div>
                {/* <div className="lg:flex-[50%]">
                <ul>
                        <li>asdsd sadsda</li>
                        <li>asd asd</li>
                        <li>asd</li>
                        <li>01001 – 5200 ASD ÁLAVA</li>
                        <li>España</li>
                        <li>+0 (776) 635-5578</li>
                    </ul>
                    <a className="font-semibold py-1 px-3 hover:bg-[#f2f2f2] cursor-pointer rounded-full mt-3 inline-block"> Editar</a>&nbsp;&nbsp;<a className="font-semibold py-1 px-3 hover:bg-[#f2f2f2] cursor-pointer rounded-full mt-3 inline-block">Eliminar</a>
                </div> */}



            </div>
        </div>
    )
}
