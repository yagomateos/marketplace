import './help.css'

export default function HelpPage() {
    return (
        <>

            <div className='flex justify-center flex-col w-full min-h-[350px] help-hero items-center'>
                <h2 className='text-white text-xl mb-4'>¿Cómo podemos ayudar?</h2>
                <input type="text" className="py-3 bg-white rounded-full border border-[#ccc]  lg:w-[50vw]" />
            </div>
            <div className='bg-slate-200 p-4 flex flex-col justify-center items-center text-center'>
                <p>¿Tienes algún problema con un pedido? Ponte en contacto con el vendedor para solicitarle ayuda.</p>
                <a href="" className='py-2 px-6 border border-black inline-block mt-3 rounded-full'>Obtenga ayuda con un pedido</a>
            </div>

            <div>
                <ul className='border-b border-[#ccc] flex gap-5 justify-center'>
                    <li>
                        <a className='p-4 inline-block'>Compras en vendalia</a>
                    </li>
                    <li><a className='p-4 inline-block'>Vendiendo en vendalia</a></li>
                </ul>
            </div>
            <div className='w-full flex justify-center items-center flex-col py-12 px-5'>
                <h2 className='text-center text-2xl font-semibold'>Artículos destacados</h2>
                <div className='flex flex-wrap max-w-6xl mt-6 w-full gap-4'>
                    <div className='w-[32%] p-4'>
                        <p>Pedidos y devoluciones</p>
                        <h3  className='font-serif text-xl'>¿Cuál es el estado de mi pedido?</h3>
                    </div>
                    <div className='w-[32%] p-4'>
                        <p>Pedidos y devoluciones</p>
                        <h3  className='font-serif text-xl'>¿Cuál es el estado de mi pedido?</h3>
                    </div>
                    <div className='w-[32%] p-4'>
                        <p>Pedidos y devoluciones</p>
                        <h3 className='font-serif text-xl'>¿Cuál es el estado de mi pedido?</h3>
                    </div>
                    <div className='w-[32%] p-4'>
                        <p>Pedidos y devoluciones</p>
                        <h3 className='font-serif text-xl'>¿Cuál es el estado de mi pedido?</h3>
                    </div>
                    <div className='w-[32%] p-4'>
                        <p>Pedidos y devoluciones</p>
                        <h3 className='font-serif text-xl'>¿Cuál es el estado de mi pedido?</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
