'use client';

import { useEffect, useState } from 'react';

export default function FileUploader({ setPhotos, setFileObjects }) {
    const [files, setFiles] = useState([]);
    const [blobUrls, setBlobUrls] = useState([]);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const validFiles = selectedFiles.filter(file => file.type === 'image/jpeg' || file.type === 'image/png');

        if (files.length + validFiles.length > 10) {
            setError("Puedes subir un máximo de 10 fotos.");
            return;
        }

        const updatedFiles = [...files, ...validFiles];
        setFiles(updatedFiles);
        setError("");

        const newBlobUrls = validFiles.map(file => {
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

        Promise.all(newBlobUrls).then((urls) => {
            setBlobUrls(prevUrls => [...prevUrls, ...urls]);
        });
    };

    const handleRemoveImage = (indexToRemove) => {
        setFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
        setBlobUrls(prevUrls => prevUrls.filter((_, index) => index !== indexToRemove));
    };

    useEffect(() => {
        if (blobUrls.length > 0) {
            setPhotos(blobUrls);
            setFileObjects(files);
        }
    }, [blobUrls, files]);

    const handleClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div className="text-center">
            <button onClick={handleClick} className="file-upload-button ml-auto mr-auto mt-4">
                Añade hasta 10 fotos. <span className="text-red-600 tex-sm">(El tamaño recomendado es 900px x 1200px)</span>
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
            <div className="uploaded-images mt-2 flex flex-wrap gap-2">
                {blobUrls.map((url, index) => (
                    <div key={index} className="relative w-1/4">
                        <img
                            className="w-full h-20 lg:h-36 object-cover"
                            src={url}
                            alt={`Uploaded ${index + 1}`}
                        />
                        <button
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full text-sm"
                        >
                            &times;
                        </button>
                    </div>
                ))}

                {/* Last Card with Plus Icon */}
                {files.length < 10 && (
                    <div
                        onClick={handleClick}
                        className="relative w-1/4 h-20 lg:h-36 border border-dashed border-gray-400 flex justify-center items-center cursor-pointer"
                    >
                        <span className="text-gray-400 text-3xl font-bold">+</span>
                    </div>
                )}
            </div>
        </div>
    );
}
