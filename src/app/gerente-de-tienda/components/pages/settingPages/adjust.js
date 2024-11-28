import React, { useState } from 'react';

export default function AdjustSettings() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSave = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000); // Message disappears after 3 seconds
  };

  return (
    <div className='max-w-5xl'>
      <div className='w-full overflow-x-auto'>
        <ul className='flex border-b mb-6 border-[#ccc] lg:px-6 pb-3 lg:pb-0 overflow-x-auto lg:overflow-hidden'>
          <li className='min-w-[100%] lg:min-w-max'>
            <a
              className={`text-sm py-2 border border-[#ccc] block px-3 lg:border-b-0 cursor-pointer ${selectedTab === 1 ? 'bg-[#f2f2f2]' : ''}`}
              onClick={(e) => { e.preventDefault(); setSelectedTab(1); }}
            >
              Información y apariencia
            </a>
          </li>
          <li className='min-w-[100%] lg:min-w-max'>
            <a
              className={`text-sm py-2 border border-[#ccc] block px-3 lg:border-b-0 cursor-pointer border-l-0 ${selectedTab === 2 ? 'bg-[#f2f2f2]' : ''}`}
              onClick={(e) => { e.preventDefault(); setSelectedTab(2); }}
            >
              Nombre de la tienda
            </a>
          </li>
        </ul>

      </div>

      {selectedTab === 1 ? (
        <>
          <div className='w-full text-left flex justify-start items-start flex-col '>
            <h2 className='text-2xl font-semibold mb-6'>Información y apariencia</h2>
            <div className='w-full p-3 lg:p-6 border border-[#ccc] rounded-lg overflow-hidden'>
              <h3 className='flex lg:gap-5 mb-5 flex-col lg:flex-row'>
                <span className='font-semibold'>Nombre de la tienda </span>
                <span className='text-sm'>Test Store </span>
                <a className='underline text-sm'>Cambiar</a>
              </h3>
              <hr />
              <div className='w-full flex flex-col lg:flex-row py-4'>
                <label className='min-w-[20%] text-sm'>Título de la tienda</label>
                <input className='p-2 border border-[#ccc] w-full' />
              </div>
              <hr />
              <div className='py-6 flex flex-col lg:flex-row'>
                <p className='w-full lg:w-[20%] text-sm'>Icono de tienda</p>
                <div className='w-full lg:w-[80%]'>
                  <input type='file' className='text-sm' />
                  <img
                    className='block max-w-32 mt-5'
                    src='https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/default_avatar_400x400.png'
                    alt='Icono de la tienda'
                  />
                  <p className='text-sm'>Debe ser un archivo jpg, png o gif de menos de 10 MB de tamaño y al menos 500px x 500px.</p>
                </div>
              </div>
              <hr />
              <div className='flex py-6 flex-col lg:flex-row'>
                <p className='w-full lg:w-[20%] text-sm'>Banner de recibo de pedido</p>
                <div className='w-full lg:w-[80%]'>
                  <input type='file' className='text-sm' />
                  <p className='text-sm mt-4 lg:mt-0'>Debe ser un archivo jpg, png o gif de menos de 10 MB de tamaño y al menos 500px x 500px.</p>
                </div>
              </div>
              <hr />
              <div className='flex py-6 flex-col lg:flex-row'>
                <p className='w-full lg:w-[20%]'>Anuncios de la tienda</p>
                <div className='w-full lg:w-[80%]'>
                  <textarea className='border border-[#ccc] w-full min-h-28' />
                </div>
              </div>
              <hr />
              <div className='flex py-6 flex-col lg:flex-row'>
                <p className='w-full lg:w-[20%]'>Mensaje a los compradores</p>
                <div className='w-full lg:w-[80%]'>
                  <textarea className='border border-[#ccc] w-full min-h-28' />
                </div>
              </div>
            </div>
          </div>
          <div className='py-6'>
            <a
              className='py-3 px-5 bg-black text-white rounded-md cursor-pointer'
              onClick={handleSave}
            >
              Ahorrar
            </a>
            {showSuccessMessage && (
              <p className='text-green-700 text-sm mt-4'>Cambios guardados con éxito.</p>
            )}
          </div>
        </>
      ) : (
        <>
          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6'>
            <h3 className='text-base lg:text-xl mb-4'>¿Qué sucede cuando cambias el nombre de tu tienda?</h3>
            <h4 className='font-semibold lg:text-lg'>
              Todos los enlaces a tu tienda seguirán funcionando. Nadie podrá utilizar el nombre de tu tienda anterior.
            </h4>
            <p className='text-sm lg:text-base'>
              Su tienda tendrá una nueva URL. Los enlaces a las URL de su tienda anterior se redirigirán a las URL de su
              nueva tienda. Usamos redirecciones 301 para ayudar a mantener su clasificación en los motores de búsqueda
              después del cambio.
            </p>
            <h4 className='mt-5 font-semibold text-base lg:text-lg'>Le informamos a la gente que cambió el nombre de su tienda.</h4>
            <p className='text-sm lg:text-base'>
              Durante 45 días, este icono aparecerá junto al nombre de tu tienda en las páginas de la tienda, en tu perfil
              y en los resultados de búsqueda de la tienda para que las personas sepan que recientemente cambiaste el nombre
              de tu tienda. Las personas que compraron en tu tienda con el nombre anterior siempre verán el nombre anterior y
              el nuevo de tu tienda en sus recibos y detalles de la transacción.
            </p>
          </div>
          <div className='border border-[#ccc] p-6 rounded-lg my-6'>
            <div className='flex flex-col lg:flex-row lg:gap-5'>
              <p className='w-full lg:w-[20%]'>Nombre actual de la tienda</p>
              <div className='w-full lg:w-[77%]'>Vendalia Test shop</div>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-5 mt-6'>
              <p className='w-full lg:w-[20%]'>Nuevo nombre de la tienda</p>
              <div className='w-full lg:w-[77%]'>
                <input className='p-3 border border-[#ccc] w-full' />
              </div>
            </div>
          </div>
          <div>
            <a
              className='py-3 px-5 bg-black text-white rounded-md cursor-pointer'
              onClick={handleSave}
            >
              Ahorrar
            </a>
            {showSuccessMessage && (
              <p className='text-green-700 text-sm mt-4'>Cambios guardados con éxito.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
