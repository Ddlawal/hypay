import { JWT } from 'next-auth/jwt'
import NextAuth, { Account, Profile } from 'next-auth'

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        jwt: {
            token: { account: Account | undefined; profile: Profile | undefined }
        }
    }
}
