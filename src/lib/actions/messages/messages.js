'use server'

import { getMessages, setMessages } from "../../middleware/messages/messages"

export const getMessagesFunc = async (userId) => {
    try {
        const messages = getMessages(userId)
        return messages;
    } catch (error) {
        throw error;
    }
}

export const sendMessage = async (receiverId , message, senderId)=>{
    try {
        const sentMessage = await setMessages(receiverId , message, senderId)
        return sentMessage;
    } catch (error) {
        throw error;
    }

}