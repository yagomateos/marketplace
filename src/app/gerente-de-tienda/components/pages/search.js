import React, { useEffect, useState } from 'react'
import { quickSearch } from '../../../../lib/actions/search/quickSearch'

export default function Search() {
  const [where, setWhere] = useState('shop-manager')
  const [searchString, setSearchString] = useState('')
  const [backEndResult, setBackEndResult] = useState([])
  const [frontendResult, setFrontEndResult] = useState(null)

  const panelContent = {
    panel: 'Panel Content',
    listados: 'Listados Content',
    mensajes: 'Mensajes Content',
    pedidos_y_entregas: 'Pedidos y entregas Content',
    ayuda: 'Ayuda Content',
    ajustes: 'Ajustes Content',
    informacion_y_apariencia: 'Información y apariencia Content',
    acerca_de_su_tienda: 'Acerca de su tienda Content',
    opciones: 'Opciones Content',
    configuracion_de_entrega: 'Configuración de entrega Content',
    configuracion_de_politicas: 'Configuración de políticas Content',
  }

  const getStoreResults = async () => {
    try {
      let searchResult = await quickSearch(searchString)
      searchResult && searchResult !== '' ? setFrontEndResult(searchResult) : setFrontEndResult(null)
      console.clear()
      console.log(searchResult)
    } catch (error) {
      setFrontEndResult(null)
      console.log(error.message)
    }
  }

  const performSearch = () => {
    const searchTerm = searchString.toLowerCase()

    if (where === 'shop-manager' && searchTerm) {
      const results = Object.keys(panelContent)
        .filter((key) => key.includes(searchTerm))
        .map((key) => ({ [key]: panelContent[key] }))
        setFrontEndResult(null)
      setBackEndResult(results)
    } else {
      setBackEndResult(null)
      getStoreResults()
    }
  }

  useEffect(() => {
    performSearch()
  }, [searchString, where])

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Buscar..."
        className="border border-[#ccc] p-2 lg:p-3 w-full"
        value={searchString}
      />

      <ul className="flex gap-4 border-b border-b-[#ccc] mt-6 lg:mt-14">
        <li>
          <a
            className={`text-sm lg:text-base text-center lg:text-left py-4 block ${
              where === 'shop-manager' ? 'border-b-4 border-b-green-800' : ''
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setWhere('shop-manager')
            }}
          >
            Gerente de tienda
          </a>
        </li>
        <li>
          <a
            className={`text-sm lg:text-base text-center lg:text-left py-4 block ${
              where === 'marketplace' ? 'border-b-4 border-b-green-800' : ''
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setWhere('marketplace')
            }}
          >
            Mercado Vendalia
          </a>
        </li>
      </ul>

      <div className="search-result max-h-[900px] overflow-y-auto">
        <div className="text-center py-8 max-w-96">
          <p className='text-left font-semibold mb-4'>Busque entre sus pedidos, listados, conversaciones o ayuda</p>
          {backEndResult && backEndResult.length > 0 ? (
            <ul className='text-left'>
              {backEndResult.map((result, index) => (
                <li className='mt-4' key={index}>
                  <a href="#">{Object.values(result)[0]}</a>
                </li>
              ))}
            </ul>
          ) : frontendResult && where=='marketplace' && frontendResult.length > 0 ? (
            <ul className='text-left'>
              {frontendResult.flat().map((item, index) => (
                <li className='mt-4' key={index}>
                  {item.category_name ? (
                    <a href={`/categorias?catid=${item.id}`}>
                      {item.category_name}
                    </a>
                  ) : item.name ? (
                    <a href={`/listado/?id=${item.id}`}>
                      {item.name}
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className='mt-3 text-left'>No se encontraron resultados</p>
          )}
        </div>
      </div>
    </div>
  )
}
