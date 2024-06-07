import React from 'react'

export default function TopMenu({ session }) {
    return (
        <ul className="flex space-x-1 lg:space-x-4 text-sm font-semibold">
            {!session ? (
                <li><a className='py-2 px-3 rounded-full hover:bg-gray-200 block' href="/" >Entrar</a></li>
            ) : ''}

            <li>
                <span className='tooltip-nav-item relative'>
                    <a className="tooltip-trigger flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-200"><img className="w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/favorite.svg" /></a>
                    <span className='kd-tooltip absolute left-1/2 bg-green-500 text-white rounded-lg p-3 -bottom-12 w-max'>
                        Favoritos
                    </span>
                </span>
            </li>
            <li>
                <span className='tooltip-nav-item relative'>
                    <a className="tooltip-trigger flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-200"><img className="w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/gift.svg" /></a>
                    <span className='kd-tooltip absolute left-1/2 bg-green-500 text-white rounded-lg p-3 -bottom-12 w-max'>
                        Buscador de regalos
                    </span>
                </span>
            </li>
            <li>
                <a className="tooltip-trigger flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-200"><img className="w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/cart.svg" /></a>

            </li>
        </ul>
    )
}
