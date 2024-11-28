'use client';

import { useEffect, useState } from 'react';
import PublicPageContainer from '../../../components/containers/publicPageContainer'
import { useAppContext } from "../../context/AppContext";

export default function Page() {

    const { state, dispatch } = useAppContext();
    const [orderedItems, setOrderedItems] = useState(null)
    const [itemsTotal, setItemsTotal] = useState(0)
    const [orderId , setOrderId] = useState(null)

    const orderDate = new Date().toISOString().split('T')[0]; // Outputs: 'YYYY-MM-DD'


    useEffect(() => {
        console.log(state)
        state.ordered_items && setOrderedItems([...state.ordered_items])
        state.total && setItemsTotal(state.total)
        state.order_id && setOrderId(state.order_id)
    }, [state.ordered_items])

    return (

        <PublicPageContainer>

            {orderedItems ? (
                <div className='max-w-4xl mr-auto ml-auto py-24'>
                    <h1 className='text-4xl'>¡Gracias por su pedido!</h1>
                    <p>Haremos llegar tu pedido a tu puerta lo antes posible. ¡Gracias por comprar con nosotros!</p>

                    {/* order information */}
                    <div className='mt-6 p-6 border border-[#ccc]'>
                        <h2>Información del pedido</h2>

                        <ul>
                            <li><b>Identificación del pedido : {orderId}</b> </li>
                            <li><b>Fecha de compra : {orderDate}</b> </li>
                        </ul>
                        <table className="my-6 table-auto border-collapse border border-gray-300 shadow-lg w-full">
                            <thead className="bg-gray-200">
                                <tr className="table-row">
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                        Nombre del producto
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                        Cantidad
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                        Importe total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Add your rows here */}
                                {orderedItems && orderedItems.map((itm, key) => (
                                    <tr key={key}>
                                        <td className="border border-gray-300 px-4 py-2 text-gray-600"><a href={`/listado?pid=${itm.id}`}>{itm.name}</a></td>
                                        <td className="border border-gray-300 px-4 py-2 text-gray-600">{itm.qty}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-gray-600">{itm.sale_price && itm.sale_price != '' ? itm.sale_price : itm.regular_price}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>


                        <b>Gran total : {itemsTotal}</b>
                    </div>
                </div>
            ) : (
                <div className='max-w-4xl mr-auto ml-auto py-24 flex flex-col items-center'>
                    <h2 className='text-3xl mb-5 text-center'>Parece que no compraste nada. ¡Primero agrega algunas cosas al carrito!</h2>
                    <a href="/" className='bg-black py-4 px-12 rounded-full text-white inline-block mr-auto ml-auto'>Hogar</a>
                </div>
            )}

        </PublicPageContainer>
    )
}
