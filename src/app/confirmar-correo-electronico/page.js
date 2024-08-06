'use client'
import { useEffect } from "react";
import { Suspense } from "react";
import PublicPageContainer from "../../components/containers/publicPageContainer";
import { useSearchParams } from 'next/navigation';
import sendEmail from '../../lib/utils/sendMail';

function ConfirmEmailFunc() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
  
    useEffect(() => {
      if (email) {
        sendEmail(email).catch(error => {
          console.error('Error sending email:', error);
        });
      }
    }, [email]);
  
    return (
      <PublicPageContainer>
        <div className="lg:max-w-4xl mr-auto ml-auto p-6 lg:border lg:border-[#ccc] my-12 flex flex-col items-center">
          <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/paper_16259254.png" alt="Confirmation" />
          <h1 className="text-center text-3xl font-semibold">Confirmar correo electrónico</h1>
          <p className="text-center pb-6 pt-3">Le hemos enviado un correo electrónico a <span className="text-green-800">{email}</span> para confirmar su cuenta. Siga el enlace que se incluye en ese correo electrónico.</p>
          <hr className="h-[1px] bg-[#ccc] mb-8 w-full" />
          <p className="text-center">Si no recibió un correo electrónico. <a href="" className="underline text-blue-800">Reenviar correo electrónico</a></p>
        </div>
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