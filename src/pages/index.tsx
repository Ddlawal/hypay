import type { NextPage } from 'next'
import { LogoIcon } from '../components/Icons'

const Home: NextPage = () => {
    return (
        <>
            <LogoIcon color="#36076B" />
            <h1 className="text-3xl font-bold">Hypay</h1>
        </>
    )
}

export default Home
