import React from 'react'
import Image from 'next/image'
import cx from 'classnames'

import { Card } from '../Card'
import { LockIcon } from '../Icons'
import { Button } from '../Button'
import { useMediaQuery } from '../../hooks/useMediaQuery'

type PurchaseSummaryProps = {
    onSubmit: () => void
    isSideSummary?: boolean
}

export const PurchaseSummary = ({ onSubmit, isSideSummary }: PurchaseSummaryProps) => {
    const isMobileScreen = !useMediaQuery('md')

    return (
        <Card rounded={isSideSummary}>
            <div className="font-bold">Produto</div>
            <div
                className={cx(
                    isMobileScreen || isSideSummary ? 'flex-col' : 'md:flex-row md:bg-[#F2F2F2] md:px-2',
                    'my-4 flex gap-x-5 rounded py-4'
                )}
            >
                <div className={cx(isMobileScreen || isSideSummary ? 'w-full' : 'md:w-56')}>
                    <Image src="/images/jean-jacket.png" layout="responsive" height={100} width={100} quality={100} />
                </div>
                <div>
                    <div
                        className={cx(
                            isMobileScreen || isSideSummary ? '' : 'md:text-sm',
                            'my-3 leading-6 tracking-wider text-hypay-gray md:my-0 md:mb-2 md:mt-1 md:leading-4'
                        )}
                    >
                        Jaqueta jeans azul claro com camurça
                    </div>
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
            {isSideSummary ? null : (
                <>
                    <Button
                        className="mt-10 block w-full bg-black text-lg font-bold text-white"
                        padding="py-4"
                        onClick={onSubmit}
                    >
                        Continuar
                    </Button>
                    <div className="my-8 text-center text-lg font-semibold">Escolher mais produtos</div>
                    <div className="flex items-end justify-center gap-x-1 text-xl font-semibold">
                        <LockIcon size={32} /> Compra 100% segura
                    </div>
                </>
            )}
        </Card>
    )
}
