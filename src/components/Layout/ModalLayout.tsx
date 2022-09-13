import React, { ReactNode } from 'react'
import { Card } from '../Card'

type IModalLayout = { children: ReactNode; width?: string }

const ModalLayout = ({ children, width = 'md:w-4/12' }: IModalLayout) => {
    return (
        <div className="pointer fixed top-0 h-screen w-screen overflow-y-scroll bg-[rgba(0,0,0,0.5)]">
            <Card
                rounded
                padding="p-4"
                className={`mx-auto mt-[6rem] max-h-[80vh] w-11/12 items-center overflow-y-auto  rounded md:ml-[15%] md:mt-[7%] md:max-h-[80vh] ${width}`}
            >
                {children}
            </Card>
        </div>
    )
}

export default ModalLayout
