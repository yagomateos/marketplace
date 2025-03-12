import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function ShippingDelivery() {
  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-3">Envíos y Entregas</h2>
        <p>
          En Vendalia.es, nos comprometemos a brindarte una experiencia de compra completa, donde no solo garantizamos un proceso de pago seguro, sino también un servicio de envío y entrega eficiente y confiable.
        </p>
        <h2 className="text-3xl my-3">Cobertura y Plazos de Envío</h2>
        <p>
          Ofrecemos envíos a toda España y trabajamos con empresas de logística reconocidas para asegurar que tu pedido llegue a tiempo y en perfectas condiciones.
        </p>
        <ul className="my-3 list-disc pl-4">
          <li>
            <b>Envíos Rápidos:</b> Procesamos tus pedidos de manera inmediata para garantizar una entrega ágil.
          </li>
          <li>
            <b>Cobertura Nacional:</b> Entregamos en todas las provincias de España, llegando incluso a las zonas más remotas.
          </li>
          <li>
            <b>Seguimiento del Pedido:</b> Recibirás un número de seguimiento para conocer en tiempo real el estado de tu envío.
          </li>
          <li>
            <b>Empaquetado Seguro:</b> Cada pedido se prepara cuidadosamente para asegurar que llegue en perfectas condiciones.
          </li>
        </ul>
        <h2 className="text-3xl my-3">Proceso de Entrega</h2>
        <p>
          Una vez completada la compra, recibirás una confirmación de envío con todos los detalles. Nuestro equipo de logística coordinará la entrega, asegurando que tu pedido llegue a tu dirección en el menor tiempo posible.
        </p>
        <p>
          Si tienes alguna duda o necesitas asistencia con tu envío, no dudes en ponerte en contacto con nosotros a través de{" "}
          <a href="mailto:servicio@vendalia.es" className="text-blue-600 hover:underline">
            servicio@vendalia.es
          </a>.
        </p>
      </div>
    </PublicPageContainer>
  );
}
