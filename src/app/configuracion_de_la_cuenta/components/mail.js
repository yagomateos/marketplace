import React, { useState } from 'react' 
import {updateUserNotificationsFunc} from '../../../lib/actions/users/updateUser'
 
export default function Mail({ userId }) {

    const [receiveMessage, setReceiveMessage] = useState(false)
    const [sentMessage, setSentMessage] = useState(false)
    const [followMe, setFollowme] = useState(false)
    const [adsexpire, setAdsexpire] = useState(false)

    const [newsSubs, setNewsSubs] = useState(false)
    const [feedbackSubs, setFeedbackSubs] = useState(false)
    const [cuponsSubs, setCuponsSubs] = useState(false)
    const [forums, setForums] = useState(false)
    const [defence, setDefence] = useState(false)
    const [mySellerActivity, setMySellerActivity] = useState(false)
    const [sellerNews, setSellerNews] = useState(false)
    const [storeTips, setStoreTips] = useState(false)
    const [patternTips, setPatternTips] = useState(false)
    const [sellerPlusNews, setSellerPlusNews] = useState(false)

    const [notificationError, setNotificationError] = useState(null)
    const [notificationSuccess, setNotificationSuccess] = useState(null)

    const handleEmailSave = async (e) => {
        e.preventDefault();
        console.log(receiveMessage, sentMessage, followMe, adsexpire, newsSubs, feedbackSubs, cuponsSubs, forums, defence, mySellerActivity, sellerNews, storeTips, patternTips, sellerPlusNews)
        const notificationSettings = {
            userId: userId,
            receiveMessage: receiveMessage ? 1 : 0,
            sentMessage: sentMessage ? 1 : 0,
            followMe: followMe ? 1 : 0,
            adsexpire: adsexpire ? 1 : 0,
            newsSubs: newsSubs ? 1 : 0,
            feedbackSubs: feedbackSubs ? 1 : 0,
            cuponsSubs: cuponsSubs ? 1 : 0,
            forums: forums ? 1 : 0,
            defence: defence ? 1 : 0,
            mySellerActivity: mySellerActivity ? 1 : 0,
            sellerNews: sellerNews ? 1 : 0,
            storeTips: storeTips ? 1 : 0,
            patternTips: patternTips ? 1 : 0,
            sellerPlusNews: sellerPlusNews ? 1 : 0
        }

        try {
            const notificationsUpdated = await updateUserNotificationsFunc(notificationSettings)
            if (notificationsUpdated) {
                setNotificationError(false)
                setNotificationSuccess('Actualizado exitosamente')
            } else {
                setNotificationError('¡Algo salió mal!')
                setNotificationSuccess(false)
            }
        } catch (error) {
            console.log(error)
            setNotificationError('¡Algo salió mal!')
            setNotificationSuccess(false)
        }

    }

    return (
        <div>
            <h2 className="lg:text-2xl font-semibold mb-4">Configuración del correo electrónico para kamindudushmantha@gmail.com</h2>
            {/* first box */}
            <div className="p-4 rounded-lg border border-[#ccc] mb-4">
                <h3 className="text-2xl font-semibold mb-4">Tus notificaciones</h3>
                <ul>
                    <li className="mb-4"><b>Quiero recibir un correo electrónico cuando...</b><br /></li>
                    <li><input type='checkbox' onClick={e => setReceiveMessage(!receiveMessage)} />&nbsp; Alguien me envíe un mensaje</li>
                    <li><input type='checkbox' onClick={e => setSentMessage(!sentMessage)} />&nbsp; Yo envíe un mensaje</li>
                    <li><input type='checkbox' onClick={e => setFollowme(!followMe)} />&nbsp; Alguien siga mi actividad</li>
                    <li><input type='checkbox' onClick={e => setAdsexpire(!adsexpire)} />&nbsp; Mis anuncios estén a punto de vencer</li>
                </ul>
            </div>
            {/* second box */}
            <div className="p-4 rounded-lg border border-[#ccc] mb-4">
                <h3 className="text-2xl font-semibold mb-4">Tus suscripciones</h3>
                <ul>
                    <li className="mb-4"><b>General</b><br /></li>
                    <li><input type='checkbox' onClick={e => setNewsSubs(!newsSubs)} />&nbsp; Nuevo y destacado<br /><span className='text-sm'>Recibe lo mejor de Vendalia (desde tendencias y recomendaciones nuevas hasta información sobre nuestros grandes eventos de ofertas y colaboraciones) directamente en tu bandeja de entrada.</span></li>
                    <li><input type='checkbox' onClick={e => setFeedbackSubs(!feedbackSubs)} />&nbsp; Feedback<br /><span className='text-sm'>Comparte tu opinión y ayúdanos a mejorar tu experiencia en Vendalia a través de encuestas de marketing ocasionales.</span></li>
                    <li><input type='checkbox' onClick={e => setCuponsSubs(!cuponsSubs)} />&nbsp;  Cupones y promociones<br /><span className='text-sm'>Mantente siempre al tanto de los descubrimientos que más te gustan y entérate antes que nadie de ofertas y precios especiales.</span></li>
                    <li><input type='checkbox' onClick={e => setForums(!forums)} />&nbsp;  Foros<br /><span className='text-sm'>Mantente al tanto de cada conversación en la que participes mediante notificaciones de los foros y los grupos de Vendalia.</span></li>
                    <li><input type='checkbox' onClick={e => setDefence(!defence)} />&nbsp;  Defensa de Vendalia<br /><span className='text-sm'>Descubre cómo puedes apoyar a nuestra comunidad. Únete al movimiento Defensa de Vendalia.</span></li>
                    <li className="my-4"><b>Para vendedores</b><br /></li>
                    <li><input type='checkbox' onClick={e => setMySellerActivity(!mySellerActivity)} />&nbsp;  Mi actividad como vendedor<br /><span className='text-sm'>Recibe información actualizada sobre Vendalia y sobre tu tienda: informes y guías completos con los que podrás llevar tu negocio más lejos. Además, conoce nuestros planes futuros para el mercado.</span></li>
                    <li><input type='checkbox' onClick={e => setSellerNews(!sellerNews)} />&nbsp;  Noticias y funciones<br /><span className='text-sm'>Recibe actualizaciones regulares sobre cómo le va a Vendalia y cómo estamos creciendo.</span></li>
                    <li><input type='checkbox' onClick={e => setStoreTips(!storeTips)} />&nbsp;  Consejos para mejorar mi tienda<br /><span className='text-sm'>Aprende de otros vendedores que comparten historias y consejos sobre cómo llevar una tienda de Vendalia.</span></li>
                    <li><input type='checkbox' onClick={e => setPatternTips(!patternTips)} />&nbsp;  Noticias de Pattern<br /><span className='text-sm'>Get the most out of your Pattern site. Get our latest articles, tips, and seller resources delivered right to your inbox.</span></li>
                    <li><input type='checkbox' onClick={e => setSellerPlusNews(!sellerPlusNews)} />&nbsp;  Noticias de Vendalia Plus y Vendalia Premium<br /><span className='text-sm'>Recibe información, actualizaciones y ofertas especiales sobre Vendalia Plus y Vendalia Premium.</span></li>
                </ul>
            </div>
            <a className="mb-3 rounded-full p-3 bg-black text-white font-semibold inline-block cursor-pointer" onClick={e => handleEmailSave(e)}>Guardar configuración</a>
            {notificationError && <div className='mt-3 text-sm text-red-700'>{notificationError}</div>}
            {notificationSuccess && <div className='mt-3 text-sm text-green-700'>{notificationSuccess}</div>}
        </div>
    )
}
