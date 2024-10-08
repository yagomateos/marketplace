import { useEffect, useState } from "react";
import { categorySearchFunc } from "../../../../../lib/actions/search/categorySearch";

export default function QuickEditView({ products, settingsOpen, setSettingsOpen }) {

    const [editTags, setEditTags] = useState(false)
    const [productSuccess, setProductSuccess] = useState(null)

console.log(productSuccess)

    return (
        <div className="flex mt-6 flex-col gap-3">
            {products && products.map((product, key) => {
                return <div key={key} className="w-full lg:p-4 ">
                    <div className="border border-[#ccc] relative flex flex-col lg:flex-row p-3">
                        <div className="lg:w-[10%]">
                            <img className="w-full" src={product.main_image_url && product.main_image_url} />
                        </div>
                        <div className="w-full lg:w-[90%] lg:p-3">
                            <div>
                                <label>Nombre</label>
                                <input className="w-full border border-[#ccc] p-3" type="text" value={product.name && product.name} />
                            </div>
                            <div className="flex flex-col lg:flex-row mt-3 w-full gap-3">
                                <div className="">
                                    <label>Precio</label>
                                    <input className="w-full border border-[#ccc] p-3" type="number" value={product.regular_price && product.regular_price} />
                                </div>
                                <div className="">
                                    <label>Cantidad</label>
                                    <input className="w-full border border-[#ccc] p-3" type="number" value={product.quantity ? product.quantity : 0} />
                                </div>
                                <div className="">
                                    <label>Categoría</label>
                                    <select className="w-full border border-[#ccc] p-3">
                                        <option>Moda y Accesorios</option>
                                        <option>Ropa</option>
                                        <option>Camisetas y Tops</option>
                                        <option>Sudaderas y Hoodies</option>
                                        <option>Vestidos</option>
                                        <option>Pantalones y Leggings</option>
                                        <option>Calzado</option>
                                        <option>Zapatillas</option>
                                        <option>Botas</option>
                                        <option>Sandalias</option>
                                        <option>Accesorios</option>
                                        <option>Bolsos y Carteras</option>
                                        <option>Bufandas y Chales</option>
                                        <option>Sombreros y Gorras</option>
                                        <option>Joyería</option>
                                        <option>Casa y Decoración</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label>Etiquetas <a href="#" onClick={(e) => { e.preventDefault(); editTags === key ? setEditTags(false) : setEditTags(key) }}>Editar</a></label>
                                {
                                    editTags === key ?
                                        <input className="border border-[#ccc] p-2 block w-full" value={product.tags && product.tags} /> :
                                        <p>{product.tags && product.tags}</p>
                                }

                            </div>

                            <a href="#" onClick={(e) => { e.preventDefault(); setProductSuccess(key) }} className="py-3 px-6 bg-black rounded-md text-white mt-4 inline-block">Ahorrar</a>

                            {productSuccess == key ?
                                <div className="text-green-700 text-sm mt-3">
                                    Producto guardado exitosamente
                                </div> : <></>
                            }

                        </div>

                    </div>
                </div>
            })}
        </div>
    )
}
