import { useState } from 'react';
import './footer.css'

export default function Footer() {

    const [openMenu, setOpenMenu] = useState('null');

    return (
        <footer className="bg-gray-100 text-gray-800 py-14 px-4">
            <div className="container mx-auto text-center mb-8">
                <h4 className="mb-4 text-xl font-bold lg:text-3xl">Suscríbete a nuestro boletín</h4>
                <p className="text-sm">Recibe recomendaciones, consejos, actualizaciones, promociones y más.</p>
                <form className="footer-subscribe-form flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                    <input type="email" placeholder="Ingresa tu correo electrónico" className="min-w-80 max-w-full px-4 py-4 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500" />
                    <button type="submit" className="px-6 py-4 rounded bg-emerald-600 hover:bg-emerald-800 text-white font-bold">Subscríbete</button>
                </form>
            </div>
            <div className="max-w-4xl container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">
                <div>
                    <h4 className="font-bold mb-4 hidden lg:block">Get to Know Us</h4>

                    <div onClick={() => { openMenu != 'gtk' ? setOpenMenu('gtk') : setOpenMenu(null) }} className="border-b border-[#cc] flex justify-between items-center lg:hidden">
                        <h4 className="font-bold mb-4">Get to Know Us</h4>
                        <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/plusicon.svg" className="w-5" />
                    </div>
                    <ul className={`text-sm leading-loose ${openMenu == 'gtk' ? '' : 'hidden'} lg:block`}>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Sobre Nosotros</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Noticias y Blog</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Trabajos</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Inversores</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Contáctanos</a></li>
 
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 hidden lg:block">Atención al cliente</h4>

                    <div onClick={() => { openMenu != 'cs' ? setOpenMenu('cs') : setOpenMenu(null) }} className="border-b border-[#cc] flex justify-between items-center lg:hidden">
                        <h4 className="font-bold mb-4">Customer Service</h4>
                        <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/plusicon.svg" className="w-5" />
                    </div>
                    <ul className={`text-sm leading-loose ${openMenu == 'cs' ? '' : 'hidden'} lg:block`}>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Centro de Ayuda</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Preguntas Frecuentes</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Accesibilidad</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Comentarios</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Guía de Tallas</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Método de Pago</a></li>

                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 hidden lg:block">Pedidos y Devoluciones</h4>

                    <div onClick={() => { openMenu != 'or' ? setOpenMenu('or') : setOpenMenu(null) }} className="border-b border-[#cc] flex justify-between items-center lg:hidden">
                        <h4 className="font-bold mb-4">Orders & Returns</h4>
                        <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/plusicon.svg" className="w-5" />
                    </div>
                    <ul className={`text-sm leading-loose ${openMenu == 'or' ? '' : 'hidden'} lg:block`}>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Rastrear Pedido</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Envío y Entrega</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Devoluciones y Cambios</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Garantía de Igualación de Precios</a></li>
                    </ul>
                </div>
                <div>

                    <h4 className="font-bold mb-4 hidden lg:block">Enlaces Rápidos</h4>
                    <div onClick={() => { openMenu != 'ql' ? setOpenMenu('ql') : setOpenMenu(null) }} className="border-b border-[#cc] flex justify-between items-center lg:hidden">
                        <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
                        <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/plusicon.svg" className="w-5" />
                    </div>

                    <ul className={`text-sm leading-loose ${openMenu == 'ql' ? '' : 'hidden'} lg:block`}>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Política de Privacidad</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Términos de Uso</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Aviso Legal</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-800 p-2 block">Mapa del Sitio</a></li>

                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-8 flex flex-col lg:flex-row justify-between items-center pt-4">
                <p className="text-gray-600 text-sm">&copy; 2024 Vendalia, Todos los derechos reservados.</p>
                <div className="flex space-x-4 justify-between w-full items-center mt-4 lg:w-auto px-12 lg:px-0">
                    <a href="#" className="text-gray-600 hover:text-gray-800"><img class="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/twitter.svg" /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800"><img class="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/facebook.svg" /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800"><img class="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/youtube.svg" /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800"><img class="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/instagram.svg" /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800"><img class="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/whatsapp.svg" /></a>
                </div>
            </div>
        </footer>


    )
}
