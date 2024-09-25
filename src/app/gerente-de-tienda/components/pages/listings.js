import { useEffect, useState } from "react"
import { getProductsByUserID } from "../../../../lib/actions/products/getProducts";

export default function Listings(userData) {

  const [products, setProducts] = useState(null)

  useEffect(() => {


    const userId = userData?.userData?.[0]?.id || null;


    console.log(userId)

    const getUserProducts = async () => {
      try {
        const products = await getProductsByUserID(userId)
        setProducts(products)
      } catch (error) {
        console.log(error)
      }
    }

    userId && getUserProducts();

  }, [userData])


  console.log(products)

  return (
    <div className="w-full">
      {/* header */}
      <div className="flex justify-between border-b border-b-[#ccc] py-4">
        <h2 className="text-xl font-semibold">Listado</h2>
        <div>
          <a className="py-3 px-4 bg-black text-white">Añadir un listado</a>
        </div>
      </div>

      {/* listings body */}
      <div className="mt-6 flex justify-between">
        <div className="w-75%">
          {/* quick actons */}
          <div className="flex gap-3">
            <a href="#" className="p-3 bg-[#fffffa] border border-[#ccc]">Renovar</a>
            <a href="#" className="p-3 bg-[#fffffa] border border-[#ccc]">Desactivar</a>
            <a href="#" className="p-3 bg-[#fffffa] border border-[#ccc]">Borrar</a>
          </div>

          {/* current listings */}

          <div className="flex mt-6">
            {products && products.map(product => {
              return <div className="lg:w-[25%] p-4 ">
                <div className="border border-[#ccc]">
                  <div>
                    <img className="w-full" src={product.main_image_url && product.main_image_url} />
                  </div>
                  <div className="p-4">
                    <h3>{product.name && product.name}</h3>
                    <p>{product.quantity ? product.quantity : 0} En la tienda</p>
                    <p>{product.regular_price && product.regular_price}</p>
                  </div>

                  <div className="border-t border-[#ccc] mt-6 p-4 ">
                    <div className="flex items-center justify-between">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>



        </div>

        <div className="w-25%">
          <div className="mb-6">
            <a href="#" className="p-3 bg-[#fffffa] border border-[#ccc] w-full block">Edición rápida</a>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Clasificar</h3>
            <select className="p-2  border border-[#ccc]">
              <option>Caducidad: última primero</option>
              <option>Caducidad: último primero</option>
            </select>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Estado del listado</h3>
            <label className="block text-sm mb-3"><input type="radio" checked /> Activo</label>
            <label className="block text-sm mb-3"><input type="radio" /> Borrador</label>
            <label className="block text-sm mb-3"><input type="radio" /> Caducado</label>
            <label className="block text-sm mb-3"><input type="radio" /> Agotado</label>
          </div>
        </div>
      </div>

    </div>
  )
}
