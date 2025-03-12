import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function AvisoLegal() {
  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-5">Aviso Legal</h2>
        <p className="mb-4">
          Bienvenido a Vendalia.es. Este Aviso Legal establece las condiciones de uso del sitio web y limita la responsabilidad sobre la información publicada. Te recomendamos leer detenidamente este documento antes de utilizar nuestros servicios.
        </p>
        <h3 className="text-3xl my-3">1. Información General</h3>
        <p className="mb-4">
          Este sitio web es operado por Vendalia.es. Los datos de la empresa, tales como dirección, número de identificación fiscal y otros detalles relevantes, están disponibles en nuestra sección de &quot;Contacto&quot;. El acceso y uso de este sitio implica la aceptación de este Aviso Legal.
        </p>
        <h3 className="text-3xl my-3">2. Propiedad Intelectual</h3>
        <p className="mb-4">
          Todo el contenido de este sitio (textos, imágenes, gráficos, logotipos, videos, etc.) es propiedad de Vendalia.es o de terceros que han autorizado su uso. Queda prohibida la reproducción total o parcial sin el consentimiento expreso por escrito de los titulares.
        </p>
        <h3 className="text-3xl my-3">3. Uso del Sitio</h3>
        <p className="mb-4">
          El uso de este sitio web se realiza bajo la responsabilidad del usuario. Cualquier acción que se realice a través de este portal es bajo el riesgo del usuario, y Vendalia.es no se hace responsable de las consecuencias derivadas de un uso inadecuado o fraudulento.
        </p>
        <h3 className="text-3xl my-3">4. Limitación de Responsabilidad</h3>
        <p className="mb-4">
          Vendalia.es no garantiza la exactitud, integridad o actualización de la información disponible en este sitio. No nos hacemos responsables de los errores u omisiones en la información ni de los daños o perjuicios que pudieran derivarse del uso de la misma.
        </p>
        <h3 className="text-3xl my-3">5. Modificaciones</h3>
        <p className="mb-4">
          Nos reservamos el derecho a modificar el contenido de este Aviso Legal en cualquier momento y sin previo aviso. Se recomienda a los usuarios revisar esta sección de forma periódica para estar al tanto de cualquier cambio.
        </p>
        <h3 className="text-3xl my-3">6. Legislación Aplicable y Jurisdicción</h3>
        <p className="mb-4">
          Este Aviso Legal se rige por la legislación española. Cualquier controversia derivada del acceso o uso del sitio se someterá a la jurisdicción exclusiva de los tribunales de España.
        </p>
        <h3 className="text-3xl my-3">7. Contacto</h3>
        <p className="mb-4">
          Para cualquier consulta o duda relacionada con este Aviso Legal, por favor contacta con nosotros a través de{" "}
          <a href="mailto:info@vendalia.es" className="text-blue-600 hover:underline">
            info@vendalia.es
          </a>.
        </p>
        <p>
          Al utilizar este sitio, aceptas los términos establecidos en este Aviso Legal.
        </p>
      </div>
    </PublicPageContainer>
  );
}
