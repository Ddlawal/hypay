import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    secret: process.env.JWT_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                    authorizationUrl:
                        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
                },
            },
        }),
    ],
    callbacks: {
        redirect({ url, baseUrl }) {
            if (url.startsWith(baseUrl)) {
                return url
            }
            // Allows relative callback URLs
            else if (url.startsWith('/')) {
                return new URL(url, baseUrl).toString()
            } else {
                return baseUrl
            }
        },
        async jwt({ token, user }) {
            const isUserSignedIn = user ? true : false

            if (isUserSignedIn) {
                token.id = user?.id.toString()
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.jwt = token.token
            }

            return session
        },
    },
})
