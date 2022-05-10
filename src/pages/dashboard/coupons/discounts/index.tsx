import React from 'react'
import { Button } from '../../../../components/Button'
import { TextField } from '../../../../components/form'
import { ArrowUpIcon, CircularPlusIcon, OpenLinkIcon, SearchIcon } from '../../../../components/Icons'
import { ThreeDots } from '../../../../components/Icons/ThreeDots'
import { PrimaryLayout } from '../../../../components/Layout'
import { COLORS } from '../../../../lib/constants/colors'
import { dataInterface, discountTableData, discountTableHeader } from '../../../../lib/data'

function Discount() {
    return (
        <PrimaryLayout currentTabIndex={6} dropDownIndex={0}>
            <div className="py-4 px-4 md:px-12">
                <header className="border-b-2  pb-3">
                    <h1 className="mb-4 text-3xl font-bold">Generate discount coupons for your customers</h1>
                    <p>Increase sales of your products. Generate and share coupons for your customers.</p>
                    <p className="flex items-center gap-2 text-red-500">
                        Learn more details about how it works
                        <OpenLinkIcon color={COLORS.RED} />
                    </p>
                </header>
                <section className="my-3">
                    <h1 className="text-xl font-bold">Your coupons</h1>

                    <div className="mt-5 mb-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <TextField
                                value=""
                                onChange={() => {
                                    return
                                }}
                                inputClassName="bg-hypay-light-gray border-b-2 border-black-400 text-sm"
                                placeholder="Search"
                                inputIcon={<SearchIcon color={COLORS.PLACEHOLDER} />}
                                className="hidden md:block"
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <span>Last 30 days</span>
                            <div className="rotate-180">
                                <ArrowUpIcon color={COLORS.GREY} />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto flex h-40 w-8/12 flex-col items-center justify-center">
                        <h1 className="mb-4 text-xl font-bold">You don&apos;t have any coupons generated yet.</h1>
                        <Button primary className="mt-8 flex items-center md:mt-2">
                            <span className="pl-2">
                                <CircularPlusIcon />
                            </span>
                            <span className="px-2">Generate new coupon</span>
                        </Button>
                    </div>

                    <main>
                        <table className="my-2 w-full border-collapse overflow-hidden rounded-md border-2 bg-white">
                            <thead className="border-b-2  border-gray-200 py-10 px-6">
                                <tr className="">
                                    {discountTableHeader.map((header, index: number) => (
                                        <th key={index} className={`p-4 text-left`}>
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="rounded-b">
                                {discountTableData.map(
                                    (
                                        { name, status, discount, product, couponLimit, expiration }: dataInterface,
                                        index
                                    ) => (
                                        <tr key={index} className="border-b-2">
                                            <td className="p-4 text-left">{name}</td>
                                            <td
                                                className={`p-4 text-left ${
                                                    status === 'Active' ? 'text-green-400' : 'text-red-400'
                                                }`}
                                            >
                                                {status}
                                            </td>
                                            <td className={`p-4 text-left `}>{discount}</td>
                                            <td className={`p-4 text-left `}>{product}</td>
                                            <td className={`p-4 text-left `}>{couponLimit}</td>
                                            <td className={`p-4 text-left `}>{expiration}</td>
                                            <td className={` p-4 pl-5 text-center `}>
                                                <ThreeDots />{' '}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                        <Button primary className="mt-8 flex items-center md:mt-2">
                            <span className="pl-2">
                                <CircularPlusIcon />
                            </span>
                            <span className="px-2">Generate new coupon</span>
                        </Button>
                    </main>
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default Discount
