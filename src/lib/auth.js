import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
            params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code",
            },
        },
    }), FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {

            return true; // The sign-in callback must return true to indicate successful sign in

        },
        async session({ session, user, token }) {
            return session; // Use the session callback to manage custom session handling
        }
    }

})

