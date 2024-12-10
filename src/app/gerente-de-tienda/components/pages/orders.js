import React, { useEffect, useState } from 'react'
import { getOrdersFunc } from '../../../../lib/actions/orders/getOrders'
import { updateOrderFunc } from '../../../../lib/actions/orders/updateOrders'

export default function Orders({ userData }) {

  const [type, setType] = useState('new')
  const [newOrders, setNewOrders] = useState([])
  const [closedOrders, setClosedOrders] = useState([])
  const [filterednewOrders, setFilteredNewOrders] = useState([])
  const [filteredclosedOrders, setFilteredClosedOrders] = useState([])
  const [moreInfo, setMoreInfo] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    console.clear();
    console.log(userData);

    const getAllOrders = async () => {
      console.log('comes there')

      try {
        let newOrds = [];
        let compOrds = [];
        const allOrders = await getOrdersFunc(userData[0].id);
        console.log(allOrders);

        if (allOrders) {
          allOrders.forEach(order => {
            if (order.status == 'new') {
              newOrds.push(order)
            } else {
              compOrds.push(order)
            }
          })
        }

        setNewOrders(newOrds)
        setClosedOrders(compOrds)
        setFilteredNewOrders(newOrds)
        setFilteredClosedOrders(compOrds)
      } catch (error) {
        console.log(error);
      }
    };

    if (userData && userData[0] && userData[0]?.id) { // Check if userData[0] exists and has an id
      getAllOrders(); // Call the function
    }
  }, [userData, refresh]);


  // useEffect(() => {
  //   console.log(newOrders)
  //   console.log(closedOrders)
  // }, [newOrders, closedOrders])

  const setSelectedOrderFunc = (id) => {

    type == 'new' ?
      setSelectedOrder(newOrders[id])

      :

      setSelectedOrder(closedOrders[id])
    setMoreInfo(true)
  }

  const completeOrder = async (e, order_id) => {
    e.preventDefault();
    try {
      const orderUpdated = await updateOrderFunc('status', order_id)
      console.log(orderUpdated)
      if (orderUpdated) {
        setRefresh(!refresh)
        setMoreInfo(false)
        setType('completed')
      }

    } catch (error) {
      console.log(error)
    }
  }

  // Initialize filtered orders when newOrders or closedOrders change
  useEffect(() => {
    setFilteredNewOrders(newOrders);
    setFilteredClosedOrders(closedOrders);
  }, [newOrders, closedOrders]);

  const filterByDate = (e, filterType) => {
    const currentDate = new Date();

    const filterOrders = (orders) => {
      return orders.filter((order) => {
        const orderDate = new Date(order.date_time);
        switch (filterType) {
          case 'all':
            return true; // Show all orders
          case 'late':
            return orderDate < currentDate; // Orders with a past date
          case 'today':
            return orderDate.toDateString() === currentDate.toDateString(); // Orders scheduled for today
          case 'tomorrow':
            const tomorrow = new Date();
            tomorrow.setDate(currentDate.getDate() + 1);
            return orderDate.toDateString() === tomorrow.toDateString(); // Orders scheduled for tomorrow
          case 'week':
            const oneWeekFromNow = new Date();
            oneWeekFromNow.setDate(currentDate.getDate() + 7);
            return orderDate > currentDate && orderDate <= oneWeekFromNow; // Orders within the next week
          case 'any':
            return !order.date_time || order.date_time === ''; // Orders with no date
          default:
            return true; // Default to showing all
        }
      });
    };

    if (type === 'new') {
      setFilteredNewOrders(filterType === 'all' || filterType === 'any' ? newOrders : filterOrders(newOrders));
    } else {
      setFilteredClosedOrders(filterType === 'all' || filterType === 'any' ? closedOrders : filterOrders(closedOrders));
    }
  };



  return (
    <div className="w-full">
      {/* header */}
      <div className="flex justify-between border-b border-b-[#ccc] py-4">
        <h2 className="text-xl font-semibold">Pedidos y entregas</h2>

      </div>

      {/* listings body */}
      <div className="mt-6 flex flex-col lg:flex-row justify-between">
        {/* order filter */}
        <div className='w-full lg:w-[75%] py-4 px-2 lg:px-12 '>
          <div className="overflow-x-auto">
            <ul className='border-b border-[#ccc] flex gap-4 w-full'>
              <li><a onClick={(e) => { e.preventDefault(); setType('new'); setMoreInfo(false) }} className={`cursor-pointer py-3 block ${type == 'new' ? 'border-b-2 border-[black]' : ''}`}>Nuevo</a></li>
              <li><a onClick={(e) => { e.preventDefault(); setType('completed'); setMoreInfo(false) }} className={`cursor-pointer py-3 block ${type == 'completed' ? 'border-b-2 border-[black]' : ''}`}>Terminado</a></li>
            </ul>
          </div>

          {!moreInfo ?
            <div>
              {type == 'new' ? <>
                {filterednewOrders && filterednewOrders.length > 0 ? <div className='my-12'>
                  {filterednewOrders.map((order, key) => {

                    return <div key={key} className='border p-5 border-[#ccc] flex justify-between items-center mb-5'>
                      <div>
                        <p>Order - #{order.order_id}</p>
                        <small>{order.date_time
                          ? new Date(order.date_time).toLocaleString()
                          : "No hay fecha proporcionada"}</small>
                      </div>

                      <a href="#" onClick={(e) => { e.preventDefault(); setSelectedOrderFunc(key) }}>Más información</a>
                    </div>

                  })}
                </div> :
                  <div className='order-content lg:min-h-[50vh] flex flex-col justify-center items-center py-4'>
                    <div className='p-4 bg-[#eee] rounded-full'>
                      <img className='max-w-18' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-box-128.png" />
                    </div>
                    <p className='mt-2'>No hay pedidos para mostrar</p>
                  </div>}
              </>
                :
                <>
                  {filteredclosedOrders && filteredclosedOrders.length > 0 ? <div className='my-12'>
                    {filteredclosedOrders.map((order, key) => {

                      return <div key={key} className='border p-5 border-[#ccc] flex justify-between items-center mb-5'>
                        <div>
                          <p>Order - #{order.order_id}</p>
                          <small>{order.date_time
                            ? new Date(order.date_time).toLocaleString()
                            : "No hay fecha proporcionada"}</small>
                        </div>

                        <a href="#" onClick={(e) => { e.preventDefault(); setMoreInfo(order.order_id) }}>Más información</a>
                      </div>

                    })}
                  </div> :
                    <div className='order-content lg:min-h-[50vh] flex flex-col justify-center items-center py-4'>
                      <div className='p-4 bg-[#eee] rounded-full'>
                        <img className='max-w-18' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-box-128.png" />
                      </div>
                      <p className='mt-2'>No hay pedidos para mostrar</p>
                    </div>}
                </>}

            </div>

            :

            <div className='my-12 p-8 border border-[#ccc] relative'>
              <span className="absolute top-4 right-4 cursor-pointer underline text-sm font-sem" onClick={(e) => { setMoreInfo(false) }}>Volver a pedidos</span>

              <p><b>Order Id : #{selectedOrder.order_id}</b></p>
              <h4 className='my-4 text-lg font-semibold'>Productos</h4>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Identificación del producto</th>
                    <th className="border border-gray-300 px-4 py-2">Nombre del producto</th>
                    <th className="border border-gray-300 px-4 py-2">Quantity</th>
                    <th className="border border-gray-300 px-4 py-2">Cantidad</th>
                    <th className="border border-gray-300 px-4 py-2">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.item_names.split(',').map((prodId, key) => (
                    <tr key={key} className="border border-gray-300">
                      <td className="border border-gray-300 px-4 py-2 text-center">{prodId}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {selectedOrder.product_names.split(',')[key]}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {selectedOrder.item_quantities.split(',')[key]}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {selectedOrder.product_prices.split(',')[key]}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-right">
                        <a
                          href={`/listado?pid=${prodId}`}
                          className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                        >
                          Ver producto
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='my-6 text-right'>

                {
                  type == 'new' ?
                    <a href='#' className='inline-block ml-auto py-3 px-20 bg-black text-white rounded-full' onClick={(e) => { completeOrder(e, selectedOrder.order_id) }}>Establecer como completado</a>

                    : ''
                }

              </div>
            </div>


          }

          {/* order message */}

          <div className='p-4 border border-[#ccc] rounded-xl'>
            <h2 className='font-semibold text-lg mb-4'>¿Son precisos los tiempos de procesamiento?</h2>
            <p>Asegúrese de revisar todos los tiempos de procesamiento para asegurarse de que reflejen con precisión cuánto tiempo le lleva completar los pedidos. Esto les da a los compradores una idea de cuándo recibirán su pedido.</p>
            <a>Revisar tiempos de procesamiento</a>
          </div>
        </div>
        <div className='w-full lg:w-[25%] px-4 lg:px-0'>
          <h4 className='text-lg font-semibold mb-3'>Envío por fecha</h4>
          <ul>
            <li><input type='radio' name='dispatch-date' onChange={e => filterByDate(e, 'all')} /> &nbsp; Todo</li>
            <li><input type='radio' name='dispatch-date' onChange={e => filterByDate(e, 'late')} /> &nbsp; Atrasado</li>
            <li><input type='radio' name='dispatch-date' onChange={e => filterByDate(e, 'today')} /> &nbsp; Hoy</li>
            <li><input type='radio' name='dispatch-date' onChange={e => filterByDate(e, 'tomorrow')} /> &nbsp; Mañana</li>
            <li><input type='radio' name='dispatch-date' onChange={e => filterByDate(e, 'week')} /> &nbsp; Dentro de una semana</li>
            <li><input type='radio' name='dispatch-date' onChange={e => filterByDate(e, 'any')} /> &nbsp; Sin estimación</li>
          </ul>
          {/* 
          <h4 className='text-lg font-semibold mb-3 mt-5'>Destino</h4>
          <ul>
            <li><input type='radio' name='destination' /> &nbsp; Toda</li>
            <li><input type='radio' name='destination' /> &nbsp; España</li>
            <li><input type='radio' name='destination' /> &nbsp; En cualquier otro lugar</li>
          </ul> */}
        </div>

      </div>

    </div>
  )
}
