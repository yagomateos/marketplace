import React, { useState } from 'react';

export default function DeliverySettings() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedDays, setSelectedDays] = useState([]);

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const toggleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(selected => selected !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className='max-w-5xl'>
      <div>
        <ul className='flex border-b mb-6 border-[#ccc] px-6'>
          <li>
            <a
              className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer ${selectedTab === 1 && 'bg-[#f2f2f2]'}`}
              onClick={() => setSelectedTab(1)}
            >
              Perfiles de Entrega
            </a>
          </li>
          <li>
            <a
              className={`py-2 border border-[#ccc] block px-3 border-b-0 cursor-pointer ${selectedTab === 2 && 'bg-[#f2f2f2]'}`}
              onClick={() => setSelectedTab(2)}
            >
              Mejoras de Entrega
            </a>
          </li>
        </ul>
      </div>

      {/* Tab 1: Delivery Profiles */}
      {selectedTab === 1 && (
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Horario de Procesamiento de Pedidos</h2>
          <p className='mb-4'>
            Déjanos saber qué días prefieres para procesar y enviar tus pedidos. Esto nos ayudará a ajustar
            las fechas de entrega y dar mejores estimaciones a tus clientes. Puedes seleccionar uno o varios
            días según tu disponibilidad.
          </p>

          <div className='border border-[#ccc] rounded-lg p-6'>
            <h3 className='mb-4'>Selecciona los días</h3>
            <div className='flex flex-wrap gap-4'>
              {days.map((day) => (
                <label key={day} className='flex items-center'>
                  <input
                    type='checkbox'
                    value={day}
                    onChange={() => toggleDaySelection(day)}
                    checked={selectedDays.includes(day)}
                  />
                  <span className='ml-2'>{day}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Delivery Upgrades */}
      {selectedTab === 2 && (
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Mejoras de Entrega</h2>
          <p className='mb-4'>
            Ofrece a tus clientes la posibilidad de mejorar su entrega con opciones como envío más rápido o
            entregas con seguro. Activar las mejoras de entrega puede aumentar la satisfacción del cliente
            al ofrecer más flexibilidad y rapidez.
          </p>

          <div className='border border-[#ccc] rounded-lg p-6'>
            <h3 className='mb-4'>Mejoras de Entrega</h3>
            <label className='block mb-2'>
              <input type='radio' name='deliveryUpgrade' value='enabled' /> Habilitado
            </label>
            <label className='block'>
              <input type='radio' name='deliveryUpgrade' value='disabled' /> Deshabilitado
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
