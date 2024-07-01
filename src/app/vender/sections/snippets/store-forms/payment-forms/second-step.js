import React, { useRef } from 'react'

export default function PaymentSecondStep() {

    const fileInputRef = useRef(null);

    const handleFileInputClick = (e) => {
        e.preventDefault();
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='py-6'>
            <div className='bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]'>
                <h1 className='text-3xl mb-4'>Verifica tu identidad</h1>
                <p>Necesitamos que nos des información adicional para verificar tu identidad y completar el registro. Este paso nos ayuda a protegerte y a mantener la seguridad general del mercado. Sube una copia de tu identificación emitida por una entidad gubernamental oficial de tu país de residencia que sea nítida y de alta calidad. Puedes escanearla o tomar una foto con tu teléfono o con la cámara web del ordenador. Nos valen el permiso de conducir, un documento de identificación emitido por una entidad gubernamental o un pasaporte válido.</p>

                <p className='my-4'>Recuerda:</p>

                <ul>
                    <li>El documento de identificación tiene que ser un tipo de documento aceptado de uno de los países emisores de la lista siguiente.</li>
                    <li>Solo podemos aceptar documentos de identidad con caracteres latinos. Consulta la lista de abajo para ver qué tipos de documentos aceptamos de tu país emisor.</li>
                    <li>En la copia tienen que aparecer claramente tu nombre, tu fecha de nacimiento y la fecha de caducidad del documento.</li>
                    <li>Tiene que ser válido y legible, y estar en vigor. De lo contrario, podríamos solicitarte que envíes otra copia.</li>
                    <li>La información del documento tiene que coincidir con la información de tu cuenta de pagos que usas para recibir los depósitos y el nombre que figura en la cuenta de pagos de las tarifas de Etsy.</li>
                    <li>Si quieres usar un monónimo, ten en cuenta que tu documentación debe verificar que solo tienes un nombre legal.</li>
                    <li>Las tarjetas sanitarias emitidas por entidades gubernamentales no son una forma de identificación válida.</li>
                    <li>La copia tiene que estar en formato JPG o PNG.</li>
                </ul>

                <div className='mt-4'>
                    <p className='text-lg'>Tipo de documento</p>
                    <div className='flex gap-4 items-center'>
                        <div>
                            <select className='p-2 border border-[#ccc] rounded-lg w-full'>
                                <optgroup>
                                    <option value="0" disabled="disabled" selected="selected">
                                        Selecciona el tipo de documento
                                    </option>
                                    <option value="DrivingLicence">Permiso de conducir</option>
                                    <option value="IdentityCard">Documento de identidad</option>
                                    <option value="Passport">Pasaporte</option>
                                    <option value="ResidencePermit">Permiso de residencia</option>
                                    <option value="VoterID">Credencial para votar</option>
                                </optgroup>
                            </select>
                        </div>
                        <div>
                            <input type='file' ref={fileInputRef} className='hidden' />
                            <a className='p-2 border border-[#ccc] rounded-lg w-full' href='/' onClick={e => { e.preventDefault(); handleFileInputClick(e) }}>Elige un archivo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
