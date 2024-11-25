import React from 'react'
import PublicPageContainer from '../../../components/containers/publicPageContainer'

export default function page() {
    return (

        <PublicPageContainer>
            <div className='max-w-4xl mr-auto ml-auto py-24'>
                <h1 className='text-4xl'>¡Gracias por su pedido!</h1>
                <p>Haremos llegar tu pedido a tu puerta lo antes posible. ¡Gracias por comprar con nosotros!</p>

                {/* order information */}
                <div className='mt-6 p-6 border border-[#ccc]'>
                    <h2>Información del pedido</h2>

                    <ul>
                        <li><b>Identificación del pedido : </b> </li>
                        <li><b>Fecha de compra : </b> </li>
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
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-gray-600">Producto 1</td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-600">2</td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-600">20.00€</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-gray-600">Producto 2</td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-600">3</td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-600">30.00€</td>
                            </tr>
                        </tbody>
                    </table>


                    <b>Gran total : </b>
                </div>
            </div>
        </PublicPageContainer>
    )
}
