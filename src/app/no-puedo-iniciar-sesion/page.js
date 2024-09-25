import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function CantLoginIn (){
    return (
        <PublicPageContainer>
    <div className="py-8 px-5 max-w-5xl mr-auto ml-auto">
        <h2 className="text-3xl font-semibold mb-4">No puedo iniciar sesión en mi cuenta</h2>
        <p>Si tienes problemas para iniciar sesión en tu cuenta de Vendalia, puedes restablecer la contraseña:</p>
        <a href="/olvidado_tu_contrasena" className="my-4 flex justify-center items-center bg-black text-white rounded-full h-11 lg:max-w-[50%]">Restablece tu contraseña</a>
        
        <h3 className="text-xl font-semibold mb-3">¿No recibiste el correo de restablecimiento?</h3>
        <p>Si no recibiste el correo de restablecimiento de contraseña, asegúrate de revisar tu carpeta de spam o correo no deseado. Si aún tienes problemas, intenta los siguientes pasos:</p>
        <ul className="mt-3 list-disc px-4">
            <li>Verifica que hayas ingresado correctamente tu dirección de correo electrónico.</li>
            <li>Asegúrate de que tu cuenta de correo esté funcionando correctamente.</li>
            <li>Espera unos minutos y vuelve a intentar.</li>
        </ul>

        <h3 className="text-xl font-semibold my-3">¿Tu cuenta ha sido bloqueada?</h3>
        <p>Si has intentado varias veces iniciar sesión sin éxito, tu cuenta puede haber sido bloqueada temporalmente por razones de seguridad. Espera unos minutos antes de intentar nuevamente.</p>

        <h3 className="text-xl font-semibold my-3">¿Aún necesitas ayuda?</h3>
        <p>Si sigues sin poder acceder a tu cuenta, ponte en contacto con nuestro <a href="/soporte">equipo de soporte</a> para recibir asistencia.</p>
    </div>
        </PublicPageContainer>

    )
}
