import React from 'react'

export default function Loading() {
    return (
        <div className='w-full h-screen bg-white flex flex-col justify-center items-center '>
            <img className='block w-52' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/loading.svg" />
            <p>Cargando...</p>
        </div>
    )
}
