import React, { useEffect, useState } from 'react'
import { getStrByUserId } from '../../../../lib/actions/stores/getStores'
import { getNoticesFunc } from '../../../../lib/actions/backend/panel/notices'
import Listings from './listings'

export default function Dashboard({ userData, setSettingsPage }) {
  const [stores, setStores] = useState(null)
  const [activeListings, setActiveListings] = useState(null)
  const [expiredListings, setExpiredListings] = useState(null)
  const [soldOutListings, setSoldOutListings] = useState(null)
  const [listings, setListings] = useState(null)
  const [notifications, setNotifications] = useState(null)

  // Helper function to get ignored notifications from localStorage
  const getIgnoredNotifications = () => {
    const ignored = localStorage.getItem('ignore_notification')
    return ignored ? JSON.parse(ignored) : {}
  }

  // Function to handle "Ahora no" click
  const handleIgnoreNotification = (id) => {
    const ignored = getIgnoredNotifications()
    ignored[id] = true // Mark this notification as ignored
    localStorage.setItem('ignore_notification', JSON.stringify(ignored))

    // Update the state to remove the ignored notification from the display
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  // Get active listings
  useEffect(() => {
    const getStores = async () => {
      try {
        const Listings = await getStrByUserId(userData[0].id)

        setListings(Listings)
        const str = { count: Listings[0].store_count, store_name: Listings[0].store_name }
        setStores(str)

        const activeListingsObg = []
        const expiredListingsObg = []
        const soldOutListingsObg = []

        Listings &&
          Listings.forEach((listing) => {
            switch (listing.status) {
              case 'active':
                activeListingsObg.push(listing)
                break
              case 'expired':
                expiredListingsObg.push(listing)
                break
              case 'sold_out':
                soldOutListingsObg.push(listing)
                break
              default:
                activeListingsObg.push(listing)
                break
            }
          })

        setActiveListings(activeListingsObg)
        setExpiredListings(expiredListingsObg)
        setSoldOutListings(soldOutListingsObg)
      } catch (error) {
        console.log(error)
        setStores(null)
      }
    }

    userData && getStores()
  }, [userData])

  // Get notices and filter out ignored notifications
  useEffect(() => {
    const getNotificationsFunc = async () => {
      try {
        const notifications = await getNoticesFunc()
        const ignoredNotifications = getIgnoredNotifications()

        // Filter out notifications that are in the ignored list
        const filteredNotifications = notifications.filter(
          (notification) => !ignoredNotifications[notification.id]
        )

        setNotifications(filteredNotifications)
      } catch (error) {
        console.error(error)
      }
    }

    getNotificationsFunc()
  }, [])

  return (
    <>
      {/* desktop dashboard */}
      <div className="hidden lg:block lg:max-w-5xl w-full mr-auto ml-auto">
        {/* header area */}
        <div className="mb-5 flex flex-col lg:flex-row w-full justify-between">
          <div className="flex w-full lg:w-auto items-center">
            <img className="w-14 h-14 object-cover rounded-md mr-4" src={userData && userData[0].identity_url} />
            <div>
              <h2 className="text-lg leading-5 lg:text-3xl">Hola {userData && userData[0].username}</h2>
              <p className="text-sm">{stores && stores.count} anuncio activo</p>
            </div>
          </div>
          <div>
            {userData && stores && (
              <a
                className="underline text-sm mt-3 leading-2"
                href={`https://www.vendalia.es/viveres/${userData[0].id}/${stores && stores.store_name}`}
              >
                {`vendalia.es/viveres/${userData[0].id}/${stores && stores.store_name}`}
              </a>
            )}
          </div>
        </div>

        {notifications &&
          notifications.map((notification, key) => (
            <div
              key={key}
              className={`p-3 lg:p-6 rounded-2xl mt-4 lg:mt-12 flex justify-between w-full flex-col lg:flex-row ${
                notification.background_color && 'bg-' + notification.background_color
              } ${notification.border_color && 'border border-' + notification.border_color}`}
            >
              {notification.image_position === 'left' ? (
                <>
                  <div className="w-full lg:w-[50%] flex items-end justify-end">
                    <img className="w-full max-h-[350px] object-contain" src={notification.image} />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <h2 className="font-semibold text-lg leading-tight lg:text-xl">{notification.notice_name}</h2>
                    <div dangerouslySetInnerHTML={{ __html: notification.text }}></div>
                    {!notification.permanent && (
                      <div className="mt-8 flex gap-2 flex-col lg:flex-row" bis_skin_checked="1">
                        <button
                          onClick={(e) => {e.preventDefault(); handleIgnoreNotification(notification.id)}}
                          className="px-4 lg:px-8 text-center py-3 border-2 border-black rounded-full w-full lg:w-auto text-sm lg:text-base"
                        >
                          Ahora no
                        </button>
                        {notification.action_button_name && notification.action_button_url && (
                          <a
                            href={notification.action_button_url}
                            className="px-4 lg:px-8 text-center py-3 bg-black text-white rounded-full w-full lg:w-auto text-sm lg:text-base"
                          >
                            {notification.action_button_name}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </>
              ) : notification.image_position === 'right' ? (
                <>
                  <div className="w-full lg:w-[65%]">
                    <h2 className="font-semibold text-lg leading-tight lg:text-xl">{notification.notice_name}</h2>
                    <div dangerouslySetInnerHTML={{ __html: notification.text }}></div>
                  </div>
                  <div className="w-full lg:w-[35%] flex items-end justify-end">
                    <img className="w-full max-h-[350px] object-contain" src={notification.image} />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full lg:w-[65%]">
                    <h2 className="font-semibold text-lg leading-tight lg:text-xl">{notification.notice_name}</h2>
                    <div dangerouslySetInnerHTML={{ __html: notification.text }}></div>
                  </div>
                  <div className="w-full lg:w-[35%] flex items-end justify-end">
                    {!notification.permanent && (
                      <div className="mt-8 flex gap-2 flex-col lg:flex-row" bis_skin_checked="1">
                        <button
                          onClick={(e) => {e.preventDefault(); handleIgnoreNotification(notification.id)}}
                          className="px-4 lg:px-8 text-center py-3 border-2 border-black rounded-full w-full lg:w-auto text-sm lg:text-base"
                        >
                          Ahora no
                        </button>
                        {notification.action_button_name && notification.action_button_url && (
                          <a
                            href={notification.action_button_url}
                            className="px-4 lg:px-8 text-center py-3 bg-black text-white rounded-full w-full lg:w-auto text-sm lg:text-base"
                          >
                            {notification.action_button_name}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}

        {/* shop advisor */}
        <div className="mt-12">
          <h2 className="font-semibold text-lg leading-tight lg:text-xl">Asesor de tienda</h2>
          <div className="flex flex-col lg:flex-row justify-between items-center w-full">
            <div className="w-full lg:w-[70%]">
              <h3 className="lf:text-lg leading-tight text-base font-semibold mt-4 mb-3 lg:mb-auto">
                Pon a punto vendalia hoy
              </h3>
              <p className="text-sm lg:text-base">
                Aprenda de los expertos de Vendalia y de la comunidad de vendedores en este evento gratuito de un día.
                Además, por primera vez, revelaremos las finales de diseño de Vendalia.
              </p>
            </div>
            <div className="w-full mt-4 lg:mt-auto lg:w-[30%] text-center lg:text-right">
              <a href="#" className="px-5 py-2 border-2 border-black rounded-full">
                Explorar evento
              </a>
            </div>
          </div>
        </div>

        {/* shop checklist */}
        <div className="mt-12">
          <h2 className="font-semibold text-lg leading-tight lg:text-xl">Lista de verificación de tu tienda</h2>
          <div className="mt-6">
            <table className="w-full">
              <tbody>
                <tr className="bg-[#f8f8f8]">
                  <td className="p-4"><b>Listados</b></td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td className="p-4">Listados activos</td>
                  <td>{activeListings && activeListings.length}</td>
                </tr>
                <tr className="bg-[#f8f8f8]">
                  <td className="p-4">Caducado</td>
                  <td>{expiredListings && expiredListings.length}</td>
                </tr>
                <tr>
                  <td className="p-4">Agotado</td>
                  <td>{soldOutListings && soldOutListings.length}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* mobile dashboard */}
      <div className="w-full py-3 lg:hidden">
        {/* store information */}
        <div className="flex w-full justify-between">
          <div className="w-[25%]">
            <img className="w-20 h-20 rounded-full" src={userData && userData[0].identity_url} />
          </div>
          <div className="w-[75%] px-4">
            <h3 className="text-lg font-semibold">{stores && stores.store_name}</h3>
            <p>
              {userData && userData[0].address_number}, {userData && userData[0].street}, {userData && userData[0].city}
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <a
            className="bg-black rounded-full text-white p-2 mt-3 block text-center w-[46%]"
            href={`https://www.vendalia.es/viveres/${userData && userData[0].id}/${stores && stores.store_name}`}
          >
            Visita la tienda
          </a>
          <a
            onClick={(e) => {
              e.preventDefault()
              setSettingsPage(2)
            }}
            className="border border-black rounded-full text-black p-2 mt-3 block text-center w-[46%]"
          >
            Listados
          </a>
        </div>

        <div className="p-3 mt-3">
          <h3 className="text-lg font-semibold mb-2">Sus listados</h3>
          <div className="flex gap-4 justify-between flex-wrap">
            {listings &&
              listings.map((listing, key) => (
                <div key={key} className="w-[46%]">
                  <a href={`http://localhost:3000/listado?pid=${listing.id}`}>
                    <img src={listing.main_image_url} />
                    <p className="text-sm">{listing?.name?.substring(0, 60)}...</p>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
