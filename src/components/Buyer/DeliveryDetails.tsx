import React from 'react'
import { Card } from '../Card'
import { EmailNotificationIcon, LocationIcon } from '../Icons'

export const DeliveryDetails = () => {
    return (
        <div className="my-6">
            <div>Detalhes da entrega</div>
            <Card className="mt-2 mb-4 flex items-center gap-x-8">
                <div className="flex-none">
                    <LocationIcon />
                </div>
                <div className="grow text-[0.6rem]">
                    <div className="mb-1 text-[0.8rem]">Rua Lorem Ipsum, 300</div>
                    <div>
                        Curitiba, Paraná - CEP 80060150
                        <br />
                        Rafael Crespo - 9999999999
                    </div>
                </div>
                <button className="flex-none text-sm">Alterar</button>
            </Card>
            <Card className="my-4 flex items-center gap-x-8 py-8">
                <div className="flex-none">
                    <EmailNotificationIcon />
                </div>
                <div className="grow text-[0.8rem]">Sua compra chegará entre dia 02/02 e 03/02</div>
                <button className="flex-none text-sm">Alterar</button>
            </Card>
        </div>
    )
}
