import { Account, Profile } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
    interface JWT {
        account: Account | undefined
        profile: Profile | undefined
        token: JWT
    }
}

declare module 'next-auth' {
    interface Session {
        jwt: JWT
    }
}
