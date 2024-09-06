import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUser } from "../lib/middleware/user";

const userLogin = async (credentials) => {
  try {
    const user = await findUser(credentials.email, credentials.password);
    if (user) {
      return user;
    }
  } catch (error) {
    console.log(error.message);
  }
};

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
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const userav = await userLogin(credentials);
          if (userav) {
            const user = {
              id: userav.id,
              name: userav.username,
              email: credentials.email,
              image: userav.identity_url,
            };

            if (user) {
              return Promise.resolve(user);
            } else {
              return Promise.resolve(null);
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      return true; // Sign-in logic
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.providers = token.providers || []; // Pass providers to session
      }
      return session;
    },
    async jwt({ token, account }) {
      // Track the provider the user used to log in
      if (account) {
        const provider = account.provider;
        token.providers = token.providers || [];
        if (!token.providers.includes(provider)) {
          token.providers.push(provider); // Add provider to token if not already there
        }
      }
      return token;
    },
  },
  trustHost: process.env.TRUSTED_HOST || "localhost:3000",
});
