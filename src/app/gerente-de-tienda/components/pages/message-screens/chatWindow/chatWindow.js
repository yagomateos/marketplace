'use client';

import { useState } from 'react';
import { sendMessage } from '../../../../../../lib/actions/messages/messages';

export const Conversation = ({ senderId, messages, onBack, currentReciver, setMessageSent, userId }) => {
  const [replyMessage, setReplyMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Filter and sort messages for the current conversation
  const conversationMessages = messages
    .filter((msg) => msg.sender_id === senderId || msg.receiver_id === senderId)
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  const handleSendReply = async () => {
    if (!replyMessage.trim()) {
      alert('Message cannot be empty!');
      return;
    }

    console.log(`Sending message to ${senderId}: ${replyMessage}`);
    setIsSending(true);

    try {
      const messageSent = await sendMessage(currentReciver, replyMessage, userId);
      console.log('Message sent:', messageSent);
      setMessageSent(messageSent);
      setReplyMessage(''); // Clear the input
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <button
        className="mb-4 text-sm text-green-700 underline"
        onClick={onBack}
        disabled={isSending}
      >
        Back to Inbox
      </button>
      <h2 className="text-xl mb-6 font-semibold">Conversation with User {senderId}</h2>
      <div className="messages flex flex-col max-w-4xl mb-6 space-y-4">
        {conversationMessages.map((msg) => (
          <div
            key={msg.id}
            className={`message p-3 border border-[#ccc] rounded-2xl max-w-[70%] ${
              msg.message_type !== 'Received' ? 'self-end bg-green-50' : 'bg-gray-50'
            }`}
          >
            <p>
              <strong>{msg.message_type === 'Received' ? 'Them' : 'You'}</strong>
            </p>
            <p>{msg.message}</p>
            <p className="text-xs text-green-700">
              <em>{new Date(msg.timestamp).toLocaleString()}</em>
            </p>
          </div>
        ))}
      </div>
      <div className="reply w-full max-w-4xl">
        <textarea
          className="w-full h-[150px] border border-[#ccc] block p-4 rounded-lg mb-4 resize-none"
          value={replyMessage}
          onChange={(e) => setReplyMessage(e.target.value)}
          placeholder="Type your reply..."
          disabled={isSending}
        />
        <button
          className="py-3 px-6 border border-[#ccc] bg-green-100 hover:bg-green-200 rounded-lg disabled:bg-gray-200"
          onClick={handleSendReply}
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};
