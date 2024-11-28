'use client';

import { useEffect, useState } from 'react';

export default function FileUploader({ setPhotos , setFileObjects }) {
    const [files, setFiles] = useState([]);
    const [blobUrls, setBlobUrls] = useState([]);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const validFiles = selectedFiles.filter(file => file.type === 'image/jpeg' || file.type === 'image/png');

        if (validFiles.length > 10) {
            setError("Puedes subir un máximo de 10 fotos.");
            return;
        }

        setFiles(validFiles);
        setError("");

        const urls = validFiles.map(file => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            return new Promise(resolve => {
                reader.onload = () => {
                    const blob = new Blob([reader.result], { type: file.type });
                    const url = URL.createObjectURL(blob);
                    resolve(url);
                };
            });
        });

        Promise.all(urls).then(setBlobUrls);
    };

    useEffect(() => {
        if (blobUrls.length > 0) {
            setPhotos(blobUrls)
            setFileObjects(files)
        }

    }, [blobUrls])


    const handleClick = () => {
        document.getElementById('fileInput').click();
    };


    return (
        <div className='text-center'>
            <button onClick={handleClick} className="file-upload-button ml-auto mr-auto mt-4">
                Añade hasta 10 fotos. <span className='text-red-600 tex-sm'>(El tamaño recomendado es 900px x 1200px)</span>
            </button>
            <input
                type="file"
                id="fileInput"
                className="hidden"
                multiple
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
            />
            {error && <div className="error-message">{error}</div>}
            <div className="uploaded-images mt-2 flex justify-between gap-2">
                {blobUrls.map((url, index) => (
                    <div key={index} className='w-full'><img className="w-full h-20 lg:h-36 object-cover" key={index} src={url} alt={`Uploaded ${index + 1}`} /></div>
                ))}
            </div>
        </div>
    );
}
