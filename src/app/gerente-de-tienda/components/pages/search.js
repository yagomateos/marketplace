import React, { useState } from 'react'

export default function Search() {

  const [where, setWhere] = useState('shop-manager')

  return (
    <div>

      <input type='text' placeholder='Buscar...' className='border border-[#ccc] p-3 w-full' />

      <ul className='flex gap-4 border-b border-b[#ccc] mt-14'>
        <li><a className={`py-4 block ${where === 'shop-manager' ? 'border-b-4 border-b-green-800' : ''}`} href='#' onClick={(e)=>{e.preventDefault(); setWhere('shop-manager')}}>Gerente de tienda</a></li>
        <li><a className={`py-4 block ${where === 'marketplace' ? 'border-b-4 border-b-green-800' : ''}`} href='#' onClick={(e)=>{e.preventDefault(); setWhere('marketplace')}}>Mercado Etsy</a></li>
      </ul>

      <div className='search-result'>
        <div className='text-center p-8 max-w-96'>
          <p>Busque entre sus pedidos, listados, conversaciones o ayuda</p>
        </div>
      </div>

    </div>
  )
}
