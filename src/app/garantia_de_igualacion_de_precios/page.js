import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function PriceMatchGuarantee() {
  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-3">Garantía de Igualación de Precios</h2>
        <p>
          En Vendalia.es, estamos comprometidos a ofrecerte el mejor valor. Por ello, te brindamos la Garantía de Igualación de Precios, asegurándonos de que obtengas el precio más competitivo del mercado.
        </p>
        <h2 className="text-3xl my-3">Cómo Funciona</h2>
        <p>
          Si encuentras el mismo producto a un precio menor en otra tienda, ¡no te preocupes! Nuestro equipo evaluará la oferta y, si cumple con nuestros términos, igualaremos el precio para que disfrutes de la mejor oferta.
        </p>
        <ul className="my-3 list-disc pl-4">
          <li>
            <b>Comparación de Precios:</b> Envía la oferta de la competencia junto con la referencia del producto.
          </li>
          <li>
            <b>Verificación:</b> Nuestro equipo revisará la oferta para confirmar su validez.
          </li>
          <li>
            <b>Igualación de Precio:</b> Si todo es correcto, ajustaremos el precio de tu compra.
          </li>
        </ul>
        <h2 className="text-3xl my-3">Excepciones</h2>
        <p>
          Algunas ofertas pueden estar sujetas a condiciones o restricciones. Te recomendamos revisar los términos y condiciones de nuestra Garantía de Igualación de Precios o contactar con nuestro servicio de atención al cliente para obtener más información.
        </p>
        <p>
          Si tienes alguna duda o necesitas asistencia, no dudes en ponerte en contacto con nosotros a través de{" "}
          <a href="mailto:marketing@vendalia.es" className="text-blue-600 hover:underline">
            marketing@vendalia.es
          </a>.
        </p>
      </div>
    </PublicPageContainer>
  );
}
