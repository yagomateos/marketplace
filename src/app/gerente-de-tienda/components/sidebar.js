import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Sidebar({ userData, stores, sidebarOpen, setSidebarOpen, setStep, setSearchOpen, storeOpen, setStoreOpen }) {

    const [showdropDown, setShowDropdown] = useState(false)
    const [userMenuOpen, setUserMenuOpen] = useState(false)
    const [allStrOpen , setAllStrOpen] = useState(false)

    useEffect(() => {
        console.clear()
        console.log(stores)
    }, [stores])

    const signOutUser = async (e) => {
        e.preventDefault();
        // signOut({ redirect: false });
        await signOut({ callbackUrl: '/' });
    }

    const returnStoreEditor = (stores)=>{
        return <div>
        <a href="#" className="flex w-[100%] items-center justify-between gap-4" onClick={e=>{e.preventDefault(); setAllStrOpen(!allStrOpen)}}>
            <img className="w-16" src={stores[0].logo} alt={`${stores[0].store_name} logo`} />
            <p>{stores[0].store_name}</p>
            <span className="p-2 border border-[#ccc]">
                <img className={`${!allStrOpen&& 'rotate-180'} w-[15px]`} src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-arrow-down-30.png"/>
            </span>
        </a>

        {allStrOpen&&
        <div className="max-h-[300px] overflow-y-auto p-5 my-5 absolute bottom-[120px] left-0 w-[96%] bg-white border border-slate-200">
        <ul>
                
                {stores.map((store,key) =>{

                    return <li className="py-4 border-b border-gray-200" key={key} ><a href={`tienda_de_edicio/${store.id}`} className="flex w-[100%] items-center justify-between gap-4">
                        <img className="w-16" src={store.logo} alt={`${store.store_name} logo`} />
                        <p>{store.store_name}</p>
                        <span className="p-2 border border-[#ccc]">
                            <svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                                <polygon points="4.583 17.193 4 19.967 6.704 19.315 17.916 8.182 15.794 6.061 4.583 17.193"></polygon>
                                <path d="M19.683,5l-0.707-.707a1,1,0,0,0-1.414,0L16.855,5l2.121,2.121,0.707-.707A1,1,0,0,0,19.683,5Z"></path>
                            </svg>
                        </span>
                    </a></li>
                })}
        </ul>
        </div>
        }
        
        
        </div>
    }


    return (
        <div className={`${sidebarOpen ? 'w-full fixed' : 'hidden'} lg:block  top-0 lg:relative lg:w-[20%] border-r border-[#ccc] py-4 min-h-screen shadow-sm shadow-[#ccc] bg-white z-10 relative overflow-hidden`}>

            <div className="relative w-full h-full flex flex-col">
                <div className="w-full">
                    <div className="hidden lg:flex px-4 flex-col lg:flex-row text-center items-center relative">
                        <a className="flex cursor-pointer" onClick={e => { setShowDropdown(!showdropDown) }}><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/shop-icon.svg" /> <h3 className="ml-2 font-semibold">Gerente de tienda</h3> <img className="rotate-90 w-4 ml-4 block" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/caret-right.svg" /></a>
                        {showdropDown && <div className="absolute w-max h-max p-4 bg-white top-[115%] border border-[#ccc]">
                            <ul className="w-full text-left">
                                <li className="py-3 border-b border-[#f6f6f6]"><a href="/gerente-de-tienda" className="flex"><img className="w-5 block mr-3" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/shop-icon.svg" /> Gerente de tienda</a></li>
                                <li className="py-3"><a href="/" className="flex"><img class="w-5 block mr-3" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/gift.svg" /> Mercado de Vendalia</a></li>
                            </ul>
                        </div>}
                    </div>

                    <div className="lg:hidden shadow-sm p-3">
                        <a onClick={e => setSidebarOpen(false)}><img className="rotate-180 w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/right-arrow.svg" /></a>
                    </div>
                    <ul className="mt-6">
                        <li className="hidden lg:block">
                            <a onClick={(e) => { e.preventDefault(); setSearchOpen(true) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/search.svg" /> &nbsp;&nbsp;Buscar</a>
                        </li>
                        <li><a onClick={(e) => { e.preventDefault(); setSearchOpen(false); setSidebarOpen(false); setStep(1) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-home-50.png" /> &nbsp;&nbsp;Panel</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); setSearchOpen(false); setSidebarOpen(false); setStep(2) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-objects-24.png" /> &nbsp;&nbsp;Listados</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); setSearchOpen(false); setSidebarOpen(false); setStep(3) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-messages-50.png" /> &nbsp;&nbsp;Mensajes</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); setSearchOpen(false); setSidebarOpen(false); setStep(4) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-list-64.png" /> &nbsp;&nbsp;Pedidos y entregas</a></li>
                        <li><a target="_blank" href="/Ayuda" className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-help-50.png" /> &nbsp;&nbsp; Ayuda</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); setSidebarOpen(false); setStoreOpen(!storeOpen); setStep(5) }} className="flex p-4 hover:bg-[#f2f2f2] cursor-pointer"><img className="w-6" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-gear-50.png" /> &nbsp;&nbsp;Ajustes</a></li>
                        <li className="lg:hidden p-4">
                        {stores && 
                    
                    returnStoreEditor(stores)
                    }
                        </li>
                    </ul>

                    <div className="p-4 mt-2 relative lg:hidden">
                        {userData && (
                            <div className="flex max-w-[100%] items-center gap-4 ">
                                <img className="w-10 h-10 rounded-full" src={userData[0]?.identity_url || ''} alt="User Avatar" />
                                <p>{userData[0]?.username || 'Nombre de usuario'}</p>
                                {userMenuOpen &&
                                    <div className="w-[90%] border border-[#ccc] bg-white absolute bottom-[130%] py-5">
                                        <ul className="w-full margin-0">
                                            <li><a className="block p-3 hover:bg-[#f6f6f6]" href="/configuracion_de_la_cuenta">Tu perfil</a></li>
                                            <li><a className="block p-3 hover:bg-[#f6f6f6]" href="#" onClick={e => signOutUser(e)}>Desconectar</a></li>
                                        </ul>
                                    </div>
                                }
                                <img onClick={e => { e.preventDefault(); setUserMenuOpen(!userMenuOpen) }} class="-rotate-90 w-4 ml-4 block cursor-pointer" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/caret-right.svg" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden lg:block fixed bottom-0 w-full p-4 max-w-[17vw]">
                    <h3 className="font-semibold mb-5">Canales de venta</h3>
                    {stores && 
                    
                    returnStoreEditor(stores)
                    }

                    <hr className="mt-4" />

                    {/* account information */}
                    <div className="mt-2 relative">
                        {userData && (
                            <div className="flex max-w-[100%] items-center gap-4 ">
                                <img className="w-10 h-10 rounded-full" src={userData[0]?.identity_url || ''} alt="User Avatar" />
                                <p>{userData[0]?.username || 'Nombre de usuario'}</p>
                                {userMenuOpen &&
                                    <div className="w-full border border-[#ccc] bg-white absolute bottom-[130%] py-5">
                                        <ul className="w-full margin-0">
                                            <li><a className="block p-3 hover:bg-[#f6f6f6]" href="/configuracion_de_la_cuenta">Tu perfil</a></li>
                                            <li><a className="block p-3 hover:bg-[#f6f6f6]" href="#" onClick={e => signOutUser(e)}>Desconectar</a></li>
                                        </ul>
                                    </div>
                                }
                                <img onClick={e => { e.preventDefault(); setUserMenuOpen(!userMenuOpen) }} class="-rotate-90 w-4 ml-4 block cursor-pointer" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/caret-right.svg" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
