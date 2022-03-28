import React from 'react'
import Link from 'next/link'
import { Button } from '../components/Button'

function Notfound() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <h1>404</h1>
            <Button primary>
                <Link href="/dashboard/home">
                    <a>Go back home</a>
                </Link>
            </Button>
        </div>
    )
}

export default Notfound
