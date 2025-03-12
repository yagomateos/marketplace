"use client";

import { useState } from "react";
import PublicPageContainer from "../../components/containers/publicPageContainer";
import { getOrderStat } from "../../lib/actions/orders/getOrders";

export default function TrackOrder() {
  const [order_num, setOrderNum] = useState("");
  const [orderErr, setOrderErr] = useState(null);
  const [orderDta, setOrderDta] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOrderTracking = async (e) => {
    e.preventDefault();
    if (order_num) {
      setLoading(true);
      setOrderErr(null);
      setOrderDta(null);
      try {
        const orderStat = await getOrderStat(order_num);
        if (orderStat) {
          setOrderDta(orderStat);
        } else {
          setOrderErr("No se encontraron pedidos");
        }
      } catch (error) {
        setOrderErr("Por favor, añada el número de pedido");
      } finally {
        setLoading(false);
      }
    } else {
      setOrderErr("Por favor, ingrese un número de pedido");
    }
  };

  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto py-9 px-4">
        <h2 className="text-3xl">Seguimiento de pedidos</h2>

        <div className="w-full border border-dashed border-[#ccc] p-8 mt-6">
          <h3 className="text-xl">Seguimiento de pedidos</h3>
          <div className="flex gap-4 mt-4">
            <input
              value={order_num}
              onChange={(e) => setOrderNum(e.target.value)}
              className="border w-full h-[50px] flex items-center p-2"
            />
            <button onClick={handleOrderTracking}>Controlar</button>
          </div>
          {orderErr && <div className="text-red-500 mt-2">{orderErr}</div>}
        </div>

        {loading && <div>Cargando...</div>}

        {orderDta && (
          <div className="w-full p-6 mt-5">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Número de orden</th>
                  <th className="border border-gray-300 px-4 py-2">Estado del pedido</th>
                  <th className="border border-gray-300 px-4 py-2">Fecha de envío</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">{orderDta[0].Id}</td>
                  <td className="border border-gray-300 px-4 py-2">{orderDta[0].Status}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(orderDta[0].shipping_date).toLocaleDateString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PublicPageContainer>
  );
}
