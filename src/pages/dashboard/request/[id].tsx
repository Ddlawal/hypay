import React, { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { Input } from '../../../components/form'
import { CheckIcon } from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { SelectField } from '../../../components/Select'
import { Timeline, TimelineEvent } from '../../../components/Timeline'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { useRequests } from '../../../hooks/useRequests'
import { RequestType } from '../../../interfaces/requests'
import { COLORS } from '../../../lib/constants/colors'

const requestAction = [
    {
        label: 'Preciso estornar valor',
        value: 'Preciso estornar valor',
    },
    {
        label: 'O produto foi roubado',
        value: 'O produto foi roubado',
    },
    {
        label: 'O produto foi extraviado',
        value: 'O produto foi extraviado',
    },
]

const timelineLabels = [
    'Aguardando pagamento',
    'Processando pagamento',
    'Pagamento efetuado',
    'Pedido enviado',
    'Pedido entregue',
]

const RequestDetails: NextPage = () => {
    const isDesktop = useMediaQuery('md')
    const { query } = useRouter()
    const requestId = query.id as string

    const { request } = useRequests(requestId)
    const { amount, cost_of_frieght, orderNo } = request as RequestType
    const amt = Number(amount.split('R$ ')[1])
    const cof = Number(cost_of_frieght.split('R$ ')[1])
    let total: string | number = amt + cof
    total = 'R$ ' + total + '.00'

    return (
        <PrimaryLayout currentTabIndex={2} isNavBack navHeader="Histórico de pedidos">
            <div className="px-4 py-4 md:px-12">
                <div className="flex items-center gap-x-3">
                    <div className="font-bold">Histórico de pedidos</div>
                    <div className="text-sm">Pedido {orderNo}</div>
                </div>
                <div>Status do pedido</div>
                <div className="relative mt-6 mb-4 flex justify-start md:mb-16 md:justify-center">
                    <Timeline
                        orientation={isDesktop ? 'horizontal' : 'vertical'}
                        clipped={!isDesktop}
                        progressBarBackground={COLORS.BLACK}
                        gap={isDesktop ? 90 : 30}
                    >
                        {timelineLabels.map((label, i) => (
                            <TimelineEvent
                                label={label}
                                eventSize={isDesktop ? 45 : 35}
                                border="none"
                                bgColor={COLORS.GREEN}
                                key={`timeline${i}`}
                                isHorizontal={isDesktop}
                                labelTextWidth={200}
                            >
                                <span className="rounded-full border border-white bg-white">
                                    <CheckIcon color={COLORS.GREEN} />
                                </span>
                            </TimelineEvent>
                        ))}
                    </Timeline>
                </div>
                <div className="mt-12 grid grid-cols-10 gap-y-10 md:gap-x-10">
                    <div className="col-span-10 md:col-span-3">
                        <div className="mb-2 text-sm">Informações de pagamento</div>
                        <Card
                            rounded
                            padding="p-4"
                            className="flex flex-row justify-between gap-y-8 text-sm md:flex-col"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <div className="text-hypay-gray">Produto</div>
                                <div>{amount}</div>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <div className="text-hypay-gray">Frete</div>
                                <div>{cost_of_frieght}</div>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <div className="text-hypay-gray">Total</div>
                                <div>{total}</div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-span-10 md:col-span-3">
                        <div className="mb-2 flex gap-4 text-sm md:flex-col">
                            <div>
                                <div className="mb-2">Quantidade de produtos</div>
                                <Input padding="py-1 px-4" />
                            </div>
                            <div>
                                <div className="mb-2">Código de rastreio </div>
                                <Input padding="py-1 px-4" />
                            </div>
                        </div>
                        <Button primary className="mt-4 w-full">
                            Salvar alterações
                        </Button>
                    </div>
                    <div className="col-span-10 md:col-span-4">
                        <div className="mb-2 text-sm">Problemas com o pedido? Temos a solução.</div>
                        <SelectField<string | null>
                            options={requestAction}
                            name="product-list-actions"
                            placeholder={<span className="text-hypay-primary">Escolha uma opção</span>}
                            value={''}
                            onChange={() => console.log('')}
                        />
                    </div>
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default RequestDetails
