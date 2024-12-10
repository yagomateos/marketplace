import React, { useEffect, useState } from 'react';
import { setDelDatesFunc } from '../../../../../lib/actions/stores/getStores';

export default function DeliverySettings({ refreshStr, setRefreshStr, storeDta }) {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedDays, setSelectedDays] = useState([]);
  const [popup, setPopup] = useState(false)
  const [deliverySuccess, setDeliverySuccess] = useState(false)
  const [strId, setStrId] = useState(null)

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const toggleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(selected => selected !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const [delDates, setDelDates] = useState(null);
  const [datesArr, setDatesArr] = useState([])

  useEffect(() => {

    console.log(storeDta);

    // Safely check and set delivery dates
    if (storeDta?.stores?.delivery_dates) {
      setDelDates(storeDta.stores.delivery_dates);
      setDatesArr(storeDta.stores.delivery_dates.split(','))
      setStrId(storeDta.stores.id);
    }
  }, [storeDta]);

  useEffect(() => {
    console.clear();
    console.log(delDates);
  }, [delDates]);

  const changeDate = (e) => {

    let dates = [...datesArr];
    console.log(e.target.value)
    if (e.target.checked) {
      if (!dates.includes(e.target.value)) {
        dates.push(e.target.value);
      }
    } else {
      if (dates.includes(e.target.value)) {
        const updatedDates = dates.filter(date => date !== e.target.value); // Remove the relevant value
        dates = [...updatedDates]; // Update the array
      }
    }

    setDatesArr(dates)

  }

  useEffect(() => {
    console.log(datesArr)
    setDelDates(datesArr.join(','))
  }, [datesArr])


  const deliverySubmit = async () => {

    try {
      const updated = await setDelDatesFunc(strId, delDates);
      console.clear();
      console.log(updated)
      if (updated) {
        setDeliverySuccess('Actualizado exitosamente');
        setRefreshStr(!refreshStr)
        setPopup(false);
      }
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className='max-w-5xl'>
      <div className='w-full overflow-x-auto'>
        <ul className='flex border-b mb-6 pb-3 lg:pb-0 border-[#ccc] lg:px-6'>
          <li className='min-w-full lg:min-w-min'>
            <a
              className={`py-2 border border-[#ccc] block px-3 lg:border-b-0 cursor-pointer ${selectedTab === 1 && 'bg-[#f2f2f2]'}`}
              onClick={() => setSelectedTab(1)}
            >
              Perfiles de Entrega
            </a>
          </li>
          <li className='min-w-full lg:min-w-min'>
            <a
              className={`py-2 border border-[#ccc] block px-3 lg:border-b-0 cursor-pointer ${selectedTab === 2 && 'bg-[#f2f2f2]'}`}
              onClick={() => setSelectedTab(2)}
            >
              Mejoras de Entrega
            </a>
          </li>
        </ul>
      </div>

      {/* Tab 1: Delivery Profiles */}
      {selectedTab === 1 && (
        <div className='py-2 lg:py-4'>
          <h2 className='text-lg leading-tight text-2xl font-semibold mb-4'>Horario de Procesamiento de Pedidos</h2>
          <p className='mb-4'>
            Déjanos saber qué días prefieres para procesar y enviar tus pedidos. Esto nos ayudará a ajustar
            las fechas de entrega y dar mejores estimaciones a tus clientes. Puedes seleccionar uno o varios
            días según tu disponibilidad.
          </p>

          <div className='border border-[#ccc] rounded-lg p-3 lg:p-8 flex flex-col lg:flex-row lg:justify-between lg:items-center'>
            <h3>{delDates}</h3>
            <a className='underline cursor-pointer' onClick={() => setPopup(true)}>Editar</a>
          </div>
        </div>
      )}

      {/* Tab 2: Delivery Upgrades */}
      {selectedTab === 2 && (
        <div>
          <h2 className='text-lg lg:text-2xl font-semibold mb-4'>Mejoras de Entrega</h2>
          <p className='mb-4'>
            Ofrece a tus clientes la posibilidad de mejorar su entrega con opciones como envío más rápido o
            entregas con seguro. Activar las mejoras de entrega puede aumentar la satisfacción del cliente
            al ofrecer más flexibilidad y rapidez.
          </p>

          <div className='border border-[#ccc] rounded-lg p-3 lg:p-6'>
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

      {
        popup && <div className='fixed left-0 top-0 bg-[#00000062] w-full h-full flex justify-center items-center'>
          <div className='bg-white p-5 rounded-xl lg:max-w-[40%]'>

            <h2 className='mb-5 text-2xl font-semibold'>Programa de procesamiento de pedidos</h2>
            <p>Si está preparando o enviando pedidos los sábados o domingos, puede agregar esos días a su cronograma de procesamiento para mostrarles a los compradores fechas de entrega más precisas para pedidos futuros.</p>

            <h3 className='text-lg font-semibold mt-6'>¿Cuándo se procesan los pedidos?</h3>
            <p>De lunes a viernes es el horario predeterminado de Vendalia y no se puede cambiar.</p>

            <ul className='flex gap-6 my-6'>
              <li>
                <input checked={datesArr.includes('Lunes - Viernes')} type='checkbox' value={'Lunes - Viernes'} onChange={e => { changeDate(e) }} /> &nbsp;&nbsp; <label>Lunes - Viernes</label>
              </li>
              <li>
                <input checked={datesArr.includes('Sábado')} type='checkbox' value={'Sábado'} onChange={e => { changeDate(e) }} /> &nbsp;&nbsp; <label>Sábado</label>
              </li>
              <li>
                <input checked={datesArr.includes('Domingo')} type='checkbox' value={'Domingo'} onChange={e => { changeDate(e) }} /> &nbsp;&nbsp; <label>Domingo</label>
              </li>
            </ul>

            <div className='w-full flex justify-between items-center'>
              <a className='cursor-pointer' onClick={(e) => setPopup(false)}>Cancelar</a>
              <a className='cursor-pointer bg-black rounded-full py-3 px-5 text-white' onClick={(e) => deliverySubmit()}>Actualizar</a>
            </div>

            {deliverySuccess && <div className='text-green-700 text-sm'>{deliverySuccess}</div>}
          </div>
        </div>
      }
    </div>
  );
}
