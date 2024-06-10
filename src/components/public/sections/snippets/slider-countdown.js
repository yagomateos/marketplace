import { useEffect, useRef, useState } from 'react'

export default function SliderCountdown() {


    const [hours, setHours] = useState(2);
    const [mins, setMins] = useState(20);
    const [seconds, setSeconds] = useState(42);
    const [timer, setTimer] = useState(hours * 3600 + mins * 60 + seconds);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 1) {
                    clearInterval(countdownInterval);
                    return 0;
                } else {
                    return prevTimer - 1;
                }
            });
        }, 1000);

        return () => clearInterval(countdownInterval); // Clear interval on component unmount
    }, []);

    useEffect(() => {
        setHours(Math.floor(timer / 3600));
        setMins(Math.floor((timer % 3600) / 60));
        setSeconds(timer % 60);
    }, [timer]);

    return (
        <>
            <div className='rounded-lg bg-orange-100 text-center text-amber-900 h-full p-4 lg:p-8 flex flex-col items-center'>
                <p className='text-sm font-semibold'>Oferta de tiempo limitado</p>
                <div className='bg-white rounded-md py-1 lg:py-3 px-8 w-max shadow-sm shadow-gray-200 mt-2 lg:mt-4 mb-2'>
                    <p className=' text-lg font-semibold'><span>{hours}</span> &nbsp;:&nbsp; <span>{mins}</span> &nbsp;:&nbsp; <span>{seconds}</span></p>
                </div>
                <p className='text-xs'>Horas &nbsp;&nbsp; minutos &nbsp;&nbsp; Segundos</p>

                <div className='my-4 flex justify-center'>
                    <img className='w-3/5 lg:w-full' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/products/homev5-limited-time-offer.png" />
                </div>

                <div>
                    <h3 className='text-lg lg:text-3xl text-orange-950 font-semibold mb-0 lg:mb-2'>Jogger nocturno</h3>
                    <p className='text-sm mb-1 lg:mb-4'>Hasta 40% de descuento en zapatillas deportivas para mujer</p>
                    <a href="" className='text-sm underline'>Compra ahora</a>
                </div>
            </div>
        </>
    )
}
