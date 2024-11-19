
export default function Sidebar({sidebarOpen , setSidebarOpen ,  setStep , setSearchOpen , setStoreOpen }) {
    return (
        <div className={`${sidebarOpen ? 'w-full fixed' : 'hidden'} lg:block  top-0 lg:relative lg:w-[20%] border-r border-[#ccc] py-4 min-h-screen shadow-sm shadow-[#ccc] bg-white z-10`}>
            <div className="hidden lg:flex px-4 flex-col lg:flex-row text-center items-center">
                <img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/shop-icon.svg" /> <h3 className="ml-2 font-semibold">Gerente de tienda</h3>
            </div>

            <div className="lg:hidden shadow-sm p-3">
                <a onClick={e=>setSidebarOpen(false)}><img className="rotate-180 w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/right-arrow.svg"/></a>
            </div>
            <ul className="mt-6">
                <li className="hidden lg:block">
                    <a onClick={(e) => { e.preventDefault(); setSearchOpen(true) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/search.svg" /> &nbsp;Buscar</a>
                </li>
                <li><a onClick={(e) => { e.preventDefault(); setSearchOpen(false); setSidebarOpen(false); setStep(1) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-home-50.png" /> &nbsp;Panel</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setSearchOpen(false); setSidebarOpen(false); setStep(2) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-objects-24.png" /> &nbsp;Listados</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setSearchOpen(false); setSidebarOpen(false); setStep(3) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-messages-50.png" /> &nbsp;Mensajes</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setSearchOpen(false); setSidebarOpen(false); setStep(4) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-list-64.png" /> &nbsp;Pedidos y entregas</a></li>
                <li><a href="/Ayuda" className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-help-50.png" /> &nbsp; Ayuda</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setSidebarOpen(false); setStoreOpen(true); setStep(5) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-gear-50.png" /> &nbsp;Ajustes</a></li>
            </ul>
        </div>
    )
}
