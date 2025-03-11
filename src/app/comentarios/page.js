import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function Comments() {
  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-3">Comentarios y Opiniones</h2>
        <p>
          En Vendalia.es, valoramos la voz de nuestra comunidad. Creemos que los
          comentarios y las opiniones son fundamentales para mejorar la
          experiencia de todos nuestros usuarios. Aquí encontrarás nuestras pautas
          y expectativas para el uso de los comentarios en nuestra plataforma.
        </p>

        <h2 className="text-3xl my-3">Nuestro Compromiso</h2>
        <p>
          Nos esforzamos por crear un espacio seguro y acogedor donde compradores y
          vendedores puedan compartir sus experiencias de manera honesta y
          constructiva. Tus comentarios no solo ayudan a otros usuarios a tomar
          decisiones informadas, sino que también impulsan la mejora continua de
          nuestra plataforma.
        </p>

        <h2 className="text-3xl my-3">Directrices para Comentarios</h2>
        <ul className="my-3 list-disc pl-4">
          <li>
            <b>Respeto y Cordialidad:</b> Todos los comentarios deben ser respetuosos
            y constructivos. No se tolerará lenguaje ofensivo, discriminatorio o
            amenazante.
          </li>
          <li>
            <b>Relevancia:</b> Publica comentarios pertinentes a la experiencia de
            compra, el producto o el servicio ofrecido.
          </li>
          <li>
            <b>Privacidad:</b> Evita compartir información personal o sensible en tus
            comentarios.
          </li>
          <li>
            <b>Autenticidad:</b> Valoramos la honestidad y la transparencia. Comparte
            tus experiencias reales para ayudar a otros usuarios.
          </li>
          <li>
            <b>Moderación:</b> Nos reservamos el derecho de moderar y eliminar
            comentarios que no cumplan con estas directrices.
          </li>
        </ul>

        <h2 className="text-3xl my-3">Cómo Contribuyen tus Comentarios</h2>
        <p>
          Los comentarios ayudan a crear un ambiente de confianza y calidad en
          Vendalia.es. Al compartir tu experiencia, contribuyes a la mejora de
          nuestros productos y servicios, y ayudas a otros usuarios a elegir de
          manera informada.
        </p>

        <h2 className="text-3xl my-3">Sugerencias y Reclamaciones</h2>
        <p>
          Si tienes alguna sugerencia para mejorar la sección de comentarios o si
          encuentras contenido inapropiado, por favor contáctanos a través de{" "}
          <a
            href="mailto:marketing@vendalia.es"
            className="text-blue-600 hover:underline"
          >
            marketing@vendalia.es
          </a>
          . Estamos comprometidos a garantizar una experiencia positiva para toda
          nuestra comunidad.
        </p>
      </div>
    </PublicPageContainer>
  );
}
