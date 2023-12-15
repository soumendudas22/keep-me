import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
    callbacks: {
        session({ session, user }) {
          if (session?.user) {
            session.user.name = user?.name;
          }
          return session;
        },
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        })
    ],
    pages: {
      signIn: '/auth/signin',
    },
})