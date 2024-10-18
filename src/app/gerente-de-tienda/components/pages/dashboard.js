import React, { useEffect, useState } from 'react'
import { getStrByUserId } from '../../../../lib/actions/stores/getStores'
import Listings from './listings'

export default function Dashboard({ userData, setSettingsPage }) {

  const [stores, setStores] = useState(null)
  const [activeListings, setActiveListings] = useState(null)
  const [expiredListings, setExpiredListings] = useState(null)
  const [soldOuListings, setSoldOutListings] = useState(null)
  const [listings, setListings] = useState(null)

  // get active listings
  useEffect(() => {
    const getStores = async () => {
      try {
        const Listings = await getStrByUserId(userData[0].id)
        console.clear();
        console.log(Listings)

        setListings(Listings)
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
    <>
      {/* desktop dashboard */}
      <div className='hidden lg:block lg:max-w-5xl w-full mr-auto ml-auto'>

        {/* header area */}
        <div className='mb-5 flex flex-col lg:flex-row w-full justify-between'>
          <div className='flex w-full lg:w-auto items-center'>

            <img className='w-14 h-14 object-cover rounded-md mr-4' src={userData && userData[0].identity_url} />
            <div>
              <h2 className='text-lg leading-5 lg:text-3xl'>Hola {userData && userData[0].username}</h2>
              <p className='text-sm'>{stores && stores.count} anuncio activo</p>
            </div>

          </div>
          <div>
            {
              userData && stores && <a className='underline text-sm mt-3 leading-2' href={`https://www.vendalia.es/viveres/${userData[0].id}/${stores && stores.store_name}`}>{`vendalia.es/viveres/${userData[0].id}/${stores && stores.store_name}`}</a>

            }
          </div>
        </div>

        {/* notification banner */}
        <div className='p-3 lg:p-6 rounded-2xl bg-green-300 mt-4 lg:mt-12 flex justify-between w-full flex-col lg:flex-row'>
          <div className='w-full lg:w-[65%]'>
            <h2 className='font-semibold text-lg leading-tight lg:text-xl'>Una guía rápida para conseguir tu primera venta</h2>
            <div className='pt-4'><p className='text-sm font-light'>De los expertos en educación para vendedores de Vendalia</p></div>

            <ol className='mt-4'>
              <li className='mt-2 text-sm'><span className='w-5 lg:w-8 h-5 lg:h-8 rounded-full bg-[#f2f2f2] inline-flex justify-center items-center mr-2 lg:mr-3'>1</span>Marca esta página como favorita para que puedas seguir fácilmente tu progreso.</li>
              <li className='mt-2 text-sm'><span className='w-5 lg:w-8 h-5 lg:h-8 rounded-full bg-[#f2f2f2] inline-flex justify-center items-center mr-2 lg:mr-3'>2</span>Vea cómo crear un anuncio atractivo que venda. Bono: obtenga consejos sobre fotos y la herramienta Palabras clave...</li>
              <li className='mt-2 text-sm'><span className='w-5 lg:w-8 h-5 lg:h-8 rounded-full bg-[#f2f2f2] inline-flex justify-center items-center mr-2 lg:mr-3'>3</span>Descarga la aplicación para vendedores de Vendalia. Agregar anuncios con más fotos (es muy fácil hacerlo desde tu teléfono) puede ayudarte a conectar con más compradores y hacer más ventas.</li>
              <li className='mt-2 text-sm'><span className='w-5 lg:w-8 h-5 lg:h-8 rounded-full bg-[#f2f2f2] inline-flex justify-center items-center mr-2 lg:mr-3'>4</span>Agregue más anuncios. Recuerde que cuanto más anuncios tenga, más posibilidades tendrá de que los compradores lo vean.</li>
              <li className='mt-2 text-sm'><span className='w-5 lg:w-8 h-5 lg:h-8 rounded-full bg-[#f2f2f2] inline-flex justify-center items-center mr-2 lg:mr-3'>5</span>Muestra tu arduo trabajo. Comparte tu tienda en las redes sociales o con tus amigos.</li>
            </ol>
          </div>

          <div className='w-full lg:w-[35%] flex items-end justify-end'>
            <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/12643974_5022390.png" />
          </div>

        </div>

        {/* search ptimize */}
        <div className='rounded-2xl p-3 lg:p-6 border border-[#ccc] mt-4 lg:mt-12'>
          <div className='flex flex-col lg:flex-row w-full justify-between'>
            <div className='w-full lg:w-[50%]'>
              <img className='w-full max-h-[350px] object-contain' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/5168218_2733655.jpg" />
            </div>
            <div className='w-full lg:w-[50%]'>
              <h2 className='font-semibold text-lg leading-tight lg:text-xl'>Ahora es más fácil entender qué afecta tu visibilidad en la búsqueda</h2>
              <p className='text-sm mt-4'>Descubra cómo aparece en las búsquedas y explore las acciones que puede realizar para optimizar su tienda, sus listados y su servicio de atención al cliente.</p>
              <div className='mt-8 flex gap-2 flex-col lg:flex-row'>
                <a href='#' className='px-4 lg:px-8 text-center py-3 border-2 border-black rounded-full w-full lg:w-auto text-sm lg:text-base'>Ahora no</a>
                <a href='#' className='px-4 lg:px-8 text-center py-3 bg-black text-white rounded-full w-full lg:w-auto text-sm lg:text-base'>Échale un vistazo</a>
              </div>
            </div>
          </div>
        </div>

        {/* join events */}
        <div className='p-3 lg:p-6 rounded-2xl bg-green-300 mt-4 lg:mt-12 flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-[60%]'>
            <h2 className='font-semibold text-xl'>Únase a los próximos eventos de ventas</h2>
            <p className='text-sm mt-4'>No te pierdas el tráfico, es fácil participar en los eventos de ventas organizados por Vendalia. Bono: Tu artículo podría aparecer en el marketing de Vendalia. ¡Inscríbete pronto!</p>
          </div>
          <div className='flex flex-col lg:flex-row mt-5 lg:mt-0 items-center justify-end gap-2 w-full lg:w-[40%]'>
            <a href='#' className='px-5 py-2 border-2 border-black rounded-full w-full lg:w-auto text-center'>Ahora no</a>
            <a href='#' className='px-5 py-2 bg-black text-white rounded-full w-full lg:w-auto text-center'>Échale un vistazo</a>
          </div>
        </div>

        {/* shop advisor */}
        <div className='mt-12'>
          <h2 className='font-semibold text-lg leading-tight lg:text-xl'>Asesor de tienda</h2>
          <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
            <div className='w-full lg:w-[70%]'>
              <h3 className='lf:text-lg leading-tight text-base font-semibold mt-4 mb-3 lg:mb-auto'>Pon a punto vendalia hoy</h3>
              <p className='text-sm lg:text-base'>Aprenda de los expertos de Vandalia y de la comunidad de vendedores en este evento gratuito de un día. Además, por primera vez, revelaremos las finales de diseño de Vandalia.</p>
            </div>
            <div class="w-full mt-4 lg:mt-auto lg:w-[30%] text-center lg:text-right">
              <a href='#' className='px-5 py-2 border-2 border-black rounded-full '>Explorar evento</a>
            </div>
          </div>
        </div>

        {/* shop checklist */}

        <div className='mt-12'>
          <h2 className='font-semibold text-lg leading-tight lg:text-xl'>Lista de verificación de tu tienda</h2>

          <div className='mt-6'>
            <table className='w-full'>
              <tbody>
                <tr className='bg-[#f8f8f8]'><td className='p-4'><b>Listados</b></td><td>&nbsp;</td></tr>
                <tr ><td className='p-4'>Listados activos</td><td>{activeListings && activeListings.length}</td></tr>
                <tr className='bg-[#f8f8f8]'><td className='p-4'>Caducado</td><td>{expiredListings && expiredListings.length}</td></tr>
                <tr ><td className='p-4'>Agotado</td><td>{soldOuListings && soldOuListings.length}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* mobile dashboard */}
      <div className='w-full py-3 lg:hidden'>
        {/* store information */}
        <div className='flex w-full justify-between'>
          <div className='w-[25%]'>
            <img className='w-20 h-20 rounded-full' src={userData && userData[0].identity_url} />
          </div>
          <div className='w-[75%] px-4'>
            <h3 className='text-lg font-semibold'>{stores && stores.store_name}</h3>
            <p>{userData && userData[0].address_number} , {userData && userData[0].street} , {userData && userData[0].city}</p>

          </div>
        </div>
        <div className='flex gap-5'>
          <a className='bg-black rounded-full text-white p-2 mt-3 block text-center w-[46%]' href={`https://www.vendalia.es/viveres/${userData && userData[0].id}/${stores && stores.store_name}`}>Visita la tienda</a>
          <a onClick={(e) => { e.preventDefault(); setSettingsPage(2) }} className='border border-black rounded-full text-black p-2 mt-3 block text-center w-[46%]'>Listados</a>
        </div>

        <div className='p-3 mt-3'>
          <h3 className='text-lg font-semibold mb-2'>Sus listados</h3>
          <div className='flex gap-4 justify-between flex-wrap'>
            {
              listings && listings.map((listing, key) => {
                return (
                  <div key={key} className='w-[46%]'>
                    <a href={`http://localhost:3000/listado?pid=${listing.id}`}>
                      <img src={listing.main_image_url} />
                      <p className='text-sm'>{listing.name.substring(0, 60)}...</p>
                    </a>
                  </div>)
              })
            }
          </div>

        </div>
      </div>
    </>
  )
}
