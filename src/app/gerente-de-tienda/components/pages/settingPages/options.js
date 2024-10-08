import React, { useState } from 'react';

export default function OptionsSettings() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSave = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000); // Message will disappear after 3 seconds
  };

  const handleCloseShop = () => {
    if (window.confirm("¿Estás seguro de que deseas cerrar tu tienda?")) {
      setShowSuccessMessage(true);
    }
  };

  return (
    <div className='max-w-5xl'>
      <div className='w-full overflow-x-auto border-b lg:border-b-0 border-[#ccc] mb-4 lg:mb-0'>
        <ul className='flex border-b mb-6 border-[#ccc] lg:px-6'>
          <li className='min-w-full lg:min-w-min'><a className={`py-2 border border-[#ccc] block px-3 lg:border-b-0 cursor-pointer ${selectedTab === 1 && 'bg-[#f2f2f2]'}`} onClick={() => setSelectedTab(1)}>Opciones</a></li>
          <li className='min-w-full lg:min-w-min'><a className={`py-2 border border-[#ccc] block px-3 lg:border-b-0 cursor-pointer ${selectedTab === 2 && 'bg-[#f2f2f2]'}`} onClick={() => setSelectedTab(2)}>Modo Vacaciones</a></li>
          <li className='min-w-full lg:min-w-min'><a className={`py-2 border border-[#ccc] block px-3 lg:border-b-0 cursor-pointer ${selectedTab === 3 && 'bg-[#f2f2f2]'}`} onClick={() => setSelectedTab(3)}>Análisis Web</a></li>
          <li className='min-w-full lg:min-w-min'><a className={`py-2 border border-[#ccc] block px-3 lg:border-b-0 cursor-pointer ${selectedTab === 4 && 'bg-[#f2f2f2]'}`} onClick={() => setSelectedTab(4)}>Descargar Datos</a></li>
          <li className='min-w-full lg:min-w-min'><a className={`py-2 border border-[#ccc] block px-3 lg:border-b-0 cursor-pointer ${selectedTab === 5 && 'bg-[#f2f2f2]'}`} onClick={() => setSelectedTab(5)}>Cerrar Tienda</a></li>
        </ul>
      </div>

      {/* Opciones Tab */}
      {selectedTab === 1 && (
        <div>
          <h2 className='text-lg lg:text-2xl font-semibold mb-4'>Opciones de la Tienda</h2>
          
          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 mb-6 text-sm lg:text-base'>
            <h3 className='mb-4'>Reorganizar Tu Tienda</h3>
            <p className='mb-4'>Has establecido un orden personalizado para tu listado utilizando la opción de reorganizar tu tienda.</p>
            <label><input type='radio' name='sortOption' /> <strong>Habilitado</strong> Los visitantes de tu tienda verán las opciones de orden personalizado por defecto</label><br />
            <label><input type='radio' name='sortOption' /> <strong>Deshabilitado</strong> Los visitantes de tu tienda verán la opción de orden de los artículos más recientes por defecto</label>
          </div>

          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 mb-6 text-sm lg:text-base'>
            <h3 className='mb-4'>Solicitudes de Pedidos Personalizados</h3>
            <p>Haz saber a los compradores que aceptas pedidos personalizados.</p>
            <label><input type='radio' name='customOrder' /> <strong>Aceptar</strong> Acepta pedidos personalizados</label><br />
            <label><input type='radio' name='customOrder' /> <strong>Rechazar</strong> No aceptar pedidos personalizados</label>
          </div>

          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 mb-6 text-sm lg:text-base'>
            <h3 className='mb-4'>Ofrecer Envoltorio de Regalo</h3>
            <ul>
              <li>Establece tu propio precio para envolver cualquier pedido.</li>
              <li>Tus opciones de regalo aparecerán en cada listado.</li>
              <li>Los compradores pueden añadir envoltorio de regalo durante el pago.</li>
            </ul>
          </div>

          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 mb-6 text-sm lg:text-base'>
            <h3 className='mb-4'>Ofrecer Notas de Regalo</h3>
            <ul>
              <li>Los compradores pueden añadir una nota personalizada a su regalo durante el pago.</li>
              <li>Tus opciones de notas de regalo aparecerán en cada listado.</li>
            </ul>
          </div>

          <div className='flex justify-end'>
            <button onClick={handleSave} className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
          </div>
          {showSuccessMessage && (
            <p className='text-green-700 text-sm mt-4'>Cambios guardados con éxito.</p>
          )}
        </div>
      )}

      {/* Modo Vacaciones Tab */}
      {selectedTab === 2 && (
        <div>
          <h2 className='text-lg lg:text-2xl font-semibold mb-4'>Modo Vacaciones</h2>
          <p>Activa el modo vacaciones para deshabilitar temporalmente tu tienda mientras estás fuera.</p>

          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 text-sm lg:text-base mb-6 mt-5 lg:mt-0'>
            <h3 className='mb-4'>Modo Vacaciones</h3>
            <label><input type='radio' name='holidayMode' /> <strong>Habilitado</strong> Activar modo vacaciones</label><br />
            <label><input type='radio' name='holidayMode' /> <strong>Deshabilitado</strong> Desactivar modo vacaciones</label>
          </div>

          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 text-sm lg:text-base mb-6'>
            <h3 className='mb-4'>Anuncio de Vacaciones</h3>
            <textarea className='border border-[#ccc] w-full min-h-[80px]' placeholder="Escribe tu anuncio de vacaciones"></textarea>
          </div>

          <div className='flex justify-end'>
            <button onClick={handleSave} className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
          </div>
          {showSuccessMessage && (
            <p className='text-green-700 text-sm mt-4'>Cambios guardados con éxito.</p>
          )}
        </div>
      )}

      {/* Análisis Web Tab */}
      {selectedTab === 3 && (
        <div>
          <h2 className='text-lg lg:text-2xl font-semibold mb-4'>Análisis Web Potenciado por Google Analytics</h2>
          
          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 text-sm lg:text-base mb-6'>
            <h3 className='mb-4'>ID de Analytics</h3>
            <input className='p-2 border border-[#ccc] w-full' placeholder="Ingresa tu ID de Google Analytics" />
          </div>

          <div className='flex justify-end'>
            <button onClick={handleSave} className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
          </div>
          {showSuccessMessage && (
            <p className='text-green-700 text-sm mt-4'>Cambios guardados con éxito.</p>
          )}
        </div>
      )}

      {/* Descargar Datos Tab */}
      {selectedTab === 4 && (
        <div>
          <h2 className='text-lg lg:text-2xl font-semibold mb-4'>Descargar Datos de la Tienda</h2>

          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 mb-6'>
            <h3 className='mb-4'>Datos de Pedidos</h3>
            <label>Selecciona el tipo de archivo:</label><br />
            <select className='p-2 border border-[#ccc] w-full mb-4'>
              <option>CSV</option>
              <option>Excel</option>
            </select>
            <button className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Solicitar Descarga</button>
          </div>

          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 mb-6'>
            <h3 className='mb-4'>Datos de Clientes</h3>
            <button className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Solicitar Descarga</button>
          </div>

          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 mb-6'>
            <h3 className='mb-4'>Datos de Listados de Productos</h3>
            <button className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Solicitar Descarga</button>
          </div>
        </div>
      )}

      {/* Cerrar Tienda Tab */}
      {selectedTab === 5 && (
        <div>
          <h2 className='text-lg lg:text-2xl font-semibold mb-4'>Cerrar Tienda</h2>
          
          <div className='flex flex-col lg:flex-row mb-6'>
            <div className='w-full lg:w-[50%] lg:px-4 text-sm lg:text-base'>
              <label>Nombre de la Tienda</label>
              <input className='p-2 border border-[#ccc] w-full mb-4' placeholder="Selecciona el nombre de tu tienda" /><br />
              <label>Motivo para Cerrar</label>
              <select className='p-2 border border-[#ccc] w-full mb-4'>
                <option>Estoy de vacaciones</option>
                <option>Voy a cerrar permanentemente</option>
                <option>Otro</option>
              </select><br />
              <button onClick={handleCloseShop} className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Enviar</button>
            </div>
            <div className='w-full lg:w-[50%] lg:px-4 mt-3 lg:mt-0 text-sm lg:text-base'>
              <div className='border border-[#ccc] rounded-lg p-3 lg:p-6'>
                <h3 className='mb-4'>¿Qué sucede si cierras tu tienda?</h3>
                <ul>
                  <li>Tu tienda estará temporalmente no disponible.</li>
                  <li>Los compradores no podrán realizar compras.</li>
                  <li>Puedes reabrir tu tienda en cualquier momento.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {showSuccessMessage && (
            <p className='text-green-700 text-sm mt-4'>Tu solicitud para cerrar la tienda ha sido enviada con éxito.</p>
          )}
        </div>
      )}
    </div>
  );
}
