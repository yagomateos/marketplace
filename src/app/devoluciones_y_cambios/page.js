import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function ReturnsExchange() {
  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-3">Devoluciones y Cambios</h2>
        <p>
          En Vendalia.es, queremos que estés completamente satisfecho con tu compra. Si por alguna razón no estás conforme, hemos diseñado un proceso de devoluciones y cambios sencillo y transparente para facilitar la solución.
        </p>
        <h2 className="text-3xl my-3">Proceso de Devolución</h2>
        <p>
          Para iniciar una devolución, ponte en contacto con nuestro servicio al cliente y te guiaremos a través del proceso. Es importante que el producto se encuentre en su estado original y en su embalaje original.
        </p>
        <ul className="my-3 list-disc pl-4">
          <li>
            <b>Solicitar Devolución:</b> Contacta a nuestro equipo a través de{" "}
            <a href="mailto:servicio@vendalia.es" className="text-blue-600 hover:underline">
              servicio@vendalia.es
            </a>{" "}
            para iniciar el proceso.
          </li>
          <li>
            <b>Condiciones:</b> El producto debe estar sin uso, con etiquetas originales y en su embalaje original.
          </li>
          <li>
            <b>Reembolso:</b> Una vez recibido el producto y verificado su estado, procederemos a realizar el reembolso.
          </li>
        </ul>
        <h2 className="text-3xl my-3">Proceso de Cambio</h2>
        <p>
          Si deseas cambiar un producto por otro, sigue el mismo procedimiento de devolución e indícanos el producto de tu preferencia. Nuestro equipo se encargará de gestionar el cambio lo más rápido posible.
        </p>
        <p>
          Si tienes alguna duda o necesitas asistencia con devoluciones o cambios, no dudes en contactarnos a través de{" "}
          <a href="mailto:marketing@vendalia.es" className="text-blue-600 hover:underline">
          marketing@vendalia.es
          </a>.
        </p>
      </div>
    </PublicPageContainer>
  );
}
