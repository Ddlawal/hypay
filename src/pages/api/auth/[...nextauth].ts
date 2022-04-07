import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    // response_type: 'code',
                },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile }) {
            const isUserSignedIn = user ? true : false
            // make a http call to our graphql api
            // store this in postgres
            if (isUserSignedIn) {
                token.id = user?.id.toString()
            }
            return { token, account, profile }
        },
        async session({ session, token }) {
            if (token) {
                session.jwt = token.token
            }
            return session
        },
    },
})
