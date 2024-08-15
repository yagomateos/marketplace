import React, { useState } from 'react'
import { updateUserPartial } from '../../../lib/actions/users/updateUser'

export default function Profile({setStep, userInfo, userId }) {

    const [gender, setGender] = useState('')
    const [city, setCity] = useState('')
    const [birthdate, setBirthDate] = useState('')
    const [birthMonth, setBirthMonth] = useState('')
    const [birthYear, setBirthYear] = useState('')
    const [presentation, setPresentation] = useState('')
    const [favCategories, setFavCategories] = useState('')
    const [incStore, setIncStore] = useState(false)
    const [incFavArticles, setIncFavArticles] = useState(false)
    const [incFavStores, setIncFavStores] = useState(false)
    const [userImg, setUserImg] = useState('https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/default_avatar_400x400.png')
    const [userImgObj, setUserImgObj] = useState(null)
    const [profileError, setProfileError] = useState(null)
    const [profileSuccess, setProfileSuccess] = useState(null)

    const changeGender = (e) => {
        setGender(e.target.value)
    }

    const setUserImgFunc = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            setUserImgObj(file)
            const imageUrl = URL.createObjectURL(file);
            setUserImg(imageUrl);
        }
    }

    const handleprofileSubmit = async (e) => {
        e.preventDefault();

        // update database
        const userData = {
            birthDay: `${birthYear}-${birthMonth}-${birthdate}`,
            city: city,
            identityUrl: 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/default_avatar_400x400.png',
            gender: gender,
            bio: presentation,
            favorite_materials: favCategories,
            incl_store: incStore ? 1 : 0,
            incl_articals: incFavArticles ? 1 : 0,
            incl_fav_stor: incFavStores ? 1 : 0,
            id: userId
        }

        try {
            const userUpdated = await updateUserPartial(userData)
            console.clear()
            console.log(userUpdated)
            if (userUpdated) {

                setGender('');
                setCity('');
                setBirthDate('');
                setBirthMonth('');
                setBirthYear('');
                setPresentation('');
                setFavCategories('');
                setIncStore(false);
                setIncFavArticles(false);
                setIncFavStores(false);

                console.log(city ,favCategories)

                setProfileError(null)
                setProfileSuccess('Perfil actualizado exitosamente')

                setTimeout(() => {
                    setStep(3)
                }, 1000);
            } else {
                setProfileError('¡Algo salió mal! ¡Inténtalo de nuevo!')
                setProfileSuccess(null)
            }
        } catch (error) {
            setProfileError('¡Algo salió mal! ¡Inténtalo de nuevo!')
            setProfileSuccess(null)
        }

    }

    return (
        <>
            <div className='flex flex-col lg:flex-row justify-between'>
                <p>Todo el mundo puede ver la información de esta página.</p>
                <a className='border py-2 px-4 border-[#ccc]'>Ver perfil</a>
            </div>
            {/* first box */}
            <div className="p-4 rounded-lg border border-[#ccc] my-4">
                <div>
                    <span className='text-sm inline-block mr-3'>Foto del perfil</span>
                    <input className='text-sm' type='file' onChange={e => setUserImgFunc(e)} />
                    <div className='py-3 lg:p-4'>
                        <img src={userImg} className='w-28 h-28 rounded-full object-cover' />
                        <p className='mt-2 text-sm'>Debe ser un archivo .jpg, .gif o .png de 10 MB como máximo y de al menos 400 por 400 píxeles.</p>
                    </div>
                </div>
                <hr className='h-[1px] bg-[#000]' />
                <div className='py-3 lg:p-4'>
                    <p className='text-sm font-semibold inline-block'>Tu nombre &nbsp;</p><span>kamindu  </span><a href="" className='text-sm underline'>Cambiar o borrar</a>
                </div>
                <hr className='h-[1px] bg-[#000]' />
                <div className='py-3 lg:p-4'>
                    <p className='text-sm font-semibold inline-block'>Sexo &nbsp;</p>
                    <span className='text-sm ml-3'>
                        <input
                            checked={gender === 'women'}
                            type='radio'
                            value='women'
                            name='sex'
                            onChange={changeGender}
                        /> &nbsp; Mujer
                    </span>
                    <span className='text-sm ml-3'>
                        <input
                            checked={gender === 'men'}
                            type='radio'
                            value='men'
                            name='sex'
                            onChange={changeGender}
                        /> &nbsp; Hombre
                    </span>
                    <span className='text-sm ml-3'>
                        <input
                            checked={gender === 'not-specified'}
                            type='radio'
                            value='not-specified'
                            name='sex'
                            onChange={changeGender}
                        /> &nbsp; No especificado
                    </span>
                    <span className='text-sm ml-3'>
                        <input
                            checked={gender === 'personalized'}
                            type='radio'
                            value='personalized'
                            name='sex'
                            onChange={changeGender}
                        /> &nbsp; Personalizado
                    </span>
                </div>

                <hr className='h-[1px] bg-[#000]' />
                <div className='py-3 lg:p-4'>
                    <label>Ciudad</label>
                    <input value={city} onChange={e => setCity(e.target.value)} className='lg:p-2 border border-[#ccc] w-[65%] lg:w-[50%] inline-block ml-3' />
                    <p className='mt-2 text-sm'>Comienza a escribir y elige una de las ciudades sugeridas para que los demás puedan encontrarte.</p>
                </div>
                <hr className='h-[1px] bg-[#000]' />
                <div className='py-3 lg:p-4'>
                    <label className='block lg:inline'>Fecha de nacimiento</label>
                    <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)} className='border border-[#ccc] p-2 text-sm lg:mx-4 inline-block'>
                        <option>- año -</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                        <option>1989</option>
                        <option>1988</option>
                        <option>1987</option>
                        <option>1986</option>
                        <option>1985</option>
                        <option>1984</option>
                        <option>1983</option>
                        <option>1982</option>
                        <option>1981</option>
                        <option>1980</option>
                        <option>1979</option>
                        <option>1978</option>
                        <option>1977</option>
                        <option>1976</option>
                        <option>1975</option>
                        <option>1974</option>
                        <option>1973</option>
                        <option>1972</option>
                        <option>1971</option>
                        <option>1970</option>
                        <option>1969</option>
                        <option>1968</option>
                        <option>1967</option>
                        <option>1966</option>
                        <option>1965</option>
                        <option>1964</option>
                        <option>1963</option>
                        <option>1962</option>
                    </select>
                    <select value={birthMonth} onChange={e => setBirthMonth(e.target.value)} className='border border-[#ccc] p-2 text-sm lg:mx-4 inline-block'>
                        <option>- Mes -</option>
                        <option value={1}>Enero</option>
                        <option value={2}>Febrero</option>
                        <option value={3}>Marzo</option>
                        <option value={4}>Abril</option>
                        <option value={5}>Mayo</option>
                        <option value={6}>Junio</option>
                        <option value={7}>Julio</option>
                        <option value={8}>Agosto</option>
                        <option value={9}>Septiembre</option>
                        <option value={10}>Octubre</option>
                        <option value={11}>Noviembre</option>
                        <option value={12}>Diciembre</option>
                    </select>
                    <select value={birthdate} onChange={e => setBirthDate(e.target.value)} className='border border-[#ccc] p-2 text-sm inline-block ml-2'>
                        <option>- Dia -</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                </div>
                <hr className='h-[1px] bg-[#000]' />
                <div className='py-3 lg:p-4'>
                    <label>Presentación</label>
                    <input value={presentation} onChange={e => setPresentation(e.target.value)} className='lg:p-2 border border-[#ccc] w-[60%] lg:w-[50%] inline-block ml-3' />
                    <p className='mt-2 text-sm'>Cuenta algo sobre ti.</p>
                </div>
                <hr className='h-[1px] bg-[#000]' />
                <div className='py-3 lg:p-4'>
                    <label>Materiales favoritos</label>
                    <input value={favCategories} onChange={e => setFavCategories(e.target.value)} className='lg:p-2 border border-[#ccc] lg:w-[50%] inline-block lg:ml-3' />
                    <p className='mt-2 text-sm'>Comparte hasta 13 materiales que te gusten. Separa cada material con una coma.</p>
                </div>
                <hr className='h-[1px] bg-[#000]' />
                <div className='py-3 lg:p-4'>
                    <label>Incluir en tu perfil</label>
                    <div className='mt-4'>
                        <p className='text-sm'><input type='checkbox' checked={incStore} onChange={e => setIncStore(!incStore)} /> &nbsp; Tienda</p>
                        <p className='text-sm'><input type='checkbox' checked={incFavArticles} onChange={e => setIncFavArticles(!incFavArticles)} /> &nbsp; Artículos favoritos</p>
                        <p className='text-sm'><input type='checkbox' checked={incFavStores} onChange={e => setIncFavStores(!incFavStores)} /> &nbsp; Tiendas favoritas</p>
                    </div>
                </div>
            </div>
            <a onClick={e => handleprofileSubmit(e)} className="mb-3 rounded-full p-3 bg-black text-white font-semibold inline-block cursor-pointer">Guardar cambios</a>
            {profileError && <div className='mt-3 text-sm text-red-700'>{profileError}</div>}
            {profileSuccess && <div className='mt-3 text-sm text-green-700'>{profileSuccess}</div>}
        </>
    )
}
