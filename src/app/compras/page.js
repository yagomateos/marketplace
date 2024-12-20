'use client'

import React, { useEffect, useState } from 'react'
import PublicPageContainer from '../../components/containers/publicPageContainer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getOrdersFunc } from '../../lib/actions/orders/getOrders';
import { addReviewsFunc } from '../../lib/actions/reviews/addReviews'

export default function Compras() {

  const { data: session, status } = useSession()
  const [userId, setUserId] = useState(null)
  const router = useRouter()
  const [orders, setOrders] = useState(null)
  const [reviewItem, setReviewItem] = useState(null)
  const [review, setReview] = useState(null)
  const [reviewTitle, setReviewTitle] = useState(null)
  const [reviewSuccess, setReviewSuccess] = useState(null)
  const [reviewError, setReviewError] = useState(null)
  const [starCount, setStarCount] = useState(0); // To track the selected star count


  useEffect(() => {
    if (status === "loading") {
      // Session is still being fetched, no action needed yet
      return;
    }

    if (status === "unauthenticated") {
      // If the user is not logged in, redirect them to the login page or home
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      setUserId(session.user.id)
    }
  }, [session])

  // get order details
  useEffect(() => {
    const getOrderData = async () => {
      try {
        const orders = await getOrdersFunc(userId);
        console.clear()
        console.log(orders)
        if (orders) {
          console.log(orders)
          setOrders(orders)
        }
      } catch (error) {
        console.log(error)
      }
    }

    userId && getOrderData()
  }, [userId])

  const submitReview = async () => {
    if (review && reviewTitle && starCount > 0) {

      console.clear();
      console.log(review, reviewTitle, starCount, userId, reviewItem[0])
      try {
        const reviewAdded = await addReviewsFunc(reviewTitle, review, starCount, userId, reviewItem[0]);
        console.log(reviewAdded)
        if (reviewAdded) {
          setReviewSuccess(`Gracias por sus valiosos comentarios.`);
          setTimeout(() => {
            setReviewItem(null)
          }, 2000);
        } else {
          setReviewError('¡Tu reseña no fue publicada!')
        }
      } catch (error) {
        setReviewError('¡Tu reseña no fue publicada!')
      }
    } else {
      setReviewError('Por favor, añade una reseña')
    }

  }

  // Function to handle star click
  const handleStarClick = (index) => {
    setStarCount(index + 1); // Set star count to the clicked star
  };

  return (
    <PublicPageContainer>
      <div className='relative'>
        <div className='max-w-7xl mr-auto ml-auto'>
          <h2 className='text-2xl lg:my-6 font-semibold p-4'>Compras</h2>
          <div>
            {orders && orders.map((order, key) => {
              const purchaseData = new Date(order.date_time).toLocaleDateString();
              const productIdsArr = order.item_names.split(',')
              const productNamesArr = order.product_names.split(',')
              const productImgsArr = order.product_images.split(',')
              const productQtysArr = order.item_quantities.split(',')
              const productPricesArr = order.product_prices.split(',')
              const productDescArr = order.product_desc.split(',')

              return <div key={key} className='w-full flex p-4 flex-wrap'>
                <div className='w-full lg:w-[75%] border border-[#ccc] p-4'>
                  <div className='py-2 lg:py-4 border-b border[#ccc] mb-4'>
                    <p className='text-sm'>Comprado en {purchaseData}</p>
                  </div>
                  <div>
                    {productIdsArr.map((itm, ky) => {
                      return <div key={ky} className='py-4 mb-4 border-b border-[#ccc]'>
                        <a className='flex'>
                          <div className='w-[20%]'>
                            <a href={`/listado/?pid=${itm}`} ><img src={productImgsArr[ky]} className='max-w-full w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] object-cover' /></a>
                          </div>
                          <div className='w-[80%] pl-3'>
                            <a href={`/listado/?pid=${itm}`} ><h3 className='text-md lg:text-xl font-semibold'>{productNamesArr[ky]}</h3></a>
                            <div className='lg:mt-4'>
                              <a href={`/listado/?pid=${itm}`} className='text-sm py-1 px-3 lg:py-2 lg:px-6 text-white rounded-full  bg-black inline-block mr-4'>Compra esto otra vez</a>
                              <span className='inline-block mr-4 text-xs lg:text-base'><b>Precio</b> : €{productPricesArr[ky]}</span>
                              <span className='text-xs lg:text-base'><b>Cantidad</b> : {productQtysArr[ky]}</span>
                            </div>
                            <div className='my-2'>
                              <a href="#" onClick={(e) => { e.preventDefault(); setReviewItem([itm, productImgsArr[ky], productNamesArr[ky], productDescArr[ky]]) }} className='underline  text-sm lg:text-base'>Añadir una reseña</a>
                            </div>
                          </div>
                        </a>
                      </div>
                    })}
                  </div>
                </div>
                <div className='w-full lg:w-[25%] lg:pl-4 py-2'>
                  <h3 className='text-base lg:text-3xl font-semibold mb-2 lg:mb-4'>{order.status}</h3>
                  <p className='text-sm lg:text-base'><b>Identificación del pedido</b> : {order.order_id}</p>
                  <p className='text-sm lg:text-base'><b>Fecha de envío</b> : {order.shipping_date && new Date(order.shipping_date).toLocaleDateString()}</p>
                </div>

              </div>
            })}
          </div>

        </div>
        {/* reviews popup */}
        {reviewItem &&

          <div className='fixed bg-[rgba(0,0,0,0.5)] w-full h-full flex justify-center items-center top-0'>
            <div className='bg-white w-[600px] p-4'>
              <div className='text-right'>
                <a href='#' onClick={(e) => { (e.preventDefault); setReviewItem(null) }} className='text-3xl text-red-700'>x</a>
              </div>
              <div>
                <h3 className='text-xm mb-4 font-semibold'>Añadir una reseña</h3>
                <div className='flex w-full'>
                  <div className='w-[20%]'>
                    <img className='w-[120px] h-[120px] object-cover' src={reviewItem[1]} />
                  </div>
                  <div className='w-[80%] pl-4'>
                    <h4 className='text-2xl font-semibold'>{reviewItem[2]}</h4>
                    <div dangerouslySetInnerHTML={{ __html: reviewItem[3] }} />
                  </div>
                </div>
                <div className='w-full my-4 text-right'>
                  <input onChange={e => { e.preventDefault(); setReviewTitle(e.target.value) }} type='text' className='p-3 w-full mb-3 h-[40px] border border-[#ccc]' placeholder='Título' />
                  <textarea className='w-full h-[130px] border border-[#ccc] p-3' onChange={(e) => {
                    e.preventDefault();
                    setReview(e.target.value)
                  }} placeholder='Añade tu reseña'>

                  </textarea>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex" }}>
                    {[...Array(5)].map((_, index) => (
                      <li
                        key={index}
                        onClick={() => handleStarClick(index)}
                        style={{
                          cursor: "pointer",
                          fontSize: "24px",
                          color: index < starCount ? "black" : "#CCCCCC", // Fill selected stars with gold
                          marginRight: "5px",
                        }}
                      >
                        ★
                      </li>
                    ))}
                  </ul>
                  <a href='#' onClick={(e) => { e.preventDefault(); submitReview() }} className='inline-block mt-4 py-2 px-4 bg-black text-white rounded-full'>Entregar</a>
                </div>

                { reviewSuccess && <div className='mt-4 text-sm text-green-700'>{reviewSuccess}</div> }
                {reviewError && <div className='mt-4 text-sm text-red-700'>{reviewError}</div>}

              </div>
            </div>
          </div>

        }

      </div>


    </PublicPageContainer>
  )
}
