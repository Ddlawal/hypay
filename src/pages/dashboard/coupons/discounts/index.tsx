import React from 'react'
import { Button } from '../../../../components/Button'
import { SecondInput, TextField } from '../../../../components/form'
import {
    ArrowUpIcon,
    CalendarIcon,
    CircularPlusIcon,
    CopyIcon,
    OpenLinkIcon,
    SearchIcon,
} from '../../../../components/Icons'
import { ThreeDots } from '../../../../components/Icons/ThreeDots'
import { PrimaryLayout } from '../../../../components/Layout'
import { COLORS } from '../../../../lib/constants/colors'
import { dataInterface, discountTableData, discountTableHeader } from '../../../../lib/data'
import { useAppSelector, useAppDispatch } from '../../../../hooks/useStoreHooks'
import { showModal, hideModal } from '../../../../store/reducers/ui'
import { Card } from '../../../../components/Card'
import { useForm } from 'react-hook-form'
import { SelectField } from '../../../../components/Select'

// const tableList = []

function Discount() {
    const { register, handleSubmit } = useForm()
    const modal = useAppSelector((state) => state.ui)
    const dispatch = useAppDispatch()
    // The any tyee here will be fixed to the actual data types when we get there
    const onSubmit = (data: any) => {
        console.log(data, 'submitted data')
    }
    return (
        <PrimaryLayout currentTabIndex={6} dropDownIndex={0}>
            <div className="px-4 py-4 md:px-12">
                <header className="border-b-2 pb-3">
                    <h1 className="mb-4 text-3xl font-bold">Gere coupons de desconto para seus clientes</h1>
                    <p>Aumente as vendas dos seus produtos. Gere e compartilhe coupons para os seus clientes.</p>
                    <p className="flex items-center gap-2 text-red-500">
                        Saiba mais detalhes sobre como funciona
                        <OpenLinkIcon color={COLORS.RED} />
                    </p>
                </header>
                <section className="my-3">
                    <h1 className="text-xl font-bold">Seus coupons</h1>
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
                            <span>Últimos 30 dias</span>
                            <div className="rotate-180">
                                <ArrowUpIcon color={COLORS.GREY} />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto flex h-40 w-8/12 flex-col items-center justify-center">
                        <h1 className="mb-4 text-xl font-bold">Você ainda não possui nenhum cupom gerado.</h1>
                        <Button
                            onClick={() =>
                                dispatch(showModal({ showModal: true, modalType: 'add_discount', modalProps: {} }))
                            }
                            primary
                            className="mt-8 flex items-center md:mt-2"
                        >
                            <span className="pl-2">
                                <CircularPlusIcon />
                            </span>
                            <span className="px-2 capitalize">Gerar novo cupom</span>
                        </Button>
                    </div>

                    {false && (
                        <main>
                            <table className="my-2 w-full border-collapse overflow-hidden rounded-md border-2 bg-white">
                                <thead className="border-b-2 border-gray-200 px-6 py-10">
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
                    )}
                </section>
            </div>
            {modal.modalType === 'add_discount' && (
                <div className="pointer fixed top-0 h-screen w-screen overflow-y-scroll bg-[rgba(0,0,0,0.5)]">
                    <Card
                        rounded
                        padding="p-4"
                        className="mx-auto mt-[5rem] min-h-[80%] w-10/12 items-center overflow-y-auto rounded md:ml-[23%] md:mt-[7%] md:w-4/12"
                    >
                        <header>
                            <h1 className="font-bold ">Gerar novo cupom</h1>
                        </header>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <SecondInput label="Nome do produto" register={register} name="couponName" />
                            <div className="flex flex-col items-center justify-between md:flex-row md:space-x-3">
                                <div className="w-full md:w-6/12">
                                    <SelectField<string | null>
                                        options={[]}
                                        name="discountPercent"
                                        label="Porcentagem Desconto (%)"
                                        labelClassName="text-sm"
                                        placeholder=""
                                        value={''}
                                        onChange={(v) => console.log(v)}
                                    />
                                </div>
                                <div className="w-full md:w-6/12">
                                    <SelectField<string | null>
                                        options={[]}
                                        name="numberOfCoupons"
                                        label="Quantidade de coupons"
                                        labelClassName="text-sm"
                                        placeholder=""
                                        value={''}
                                        onChange={(v) => console.log(v)}
                                    />
                                </div>
                            </div>
                            <SecondInput
                                icon={<CalendarIcon />}
                                label="Data de expiração"
                                register={register}
                                name="expiration"
                            />
                            <Button
                                onClick={() => dispatch(hideModal())}
                                className="mx-auto flex w-full items-center justify-center border border-hypay-secondary text-center text-hypay-secondary"
                            >
                                Gerar código
                            </Button>

                            {/* The bottom buttons begin here */}
                            <SecondInput
                                icon={<CopyIcon />}
                                label="Seu cupom"
                                register={register}
                                name="yourCoupon"
                                defaultValue="hypay-sbfg76h1zn"
                            />
                            <div className="border-b" />
                            <SecondInput
                                icon={<CopyIcon />}
                                label="Personalize o nome do seu cupom abaixo (Opcional)"
                                register={register}
                                name="yourCouponCode"
                                defaultValue="FEV15CAM"
                            />
                            <span className="text-[10px]">
                                Este código deve ser utilizado pelo cliente no campo “cupom” ao efetuar uma compra
                            </span>

                            <div className="my-3 flex items-center justify-start space-x-10">
                                <Button onClick={() => dispatch(hideModal())} className="text-bold w-4/12">
                                    Cancelar
                                </Button>
                                <Button primary className="text-bold min-w-4/12">
                                    Criar cupom
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            )}
        </PrimaryLayout>
    )
}

export default Discount
