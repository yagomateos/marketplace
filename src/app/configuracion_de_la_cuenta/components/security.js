export default function Security({ setStep, userInfo }) {
    return (
        <>
            {/* first box */}
            <div className="p-4 rounded-lg border border-[#ccc] mb-4">
                <h3 className="text-2xl font-semibold mb-4">Verificación en dos pasos</h3>
                <b>Verificación en dos pasos: desactivada</b>
                <p>Cuando está activada, quien intente iniciar sesión desde un nuevo dispositivo o navegador tendrá que verificar que tiene permiso para acceder a la cuenta.</p>
                {userInfo && !userInfo.confirmed ? <>
                    <hr className="h-[1px] bg-[#ccc] my-4" />
                    <div className="lg:p-3">
                        <div className="p-4 bg-orange-300 rounded-lg text-sm">
                            ! Verifica tu correo electrónico para poder activar la verificación en dos pasos.
                        </div>
                    </div>
                </> : <><a href="" className="inline-block mt-3 p-2 rounded-full bg-black text-white">Activar verificación en dos pasos</a></>}
            </div>

            {/* second box */}
            <div className="p-4 rounded-lg border border-[#ccc] mb-4">
                <h3 className="text-2xl font-semibold mb-4">Cuentas de terceros</h3>
                <p className="mb-4">Vincula tus cuentas de terceros a tu cuenta de Vendalia para iniciar sesión y completar el pedido más rápido. Cuando hayas añadido una cuenta de terceros, podrás desvincularla cuando quieras aquí.</p>
                <div><img className="w-[22px] inline-block" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/google-icon.svg" />&nbsp;&nbsp;<a className="underline text-sm" href="">Vincula tu cuenta de Google</a></div>
                <hr className="h-[1px] bg-[#ccc] my-4" />
                <div><img className="w-[22px] inline-block" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/facebook-icon.svg" />&nbsp;&nbsp;<a className="underline text-sm" href="">Vincula tu cuenta de Facebook</a></div>
                <hr className="h-[1px] bg-[#ccc] my-4" />
                <div><img className="w-[22px] inline-block" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/apple-icon.svg" />&nbsp;&nbsp;<a className="underline text-sm" href="">Vincula tu cuenta de Apple</a></div>

            </div>
        </>
    )
}
