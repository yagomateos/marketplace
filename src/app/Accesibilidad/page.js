import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function Accessibility() {
  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-3">Información de Accesibilidad</h2>
        <p>
          En Vendalia.es, estamos comprometidos a hacer que nuestro sitio web sea accesible para todas las personas, incluidas aquellas con discapacidades. Nos esforzamos por ofrecer una experiencia inclusiva y amigable, permitiendo que cada visitante navegue y utilice nuestra plataforma sin barreras.
        </p>
        <h2 className="text-3xl my-3">Compromiso con la Accesibilidad</h2>
        <p>
          Nuestro objetivo es cumplir con las pautas internacionales de accesibilidad (WCAG 2.1) para asegurar que el contenido y las funcionalidades de nuestro sitio sean perceptibles, operables, comprensibles y robustos para todos los usuarios.
        </p>
        <h2 className="text-3xl my-3">Características de Accesibilidad</h2>
        <ul className="my-3 list-disc pl-4">
          <li>
            <b>Diseño Responsive:</b> Nuestro sitio se adapta a diferentes dispositivos y tamaños de pantalla, facilitando el acceso desde móviles, tabletas y ordenadores.
          </li>
          <li>
            <b>Navegación Intuitiva:</b> Hemos optimizado la estructura y los menús para que sean claros y fáciles de usar, ayudando a todos los usuarios a encontrar lo que buscan rápidamente.
          </li>
          <li>
            <b>Compatibilidad con Tecnologías de Asistencia:</b> Vendalia.es está diseñado para funcionar correctamente con lectores de pantalla y otras tecnologías de asistencia, garantizando la inclusión de todos.
          </li>
          <li>
            <b>Contraste y Legibilidad:</b> Utilizamos combinaciones de colores y tipografías que aseguran un alto contraste y facilitan la lectura para usuarios con dificultades visuales.
          </li>
        </ul>
        <h2 className="text-3xl my-3">Feedback y Mejoras Continuas</h2>
        <p>
          Valoramos tus comentarios y sugerencias. Si encuentras barreras de accesibilidad o tienes recomendaciones para mejorar la experiencia de usuario, contáctanos a través de <a href="mailto:marketing@vendalia.es" className="text-blue-600 hover:underline">marketing@vendalia.es</a>. Trabajamos continuamente para identificar y solucionar cualquier problema de accesibilidad.
        </p>
        <h2 className="text-3xl my-3">Próximas Mejoras</h2>
        <p>
          Estamos comprometidos a mejorar la accesibilidad de nuestro sitio de manera continua. Próximamente implementaremos nuevas funcionalidades y ajustes basados en las mejores prácticas y el feedback de nuestra comunidad, para que Vendalia.es sea un espacio accesible para todos.
        </p>
      </div>
    </PublicPageContainer>
  );
}
