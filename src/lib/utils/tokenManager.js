'use server'

import { saveToken , getTokenByemail } from '../middleware/utils/token'

const generateToken = (type) => {
    // Get the current date and time
    const currentDateTime = new Date();

    // Convert the datetime to seconds (UNIX timestamp)
    const seconds = Math.floor(currentDateTime.getTime() / 1000);

    // Define a constant string
    const constantString = 'vendalia';

    // Generate the token by concatenating type, seconds, and the constant string
    const token = `${type}${seconds}${constantString}`;

    return token;
}

export const TokenManager = async (type, email) => {
    const newToken = generateToken(type)
    console.log(newToken)
    try {
        const savedTokenId = await saveToken(type, newToken, email)
        console.log(savedTokenId)
        return newToken;
    } catch (error) {
        throw error;
    }

}

export const matchEmailToken = async (email, token) => {
    try {
        const dbToken = await getTokenByemail(email);
        if(dbToken&&dbToken==token){
            console.log('validated')
            return true;
        }else{
            console.log('not matched!')
            throw new Error('token not matched!')
        }
    } catch (error) {
      console.log(error)  
      throw error;
    }
   
}