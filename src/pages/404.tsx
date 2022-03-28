import React from 'react'
import Link from 'next/link'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { COLORS } from '../lib/constants/colors'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Notfound() {
    const { back } = useRouter()
    return (
        <div className=" flex h-screen w-screen flex-col items-center justify-between  bg-white p-4">
            <header className="flex h-11 w-full items-center justify-center">
                <Logo color={COLORS.PINK} labelColor="text-hypay-pink" labelled={{ labelPosition: 'bottom' }} />
            </header>
            <main className="flex items-center justify-between">
                <Image src="/images/meditation.png" alt="404 image" width="280" height="280" />
            </main>
            <footer className="text-center md:w-8/12">
                <h1 className="text-left text-[4rem] font-bold text-neutral-700">Something's wrong here.</h1>
                <p className="mx-auto text-left text-2xl font-semibold text-neutral-800 ">
                    This is a 404 error, which means you've clicked on a bad link or entered an invalid URL. Maybe what
                    you are looking for can be found at Hypay.com. P.S. hypay links are case sensitive.
                </p>
                <Button primary onClick={() => back()}>
                    Go back
                </Button>
            </footer>
        </div>
    )
}

export default Notfound
