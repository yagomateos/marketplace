import React from 'react'

export default function SettingsView({deleteProduct , copyProductPublicUrl , deactivateProduct , setSelectedproductToEdit, setEditListing , view, product, setSettingsOpen }) {
    return (
        <div className={`absolute bg-white  z-10 shadow-md rounded-xl ${view == 'default' ? 'left-0 lg:left-[80%] w-full lg:w-[60%] bottom-0' : 'left-auto top-0 bottom-auto right-0 w-[20%]'}`}>
            <div className="relative h-full w-full p-2 lg:p-4">

                <ul className="mb-8 lg:mb-12">
                    <li>
                        <a className="py-3 block" target="blank" href={`/listado?pid=${product.id}`}>
                            Ver en Vendalia
                        </a>
                    </li>
                    <hr className="border-b border-[#ccc]" />
                    <li><a className="py-2 lg:py-3 block text-sm lg:text-base" href="#" onClick={e=>{e.preventDefault();setSelectedproductToEdit(product); setEditListing(true)}}>Editar</a></li>
                    <li><a className="py-2 lg:py-3 block text-sm lg:text-base" href="#" onClick={(e)=>{e.preventDefault(); deactivateProduct(product.id)}}>Desactivar</a></li>
                    <li><a className="py-2 lg:py-3 block text-sm lg:text-base" href="#" onClick={(e)=>{e.preventDefault(); copyProductPublicUrl(product.id)}}>Compartir</a></li>
                    <li><a className="py-2 lg:py-3 block text-sm lg:text-base" href="#" onClick={(e)=>{e.preventDefault(); deleteProduct(product.id)}}>Borrar</a></li>
                </ul>
                <a className={`absolute ${view == 'default' ? 'right-3 lg:right-auto lg:left-3 bottom-[15px]' : 'right-3 top-[15px] bottom-auto'}`}
                    onClick={(e) => { e.preventDefault(); setSettingsOpen(null); }}
                    href="#"
                >
                    <img className="w-[20px]" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-settings-50.png" alt="close settings" />
                </a>
            </div>
        </div>
    )
}
