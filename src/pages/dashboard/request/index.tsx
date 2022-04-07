import React, { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { PrimaryLayout } from '../../../components/Layout'
import { SelectField } from '../../../components/Select'
import { Table } from '../../../components/Table'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { useRequests } from '../../../hooks/useRequests'
import { RequestType } from '../../../interfaces/requests'

const Filters = () => (
    <div className="mb-8 grid grid-cols-6 gap-y-0 gap-x-4 lg:grid-cols-12">
        <div className="col-span-6 lg:col-span-3">
            <SelectField<string | null>
                options={[]}
                name="product-list-actions"
                label="Ações"
                labelClassName="text-sm"
                placeholder=""
                value={''}
                onChange={(v) => console.log(v)}
            />
        </div>
        <div className="col-span-6 lg:col-span-3">
            <SelectField<string | null>
                options={[]}
                name="product-list-actions"
                label="Forma de pagamento"
                labelClassName="text-sm"
                value={''}
                onChange={(v) => console.log(v)}
            />
        </div>
        <div className="col-span-6 lg:col-span-3">
            <SelectField<string | null>
                options={[]}
                name="product-list-actions"
                label="Status de pagamento"
                labelClassName="text-sm"
                value={''}
                onChange={(v) => console.log(v)}
            />
        </div>
        <div className="col-span-6 mt-6 grid grid-cols-2 gap-x-2 md:mt-0 lg:col-span-3">
            <div className="col-span-1 flex items-end">
                <Button
                    padding="px-3 py-1.5"
                    className="w-full truncate border border-hypay-secondary text-xs text-hypay-secondary"
                >
                    Limpar filtros
                </Button>
            </div>
            <div className="col-span-1 flex items-end">
                <Button primary padding="px-3 py-1.5" className="w-full border border-hypay-pink text-xs">
                    Filtrar
                </Button>
            </div>
        </div>
    </div>
)

const Request: NextPage = () => {
    const isDesktop = useMediaQuery('md')
    const router = useRouter()
    const [orderId, setId] = useState<string>('')
    const { requests } = useRequests()

    const setOrderId = (id: string) => setId(id)

    const showDetails = () => router.push(`/dashboard/request/${orderId}`)

    return (
        <PrimaryLayout currentTabIndex={2}>
            <div className="p-4">
                <div className="font-bold">Histórico de pedidos</div>
                <div className="mt-3">Ordenar por</div>
                <Filters />
                {isDesktop ? (
                    <Table<RequestType>
                        setId={setOrderId}
                        uniqueKey="id"
                        headerClassName="lg:text-xs text-[10px] text-center"
                        bodyClassName="lg:text-[10px] text-[8px]"
                        headers={[
                            'Número do pedido',
                            'Código do produto',
                            'Situação do pedido',
                            'Valor total',
                            'Data/Hora',
                            'Tipo de frete',
                            'Valor do frete',
                            'Forma de pagamento',
                            'Detalhes',
                        ]}
                        keys={[
                            'orderNo',
                            'product_code',
                            'status',
                            'amount',
                            'date',
                            'frieght_type',
                            'cost_of_frieght',
                            'payment_method',
                            null,
                        ]}
                        rows={requests}
                    >
                        <Button padding="py-1 px-2" className="w-24 truncate" size="xs" primary onClick={showDetails}>
                            Mais detalhes
                        </Button>
                    </Table>
                ) : (
                    <div className="mt-4">
                        {requests.map(({ id, orderNo, status, date, payment_method, amount }, i) => {
                            return (
                                <Card rounded="rounded-3xl" padding="px-5 py-8" key={i} className="mt-6">
                                    <div className="flex justify-between">
                                        <div>Pedido {orderNo}</div>
                                        <div className="text-right">
                                            {status === 'confirmed' && (
                                                <span className="text-hypay-green">Pagamento Efetuado</span>
                                            )}
                                            {status === 'cancelled' && (
                                                <span className="text-hypay-red">Pedido Cancelado</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-5 flex justify-between text-xs">
                                        <div>
                                            <div className="text-hypay-gray">Data</div>
                                            <div>{date}</div>
                                        </div>
                                        <div>
                                            <div className="text-hypay-gray">Forma de Pag.</div>
                                            <div>{payment_method}</div>
                                        </div>
                                        <div>
                                            <div className="text-hypay-gray">Valor Total</div>
                                            <div>{amount}</div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <Button
                                            className="w-full"
                                            primary
                                            onClick={() => router.push(`/dashboard/request/${id}`)}
                                        >
                                            Mais detalhes
                                        </Button>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                )}
            </div>
        </PrimaryLayout>
    )
}

export default Request
