'use client'
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { matchEmailToken } from '../../lib/utils/tokenManager'
import { updateUserEmailVerification } from "../../lib/actions/users/updateUser"
import PublicPageContainer from "../../components/containers/publicPageContainer"
import { useSession } from "next-auth/react"
import FeaturedCategories from "../../components/public/sections/featured-categories"

function ValidateEmailfunc() {

  const searchParams = useSearchParams()
  const [validationSuccess, setValidationSuccess] = useState(null)
  const [validationError, setValidationError] = useState(null)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "loading") {
      // Session is still being fetched, no action needed yet
      return;
    }

    if (status === "unauthenticated") {
      // If the user is not logged in, redirect them to the login page or home
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  }, [status]);

  useEffect(() => {
    const checkToken = async (email) => {
      try {
        const tokenMatched = await matchEmailToken(email, token)
        if (tokenMatched) {
          // mark email confirmed
          try {
            const userUpdated = await updateUserEmailVerification(email)
            console.log(userUpdated)
            if (userUpdated) {
              setValidationSuccess('¡Correo electrónico validado exitosamente!')
            } else {
              setValidationError('¡La validación falló! ¡Inténtelo nuevamente!')
            }
          } catch (error) {
            console.log(error)
            setValidationError('¡La validación falló! ¡Inténtelo nuevamente!')
          }
        } else {
          setValidationError('¡La validación falló! ¡Inténtelo nuevamente!')
        }
      } catch (error) {
        console.log(error)
        setValidationError('¡La validación falló! ¡Inténtelo nuevamente!')
      }

    }

    const email = searchParams.get('email')
    const token = searchParams.get('token')
    checkToken(email, token)

  }, [searchParams])

  console.log(userLoggedIn)

  return (

    <PublicPageContainer>
      <div className="max-w-7xl mr-auto ml-auto py-12">
        <div>
          {validationSuccess ?
            <div className="mb-6 max-w-3xl mr-auto ml-auto p-4 rounded-sm text-sm text-green-700 text-center flex justify-center items-center shadow shadow-md shadow[#ccc]">
              {validationSuccess}
            </div> :
            <div className="mb-6 max-w-3xl mr-auto ml-auto p-4 rounded-sm text-sm text-red-700 text-center flex justify-center items-center shadow shadow-md shadow[#ccc]">
              {validationError}
            </div>}
        </div>

        {/* if user logged in */}
        {userLoggedIn &&
          <div className="p-10 bg-green-300 ">
            <h2 className="text-4xl text-center">Bienvenido a Vendalia {session.user.name}!</h2>
          </div>}

        {/* show some categories */}
        <FeaturedCategories />
      </div>
    </PublicPageContainer>
  )
}


export default function ValidateEmail() {
  return (<Suspense fallback={<div className="w-full h-full fixed text-center flex items-center justify-center text-lg text-green-700">Loading...</div>}>
    <ValidateEmailfunc/>
  </Suspense>)
}