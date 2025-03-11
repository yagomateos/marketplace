import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function Contact() {
  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-3">Contacta con Nosotros</h2>
        <p>
          En Vendalia.es, tu satisfacción es nuestra prioridad. Si necesitas
          asistencia o tienes alguna duda sobre tu pedido, estamos aquí para
          ayudarte a cada paso. A continuación, te explicamos los canales de
          contacto y cómo funciona nuestro soporte:
        </p>
        <h2 className="text-3xl my-3">Correo Electrónico</h2>
        <p>
          Para cualquier consulta relacionada con pedidos, envíanos un email a
          <a className="underline" href="mailto:marketing@vendalia.es">marketing@vendalia.es.</a> Por favor, incluye en el asunto tu número de
          pedido y un título claro que indique el motivo de tu consulta, como
          por ejemplo:
        </p>
        <ul className="my-3 list-disc pl-4">
          <li>Ayuda con el pedido</li>
          <li>Solicitud de reembolso</li>
          <li>Consulta general</li>
          <li>Información sobre el envío</li>
          <li>Problemas con el producto</li>
          <li>Preguntas sobre devoluciones</li>
          <li>Reclamaciones</li>
          <li>Consultas sobre colaboraciones o asociaciones</li>
        </ul>
        <h2 className="text-3xl my-3">Chat de Pedidos</h2>
        <p>
          Además, puedes comunicarte directamente con los vendedores a través
          del chat de pedidos. Este servicio te permite resolver dudas
          específicas sobre tus compras en tiempo real, facilitando una atención
          personalizada y directa.
        </p>
        <h2>Cómo Funciona Nuestro Soporte</h2>
        <ul className="my-3 list-disc pl-4">
          <li>
            <b>Horario de Atención:</b> Nuestro equipo de soporte está
            disponible de lunes a viernes, de 9:00 a 18:00 (hora de España).
            Durante este horario, nos esforzamos por responder a tus consultas
            en el menor tiempo posible.
          </li>
          <li>
            <b>Proceso de Respuesta:</b> Tras recibir tu correo, asignaremos un
            número de seguimiento a tu consulta. Nuestro objetivo es responder
            en un plazo máximo de 24 horas hábiles. Si tu caso requiere un
            análisis más detallado, te mantendremos informado del estado de la
            resolución.
          </li>
          <li>
            <b>Resolución de Problemas:</b> Si tu consulta se relaciona con un
            problema técnico o de producto, trabajaremos en estrecha
            colaboración contigo y el vendedor correspondiente para llegar a una
            solución satisfactoria.
          </li>
          <li>
            <b>Escalado de Consultas:</b> En casos en que la situación no pueda
            resolverse de manera inmediata, tu consulta será escalada a un
            supervisor, quien se encargará de gestionar la situación con la
            máxima prioridad.
          </li>
          <li>
            <b>Privacidad y Confidencialidad:</b> Toda la información que nos
            proporciones se tratará con la máxima confidencialidad y se
            utilizará únicamente para mejorar tu experiencia en Vendalia.es.
          </li>
        </ul>
        <p>
          Nuestro compromiso es ofrecerte un servicio de atención rápido,
          eficiente y transparente. Si tienes cualquier duda o problema, no
          dudes en ponerte en contacto. ¡Estamos aquí para ayudarte!
        </p>
      </div>
    </PublicPageContainer>
  );
}
