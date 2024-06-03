'use server'

import { findUser, createNew } from '../../middleware/user';

export const registerUser = async (formData) => {

    console.log(formData)

    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    const repeatPassword = formData.get('password-again')
    const userType = formData.get('user-type')

    console.log(username, email, password, repeatPassword, userType)

    if (!username) {
        throw new Error('username empty')
        return;
    }

    if (!email) {
        throw new Error('email empty')
        return;
    }

    if (password !== repeatPassword) {
        throw new Error('passwords not match')
        return;
    }

    if (!userType) {
        throw new Error('usertype empty')
        return;
    }

    try {
        const user = await findUser(email, password);

        if (!user) {
            try {
                const newUser = await createNew(username, email, password, userType)
                console.log(newUser)
                if (newUser) {
                    return true;
                }
            } catch (error) {
                throw error;
            }

        } else {
            throw new Error('user already exists');
        }

    } catch (error) {
        throw error;
    }


}