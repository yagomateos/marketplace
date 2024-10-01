import { useState } from "react";

export default function DefaultView({ products, settingsOpen, setSettingsOpen, currentStatus }) {

    const returnSelectedProds = (product, key) => {
        const isStatusChecked = currentStatus ? product.status === currentStatus : true;

        if (isStatusChecked) {
            return (
                <div key={key} className="lg:w-[25%] p-4">
                    <div className="border border-[#ccc] relative">
                        <div>
                            <img className="w-full" src={product.main_image_url} alt={product.name} />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p>{product.quantity ? product.quantity : 0} En la tienda</p>
                            <p>€ {product.regular_price}</p>
                        </div>

                        <div className="border-t border-[#ccc] mt-6 p-4">
                            <div className="flex items-center justify-between">
                                <input type="checkbox" />
                                <span>
                                    <img className="w-[20px]" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-star-50.png" alt="star" />
                                </span>
                                <a onClick={(e) => { e.preventDefault(); setSettingsOpen(key); }} href="#">
                                    <img className="w-[20px]" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-settings-50.png" alt="settings" />
                                </a>
                            </div>
                        </div>

                        {/* settings opened */}
                        {settingsOpen === key && (
                            <div className="absolute bg-white bottom-0 left-[80%] z-10 shadow-md w-[60%] rounded-xl">
                                <div className="relative h-full w-full p-4">
                                    <ul className="mb-12">
                                        <li>
                                            <a className="py-3 block" target="blank" href={`/listado?pid=${product.id}`}>
                                                Ver en Vendalia
                                            </a>
                                        </li>
                                        <hr className="border-b border-[#ccc]" />
                                        <li><a className="py-3 block" href="#">Editar</a></li>
                                        <li><a className="py-3 block" href="#">Desactivar</a></li>
                                        <li><a className="py-3 block" href="#">Compartir</a></li>
                                        <li><a className="py-3 block" href="#">Borrar</a></li>
                                    </ul>
                                    <a
                                        className="absolute left-3 bottom-[15px]"
                                        onClick={(e) => { e.preventDefault(); setSettingsOpen(null); }}
                                        href="#"
                                    >
                                        <img className="w-[20px]" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-settings-50.png" alt="close settings" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex mt-6 flex-wrap">
            {products && products.map((product, key) => returnSelectedProds(product, key))}
        </div>
    );
}
