export default function InventoryThirdStep({ productInfo2 }) {
    console.log(productInfo2)
    return (
        <div className="store-step-form-wrapper">
            <div className="flex justify-between flex-wrap items-center p-4">
                <div className="w-full lg:w-3/4 lg:pr-8">
                    <h1>¡Buen trabajo! Acabas de publicar tu primer anuncio.</h1>
                    <p>Estás un paso más cerca de hacer tu primera venta. Considera añadir algunos anuncios más (cinco está bien para empezar). Esto da a los compradores más oportunidades de encontrar tu tienda.</p>
                </div>

                <div className="ad-info border rounded-lg w-full lg:w-1/4">
                    {productInfo2 && productInfo2[1] && (<img src={(productInfo2[1][0])}/>)}
                </div>
            </div>
        </div>
    )
}
