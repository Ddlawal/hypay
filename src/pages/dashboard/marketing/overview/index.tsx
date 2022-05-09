import React from 'react'
import { Button } from '../../../../components/Button'
import { Card } from '../../../../components/Card'
import {
    CartIcon,
    HandIcon,
    InstagramIcon,
    PauseIcon,
    SessionIcon,
    StopIcon,
    TagIcon,
} from '../../../../components/Icons'
import { PrimaryLayout } from '../../../../components/Layout'
import { useMediaQuery } from '../../../../hooks/useMediaQuery'
import { COLORS } from '../../../../lib/constants/colors'
import { AdsCard } from '../ads'

export const adsCardsContent = [
    {
        title: 'Tráfego por marketing',
        icon: <SessionIcon size={30} />,
        text: '2 campaign sessions',
    },
    {
        title: 'Vendas por marketing',
        icon: <CartIcon size={30} />,
        text: '120 orders',
    },
    {
        title: 'Custo de marketing',
        icon: <TagIcon color={COLORS.PINK} size={30} />,
        text: '130 sales',
    },
]

interface dataInterface {
    name: string
    status?: string
}

export const tableHeaderList: string[] = ['Name', 'Status', 'Cast', 'Sales', 'Sessions']
export const tableDataContents: dataInterface[] = [
    { name: '------------------------' },
    { name: '----------------' },
    { name: '----------------' },
    { name: '----------------' },
    { name: '----------------' },
]

export const instagramCampaign: dataInterface[] = [
    { name: 'New Year’s Campaing' },
    { name: 'active', status: 'Active' },
    { name: '$150' },
    { name: '$5505' },
    { name: '2' },
]

const WhiteTable = ({
    tableHeaderList,
    tableDataContents,
}: {
    tableHeaderList: string[]
    tableDataContents: dataInterface[]
}) => {
    return (
        <table className="my-2 w-full border-collapse overflow-hidden rounded-md bg-white">
            <thead className="border-b-2  border-gray-200 py-10 px-6">
                <tr className="">
                    {tableHeaderList.map((header, index: number) => (
                        <th key={index} className={`${index === 0 ? 'w-3/12' : ''} p-4 text-left`}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="rounded-b">
                <tr>
                    {tableDataContents.map((data, index) => (
                        <>
                            {data.status ? (
                                <td key={index} className="p-4 text-left">
                                    <Button className="border border-green-400 bg-white text-green-400 outline-none">
                                        Active
                                    </Button>
                                </td>
                            ) : (
                                <td key={index} className="p-4 text-left">
                                    {data.name}
                                </td>
                            )}
                        </>
                    ))}
                </tr>
            </tbody>
        </table>
    )
}

function Overview() {
    const isDesktop = useMediaQuery('md')
    return (
        <PrimaryLayout currentTabIndex={5} dropDownIndex={1}>
            <div className="px-4 md:px-12">
                <header className="mt-15 pt-5 text-2xl font-bold">
                    <h1>Marketing</h1>
                </header>
                <main className="flex min-h-full flex-wrap  md:gap-x-10">
                    {adsCardsContent.map((ad, index) => (
                        <AdsCard key={index} {...ad} />
                    ))}
                </main>

                <section>
                    <h2 className="mt-8 mb-3 text-2xl font-bold">Marketing Recente</h2>

                    {isDesktop ? (
                        <WhiteTable tableHeaderList={tableHeaderList} tableDataContents={tableDataContents} />
                    ) : (
                        <div className="mt-4">
                            {/* {requests.map(({ id, orderNo, status, date, payment_method, amount }, i) => {
                                return ( */}
                            <Card rounded="rounded-3xl" padding="px-5 py-8" className="mt-6">
                                <div className="flex justify-between">
                                    <div>Pedido orderNo</div>
                                    <div className="text-right">
                                        {'confirmed' === 'confirmed' && (
                                            <span className="text-hypay-green">Pagamento Efetuado</span>
                                        )}
                                        {'cancelled' === 'cancelled' && (
                                            <span className="text-hypay-red">Pedido Cancelado</span>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-5 flex justify-between text-xs">
                                    <div>
                                        <div className="text-hypay-gray">Data</div>
                                        <div>date</div>
                                    </div>
                                    <div>
                                        <div className="text-hypay-gray">Forma de Pag.</div>
                                        <div>method</div>
                                    </div>
                                    <div>
                                        <div className="text-hypay-gray">Valor Total</div>
                                        <div>amount</div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <Button
                                        className="w-full"
                                        primary
                                        // onClick={() => router.push(`/dashboard/request/${id}`)}
                                    >
                                        Mais detalhes
                                    </Button>
                                </div>
                            </Card>
                            {/* )
                            })} */}
                        </div>
                    )}
                </section>
                <section className="my-5">
                    <div className="flex items-center justify-between">
                        <h2 className="flex items-center justify-center text-xl font-bold">
                            <InstagramIcon color={COLORS.PINK} /> <span className="pl-3">Instagam Campaign</span>
                        </h2>
                        <div>
                            <h2 className="flex items-center justify-center text-xl font-bold">
                                <HandIcon color={COLORS.PINK} />
                                <span className="px-3">Stop or Pause your Campaign</span>
                                <span className="cursor-pointer">
                                    <StopIcon />
                                </span>
                                <span className="cursor-pointer pl-3">
                                    <PauseIcon />
                                </span>
                            </h2>
                        </div>
                    </div>

                    {isDesktop ? (
                        <WhiteTable tableHeaderList={tableHeaderList} tableDataContents={instagramCampaign} />
                    ) : (
                        <div className="mt-4">
                            {/* {requests.map(({ id, orderNo, status, date, payment_method, amount }, i) => {
                                return ( */}
                            <Card rounded="rounded-3xl" padding="px-5 py-8" className="mt-6">
                                <div className="flex justify-between">
                                    <div>Pedido orderNo</div>
                                    <div className="text-right">
                                        {'confirmed' === 'confirmed' && (
                                            <span className="text-hypay-green">Pagamento Efetuado</span>
                                        )}
                                        {'cancelled' === 'cancelled' && (
                                            <span className="text-hypay-red">Pedido Cancelado</span>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-5 flex justify-between text-xs">
                                    <div>
                                        <div className="text-hypay-gray">Data</div>
                                        <div>date</div>
                                    </div>
                                    <div>
                                        <div className="text-hypay-gray">Forma de Pag.</div>
                                        <div>method</div>
                                    </div>
                                    <div>
                                        <div className="text-hypay-gray">Valor Total</div>
                                        <div>amount</div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <Button
                                        className="w-full"
                                        primary
                                        // onClick={() => router.push(`/dashboard/request/${id}`)}
                                    >
                                        Mais detalhes
                                    </Button>
                                </div>
                            </Card>
                            {/* )
                            })} */}
                        </div>
                    )}
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default Overview
