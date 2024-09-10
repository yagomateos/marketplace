'use client'
import { useEffect, useState } from "react";
import { Suspense } from "react";
import PublicPageContainer from "../../components/containers/publicPageContainer";
import { useSearchParams } from 'next/navigation';
import sendEmail from '../../lib/utils/sendMail';
import { getUserInfoByEmail } from '../../lib/actions/users/getUserInfo'
import { useSession } from "next-auth/react";

function ConfirmEmailFunc() {

  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const [email , setEmail] = useState(null);
  const [validatedAlready, setValidatedAlready] = useState(false)
  const [emailSent, setEmailSent] = useState(false);
  const [resendSuccess , setResentSuccess] = useState(false)


  const sendValidationEmail = async (what=null)=>{
    const emailSent = await sendEmail(email, 'confirmEmail');
    emailSent&&setEmailSent(true); // Mark the email as sent

    if(emailSent&&what=='resend'){setResentSuccess('¡Correo electrónico reenviado!')}
  }

  useEffect(() => {
    session&&session.user&&session.user.email&&setEmail(session.user.email)
  }, [session])
  

  useEffect(() => {

    const checkUserValidationStatus = async () => {


      try {
        let userInfo = await getUserInfoByEmail(email);

        if (userInfo && userInfo[0] && userInfo[0].confirmed === 0) {
          sendValidationEmail();
        } else {
          setValidatedAlready(true);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };


    if (email && !emailSent) { // Only run if email exists and hasn't been sent yet
      checkUserValidationStatus();
    }
  }, [email]); 

  return (
    <PublicPageContainer>
      {!validatedAlready ? (
        <div className="lg:max-w-4xl mr-auto ml-auto p-6 lg:border lg:border-[#ccc] my-12 flex flex-col items-center">
          <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/paper_16259254.png" alt="Confirmation" />
          <h1 className="text-center text-3xl font-semibold">Confirmar correo electrónico</h1>
          <p className="text-center pb-6 pt-3">Le hemos enviado un correo electrónico a <span className="text-green-800">{email}</span> para confirmar su cuenta. Siga el enlace que se incluye en ese correo electrónico.</p>
          <hr className="h-[1px] bg-[#ccc] mb-8 w-full" />
          <p className="text-center">Si no recibió un correo electrónico. <a href="" onClick={(e)=>{e.preventDefault();sendValidationEmail('resend')}} className="underline text-blue-800">Reenviar correo electrónico</a></p>
        {resendSuccess&&<div className="text-sm text-green-700 mt-3">{resendSuccess}</div>}
        </div>
      ) : (
        <div className="lg:max-w-4xl mr-auto ml-auto p-6 lg:border lg:border-[#ccc] my-12 flex flex-col items-center">
          <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/paper_16259254.png" alt="Confirmation" />
          <h1 className="text-center text-3xl font-semibold">Correo electrónico ya validado</h1>
          <p className="text-center pb-6 pt-3">Su dirección de correo electrónico ya está validada. Inicie sesión en su cuenta.</p>
         
        </div>
      )}

    </PublicPageContainer>
  );
}

export default function ConfirmEmail() {
  return (
    <Suspense fallback={<div className="w-full h-full fixed text-center flex items-center justify-center text-lg text-green-700">Loading...</div>}>
      <ConfirmEmailFunc />
    </Suspense>
  );
}