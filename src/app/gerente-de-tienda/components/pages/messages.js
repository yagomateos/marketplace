import React, { useEffect, useState } from 'react';
import Inbox from './message-screens/inbox';
import Vendalia from './message-screens/vendalia';
import Sent from './message-screens/sent';
import Unread from './message-screens/unread';
import Recycled from './message-screens/recycled'
import { getMessagesFunc, updateMsgInst } from '../../../../lib/actions/messages/messages';

export default function Messages({ userData }) {
  const [step, setStep] = useState(0);
  const [receivedMsg, setReceivedMsg] = useState([]);
  const [inboxMessages, setInboxMessages] = useState([])
  const [vendaliaMsg, setVendaliaMsg] = useState([]);
  const [sentMsg, setSentMsg] = useState([]);
  const [recycledMessage, setRecycledMessage] = useState([]);
  const [readMsgs, setReadMsgs] = useState([]);
  const [unreadMsgs, setUnreadMsgs] = useState([])
  const [userId, setUserId] = useState(null);
  const [messageSent, setMessageSent] = useState(null);
  const [selectedAll, setSelectedAll] = useState(false)
  const [updateSucces, setUpdateSuccess] = useState(null)
  const [updateErrror, setUpdateErrrors] = useState(null)
  const [messagesUpdated, setMessagesUpdated] = useState(false)


  const getMsgTypes = () => {


    switch (step) {
      case 0:
        return inboxMessages.map(msg => msg.mid);
      case 1:
        return vendaliaMsg.map(msg => msg.mid);
      case 2:
        return sentMsg.map(msg => msg.mid);
      case 3:
        return unreadMsgs.map(msg => msg.mid);
      default:
        return []; // Return an empty array for unsupported steps
    }

  }

  const recycleMessages = async (e) => {
    e.preventDefault();
    if (selectedAll) {
      let messages = getMsgTypes();
      try {
        const updated = await updateMsgInst('recycle', messages)
        console.log(updated)
        setUpdateSuccess('Los mensajes se movieron a la papelera');
        setTimeout(() => {
          setUpdateSuccess(null)
        }, 1000);
        setMessagesUpdated(!messagesUpdated)
      } catch (error) {
        console.log(error)
        setUpdateErrrors('Algo salió mal');
        setTimeout(() => {
          setUpdateErrrors(null)
        }, 1000);
      }
    }

  }

  const readMessages = async (e) => {
    e.preventDefault();
    if (selectedAll) {
      let messages = getMsgTypes();
      try {
        const updated = await updateMsgInst('read', messages)
        console.log(updated)
        setUpdateSuccess('Mensajes marcados como leídos');
        setTimeout(() => {
          setUpdateSuccess(null)
        }, 1000);
        setMessagesUpdated(!messagesUpdated)
      } catch (error) {
        console.log(error)
        setUpdateErrrors('Algo salió mal');
        setTimeout(() => {
          setUpdateErrrors(null)
        }, 1000);
      }
    }

  }

  const unreadMessages = async (e) => {
    e.preventDefault();
    if (selectedAll) {
      let messages = getMsgTypes();
      try {
        const updated = await updateMsgInst('unread', messages)
        console.log(updated)
        setUpdateSuccess('Mensajes marcados como no leídos');
        setTimeout(() => {
          setUpdateSuccess(null)
        }, 1000);
        setMessagesUpdated(!messagesUpdated)
      } catch (error) {
        console.log(error)
        setUpdateErrrors('Algo salió mal');
        setTimeout(() => {
          setUpdateErrrors(null)
        }, 1000);
      }
    }
  }

  const returnMessageStep = () => {
    // Check if userId is set before rendering the Inbox component
    if (!userId) {
      return <div>Loading...</div>; // Show a loading state until userId is set
    }

    switch (step) {
      case 0:
        return (
          <Inbox
            inboxMessages={inboxMessages}
            setMessageSent={setMessageSent}
            userId={userId}
            selectedAll={selectedAll}
          />
        );
      case 1:
        return <Vendalia vendaliaMsg={vendaliaMsg} setMessageSent={setMessageSent}
          userId={userId}
          selectedAll={selectedAll} />;
      case 2:
        return <Sent sentMsg={sentMsg} setMessageSent={setMessageSent}
          userId={userId}
          selectedAll={selectedAll} />;
      case 3:
        return <Unread unreadMsgs={unreadMsgs} setMessageSent={setMessageSent}
          userId={userId}
          selectedAll={selectedAll} />;
      case 4:
        return <Recycled recycledMessage={recycledMessage} setMessageSent={setMessageSent}
          userId={userId}
          selectedAll={selectedAll} />;
      default:
        break;
    }
  };

  useEffect(() => {
    // console.clear();
    console.log('User Data:', userData);

    // Set userId from userData
    if (userData && userData[0]?.id) {
      setUserId(userData[0].id);
    }

    const getMessages = async () => {
      if (!userId) return; // Ensure userId is set before fetching messages

      try {
        const messages = await getMessagesFunc(userId);

        // Initialize empty arrays to store messages of each type
        const vendaliaMsgInst = [];
        const inboxMessagesInst = [];
        const receivedMsgInst = [];
        const sentMsgInst = [];
        const rescMsgInst = [];
        const readMsgInst = [];
        const unReadMsgInst = [];

        messages?.forEach((message) => {
          // console.clear();
          console.log(message.read)

          if (message.recycled == 0) {

            if (message.from_vendalia === 1) {
              vendaliaMsgInst.push(message);
            } else {
              inboxMessagesInst.push(message)
            }

            if (message.message_type === 'Received') {
              receivedMsgInst.push(message);
            } else {
              sentMsgInst.push(message);
            }

            if (message.read == null) {
              console.log('hkpn')
              unReadMsgInst.push(message)
            } else {
              readMsgInst.push(message)
            }

          } else {
            rescMsgInst.push(message)
          }

        });

        // Update states with arrays containing all messages of each type
        setVendaliaMsg(vendaliaMsgInst);
        setInboxMessages(inboxMessagesInst);
        setRecycledMessage(rescMsgInst);
        setReceivedMsg(receivedMsgInst)
        setSentMsg(sentMsgInst)
        setReadMsgs(readMsgInst)
        setUnreadMsgs(unReadMsgInst)

        console.log('All Messages:', messages);
        console.log('Received Messages:', receivedMsgInst);
        console.log('Vendalia Messages:', vendaliaMsgInst);
        console.log('Sent Messages:', sentMsgInst);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    getMessages();
  }, [userData, userId, messageSent, messagesUpdated]); // Dependencies include userId to trigger re-fetch when it changes

  console.log('Rendered Received Messages:', receivedMsg);

  return (
    <div className="w-full">
      {/* header */}
      <div className="flex justify-between border-b border-b-[#ccc] py-4">
        <h2 className="text-xl font-semibold">Mensajes</h2>
      </div>

      {/* listings body */}
      <div className="mt-2 lg:mt-6 flex flex-col lg:flex-row justify-start">
        {/* left side */}
        <div className="w-full lg:w-[25%] lg:border-r border-[#ccc] p-4 lg:min-h-[80vh] overflow-x-auto">
          <ul className="flex overflow-x-auto lg:flex-col p-0">
            <li className="w-full min-w-[100%]">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setStep(0);
                }}
                className={`hover:bg-[#ccc] w-full cursor-pointer py-2 px-4 mb-2 lg:mb-6 block rounded-full whitespace-nowrap ${step === 0 ? 'bg-[#f2f2f2]' : ''
                  }`}
              >
                Bandeja de entrada
              </a>
            </li>
            <li className="w-full min-w-[100%]">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setStep(1);
                }}
                className={`hover:bg-[#ccc] w-full cursor-pointer py-2 px-4 mb-2 lg:mb-6 block rounded-full whitespace-nowrap ${step === 1 ? 'bg-[#f2f2f2]' : ''
                  }`}
              >
                Desde Vendalia
              </a>
            </li>
            <li className="w-full min-w-[100%]">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
                className={`hover:bg-[#ccc] w-full cursor-pointer py-2 px-4 mb-2 lg:mb-6 block rounded-full whitespace-nowrap ${step === 2 ? 'bg-[#f2f2f2]' : ''
                  }`}
              >
                Enviado
              </a>
            </li>
            <li className="w-full min-w-[100%]">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
                className={`hover:bg-[#ccc] w-full cursor-pointer py-2 px-4 mb-2 lg:mb-6 block rounded-full whitespace-nowrap ${step === 3 ? 'bg-[#f2f2f2]' : ''
                  }`}
              >
                No leído
              </a>
            </li>
            <li className="w-full min-w-[100%]">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setStep(4);
                }}
                className={`hover:bg-[#ccc] w-full cursor-pointer py-2 px-4 mb-2 lg:mb-6 block rounded-full whitespace-nowrap ${step === 4 ? 'bg-[#f2f2f2]' : ''
                  }`}
              >
                Reciclado
              </a>
            </li>
          </ul>
        </div>

        {/* right side */}
        <div className="lg:p-4 border border-[#ccc] lg:border-0 w-full lg:w-[75%]">
          {step != 4 && <ul className='hidden lg:flex mb-4'>
            <li className='px-6 py-3 inline-block'><input type='checkbox' onChange={() => setSelectedAll(!selectedAll)} /></li>
            <li><a className='px-6 py-3 inline-block hover:bg-[#f2f2f2] rounded-full' href="#" onClick={e => recycleMessages(e)}>Papelera de reciclaje</a></li>
            <li><a className='px-6 py-3 inline-block hover:bg-[#f2f2f2] rounded-full' href="#" onClick={e => unreadMessages(e)}>Marcar como no leído</a></li>
            <li><a className='px-6 py-3 inline-block hover:bg-[#f2f2f2] rounded-full' href='#' onClick={e => readMessages(e)}>Marcar como leído</a></li>
          </ul>}

          {updateSucces ? <p className='text-sm text-green-700'>{updateSucces}</p> : ''}
          {updateErrror ? <p className='text-sm text-red-700'>{updateErrror}</p> : ''}
          <hr className='hidden lg:block' />
          {returnMessageStep()}
        </div>
      </div>
    </div>
  );
}
