import { useEffect, useState } from "react"
import { getProductsByUserID } from "../../../../lib/actions/products/getProducts";
import DefaultView from './listing-views/DefaultView'
import QuickEditView from './listing-views/QuickEditView'

export default function Listings(userData) {

  const [products, setProducts] = useState(null)
  const [settingsOpen, setSettingsOpen] = useState(null)
  const [view, setView] = useState('default')
  const [currentStatus , setCurrentStatus] = useState(null)
  const [selectedProduct , setSelectedProduct] = useState(null)


  useEffect(() => {
    const userId = userData?.userData?.[0]?.id || null;
 
    const getUserProducts = async () => {
      try {
        const products = await getProductsByUserID(userId)
        console.log(products)
        setProducts(products)
      } catch (error) {
        console.log(error)
      }
    }

    userId && getUserProducts();

  }, [userData])


  console.log(settingsOpen)

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


          {/* default view */}
          {
            view == 'default' ? <>
              <div className="flex gap-3">
                <a href="#" className="p-3 bg-[#fffffa] border border-[#ccc]">Renovar</a>
                <a href="#" className="p-3 bg-[#fffffa] border border-[#ccc]">Desactivar</a>
                <a href="#" className="p-3 bg-[#fffffa] border border-[#ccc]">Borrar</a>
              </div>
              <DefaultView products={products} settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} currentStatus={currentStatus} />
            </>
              : view == 'quickEdit' ? <QuickEditView products={products} settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} currentStatus={currentStatus} />
                : <DefaultView products={products} settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} currentStatus={currentStatus} />
          }



        </div>

        <div className="w-25%">
          <div className="mb-6">
            <a href="#" className="p-3 bg-[#fffffa] border border-[#ccc] w-full block" onClick={(e) => { e.preventDefault(); view != 'quickEdit' ? setView('quickEdit') : setView('default') }}>{view != 'quickEdit' ? `Edición rápida` : `Salir de la vista rápida`}</a>
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
            <label className="block text-sm mb-3"><input type="radio" onChange={(e)=>setCurrentStatus(null)} checked={currentStatus===null} /> Todo</label>
            <label className="block text-sm mb-3"><input type="radio" onChange={(e)=>setCurrentStatus('active')} checked={currentStatus==='active'} /> Activo</label>
            <label className="block text-sm mb-3"><input type="radio" onChange={(e)=>setCurrentStatus('draft')}  checked={currentStatus==='draft'} /> Borrador</label>
            <label className="block text-sm mb-3"><input type="radio" onChange={(e)=>setCurrentStatus('expired')}  checked={currentStatus==='expired'} /> Caducado</label>
            <label className="block text-sm mb-3"><input type="radio" onChange={(e)=>setCurrentStatus('inactive')}  checked={currentStatus==='inactive'} /> Agotado</label>
          </div>
        </div>
      </div>

    </div>
  )
}
