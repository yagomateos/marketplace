import './help.css'

export default function HelpPage() {
  return (
      <>
          <div className='flex justify-center flex-col w-full min-h-[200px] lg:min-h-[350px] help-hero items-center'>
              <h2 className='text-white text-2xl mb-4'>Centro de Ayuda Vendalia</h2>
              <input type="text" placeholder="Busca tu pregunta aquí..." className="py-3 px-6 bg-white rounded-full border border-[#ccc] lg:w-[50vw]" />
          </div>

          <div className='bg-slate-200 p-6 flex flex-col justify-center items-center text-center'>
              <h3 className='text-xl mb-3'>¿Interesado en moda vintage y sostenible?</h3>
              <p className='mb-4'>Descubre nuestra guía completa sobre moda vintage y sostenible en nuestro blog.</p>
              <a href="/blog" className='py-2 px-6 border border-black inline-block mt-3 rounded-full hover:bg-black hover:text-white transition-all'>Visitar el Blog</a>
          </div>

          <div className='mb-8'>
              <ul className='p-3 lg:p-0 border-b border-[#ccc] flex flex-col lg:flex-row lg:gap-5 justify-center'>
                  <li><a className='w-full text-center lg:p-4 inline-block hover:text-blue-600'>Comprar Vintage</a></li>
                  <li><a className='w-full text-center lg:p-4 inline-block hover:text-blue-600'>Vender en Vendalia</a></li>
                  <li><a className='w-full text-center lg:p-4 inline-block hover:text-blue-600'>Guía de Estilos</a></li>
              </ul>
          </div>

          <div className='w-full flex justify-center items-center flex-col py-4 lg:py-12 px-5'>
              <h2 className='text-center text-2xl font-semibold mb-8'>Preguntas Frecuentes</h2>
              <div className='flex flex-wrap max-w-6xl mt-6 w-full gap-4'>
                  <div className='w-full lg:w-[32%] p-4 hover:bg-gray-50 rounded-lg cursor-pointer'>
                      <p className='text-gray-600'>Compras Vintage</p>
                      <h3 className='font-serif text-xl'>¿Cómo identificar prendas vintage auténticas?</h3>
                  </div>
                  <div className='w-full lg:w-[32%] p-4 hover:bg-gray-50 rounded-lg cursor-pointer'>
                      <p className='text-gray-600'>Sostenibilidad</p>
                      <h3 className='font-serif text-xl'>¿Por qué elegir moda de segunda mano?</h3>
                  </div>
                  <div className='w-full lg:w-[32%] p-4 hover:bg-gray-50 rounded-lg cursor-pointer'>
                      <p className='text-gray-600'>Guía de Tallas</p>
                      <h3 className='font-serif text-xl'>¿Cómo encontrar mi talla en ropa vintage?</h3>
                  </div>
                  <div className='w-full lg:w-[32%] p-4 hover:bg-gray-50 rounded-lg cursor-pointer'>
                      <p className='text-gray-600'>Cuidado de Prendas</p>
                      <h3 className='font-serif text-xl'>¿Cómo mantener las prendas vintage en buen estado?</h3>
                  </div>
                  <div className='w-full lg:w-[32%] p-4 hover:bg-gray-50 rounded-lg cursor-pointer'>
                      <p className='text-gray-600'>Tendencias</p>
                      <h3 className='font-serif text-xl'>¿Cuáles son las tendencias vintage actuales?</h3>
                  </div>
                  <div className='w-full lg:w-[32%] p-4 hover:bg-gray-50 rounded-lg cursor-pointer'>
                      <p className='text-gray-600'>Venta</p>
                      <h3 className='font-serif text-xl'>¿Cómo puedo vender mi ropa vintage?</h3>
                  </div>
              </div>
          </div>

          <div className='bg-gray-100 p-8 mt-8'>
              <h2 className='text-center text-2xl font-semibold mb-6'>Recursos Populares</h2>
              <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  <a href="/blog" className='p-4 bg-white rounded-lg hover:shadow-md'>
                      <h3 className='font-bold mb-2'>Guía de Estilos Vintage</h3>
                      <p className='text-gray-600'>Desde Pin-Up hasta Y2K</p>
                  </a>
                  <a href="/blog" className='p-4 bg-white rounded-lg hover:shadow-md'>
                      <h3 className='font-bold mb-2'>Mercados Vintage</h3>
                      <p className='text-gray-600'>Encuentra los mejores lugares</p>
                  </a>
                  <a href="/blog" className='p-4 bg-white rounded-lg hover:shadow-md'>
                      <h3 className='font-bold mb-2'>Moda Sostenible</h3>
                      <p className='text-gray-600'>Guía para compradores conscientes</p>
                  </a>
              </div>
          </div>
      </>
  )
}