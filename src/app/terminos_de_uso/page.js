import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function TermsOfUse() {
  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-5">Términos de Uso</h2>
        <p className="mb-4">
          Bienvenido a Vendalia.es. Al acceder y utilizar este sitio web, aceptas cumplir y estar sujeto a los siguientes Términos de Uso. Te recomendamos leer detenidamente esta información antes de utilizar nuestros servicios.
        </p>
        <h3 className="text-3xl my-3">1. Aceptación de los Términos</h3>
        <p className="mb-4">
          Al utilizar este sitio, confirmas que has leído, comprendido y aceptas estar legalmente vinculado por estos términos, junto con nuestra Política de Privacidad.
        </p>
        <h3 className="text-3xl my-3">2. Uso del Sitio Web</h3>
        <p className="mb-2">
          Vendalia.es se proporciona para uso personal y no comercial. Queda estrictamente prohibido:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Reproducir, distribuir o modificar cualquier parte del sitio sin autorización.</li>
          <li>Utilizar el sitio para fines ilegales o no autorizados.</li>
          <li>Interferir con el funcionamiento o seguridad del sitio.</li>
        </ul>
        <h3 className="text-3xl my-3">3. Responsabilidad del Usuario</h3>
        <p className="mb-4">
          Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de todas las actividades que ocurran bajo tu cuenta. Cualquier uso no autorizado debe ser reportado de inmediato.
        </p>
        <h3 className="text-3xl my-3">4. Propiedad Intelectual</h3>
        <p className="mb-2">
          Todos los contenidos del sitio, incluyendo textos, imágenes, gráficos, logotipos y software, son propiedad de Vendalia.es o de terceros licenciantes. Queda prohibido el uso no autorizado de dichos contenidos.
        </p>
        <h3 className="text-3xl my-3">5. Limitación de Responsabilidad</h3>
        <p className="mb-4">
          Vendalia.es no será responsable de ningún daño directo, indirecto, incidental o consecuente que surja del uso o la imposibilidad de uso del sitio. Toda la información se proporciona &quot;tal cual&quot;, sin garantías de ningún tipo.
        </p>
        <h3 className="text-3xl my-3">6. Modificaciones a los Términos</h3>
        <p className="mb-4">
          Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios entrarán en vigencia desde su publicación en el sitio, y el uso continuado del sitio implicará la aceptación de dichos cambios.
        </p>
        <h3 className="text-3xl my-3">7. Legislación Aplicable y Jurisdicción</h3>
        <p className="mb-4">
          Estos Términos se regirán e interpretarán de acuerdo con las leyes de España. Cualquier controversia relacionada con el uso del sitio se someterá a la jurisdicción exclusiva de los tribunales de España.
        </p>
        <h3 className="text-3xl my-3">8. Contacto</h3>
        <p>
          Si tienes preguntas o inquietudes acerca de estos Términos de Uso, por favor contáctanos a través de{" "}
          <a href="mailto:info@vendalia.es" className="text-blue-600 hover:underline">
            info@vendalia.es
          </a>.
        </p>
      </div>
    </PublicPageContainer>
  );
}
