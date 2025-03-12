import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function PrivacyPolicy() {
  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-5">Política de Privacidad</h2>
        <p className="mb-4">
          En Vendalia.es, la privacidad y la seguridad de tus datos personales son de suma importancia para nosotros. Esta política de privacidad te informa sobre cómo recopilamos, utilizamos, almacenamos y protegemos tu información.
        </p>
        <h3 className="text-3xl my-3">1. Información que Recopilamos</h3>
        <p className="mb-2">
          Recopilamos diferentes tipos de información para ofrecerte una experiencia personalizada y segura:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <b>Datos Personales:</b> Nombre, dirección, correo electrónico, número de teléfono y datos de pago cuando realizas una compra.
          </li>
          <li>
            <b>Información de Navegación:</b> Datos sobre tu navegación en nuestro sitio, como dirección IP, tipo de navegador y páginas visitadas.
          </li>
          <li>
            <b>Preferencias y Ajustes:</b> Información sobre tus preferencias de productos y configuraciones de la cuenta.
          </li>
        </ul>
        <h3 className="text-3xl my-3">2. Uso de la Información</h3>
        <p className="mb-2">
          La información que recopilamos se utiliza para:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Procesar y gestionar tus pedidos de manera eficiente.</li>
          <li>Personalizar y mejorar tu experiencia de compra.</li>
          <li>Enviar comunicaciones relacionadas con tu cuenta, ofertas y promociones.</li>
          <li>Analizar y mejorar el rendimiento de nuestro sitio web.</li>
          <li>Cumplir con obligaciones legales y contractuales.</li>
        </ul>
        <h3 className="text-3xl my-3">3. Cookies y Tecnologías Similares</h3>
        <p className="mb-2">
          Utilizamos cookies y otras tecnologías similares para mejorar la funcionalidad de nuestro sitio y ofrecerte contenido relevante. Las cookies nos permiten:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Recordar tus preferencias y ajustes de navegación.</li>
          <li>Analizar el tráfico del sitio para optimizar su rendimiento.</li>
          <li>Ofrecerte publicidad personalizada basada en tus intereses.</li>
        </ul>
        <h3 className="text-3xl my-3">4. Seguridad de Datos</h3>
        <p className="mb-2">
          Nos comprometemos a proteger tus datos mediante el uso de medidas de seguridad físicas, electrónicas y administrativas. Implementamos tecnologías de encriptación y acceso restringido a la información para evitar el acceso no autorizado.
        </p>
        <h3 className="text-3xl my-3">5. Compartir y Divulgar Información</h3>
        <p className="mb-2">
          Vendalia.es no venderá ni alquilará tu información personal a terceros. Sin embargo, podemos compartir datos con:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Empresas colaboradoras para procesar pedidos y gestionar pagos.</li>
          <li>Autoridades legales cuando sea requerido por la ley.</li>
          <li>Proveedores de servicios que nos asisten en la mejora de nuestro sitio.</li>
        </ul>
        <h3 className="text-3xl my-3">6. Tus Derechos</h3>
        <p className="mb-2">
          Tienes derecho a acceder, rectificar y eliminar tus datos personales. Si deseas ejercer alguno de estos derechos, puedes contactarnos en cualquier momento.
        </p>
        <h3 className="text-3xl my-3">7. Cambios en la Política de Privacidad</h3>
        <p className="mb-2">
          Esta política de privacidad puede actualizarse periódicamente para reflejar cambios en nuestras prácticas. Te recomendamos revisarla regularmente para estar informado sobre cómo protegemos tu información.
        </p>
        <h3 className="text-3xl my-3">8. Contacto</h3>
        <p className="mb-2">
          Si tienes alguna pregunta o inquietud acerca de nuestra política de privacidad, no dudes en ponerte en contacto con nosotros a través de:
        </p>
        <p className="mb-4">
          <a href="mailto:privacidad@vendalia.es" className="text-blue-600 hover:underline">
            privacidad@vendalia.es
          </a>
        </p>
        <p>
          Gracias por confiar en Vendalia.es. Nos comprometemos a proteger tus datos y a brindarte un servicio de la más alta calidad.
        </p>
      </div>
    </PublicPageContainer>
  );
}
