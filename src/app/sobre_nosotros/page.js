import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function About() {
  return (
    <PublicPageContainer>
      <div className="max-w-7xl mx-auto flex flex-wrap py-9 px-4">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2">
          <h2 className="text-5xl mb-3">Bienvenidos a Vendalia.es</h2>
          <p>
            En Vendalia.es creemos en el poder de la creatividad y la
            autenticidad. Somos más que un simple mercado online: somos una
            comunidad apasionada por lo hecho a mano, el diseño original y la
            tradición artesanal de España. Nuestra misión es conectar a
            talentosos creadores y artesanos con quienes buscan piezas únicas,
            auténticas y llenas de historia.
          </p>
          <h2 className="text-4xl mb-3 mt-7">Nuestra Historia</h2>
          <p>Nacimos de la idea de rescatar y celebrar la riqueza cultural y creativa de España. Con el deseo de brindar un espacio en el que los artesanos locales pudieran mostrar su trabajo y encontrar clientes que valoren la dedicación y la calidad de cada pieza, Vendalia.es se ha convertido en el lugar donde la tradición se une con la innovación.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap my-9 px-4">
        <div className="lg:w-1/2">
          <h2 className="text-4xl mb-3">Qué Nos Hace Especiales</h2>
         <ul>
         <li><b>Calidad y Autenticidad: </b>Cada producto en Vendalia.es es seleccionado cuidadosamente. Apoyamos a creadores que ponen su corazón en lo que hacen, garantizando piezas únicas y con un toque personal.</li>
         <li><b>Comunidad y Colaboración: </b>Fomentamos un ambiente de colaboración y apoyo mutuo. Nuestro compromiso es crear un espacio en el que tanto compradores como vendedores puedan crecer y aprender unos de otros.</li>
         <li><b>Sostenibilidad y Responsabilidad: </b>Creemos en un futuro en el que el consumo consciente y la producción ética son la norma. Promovemos prácticas sostenibles que respeten el medio ambiente y las tradiciones locales.</li>
         </ul>
         <h2 className="text-4xl mb-3 mt-7">Nuestro Compromiso</h2>
         <p>En Vendalia.es, trabajamos cada día para ofrecer una experiencia excepcional, cuidando cada detalle desde la curaduría de productos hasta la atención al cliente. Nos enorgullece ser un puente entre el talento artesanal español y el público que busca algo más que un simple objeto: busca una historia, una emoción, una conexión genuina.</p>
         
         <h2 className="text-4xl mb-3 mt-7">Únete a Nuestra Comunidad</h2>
         <p>Te invitamos a explorar nuestro mercado, descubrir creadores increíbles y formar parte de una comunidad que valora la creatividad y la autenticidad. En Vendalia.es, cada pieza tiene una historia y cada historia merece ser contada.</p>
         
         </div>
        <div className="lg:w-1/2"></div>
      </div>
    </PublicPageContainer>
  );
}
