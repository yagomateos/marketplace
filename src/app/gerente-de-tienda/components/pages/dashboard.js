import React, { useEffect, useState } from 'react'
import { getStrByUserId } from '../../../../lib/actions/stores/getStores'

export default function Dashboard({ userData }) {

  const [stores, setStores] = useState(null)
  const [activeListings, setActiveListings] = useState(null)
  const [expiredListings, setExpiredListings] = useState(null)
  const [soldOuListings, setSoldOutListings] = useState(null)

  // get active listings
  useEffect(() => {
    const getStores = async () => {
      try {
        const Listings = await getStrByUserId(userData[0].id)
        console.log(Listings)
        const str = { count: Listings[0].store_count, store_name: Listings[0].store_name }
        // console.log(str)
        setStores(str)
        const activeListingsObg = [];
        const expiredListingsObg = [];
        const soldOuListingsObg = [];
        Listings && Listings.forEach(listing => {
          console.log(listing)
          switch (listing.status) {
            case 'active':
              activeListingsObg.push(listing)
              break;
            case 'expired':
              expiredListingsObg.push(listing)
              break;

            case 'sold_out':
              soldOuListingsObg(listing)
              break;

            default:
              activeListingsObg.push(listing)
              break;
          }
        })

        setActiveListings(activeListingsObg);
        setExpiredListings(expiredListingsObg);
        setSoldOutListings(soldOuListingsObg);

      } catch (error) {
        console.log(error)
        setStores(null)
      }
    }

    userData && getStores()
  }, [userData])


  return (
    <div className='max-w-5xl w-full mr-auto ml-auto'>

      {/* header area */}
      <div className='mb-5 flex w-full justify-between'>
        <div className='flex items-center'>
          <img className='w-14 h-14 object-cover rounded-md mr-4' src={userData && userData[0].identity_url} />
          <div>
            <h2 className='text-3xl'>Hola {userData && userData[0].username}</h2>
            <p className='text-sm'>{stores && stores.count} anuncio activo</p>
          </div>
        </div>
        <div>
          {
            userData && stores && <a className='underline' href={`https://www.vendalia.es/viveres/${userData[0].id}/${stores && stores.store_name}`}>{`vendalia.es/viveres/${userData[0].id}/${stores && stores.store_name}`}</a>

          }
        </div>
      </div>

      {/* notification banner */}
      <div className='p-6 rounded-2xl bg-green-300 mt-12 flex justify-between'>
        <div className='w-[65%]'>
          <h2 className='font-semibold text-xl'>Una guía rápida para conseguir tu primera venta</h2>
          <div><img src="" /> &nbsp; <p className='text-sm font-light'>De los expertos en educación para vendedores de Vendalia</p></div>

          <ol className='mt-4'>
            <li className='mt-2 text-sm'><span className='w-8 h-8 rounded-full bg-[#f2f2f2] inline-flex justify-center items-center mr-3'>1</span>Marca esta página como favorita para que puedas seguir fácilmente tu progreso.</li>
            <li className='mt-2 text-sm'><span className='w-8 h-8 rounded-full bg-[#f2f2f2] inline-flex justify-center items-center mr-3'>2</span>Vea cómo crear un anuncio atractivo que venda. Bono: obtenga consejos sobre fotos y la herramienta Palabras clave...</li>
            <li className='mt-2 text-sm'><span className='w-8 h-8 rounded-full bg-[#f2f2f2] inline-flex justify-center items-center mr-3'>3</span>Descarga la aplicación para vendedores de Vendalia. Agregar anuncios con más fotos (es muy fácil hacerlo desde tu teléfono) puede ayudarte a conectar con más compradores y hacer más ventas.</li>
            <li className='mt-2 text-sm'><span className='w-8 h-8 rounded-full bg-[#f2f2f2] inline-flex justify-center items-center mr-3'>4</span>Agregue más anuncios. Recuerde que cuanto más anuncios tenga, más posibilidades tendrá de que los compradores lo vean.</li>
            <li className='mt-2 text-sm'><span className='w-8 h-8 rounded-full bg-[#f2f2f2] inline-flex justify-center items-center mr-3'>5</span>Muestra tu arduo trabajo. Comparte tu tienda en las redes sociales o con tus amigos.</li>
          </ol>
        </div>

        <div className='w-[35%] flex items-end justify-end'>
          <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/12643974_5022390.png" />
        </div>

      </div>

      {/* search ptimize */}
      <div className='rounded-2xl p-6 border border-[#ccc] mt-12'>
        <div className='flex w-full justify-between'>
          <div className='w-[50%]'>
            <img className='w-full max-h-[350px] object-contain' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/5168218_2733655.jpg" />
          </div>
          <div className='w-[50%]'>
            <h2 className='font-semibold text-xl'>Ahora es más fácil entender qué afecta tu visibilidad en la búsqueda</h2>
            <p className='text-sm mt-4'>Descubra cómo aparece en las búsquedas y explore las acciones que puede realizar para optimizar su tienda, sus listados y su servicio de atención al cliente.</p>
            <div className='mt-8 flex gap-2'>
              <a href='#' className='px-8 py-3 border-2 border-black rounded-full '>Ahora no</a>
              <a href='#' className='px-8 py-3 bg-black text-white rounded-full '>Échale un vistazo</a>
            </div>
          </div>
        </div>
      </div>

      {/* join events */}
      <div className='p-6 rounded-2xl bg-green-300 mt-12 flex justify-between'>
        <div className='w-[60%]'>
          <h2 className='font-semibold text-xl'>Únase a los próximos eventos de ventas</h2>
          <p className='text-sm mt-4'>No te pierdas el tráfico, es fácil participar en los eventos de ventas organizados por Vendalia. Bono: Tu artículo podría aparecer en el marketing de Vendalia. ¡Inscríbete pronto!</p>
        </div>
        <div className='flex items-center justify-end gap-2 w-[40%]'>
          <a href='#' className='px-5 py-2 border-2 border-black rounded-full '>Ahora no</a>
          <a href='#' className='px-5 py-2 bg-black text-white rounded-full '>Échale un vistazo</a>
        </div>
      </div>

      {/* shop advisor */}
      <div className='mt-12'>
        <h2 className='font-semibold text-xl'>Asesor de tienda</h2>
        <div className='flex justify-between items-center w-full'>
          <div className='w-[70%]'>
            <h3 className='text-lg font-semibold mt-4'>Pon a punto vendalia hoy</h3>
            <p>Aprenda de los expertos de Vandalia y de la comunidad de vendedores en este evento gratuito de un día. Además, por primera vez, revelaremos las finales de diseño de Vandalia.</p>
          </div>
          <div class="w-[30%] text-right">
            <a href='#' className='px-5 py-2 border-2 border-black rounded-full '>Explorar evento</a>
          </div>
        </div>
      </div>

      {/* shop checklist */}

      <div className='mt-12'>
        <h2 className='font-semibold text-xl'>Lista de verificación de tu tienda</h2>

        <div className='mt-6'>
          <table className='w-full'>
            <tbody>
              <tr className='bg-[#f8f8f8]'><td className='p-4'><b>Listados</b></td><td>&nbsp;</td></tr>
              <tr ><td className='p-4'>Listados activos</td><td>{activeListings&&activeListings.length}</td></tr>
              <tr className='bg-[#f8f8f8]'><td className='p-4'>Caducado</td><td>{expiredListings&&expiredListings.length}</td></tr>
              <tr ><td className='p-4'>Agotado</td><td>{soldOuListings&&soldOuListings.length}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

  )
}
