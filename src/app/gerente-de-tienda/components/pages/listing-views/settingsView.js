import React from 'react'

export default function SettingsView({setSelectedproductToEdit, setEditListing , view, product, setSettingsOpen }) {
    return (
        <div className={`absolute bg-white  z-10 shadow-md rounded-xl ${view == 'default' ? 'left-[80%] w-[60%] bottom-0' : 'left-auto top-0 bottom-auto right-0 w-[20%]'}`}>
            <div className="relative h-full w-full p-4">

                <ul className="mb-12">
                    <li>
                        <a className="py-3 block" target="blank" href={`/listado?pid=${product.id}`}>
                            Ver en Vendalia
                        </a>
                    </li>
                    <hr className="border-b border-[#ccc]" />
                    <li><a className="py-3 block" href="#" onClick={e=>{e.preventDefault();setSelectedproductToEdit(product); setEditListing(true)}}>Editar</a></li>
                    <li><a className="py-3 block" href="#">Desactivar</a></li>
                    <li><a className="py-3 block" href="#">Compartir</a></li>
                    <li><a className="py-3 block" href="#">Borrar</a></li>
                </ul>
                <a className={`absolute ${view == 'default' ? 'left-3 bottom-[15px]' : 'right-3 top-[15px] bottom-auto'}`}
                    onClick={(e) => { e.preventDefault(); setSettingsOpen(null); }}
                    href="#"
                >
                    <img className="w-[20px]" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-settings-50.png" alt="close settings" />
                </a>
            </div>
        </div>
    )
}
