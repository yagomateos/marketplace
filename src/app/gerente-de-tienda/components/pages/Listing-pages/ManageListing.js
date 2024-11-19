import { useEffect, useState } from 'react'
import DefaultView from '../listing-views/DefaultView'
import QuickEditView from '../listing-views/QuickEditView'
import ListView from '../listing-views/ListView'
import { getProductsByUserID } from '../../../../../lib/actions/products/getProducts'
import { deactivateProductFunc, deleteProductFunc } from '../../../../../lib/actions/products/updateProduct'

export default function ManageListing({ setSelectedproductToEdit, setSettingsPage, setStep, userData, setCreateListing, setEditListing, setCreatePopup }) {

    const [products, setProducts] = useState(null)
    const [settingsOpen, setSettingsOpen] = useState(null)
    const [view, setView] = useState('default')
    const [currentStatus, setCurrentStatus] = useState(null)
    const [selectAll, setSelectAll] = useState(false)
    const [selectedProd, setSelectedProd] = useState(null)
    const [selectedStars, setSelectedStars] = useState(null)
    const [actionSuccess, setActionSuccess] = useState(null)
    const [actionError, setActionError] = useState(null)

    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };
    // const [selectedProduct, setSelectedProduct] = useState(null)

    console.clear();
    console.log(selectedProd)

    const deactivateProduct = async (product_id) => {
        if (confirm('Estas seguro')) {
            try {
                const deactivated = await deactivateProductFunc(product_id)
                if (deactivated) {
                    setActionSuccess('Producto desactivado exitosamente')
                } else {
                    setActionError('La desactivación del producto falló')
                }
                setSettingsOpen(false)
                console.log(deactivated)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const getUserProducts = async () => {
        const userId = userData?.[0]?.id || null;
        
        try {
            const products = await getProductsByUserID(userId)
            // console.log(products)
            setProducts(products)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (product_id) => {
        if (confirm('Estas seguro')) {
            try {
                const deactivated = await deleteProductFunc(product_id)
                if (deactivated) {
                    setActionSuccess('Producto eliminado exitosamente')
                } else {
                    setActionError('La eliminación del producto falló')
                }
                setSettingsOpen(false)
                console.log(deactivated)
                getUserProducts()
            } catch (error) {
                console.log(error)
            }
        }
    }

    const copyProductPublicUrl = (product_id) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(`http://vendalia.es/listado?pid=${product_id}`).then(function () {
                setActionSuccess('La URL del producto se copió correctamente')
                setSettingsOpen(false)
            }).catch(function (err) {
                console.error('Failed to copy URL: ', err);
            });
        }
    }

    useEffect(() => {
        console.log('comes here')
        const userId = userData?.[0]?.id || null;
        // console.log(userId)

        userId && getUserProducts();

    }, [userData])

    const selectAllProds = () => {

        if (!selectAll) {
            const selectedProds = []
            products && products.forEach((prod, key) => {
                selectedProds.push(prod.id)
            });
            // console.log(selectedProds)
            setSelectedProd(selectedProds)
        } else {
            setSelectedProd(null)
        }
        setSelectAll(!selectAll)

    }


    return (
        <div className="w-full">
            {/* header */}
            <div className="flex items-center justify-between border-b border-b-[#ccc] py-4">
                <h2 className="text-xl font-semibold">Listado</h2>
                <div className='pt-4 lg:pt-0'>
                    <a onClick={e => { e.preventDefault(); setCreateListing(true); setCreatePopup(true) }} className="py-3 px-4 bg-black text-white cursor-pointer">Añadir un listado</a>
                </div>
            </div>

            {/* listings body */}
            <div className="mt-6 flex justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-[75%]">

                    {/* action success or error */}
                    {actionSuccess && <div className='w-[80%] p-4 shadow-md bg-white text-green-700 text-sm mb-4'>{actionSuccess}</div>}
                    {actionError && <div className='w-[80%]  p-4 shadow-md bg-white text-red-700 text-sm mb-4'>{actionError}</div>}

                    {/* default view */}

                    {view === 'default' || view === 'list' ? <><div className="hidden lg:flex gap-3 px-2 lg:px-5 flex-col lg:flex-row w-full">
                        <span className="p-2 bg-[#fffffa] border border-[#ccc] w-full lg:w-auto flex">
                            <input type='checkbox' checked={selectAll} onChange={() => { selectAllProds() }} /> &nbsp;
                            <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-arrow-down-30.png" className='w-4'/>
                        </span>
                        <div className='flex'>
                            <a href="#" className="p-2 bg-[#fffffa] border border-[#ccc] w-full lg:w-auto">Renovar</a>
                            <a href="#" className="p-2 bg-[#fffffa] border border-[#ccc] w-full lg:w-auto">Desactivar</a>
                            <a href="#" className="p-2 bg-[#fffffa] border border-[#ccc] w-full lg:w-auto">Borrar</a>
                        </div>

                    </div></> : <></>}
                    {
                        view == 'default' ? <>
                            <DefaultView deleteProduct={deleteProduct} copyProductPublicUrl={copyProductPublicUrl} deactivateProduct={deactivateProduct} setSelectedproductToEdit={setSelectedproductToEdit} setEditListing={setEditListing} selectedStars={selectedStars} setSelectedStars={setSelectedStars} setSelectAll={setSelectAll} selectedProd={selectedProd} selectAll={selectAll} setSelectedProd={setSelectedProd} products={products} settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} currentStatus={currentStatus} />
                        </>
                            : view == 'quickEdit' ? <QuickEditView products={products} settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} currentStatus={currentStatus} />
                                : <ListView deleteProduct={deleteProduct} copyProductPublicUrl={copyProductPublicUrl} deactivateProduct={deactivateProduct} setSelectedproductToEdit={setSelectedproductToEdit} setEditListing={setEditListing} selectedStars={selectedStars} setSelectedStars={setSelectedStars} selectedProd={selectedProd} selectAll={selectAll} setSelectedProd={setSelectedProd} products={products} settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} />
                    }



                </div>

                <div className="hidden lg:block lg:w-[25%]">
                    <div className="mb-6">
                        <a href="#" className="p-3 bg-[#fffffa] border border-[#ccc] w-full block" onClick={(e) => { e.preventDefault(); view != 'quickEdit' ? setView('quickEdit') : setView('default') }}>{view != 'quickEdit' ? `Edición rápida` : `Salir de la vista rápida`}</a>
                    </div>
                    <div className='mb-6'>
                        <div className='flex justify-between'>
                            <div className="flex items-center space-x-4">
                                <label htmlFor="status-toggle" className="text-lg font-medium text-gray-900">
                                    Status
                                </label>
                                <div className="relative inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        id="status-toggle"
                                        className="sr-only peer"
                                        checked={isActive}
                                    />
                                    <div onClick={handleToggle}
                                        className={`w-11 h-6 rounded-full transition-colors duration-200 ${isActive ? "bg-green-700" : "bg-gray-200"
                                            }`}
                                    ></div>
                                    <div
                                        className={`absolute left-1 top-1 w-4 h-4 bg-white border border-gray-300 rounded-full transition-transform duration-200 ${isActive ? "translate-x-5" : ""
                                            }`}
                                    ></div>
                                </div>
                            </div>
                            <div className='flex items-end'>
                                <a className='p-3 border border-[#ccc] cursor-pointer' onClick={(e) => { e.preventDefault(); setView('default') }}><img className='w-5' src='https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-windows-30.png' /></a>
                                <a className='p-3 border border-[#ccc] cursor-pointer' onClick={(e) => { e.preventDefault(); setView('list') }}><img className='w-5' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-menu-26.png" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-4">Clasificar</h3>
                        <select className="p-2  border border-[#ccc] w-full">
                            <option>Caducidad: última primero</option>
                            <option>Caducidad: último primero</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-4">Estado del listado</h3>
                        <label className="block text-sm mb-3"><input type="radio" onChange={(e) => setCurrentStatus(null)} checked={currentStatus === null} /> Todo</label>
                        <label className="block text-sm mb-3"><input type="radio" onChange={(e) => setCurrentStatus('active')} checked={currentStatus === 'active'} /> Activo</label>
                        <label className="block text-sm mb-3"><input type="radio" onChange={(e) => setCurrentStatus('draft')} checked={currentStatus === 'draft'} /> Borrador</label>
                        <label className="block text-sm mb-3"><input type="radio" onChange={(e) => setCurrentStatus('expired')} checked={currentStatus === 'expired'} /> Caducado</label>
                        <label className="block text-sm mb-3"><input type="radio" onChange={(e) => setCurrentStatus('inactive')} checked={currentStatus === 'inactive'} /> Agotado</label>
                    </div>

                    <div className='mb-6'>
                        <h3 className="text-lg font-semibold mb-4">Perfil de entrega</h3>
                        <a onClick={(e) => { setSettingsPage(4); setStep(5); }} className='underline mt-2 cursor-pointer'>Comience a utilizar el perfil de entrega</a>
                    </div>

                    <div className='mb-6'>
                        <h3 className="text-lg font-semibold mb-4">Políticas de devolución y cambio</h3>
                        <a onClick={(e) => { setSettingsPage(5); setStep(5); }} className='underline mt-2 cursor-pointer'>Administrar</a>
                    </div>

                </div>
            </div>

        </div>
    )
}
