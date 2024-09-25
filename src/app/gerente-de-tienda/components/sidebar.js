
export default function Sidebar({ setStep }) {
    return (
        <div className="w-[20%] border-r border-[#ccc] py-4 min-h-screen shadow-sm shadow-[#ccc]">
            <div className="flex px-4">
                <img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/shop-icon.svg" /> <h3 className="ml-2 font-semibold">Gerente de tienda</h3>
            </div>
            <ul className="mt-6">
                <li>
                    <a onClick={(e) => { e.preventDefault(); setStep(0) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/search.svg" /> &nbsp;Buscar</a>
                </li>
                <li><a onClick={(e) => { e.preventDefault(); setStep(1) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer">Panel</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setStep(2) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer">Listados</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setStep(3) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer">Mensajes</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setStep(4) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer">Pedidos y entregas</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setStep(5) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer">Ayuda</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setStep(6) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer">Ajustes</a></li>
            </ul>
        </div>
    )
}
