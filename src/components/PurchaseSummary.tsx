import React from 'react'
import Image from 'next/image'
import { Card } from '../components/Card'
import { LockIcon } from '../components/Icons'
import { Button } from '../components/Button'
import { useRouter } from 'next/router'

export const PurchaseSummary = () => {
    const { push } = useRouter()

    const goToIdentification = () => push('/store/checkout/identification')

    return (
        <Card>
            <div className="font-bold">Produto</div>
            <div className="my-4 flex gap-x-5 rounded bg-[#F2F2F2] py-4 px-2">
                <div className="w-56">
                    <Image src="/images/jean-jacket.png" layout="responsive" height={100} width={100} quality={100} />
                </div>
                <div>
                    <div className="leading-6 tracking-wider">Jaqueta jeans azul claro com camurça</div>
                    <div className="text-xs">
                        Jaqueta jeans azul claro com camurça feita de lã de carneiro. Possui bolsos e botões na parte da
                        frente.
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-8">
                <div className="flex items-center justify-between">
                    <div>Quantidade</div>
                    <div>1</div>
                </div>
                <div className="flex items-center justify-between">
                    <div>Valor</div>
                    <div>R$30</div>
                </div>
                <div className="flex items-center justify-between">
                    <div>Frete</div>
                    <div>R$10</div>
                </div>
                <div className="flex items-center justify-between">
                    <div>Total</div>
                    <div>R$40</div>
                </div>
            </div>
            <Button
                className="mt-10 block w-full bg-black text-lg font-bold text-white"
                padding="py-4"
                onClick={goToIdentification}
            >
                Continuar
            </Button>
            <div className="my-8 text-center text-lg font-semibold">Escolher mais produtos</div>
            <div className="flex items-end justify-center gap-x-1 text-xl font-semibold">
                <LockIcon size={40} /> Compra 100% segura
            </div>
        </Card>
    )
}
