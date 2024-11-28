import Search from './pages/search'
import Dashboard from './pages/dashboard'
import Listings from './pages/listings'
import Messages from './pages/messages'
import Orders from './pages/orders'
import Settings from './pages/settings'
import { useState } from 'react'

export default function PageContainer({ setStep, step, userData, searchOpen, setSearchOpen, storeOpen, setStoreOpen }) {

  const [settingPage, setSettingsPage] = useState(1)

  const returnComponent = () => {
    switch (step) {
      case 1:
        return <Dashboard userData={userData} setSettingsPage={setSettingsPage} />;
      case 2:
        return <Listings setSettingsPage={setSettingsPage} setStep={setStep} userData={userData} />;
      case 3:
        return <Messages userData={userData} />
      case 4:
        return <Orders userData={userData}/>
      case 5:
        return <Settings settingPage={settingPage} />
      default:
        return <>default component</>;
    }
  }

  return (
    <div className='p-2 lg:p-6 flex items-start w-full justify-center relative'>
      {searchOpen &&
        <div className='absolute bg-[#00000061] w-full h-full left-0 top-0 z-10'>
          <div className='bg-white lg:w-[35%] p-4 lg:p-8 pt-20 lg:pt-8 h-full relative'>
            <Search />
            <a onClick={(e) => { e.preventDefault(); setSearchOpen(false) }} className='absolute right-2 top-2 lg:-right-6 text-black lg:text-white lg:top-0 text-3xl cursor-pointer'>x</a>
          </div>

        </div>
      }
      {storeOpen &&
        <div className='absolute bg-white w-[20%] left-0 top-0 z-10 translate-x-[-100%]'>
          <div className='bg-white lg:w-full p-4 lg:p-8 h-full relative'>
            <div>
              <h3 className='text-lgf mb-6 font-semibold pl-4'>Ajustes</h3>
              <ul>
                <li><a className='py-4 hover:bg-[#f2f2f2] block px-3 cursor-pointer' onClick={(e) => { e.preventDefault(); setStoreOpen(false); setSettingsPage(1) }}>Información y apariencia</a></li>
                <li><a className='py-4 hover:bg-[#f2f2f2] block px-3 cursor-pointer' onClick={(e) => { e.preventDefault(); setStoreOpen(false); setSettingsPage(2) }}>Acerca de su tienda</a></li>
                <li><a className='py-4 hover:bg-[#f2f2f2] block px-3 cursor-pointer' onClick={(e) => { e.preventDefault(); setStoreOpen(false); setSettingsPage(3) }}>Opciones</a></li>
                <li><a className='py-4 hover:bg-[#f2f2f2] block px-3 cursor-pointer' onClick={(e) => { e.preventDefault(); setStoreOpen(false); setSettingsPage(4) }}>Configuración de entrega</a></li>
                <li><a className='py-4 hover:bg-[#f2f2f2] block px-3 cursor-pointer' onClick={(e) => { e.preventDefault(); setStoreOpen(false); setSettingsPage(5) }}>Configuración de políticas</a></li>
              </ul>
            </div>

            <a onClick={(e) => { e.preventDefault(); setStoreOpen(false) }} className='absolute right-2 top-2 lg:-right-6 text-black lg:text-white lg:top-0 text-3xl cursor-pointer'>x</a>
          </div>

        </div>
      }
      {returnComponent()}
    </div>
  );
}
