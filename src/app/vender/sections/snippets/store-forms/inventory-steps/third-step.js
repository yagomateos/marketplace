export default function InventoryThirdStep({ productInfo2 }) {
    console.log(productInfo2)
    return (
        <div className="store-step-form-wrapper">
            <div className="flex justify-between flex-wrap items-center p-4">
                <div className="w-full text-center">
                    <h1 className="text-2xl font-semibold mb-3">¡Buen trabajo! Acabas de publicar tu primer anuncio.</h1>
                    <p>Estás un paso más cerca de hacer tu primera venta. Considera añadir algunos anuncios más (cinco está bien para empezar). Esto da a los compradores más oportunidades de encontrar tu tienda.</p>
                </div>

                <div className="ad-info  rounded-lg flex justify-center gap-3 flex-wrap mt-6">
                    {productInfo2 && productInfo2[1] && productInfo2[1].map((prodInf, key)=>(
                        <img key={key} src={(prodInf)} className="w-[48%] lg:w-[32%]" />
                    ))
                }
                </div>
            </div>
        </div>
    )
}
