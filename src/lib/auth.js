import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials";
import {findUser} from "../lib/middleware/user";

const userLogin = async (credentials) => {
    try {
        const user = await findUser(credentials.email, credentials.password);
        
        if(user){
            user.keepMeLoggedIn = credentials.keepMeLoggedIn;
            console.log('hkpn')
            console.log(user)
            return user;
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                // Replace with your own logic to find the user by username or email

                try {
                    const userav = await userLogin(credentials);
// console.log(userav.identity_url)
                    if (userav) {
                        const user = { id: userav.id, name: userav.username, email: credentials.email , image:userav.identity_url , keepMeLoggedIn: userav.keepMeLoggedIn }

                        if (user) {
                            return Promise.resolve(user)
                        } else {
                            return Promise.resolve(null)
                        }
                    }

                } catch (error) {

                }
                // // Example user object:

            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // Your custom sign in logic
            return true; // The sign-in callback must return true to indicate successful sign in
        },
        async session({ session, user, token }) {
            // Custom session handling
            console.log(token.keepMeLoggedIn)

            if (token) {
                session.user.id = token.id;
                session.user.username = token.name;
                session.user.email = token.email;
                session.user.image = token.image
                session.user.providers = token.providers || [];
                session.maxAge = token.keepMeLoggedIn=='true' ? 30 * 24 * 60 * 60 : 0;
                console.log(session.maxAge)
            }else{
                session.maxAge =  0;
            }
            return session;
        },
        async jwt({ token, user, account }) {

            console.log('comes there')
            console.log(user)
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                 // Conditionally assign token.image based on the provider
                 if (account && account.provider === 'Credentials') {
                    token.image = user.identity_url; // Use identity_url for CredentialsProvider
                } else {
                    token.image = user.image; // Use image for other providers
                }

                token.keepMeLoggedIn = user.keepMeLoggedIn
            }

            if (account) {

                console.log(account)
                console.log(account.keepMeLoggedIn)
                const provider = account.provider;
                token.providers = token.providers || [];
                if (!token.providers.includes(provider)) {
                  token.providers.push(provider); // Add provider to token if not already there
                }
              }
            return token;
        }
    },
    trustHost: process.env.TRUSTED_HOST || "localhost:3000",
});