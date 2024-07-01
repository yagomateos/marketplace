'use client'

import { useState } from "react";

export default function PaymentFirstStep() {
    const [morePlaces, setMorePlaces] = useState(false)
    const setMorePlacesFunc = (event) => {
        setMorePlaces(event.target.value === 'yes');
    }

    return (
        <div className='py-6'>
            <div className='w-full lg:w-1/2 ml-auto mr-auto text-center'>
                <h1 className='text-3xl text-center'>Cómo recibirás los pagos</h1>
                <p>Vendalia Payments ofrece a los compradores una amplia variedad de opciones de pago y te protege como vendedor de Vendalia. Más información</p>
            </div>


            <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5]">
                <h3 className='text-3xl mb-3'>A efectos fiscales, ¿qué tipo de vendedor eres?</h3>
                <p className='text-xs mb-6'>Vendalia usará esta respuesta para verificar tu información. Esto no afectará al estado de tu tienda de Vendalia de ningún modo; estos datos tienen fines internos.
                    La mayoría de vendedores se clasifican en la categoría de &quot;particular&quot; cuando se unen a Vendalia. ¿No lo tienes claro? Más información.</p>

                <ul>
                    <li>
                        <p><input type='radio' name="business-type" />&nbsp; Persona física</p>
                        <p className='text-sm'>La mayoría de los vendedores de Vendalia se encuadran en esta categoría</p>
                    </li>
                    <li className='mt-4'>
                        <p><input type='radio' name="business-type" />&nbsp; Persona jurídica</p>
                    </li>
                </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5] ">
                <h3 className='text-3xl mb-3'>Cuéntanos un poco más sobre ti</h3>
                <p className='text-xs mb-4'>Por cuestiones de cumplimiento, puede que verifiquemos tu identidad mediante un servicio seguro proporcionado por terceros.Esta información nunca se mostrará públicamente en Vendalia. <a href="/">Más información</a></p>

                {/* your name */}
                <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4'>
                    <div className='w-full lg:w-[20%]'>
                        <p>Tu nombre <span className='text-red-700'>*</span></p>
                        <p className='text-xs'>Escríbelo tal cual aparece en su documento de identificación oficial.</p>
                    </div>

                    <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                        <div className='lg:w-[48%]'>
                            <label className='block'>Nombre</label>
                            <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                        </div>
                        <div className='lg:w-[48%]'>
                            <label className='block'>Apellidos</label>
                            <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                        </div>
                    </div>
                </div>

                {/* dob */}
                <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4'>
                    <p className='w-full lg:w-[20%]'>Tu fecha de nacimiento <span className='text-red-700'>*</span></p>
                    <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                        <div className='lg:w-[32%]'>
                            <select className='p-2 border border-[#ccc] rounded-lg w-full'>
                                <optgroup label="">
                                    <option value="" disabled="disabled" selected="selected">Día</option>
                                </optgroup>
                                <option class="dob-day" value="01">01</option>
                                <option class="dob-day" value="02">02</option>
                                <option class="dob-day" value="03">03</option>
                                <option class="dob-day" value="04">04</option>
                                <option class="dob-day" value="05">05</option>
                                <option class="dob-day" value="06">06</option>
                                <option class="dob-day" value="07">07</option>
                                <option class="dob-day" value="08">08</option>
                                <option class="dob-day" value="09">09</option>
                                <option class="dob-day" value="10">10</option>
                                <option class="dob-day" value="11">11</option>
                                <option class="dob-day" value="12">12</option>
                                <option class="dob-day" value="13">13</option>
                                <option class="dob-day" value="14">14</option>
                                <option class="dob-day" value="15">15</option>
                                <option class="dob-day" value="16">16</option>
                                <option class="dob-day" value="17">17</option>
                                <option class="dob-day" value="18">18</option>
                                <option class="dob-day" value="19">19</option>
                                <option class="dob-day" value="20">20</option>
                                <option class="dob-day" value="21">21</option>
                                <option class="dob-day" value="22">22</option>
                                <option class="dob-day" value="23">23</option>
                                <option class="dob-day" value="24">24</option>
                                <option class="dob-day" value="25">25</option>
                                <option class="dob-day" value="26">26</option>
                                <option class="dob-day" value="27">27</option>
                                <option class="dob-day" value="28">28</option>
                                <option class="dob-day" value="29">29</option>
                                <option class="dob-day" value="30">30</option>
                                <option class="dob-day" value="31">31</option>
                            </select>
                        </div>
                        <div className='lg:w-[32%]'>
                            <select className='p-2 border border-[#ccc] rounded-lg w-full'>
                                <optgroup label="">
                                    <option value="" disabled="disabled" selected="selected">Mes</option>
                                </optgroup>
                                <option value="1">Enero</option>
                                <option value="2">Febrero</option>
                                <option value="3">Marzo</option>
                                <option value="4">Abril</option>
                                <option value="5">Mayo</option>
                                <option value="6">Junio</option>
                                <option value="7">Julio</option>
                                <option value="8">Agosto</option>
                                <option value="9">Septiembre</option>
                                <option value="10">Octubre</option>
                                <option value="11">Noviembre</option>
                                <option value="12">Diciembre</option>
                            </select>
                        </div>
                        <div className='lg:w-[32%]'>
                            <select className='p-2 border border-[#ccc] rounded-lg w-full'>
                                <optgroup label="">
                                    <option value="" disabled="disabled" selected="selected">Año</option>
                                </optgroup>
                                <option class="dob-year" value="2024">2024</option>
                                <option class="dob-year" value="2023">2023</option>
                                <option class="dob-year" value="2022">2022</option>
                                <option class="dob-year" value="2021">2021</option>
                                <option class="dob-year" value="2020">2020</option>
                                <option class="dob-year" value="2019">2019</option>
                                <option class="dob-year" value="2018">2018</option>
                                <option class="dob-year" value="2017">2017</option>
                                <option class="dob-year" value="2016">2016</option>
                                <option class="dob-year" value="2015">2015</option>
                                <option class="dob-year" value="2014">2014</option>
                                <option class="dob-year" value="2013">2013</option>
                                <option class="dob-year" value="2012">2012</option>
                                <option class="dob-year" value="2011">2011</option>
                                <option class="dob-year" value="2010">2010</option>
                                <option class="dob-year" value="2009">2009</option>
                                <option class="dob-year" value="2008">2008</option>
                                <option class="dob-year" value="2007">2007</option>
                                <option class="dob-year" value="2006">2006</option>
                                <option class="dob-year" value="2005">2005</option>
                                <option class="dob-year" value="2004">2004</option>
                                <option class="dob-year" value="2003">2003</option>
                                <option class="dob-year" value="2002">2002</option>
                                <option class="dob-year" value="2001">2001</option>
                                <option class="dob-year" value="2000">2000</option>
                                <option class="dob-year" value="1999">1999</option>
                                <option class="dob-year" value="1998">1998</option>
                                <option class="dob-year" value="1997">1997</option>
                                <option class="dob-year" value="1996">1996</option>
                                <option class="dob-year" value="1995">1995</option>
                                <option class="dob-year" value="1994">1994</option>
                                <option class="dob-year" value="1993">1993</option>
                                <option class="dob-year" value="1992">1992</option>
                                <option class="dob-year" value="1991">1991</option>
                                <option class="dob-year" value="1990">1990</option>
                                <option class="dob-year" value="1989">1989</option>
                                <option class="dob-year" value="1988">1988</option>
                                <option class="dob-year" value="1987">1987</option>
                                <option class="dob-year" value="1986">1986</option>
                                <option class="dob-year" value="1985">1985</option>
                                <option class="dob-year" value="1984">1984</option>
                                <option class="dob-year" value="1983">1983</option>
                                <option class="dob-year" value="1982">1982</option>
                                <option class="dob-year" value="1981">1981</option>
                                <option class="dob-year" value="1980">1980</option>
                                <option class="dob-year" value="1979">1979</option>
                                <option class="dob-year" value="1978">1978</option>
                                <option class="dob-year" value="1977">1977</option>
                                <option class="dob-year" value="1976">1976</option>
                                <option class="dob-year" value="1975">1975</option>
                                <option class="dob-year" value="1974">1974</option>
                                <option class="dob-year" value="1973">1973</option>
                                <option class="dob-year" value="1972">1972</option>
                                <option class="dob-year" value="1971">1971</option>
                                <option class="dob-year" value="1970">1970</option>
                                <option class="dob-year" value="1969">1969</option>
                                <option class="dob-year" value="1968">1968</option>
                                <option class="dob-year" value="1967">1967</option>
                                <option class="dob-year" value="1966">1966</option>
                                <option class="dob-year" value="1965">1965</option>
                                <option class="dob-year" value="1964">1964</option>
                                <option class="dob-year" value="1963">1963</option>
                                <option class="dob-year" value="1962">1962</option>
                                <option class="dob-year" value="1961">1961</option>
                                <option class="dob-year" value="1960">1960</option>
                                <option class="dob-year" value="1959">1959</option>
                                <option class="dob-year" value="1958">1958</option>
                                <option class="dob-year" value="1957">1957</option>
                                <option class="dob-year" value="1956">1956</option>
                                <option class="dob-year" value="1955">1955</option>
                                <option class="dob-year" value="1954">1954</option>
                                <option class="dob-year" value="1953">1953</option>
                                <option class="dob-year" value="1952">1952</option>
                                <option class="dob-year" value="1951">1951</option>
                                <option class="dob-year" value="1950">1950</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* address */}
                <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4'>
                    <div className='w-full lg:w-[20%] pr-2'>
                        <p >Dirección fiscal <span className='text-red-700'>*</span></p>
                        <p className='text-xs'>La dirección debe ser la misma que usas en tu declaración, no un apartado de correos. Dirección comercial o apartado de correos</p>
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <div className='flex items-center justify-between gap-4 w-full'>
                            <div className='lg:w-[32%]'>
                                <label className='block'>Número</label>
                                <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                            </div>
                            <div className='lg:w-[66%]'>
                                <label className='block'>Calle</label>
                                <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                            </div>
                        </div>
                        <div className='w-full mt-4'>
                            <label className='block'>Piso/puerta/otros</label>
                            <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                        </div>
                        <div className='w-full mt-4'>
                            <label className='block'>Ciudad</label>
                            <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                        </div>
                        <div className='flex items-center justify-between gap-4 w-full mt-4'>
                            <div className='lg:w-[48%]'>
                                <label className='block'>Código postal</label>
                                <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                            </div>
                            <div className='lg:w-[48%]'>
                                <label className='block'>Número de teléfono</label>
                                <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* more places */}
            <div className='className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5] "'>
                <p >Comparte más información sobre los lugares donde has vivido</p>
                <p className='text-xs'>Debido a las leyes relativas a sanciones que nos ayudan a proteger nuestro mercado, debes informarnos si has vivido en alguno de estos lugares durante más de 6 meses en los últimos 10 años: Cuba, Irán, Corea del Norte, Siria, Crimea, Donetsk People’s Republic (&quot;DNR&quot;), o Luhansk People’s Republic (&quot;LNR&quot;). Podrás seguir vendiendo en Vendalia cuando podamos verificar que estás viviendo en otro lugar en la actualidad. Revisa nuestra política de sanciones</p>

                <ul className='flex gap-10 mt-4'>
                    <li>
                        <input name='more-places' type='radio' value={'yes'} onChange={(e) => setMorePlacesFunc(e)} /> &nbsp; Sí
                    </li>
                    <li>
                        <input name='more-places' type='radio' value={'no'} onChange={(e) => setMorePlacesFunc(e)} /> &nbsp; No
                    </li>
                </ul>

                {morePlaces && (
                    <div className='py-7'>
                        <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4'>
                            <div className='w-full lg:w-[20%] pr-2'>
                                <p>¿En qué región sancionada estuviste viviendo?*</p>
                            </div>
                            <div className='w-full lg:w-[60%]'>
                                <select className='p-2 border border-[#ccc] rounded-lg w-full' >
                                    <optgroup label="select sanctioned region">
                                        <option value="" disabled="disabled" selected="selected">Selecciona la región</option>
                                    </optgroup>
                                    <optgroup label="----------">
                                        <option value="88">Cuba</option>
                                        <option value="124">Irán</option>
                                        <option value="176">Corea del Norte</option>
                                        <option value="195">Siria</option>
                                        <option value="300">Crimea</option>
                                        <option value="301">Donetsk People’s Republic (&quot;DNR&quot;)</option>
                                        <option value="302">Luhansk People’s Republic (&quot;LNR&quot;)</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>

                        <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4'>
                            <div className='w-full lg:w-[20%] pr-2'>
                                <p>¿Cuándo fue el último día que viviste allí?*</p>
                            </div>
                            <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                                <div className='lg:w-[32%]'>
                                    <select className='p-2 border border-[#ccc] rounded-lg w-full'>
                                        <optgroup label="">
                                            <option value="" disabled="disabled" selected="selected">Día</option>
                                        </optgroup>
                                        <option class="dob-day" value="01">01</option>
                                        <option class="dob-day" value="02">02</option>
                                        <option class="dob-day" value="03">03</option>
                                        <option class="dob-day" value="04">04</option>
                                        <option class="dob-day" value="05">05</option>
                                        <option class="dob-day" value="06">06</option>
                                        <option class="dob-day" value="07">07</option>
                                        <option class="dob-day" value="08">08</option>
                                        <option class="dob-day" value="09">09</option>
                                        <option class="dob-day" value="10">10</option>
                                        <option class="dob-day" value="11">11</option>
                                        <option class="dob-day" value="12">12</option>
                                        <option class="dob-day" value="13">13</option>
                                        <option class="dob-day" value="14">14</option>
                                        <option class="dob-day" value="15">15</option>
                                        <option class="dob-day" value="16">16</option>
                                        <option class="dob-day" value="17">17</option>
                                        <option class="dob-day" value="18">18</option>
                                        <option class="dob-day" value="19">19</option>
                                        <option class="dob-day" value="20">20</option>
                                        <option class="dob-day" value="21">21</option>
                                        <option class="dob-day" value="22">22</option>
                                        <option class="dob-day" value="23">23</option>
                                        <option class="dob-day" value="24">24</option>
                                        <option class="dob-day" value="25">25</option>
                                        <option class="dob-day" value="26">26</option>
                                        <option class="dob-day" value="27">27</option>
                                        <option class="dob-day" value="28">28</option>
                                        <option class="dob-day" value="29">29</option>
                                        <option class="dob-day" value="30">30</option>
                                        <option class="dob-day" value="31">31</option>
                                    </select>
                                </div>
                                <div className='lg:w-[32%]'>
                                    <select className='p-2 border border-[#ccc] rounded-lg w-full'>
                                        <optgroup label="">
                                            <option value="" disabled="disabled" selected="selected">Mes</option>
                                        </optgroup>
                                        <option value="1">Enero</option>
                                        <option value="2">Febrero</option>
                                        <option value="3">Marzo</option>
                                        <option value="4">Abril</option>
                                        <option value="5">Mayo</option>
                                        <option value="6">Junio</option>
                                        <option value="7">Julio</option>
                                        <option value="8">Agosto</option>
                                        <option value="9">Septiembre</option>
                                        <option value="10">Octubre</option>
                                        <option value="11">Noviembre</option>
                                        <option value="12">Diciembre</option>
                                    </select>
                                </div>
                                <div className='lg:w-[32%]'>
                                    <select className='p-2 border border-[#ccc] rounded-lg w-full'>
                                        <optgroup label="">
                                            <option value="" disabled="disabled" selected="selected">Año</option>
                                        </optgroup>
                                        <option class="dob-year" value="2024">2024</option>
                                        <option class="dob-year" value="2023">2023</option>
                                        <option class="dob-year" value="2022">2022</option>
                                        <option class="dob-year" value="2021">2021</option>
                                        <option class="dob-year" value="2020">2020</option>
                                        <option class="dob-year" value="2019">2019</option>
                                        <option class="dob-year" value="2018">2018</option>
                                        <option class="dob-year" value="2017">2017</option>
                                        <option class="dob-year" value="2016">2016</option>
                                        <option class="dob-year" value="2015">2015</option>
                                        <option class="dob-year" value="2014">2014</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                )}

            </div>

            {/* bank details */}
            <div className='className="bg-white rounded-2xl p-6 mt-6 border border-[#c5c5c5] "'>
                <p>Tus datos bancarios</p>
                <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4'>
                    <div className='w-full lg:w-[20%] pr-2'>
                        <p>Nombre completo del titular de la cuenta *</p>
                    </div>
                    <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                        <span> {/* full name will be shown here */} </span>
                    </div>
                </div>

                {/* bank name */}
                <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4'>
                    <div className='w-full lg:w-[20%] pr-2'>
                        <p>Nombre del banco *</p>
                    </div>
                    <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                        <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                    </div>
                </div>

                {/* IBAN */}
                <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4'>
                    <div className='w-full lg:w-[20%] pr-2'>
                        <p>IBAN *</p>
                    </div>
                    <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                        <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                    </div>
                </div>

                {/* SWIFT (BIC) */}
                <div className='flex items-center w-full gap-4 flex-col lg:flex-row mb-4'>
                    <div className='w-full lg:w-[20%] pr-2'>
                        <p>SWIFT (BIC) *</p>
                    </div>
                    <div className='flex items-center justify-between gap-4 w-full lg:w-[60%]'>
                        <input className='p-2 border border-[#ccc] rounded-lg w-full' />
                    </div>
                </div>

            </div>
        </div>

    )
}
