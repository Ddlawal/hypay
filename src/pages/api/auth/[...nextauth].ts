import NextAuth, { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GoogleProvider from 'next-auth/providers/google'

type UserSession = {
    session: Session
    jwt?: JWT
}

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
            const userSession: UserSession = { session: session }
            // Send properties to the client, like an access_token from a provider.
            if (token) {
                userSession.jwt = token
            }
            return userSession
        },
    },
})
