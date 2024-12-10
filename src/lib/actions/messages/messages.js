'use server'

import { getMessages, setMessages, updateMsg } from "../../middleware/messages/messages"

export const getMessagesFunc = async (userId) => {
    try {
        const messages = getMessages(userId)
        return messages;
    } catch (error) {
        throw error;
    }
}

export const sendMessage = async (receiverId, message, senderId) => {
    try {
        const sentMessage = await setMessages(receiverId, message, senderId)
        return sentMessage;
    } catch (error) {
        throw error;
    }

}

export const updateMsgInst = async (type, ids) => {
    try {
        const updated = await updateMsg(type, ids)
        return updated;
    } catch (error) {
        throw error;
    }
}