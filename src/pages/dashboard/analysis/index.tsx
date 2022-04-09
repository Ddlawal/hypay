import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { Card } from '../../../components/Card'
import { Button } from '../../../components/Button'
import { SelectField } from '../../../components/Select'
import { MoreOptionsHIcon, UpArrowIcon } from '../../../components/Icons'
import { COLORS } from '../../../lib/constants/colors'
import { Barchart, Linechart, Piechart } from '../../../components/Charts'

const dateOptions = [
    {
        label: 'Haje',
        value: 'haje',
    },
]

const stats = [
    {
        stat: 'Clientes Ativos',
        count: '271 Clientes',
        percent: 0.7,
    },
    {
        stat: 'Vendas Realizadas',
        count: '271 pessoas',
        percent: 0.7,
    },
    {
        stat: 'Seguidores',
        count: '3252 Seguidores',
        percent: 2.9,
    },
]

const bottomChartData = [
    {
        name: '31/01',
        uv: 0.6,
    },
    {
        name: '01/02',
        uv: 1.9,
    },
    {
        name: '02/02',
        uv: 0.45,
    },
    {
        name: '03/02',
        uv: 2.9,
    },
    {
        name: '04/02',
        uv: 0.8,
    },
    {
        name: '05/02',
        uv: 2.0,
    },
    {
        name: '06/02',
        uv: 2.7,
    },
]

const Analysis: NextPage = () => {
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
                        <div className="font-bold text-hypay-green">R$ 874.782.903,54</div>
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
                        <div className="col-span-12 md:col-span-8">
                            <Linechart />
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <Barchart />
                        </div>
                    </div>
                </Card>
                <div className="my-6 justify-between md:flex">
                    <div className="text-lg font-bold">Análise de Estatisticas</div>
                    <SelectField name="date" value="haje" onChange={() => console.log('')} options={dateOptions} />
                </div>
                <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
                    {stats.map(({ stat, count, percent }, i) => (
                        <Card key={`stats-${i}`} rounded elevation="lg" className="w-full">
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
                                        <UpArrowIcon size={13} color={COLORS.GREEN} />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mt-4 grid w-full grid-cols-12 gap-6">
                    <Card padding="p-3" rounded elevation="lg" className="col-span-12 md:col-span-8">
                        <Linechart
                            chartData={bottomChartData}
                            lines={[
                                {
                                    dataKey: 'uv',
                                    stroke: COLORS.YELLOW,
                                },
                            ]}
                        />
                    </Card>
                    <Card padding="p-2" rounded elevation="lg" className="col-span-12 md:col-span-4">
                        <div>Mobile Sales</div>
                        <Piechart />
                    </Card>
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default Analysis
