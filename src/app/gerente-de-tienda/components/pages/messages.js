import React, { useEffect, useState } from 'react';
import Inbox from './message-screens/inbox';
import Vendalia from './message-screens/vendalia';
import Sent from './message-screens/sent';
import Unread from './message-screens/unread';
import { getMessagesFunc } from '../../../../lib/actions/messages/messages';

export default function Messages({ userData }) {
  const [step, setStep] = useState(0);
  const [receivedMsg, setReceivedMsg] = useState([]);
  const [vendaliaMsg, setVendaliaMsg] = useState([]);
  const [sentMsg, setSentMsg] = useState([]);
  const [userId, setUserId] = useState(null);
  const [messageSent, setMessageSent] = useState(null);

  const returnMessageStep = () => {
    // Check if userId is set before rendering the Inbox component
    if (!userId) {
      return <div>Loading...</div>; // Show a loading state until userId is set
    }

    switch (step) {
      case 0:
        return (
          <Inbox
            receivedMsg={receivedMsg}
            sentMsg={sentMsg}
            setMessageSent={setMessageSent}
            userId={userId}
          />
        );
      case 1:
        return <Vendalia vendaliaMsg={vendaliaMsg} />;
      case 2:
        return <Sent sentMsg={sentMsg} />;
      case 3:
        return <Unread />;
      default:
        break;
    }
  };

  useEffect(() => {
    console.clear();
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
        const receivedMsgInst = [];
        const sentMsgInst = [];

        messages?.forEach((message) => {
          if (message.message_type === 'Received') {
            if (message.from_vendalia === 1) {
              vendaliaMsgInst.push(message);
            } else {
              receivedMsgInst.push(message);
            }
          } else {
            sentMsgInst.push(message);
          }
        });

        // Update states with arrays containing all messages of each type
        setVendaliaMsg(vendaliaMsgInst);
        setReceivedMsg(receivedMsgInst);
        setSentMsg(sentMsgInst);

        console.clear();
        console.log('All Messages:', messages);
        console.log('Received Messages:', receivedMsgInst);
        console.log('Vendalia Messages:', vendaliaMsgInst);
        console.log('Sent Messages:', sentMsgInst);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    getMessages();
  }, [userData, userId, messageSent]); // Dependencies include userId to trigger re-fetch when it changes

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
          </ul>
        </div>

        {/* right side */}
        <div className="lg:p-4 border border-[#ccc] lg:border-0 w-full lg:w-[75%]">
          <ul className='hidden lg:flex mb-4'>
            <li className='px-6 py-3 inline-block'><input type='checkbox' /></li>
            <li><a className='px-6 py-3 inline-block hover:bg-[#f2f2f2] rounded-full' href="#">Papelera de reciclaje</a></li>
            <li><a className='px-6 py-3 inline-block hover:bg-[#f2f2f2] rounded-full' href="#">Marcar como no leído</a></li>
            <li><a className='px-6 py-3 inline-block hover:bg-[#f2f2f2] rounded-full' href='#'>Marcar como leído</a></li>
          </ul>
          <hr className='hidden lg:block' />
          {returnMessageStep()}
        </div>
      </div>
    </div>
  );
}
