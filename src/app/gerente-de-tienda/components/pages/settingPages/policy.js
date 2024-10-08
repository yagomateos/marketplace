import React, { useState } from 'react';

export default function PoliciesSettings() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Function to handle saving the policy and displaying the success message
  const handleSave = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000); // Message disappears after 3 seconds
  };

  return (
    <div className='max-w-5xl'>
      {/* Navigation Tabs */}
      <div className='w-full overflow-x-auto'>
        <ul className='flex border-b mb-6 border-[#ccc] lg:px-6 pb-4 lg:pb-0'>
          <li className='flex min-w-full lg:min-w-min text-sm lg:text-base'>
            <a
              className={`py-2 w-full border border-[#ccc] flex items-center px-3 lg:border-b-0 cursor-pointer ${selectedTab === 1 && 'bg-[#f2f2f2]'}`}
              onClick={() => setSelectedTab(1)}
            >
              Devoluciones e Intercambios
            </a>
          </li>
          <li className='flex min-w-full lg:min-w-min text-sm lg:text-base'>
            <a
              className={`py-2 w-full border border-[#ccc] flex items-center px-3 lg:border-b-0 cursor-pointer ${selectedTab === 2 && 'bg-[#f2f2f2]'}`}
              onClick={() => setSelectedTab(2)}
            >
              Cancelaciones
            </a>
          </li>
          <li className='flex min-w-full lg:min-w-min text-sm lg:text-base'>
            <a
              className={`py-2 w-full border border-[#ccc] flex items-center px-3 lg:border-b-0 cursor-pointer ${selectedTab === 3 && 'bg-[#f2f2f2]'}`}
              onClick={() => setSelectedTab(3)}
            >
              Privacidad
            </a>
          </li>
          <li className='flex min-w-full lg:min-w-min text-sm lg:text-base'>
            <a
              className={`py-2 w-full border border-[#ccc] flex items-center px-3 lg:border-b-0 cursor-pointer ${selectedTab === 4 && 'bg-[#f2f2f2]'}`}
              onClick={() => setSelectedTab(4)}
            >
              Políticas Fijas
            </a>
          </li>
        </ul>
      </div>

      {/* Tab 1: Return and Exchange */}
      {selectedTab === 1 && (
        <div>
          <h2 className='text-lg leading-tight lg:text-2xl font-semibold mb-4'>Devoluciones e Intercambios</h2>
          <p className='mb-4'>
            Aquí puedes crear tu política de devoluciones e intercambios. Define un período de tiempo, condiciones, y responsabilidades para los compradores.
          </p>

          {/* Box for creating a return policy */}
          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 mb-6 text-sm lg:text-base'>
            <h3 className='mb-4'>Crear Política</h3>

            {/* Radio buttons for return and exchange */}
            <label className='block mb-2'>
              <input type='radio' name='returns' /> Devoluciones permitidas
            </label>
            <label className='block mb-2'>
              <input type='radio' name='exchange' /> Intercambios permitidos
            </label>

            {/* Select time frame */}
            <div className='mb-4'>
              <label>Plazo máximo para devolución o intercambio</label><br />
              <select className='p-2 border border-[#ccc] w-full lg:w-min'>
                <option>7 días</option>
                <option>14 días</option>
                <option>30 días</option>
              </select>
            </div>

            {/* Conditions of return */}
            <div className='mb-4'>
              <h4>Condiciones para la devolución:</h4>
              <ul className='list-disc ml-6'>
                <li>El comprador puede devolver o intercambiar.</li>
                <li>El comprador debe devolver dentro de los 30 días.</li>
                <li>El comprador es responsable de los costos de devolución.</li>
                <li>El comprador es responsable de cualquier pérdida en el valor del artículo devuelto.</li>
              </ul>
            </div>

            {/* Save button with success message */}
            <button onClick={handleSave} className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
            {showSuccessMessage && (
              <p className='text-green-700 text-sm mt-4'>Política guardada con éxito.</p>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Cancellations */}
      {selectedTab === 2 && (
        <div>
          <h2 className='text-lg lg:text-2xl font-semibold mb-4'>Cancelaciones</h2>
          <p className='mb-4'>
            Aquí puedes crear tu política de cancelaciones. Indica si permites cancelaciones y en qué plazo.
          </p>

          {/* Box for creating a cancellation policy */}
          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 text-sm lg:text-base mb-6'>
            <h3 className='mb-4'>Crear Política</h3>

            {/* Radio buttons for cancellations */}
            <label className='block mb-2'>
              <input type='radio' name='cancellations' /> Cancelaciones permitidas
            </label>
            <label className='block mb-2'>
              <input type='radio' name='cancellations' /> Cancelaciones no permitidas
            </label>

            {/* Save button with success message */}
            <button onClick={handleSave} className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
            {showSuccessMessage && (
              <p className='text-green-700 text-sm mt-4'>Política guardada con éxito.</p>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Privacy */}
      {selectedTab === 3 && (
        <div>
          <h2 className='text-lg lg:text-2xl font-semibold mb-4'>Política de Privacidad</h2>
          <p className='mb-4'>
            Define aquí tu política de privacidad. Establece cómo manejas la información personal de tus compradores.
          </p>

          {/* Box for creating a privacy policy */}
          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 text-sm lg:text-base mb-6'>
            <h3 className='mb-4'>Crear Política de Privacidad</h3>

            {/* Example fields for privacy policy */}
            <textarea className='border border-[#ccc] w-full min-h-[150px]' placeholder="Escribe tu política de privacidad aquí"></textarea>

            {/* Save button with success message */}
            <button onClick={handleSave} className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
            {showSuccessMessage && (
              <p className='text-green-700 text-sm mt-4'>Política de privacidad guardada con éxito.</p>
            )}
          </div>
        </div>
      )}

      {/* Tab 4: Fixed Policies */}
      {selectedTab === 4 && (
        <div>
          <h2 className='text-lg lg:text-2xl font-semibold mb-4'>Políticas Fijas</h2>
          <p className='mb-4'>
            Aquí puedes definir políticas fijas que aplicarán a todos tus productos.
          </p>

          {/* Box for creating fixed policies */}
          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6 text-sm lg:text-base mb-6'>
            <h3 className='mb-4'>Crear Políticas Fijas</h3>

            {/* Example textarea for fixed policies */}
            <textarea className='border border-[#ccc] w-full min-h-[150px]' placeholder="Escribe tus políticas fijas aquí"></textarea>

            {/* Save button with success message */}
            <button onClick={handleSave} className='py-2 px-5 bg-black text-white rounded-md cursor-pointer'>Guardar</button>
            {showSuccessMessage && (
              <p className='text-green-700 text-sm mt-4'>Política guardada con éxito.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
