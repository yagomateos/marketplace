import React, { useRef, useState, useEffect } from 'react';

export default function PaymentSecondStep({ setIdentityInfo }) {
    const [fileBlob, setFileBlob] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const fileInputRef = useRef(null);
    const [idType, setIdType] = useState(null)
    const [fileErr , setFileErr] = useState(null)

    const handleFileInputClick = (e) => {

        console.clear();
        console.log(idType)

        e.preventDefault();

        if(idType){
            setFileErr(null)
            if (fileInputRef.current) {
                fileInputRef.current.click();
            }
        }else{
            setFileErr('Por favor, seleccione primero el tipo de archivo')
        }

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const blob = new Blob([reader.result], { type: file.type });
                setFileBlob(blob);
                const url = URL.createObjectURL(blob);
                setFileUrl(url);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    useEffect(() => {
        if (fileUrl && idType) {
            console.clear();
            console.log("File Blob URL:", fileUrl);
            setIdentityInfo({ idType: idType, fileUrl: fileUrl })
        }
    }, [fileUrl, idType]);



    return (
        <div className='py-6 px-4'>
            <div className='bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]'>
                <h1 className='text-3xl mb-4'>Verifica tu identidad</h1>
                <p>Necesitamos que nos des información adicional para verificar tu identidad y completar el registro. Este paso nos ayuda a protegerte y a mantener la seguridad general del mercado. Sube una copia de tu identificación emitida por una entidad gubernamental oficial de tu país de residencia que sea nítida y de alta calidad. Puedes escanearla o tomar una foto con tu teléfono o con la cámara web del ordenador. Nos valen el permiso de conducir, un documento de identificación emitido por una entidad gubernamental o un pasaporte válido.</p>

                <p className='my-4'>Recuerda:</p>

                <ul>
                    <li>El documento de identificación tiene que ser un tipo de documento aceptado de uno de los países emisores de la lista siguiente.</li>
                    <li>Solo podemos aceptar documentos de identidad con caracteres latinos. Consulta la lista de abajo para ver qué tipos de documentos aceptamos de tu país emisor.</li>
                    <li>En la copia tienen que aparecer claramente tu nombre, tu fecha de nacimiento y la fecha de caducidad del documento.</li>
                    <li>Tiene que ser válido y legible, y estar en vigor. De lo contrario, podríamos solicitarte que envíes otra copia.</li>
                    <li>La información del documento tiene que coincidir con la información de tu cuenta de pagos que usas para recibir los depósitos y el nombre que figura en la cuenta de pagos de las tarifas de Vendalia.</li>
                    <li>Si quieres usar un monónimo, ten en cuenta que tu documentación debe verificar que solo tienes un nombre legal.</li>
                    <li>Las tarjetas sanitarias emitidas por entidades gubernamentales no son una forma de identificación válida.</li>
                    <li>La copia tiene que estar en formato JPG o PNG.</li>
                </ul>

                <div className='mt-4'>
                    <p className='text-lg'>Tipo de documento</p>
                    <div className='flex gap-4 items-center flex-wrap'>
                        <div>
                            <select className='p-2 border border-[#ccc] rounded-lg w-full' onChange={e => setIdType(e.target.value)}>
                                <optgroup>
                                    <option value="0" disabled="disabled" selected="selected">
                                        Selecciona el tipo de documento
                                    </option>
                                    <option value="DrivingLicence">Permiso de conducir</option>
                                    <option value="IdentityCard">Documento de identidad</option>
                                    <option value="Passport">Pasaporte</option>
                                </optgroup>
                            </select>
                        </div>
                        <div>
                            <input type='file'  ref={fileInputRef} className='hidden' onChange={handleFileChange} />
                            <a className='p-2 border border-[#ccc] rounded-lg w-full' href='/' onClick={e => { e.preventDefault(); handleFileInputClick(e) }}>Elige un archivo</a>
                        </div>
                        <div>
                            {fileUrl && (<img className='w-[100px] h-[100px] object-cover rounded-full' src={fileUrl} />) }
                        </div>
                    </div>
                    {fileErr && (<div className='lg:max-w-7xl ml-auto mr-auto mt-3 err-wrapper text-red-700 text-sm'>{(fileErr)}</div>)}
                </div>
            </div>
        </div>
    )
}
