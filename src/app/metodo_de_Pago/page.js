import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function PaymentMethod() {
  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-3">Métodos de Pago</h2>
        <p>
          En Vendalia.es, nos esforzamos por ofrecerte una experiencia de compra segura y cómoda. Para garantizar transacciones protegidas y eficientes, hemos integrado un sistema de pago líder en el mercado.
        </p>
        <h2 className="text-3xl my-3">Pago Seguro con Stripe</h2>
        <p>
          Utilizamos <b>Stripe</b> como nuestro proveedor de pagos. Stripe es una plataforma reconocida a nivel mundial por su seguridad, facilidad de uso y eficiencia en el procesamiento de transacciones en línea.
        </p>
        <ul className="my-3 list-disc pl-4">
          <li>
            <b>Seguridad:</b> Stripe utiliza protocolos de encriptación avanzados para proteger tus datos financieros y garantizar que cada transacción se realice de manera segura.
          </li>
          <li>
            <b>Facilidad de Uso:</b> El proceso de pago es intuitivo y rápido, permitiéndote completar tus compras en pocos pasos sin complicaciones.
          </li>
          <li>
            <b>Soporte Global:</b> Aunque actualmente operamos en España, Stripe es una solución global que facilita la expansión y la gestión de pagos en diferentes mercados.
          </li>
          <li>
            <b>Transparencia:</b> Todas las tarifas y cargos asociados se comunican de manera clara, sin costos ocultos, para que siempre sepas en qué inviertes.
          </li>
        </ul>
        <h2 className="text-3xl my-3">Proceso de Pago</h2>
        <p>
          Durante el proceso de compra, serás redirigido a una interfaz segura de Stripe para completar tu transacción. Una vez confirmado el pago, recibirás una notificación por correo electrónico, y podrás seguir el estado de tu pedido directamente desde tu cuenta en Vendalia.es.
        </p>
        <p>
          Si tienes alguna duda o encuentras algún inconveniente durante el proceso de pago, no dudes en ponerte en contacto con nosotros a través de{" "}
          <a href="mailto:marketing@vendalia.es" className="text-blue-600 hover:underline">
            marketing@vendalia.es
          </a>.
        </p>
      </div>
    </PublicPageContainer>
  );
}
