import React, { useState, useEffect } from 'react';
import { sendMessage } from '../../../../../lib/actions/messages/messages';

export default function Inbox({ receivedMsg, sentMsg , setMessageSent , userId }) {
  const [currentConversation, setCurrentConversation] = useState(null);
  const [currentReciver , setCurrentReciver] = useState(null);
  const [messagesArray, setMessagesArray] = useState([]);

  useEffect(() => {
    if (Array.isArray(receivedMsg) && Array.isArray(sentMsg)) {
      // Combine received and sent messages
      setMessagesArray([...receivedMsg, ...sentMsg]);
    }
  }, [receivedMsg, sentMsg]);

  // Group messages to show only the last message from each sender in the inbox view
  const lastMessages = groupMessagesBySender(messagesArray);

  const openConversation = (senderId , reciverId) => {
    setCurrentConversation(senderId);

    if(reciverId != userId){
      setCurrentReciver(reciverId)
    }else{
      setCurrentReciver(senderId)
    }
    
  };

  return (
    <div className="w-full h-full p-4">
      {currentConversation ? (
        <Conversation
          senderId={currentConversation}
          messages={messagesArray}
          onBack={() => setCurrentConversation(null)}
          currentReciver={currentReciver}
          setMessageSent = {setMessageSent}
          userId={userId}
        />
      ) : (
        lastMessages.length > 0 ? (
          lastMessages.map((message) => (
            <div
              key={message.id}
              onClick={() => openConversation(message.sender_id , message.receiver_id)}
              className={`message-item cursor-pointer w-full p-4 border border-[#ccc] mb-4 rounded-[20px]`}
            >
              <p><strong>User {message.sender_id}</strong></p>
              <p>{message.message}</p>
              <p className='text-xs text-green-700'><em>{new Date(message.timestamp).toLocaleString()}</em></p>
            </div>
          ))
        ) : (
          <h3>No hay mensajes para mostrar</h3>
        )
      )}
    </div>
  );
}

// Helper function to group messages by sender and select the last message
const groupMessagesBySender = (messages) => {
  const grouped = {};

  messages.forEach((message) => {
    const senderId = message.sender_id;
    if (
      !grouped[senderId] ||
      new Date(message.timestamp) > new Date(grouped[senderId].timestamp)
    ) {
      grouped[senderId] = message;
    }
  });

  return Object.values(grouped);
};

// Conversation component to display the full thread with a sender
const Conversation = ({ senderId, messages, onBack , currentReciver , setMessageSent , userId}) => { 
  
  const [replyMessage, setReplyMessage] = useState('');

  // Filter to get both sent and received messages for the selected sender, and sort by timestamp
  const conversationMessages = messages
    .filter(
      (msg) =>
        msg.sender_id === senderId || msg.receiver_id === senderId
    )
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  const handleSendReply = async () => {
    console.log(`Sending message to ${senderId}: ${replyMessage}`);
    setReplyMessage('');

    try {
      const messageSent = await sendMessage( currentReciver , replyMessage , userId )

      console.log(messageSent)
      setMessageSent(messageSent)
    } catch (error) {
      console.log(error)
    }

    
  };

  return (
    <div>
      <button className='mb-4 text-sm text-green-700' onClick={onBack}>Back to Inbox</button>
      <h2 className='text-xl mb-6 font-semibold'>Conversation with User {senderId}</h2>
      <div className="messages flex flex-col max-w-4xl">
        {conversationMessages.map((msg) => (
          <div key={msg.id} className={`message p-3 border border-[#ccc] rounded-2xl mb-4 w-max ${msg.message_type!=="Received" ? 'self-end' : ''}`}>
            <p><strong>{msg.message_type==="Received" ? 'Them' : 'You'}</strong></p>
            <p>{msg.message}</p>
            <p className='text-xs text-green-700'><em>{new Date(msg.timestamp).toLocaleString()}</em></p>
          </div>
        ))}
      </div>
      <div className="reply w-full mt-5 max-w-4xl text-right">
        <textarea
          className='w-full h-[200px] border border-[#ccc] block p-4 mb-4'
          value={replyMessage}
          onChange={(e) => setReplyMessage(e.target.value)}
          placeholder="Type your reply..."
        />
        <button className='ml-auto py-3 px-6 border border-[#ccc]' onClick={()=>handleSendReply()}>Send</button>
      </div>
    </div>
  );
};
