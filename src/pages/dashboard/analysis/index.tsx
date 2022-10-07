import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { Card } from '../../../components/Card'
import { Button } from '../../../components/Button'
import { SelectField } from '../../../components/Select'
import { DownArrowIcon, MoreOptionsHIcon, UpArrowIcon } from '../../../components/Icons'
import { COLORS } from '../../../lib/constants/colors'
import { Linechart, Piechart } from '../../../components/Charts'
import { useGetAnalysisQuery } from '../../../store/services/onlineStore'
import { formatter } from '../../../lib/helper'

const dateOptions = [
    {
        label: 'Haje',
        value: 'haje',
    },
]

const Analysis: NextPage = () => {
    const { data, isLoading } = useGetAnalysisQuery()
    const chartData = data?.data?.sales?.monthly_report?.map((dat, index) => {
        return {
            index: index + 1,
            month: dat.month,
            name: dat.month,
            total_orders: dat?.total_orders,
            total_revenue: dat?.total_revenue,
        }
    })

    const totalSales = data?.data?.sales?.monthly_report.reduce((acc, cur) => {
        acc += cur?.total_revenue

        return acc
    }, 0)

    return (
        <PrimaryLayout currentTabIndex={3}>
            <div className="py-4 px-4 md:px-12">
                <div className="mb-4 items-center justify-between md:flex">
                    <div className="text-lg font-bold">Análise Financeira</div>
                    <SelectField name="date" value="haje" onChange={() => console.log('')} options={dateOptions} />
                </div>
                <Card rounded padding="py-4 px-2 md:px-10" elevation="none">
                    <div className="mb-3 justify-between md:flex">
                        <div>Total</div>
                        <div className="font-bold text-hypay-green">R {formatter.format(Number(totalSales))}</div>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <Button primary padding="px-3 px-2">
                            Desempenho
                        </Button>
                        <div className="text-hypay-gray">Ativos</div>
                        <div className="ml-auto">
                            <SelectField
                                name="date"
                                value={''}
                                onChange={() => console.log('')}
                                options={dateOptions}
                                placeholder={<span className='text-hypay-gray"'>Haje</span>}
                            />
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-12">
                            <Linechart chartData={chartData} />
                        </div>
                        {/* <div className="col-span-12 md:col-span-4">
                            <Barchart />
                        </div> */}
                    </div>
                </Card>
                <div className="my-6 justify-between md:flex">
                    <div className="text-lg font-bold">Análise de Estatisticas</div>
                    <SelectField name="date" value="haje" onChange={() => console.log('')} options={dateOptions} />
                </div>
                <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
                    <StatsCard
                        stat="Clientes Ativos"
                        count={data?.data?.buyers?.this_month_buyers + ' Clientes' || '271 Clientes'}
                        percent={data?.data?.buyers?.percentChangeInBuyers || 0.7}
                    />

                    <StatsCard
                        stat="Vendas Realizadas"
                        count={data?.data?.buyers?.total_buyers + ' Vendas' || '271 Vendas'}
                        percent={data?.data?.buyers?.percentChangeInBuyersThisWeek || 0}
                    />
                </div>

                <div className="mt-4 grid w-full grid-cols-12 gap-6">
                    {isLoading ? (
                        <p className="w-full text-center">Fetching your analysis</p>
                    ) : (
                        <>
                            <Card padding="p-3" rounded elevation="lg" className="col-span-12 md:col-span-8">
                                <Linechart
                                    chartData={chartData}
                                    lines={[
                                        {
                                            dataKey: 'total_orders',
                                            stroke: COLORS.ORANGE,
                                        },
                                    ]}
                                />
                            </Card>
                            <Card padding="p-2" rounded elevation="lg" className="col-span-12 md:col-span-4">
                                <div>Mobile Sales</div>
                                <Piechart />
                            </Card>
                        </>
                    )}
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default Analysis

export const StatsCard = ({
    stat = 'Clientes Ativos',
    count = '271 Clientes',
    percent = 0.7,
}: {
    stat: string
    count: string
    percent: number
}) => {
    return (
        <Card rounded elevation="lg" className="w-full">
            <div className="flex h-24 flex-col justify-between">
                <div className="flex items-center justify-between">
                    <div>{stat}</div>
                    <div>
                        <MoreOptionsHIcon color={COLORS.ICON_GRAY} />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>{count}</div>
                    <div className="flex items-center">
                        <span className="pr-1 text-hypay-iconGray">+ {percent}%</span>{' '}
                        {percent > 0 ? (
                            <UpArrowIcon size={13} color={COLORS.GREEN} />
                        ) : (
                            <DownArrowIcon size={13} color={COLORS.RED} />
                        )}
                    </div>
                </div>
            </div>
        </Card>
    )
}
