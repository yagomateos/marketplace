import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials";
import {findUser} from "../lib/middleware/user";

const userLogin = async (credentials) => {
    try {
        const user = await findUser(credentials.email, credentials.password);
        // console.log('comes here');
        // console.log(user)
        if(user){
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

                    if (userav) {
                        const user = { id: 1, name: userav.username, email: credentials.email }

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

            if (token) {
                session.user.id = token.id;
                session.user.username = token.name;
                session.user.email = token.email;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        }
    },
    trustHost: process.env.TRUSTED_HOST || "localhost:3000",
});
