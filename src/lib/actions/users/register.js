'use server'

import { findUser, createNew } from '../../middleware/user';


export const registerUser = async (formData) => {

    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    // const repeatPassword = formData.get('password-again')
    const userType = 'buyer'

    console.log(username, email, password,  userType)

    if (!username) {
        throw new Error('Nombre de usuario vacío')
        return;
    }

    if (!email) {
        throw new Error('Correo electrónico vacío')
        return;
    }

    if (!userType) {
        throw new Error('Usertype vacío')
        return;
    }

    try {
        const user = await findUser(email, password);

        if (!user) {
            try {
                const newUser = await createNew(username, email, password, userType)
                console.log(newUser)
                if (newUser) {

                    // send en email
                    // sendEmail()
                    return true;
                }
            } catch (error) {
                throw error;
            }

        } else {
            throw new Error('El usuario ya existe');
        }

    } catch (error) {
        throw error;
    }


}