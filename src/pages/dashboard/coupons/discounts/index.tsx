import React, { useEffect, useState } from 'react'
import { Button } from '../../../../components/Button'
import { TextField } from '../../../../components/form'
import { ArrowUpIcon, CircularPlusIcon, LoaderIcon, OpenLinkIcon, SearchIcon } from '../../../../components/Icons'
import { ThreeDots } from '../../../../components/Icons/ThreeDots'
import { PrimaryLayout } from '../../../../components/Layout'
import { COLORS } from '../../../../lib/constants/colors'
import { ABOUT_COUPON_MODAL, ADD_COUPON_MODAL, discountTableHeader, UPDATE_COUPON_MODAL } from '../../../../lib/data'
import { useAppSelector, useAppDispatch } from '../../../../hooks/useStoreHooks'
import { showModal } from '../../../../store/reducers/ui'
import { Card } from '../../../../components/Card'
import { AddCouponDIscountModal } from '../../../../components/Modals/AddCouponDIscountModal'
import { useOnClickOutside } from '../../../../hooks/useOnClickOutSide'
import AboutCouponModal from '../../../../components/Modals/AboutCouponModal'
import { useCoupon } from '../../../../hooks/useCoupon'
import { ISingleCouponResponse } from '../../../../interfaces/coupons'
import { useProducts } from '../../../../hooks/useProducts'
import { useSnackbar } from '../../../../hooks/useSnackbar'
import { MobileCouponCard } from '../../../../components/Coupons/MobileCouponCard/MobileCouponCard'

function Discount() {
    const dispatch = useAppDispatch()
    const { showErrorSnackbar } = useSnackbar()
    const modal = useAppSelector((state) => state.ui)
    const [tableDropDown, setTableDropDown] = useState<number | null>(null)
    const {
        fetchCouponData,
        loadingCoupon,
        activatingCouponLoading,
        deActivatingCouponLoading,
        deletingCouponLoading,
        couponList,
        updatingCouponLoading,
        deleteACoupon,
        setCouponList,
        createACouponFunc,
        changeCouponStatus,
        updateACouponFunc,
        creatingACouponLoading,
    } = useCoupon()
    const { products: listOfproducts } = useProducts()

    const handleTableDropDown = (tableId: number) => {
        if (tableId == tableDropDown) {
            return setTableDropDown(null)
        }
        return setTableDropDown(tableId)
    }

    const handleDeleteCoupon = async (id: number) => {
        if (deletingCouponLoading) {
            return
        }
        try {
            await deleteACoupon(id)
        } catch (error: any) {
            console.log(error)
            showErrorSnackbar(error?.data?.message)
        }
    }
    const { ref } = useOnClickOutside<HTMLDivElement>(() => tableDropDown && setTableDropDown(null))

    useEffect(() => {
        const fetchCoupon = async () => {
            try {
                const {
                    coupons: { data },
                } = await fetchCouponData().unwrap()
                return setCouponList(data ?? [])
            } catch (error: any) {
                showErrorSnackbar(error?.data?.message)
            }
        }
        fetchCoupon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PrimaryLayout currentTabIndex={6} dropDownIndex={0}>
            <div className="px-4 py-4 md:px-12">
                <header className="border-b-2 pb-3">
                    <h1 className="mb-4 text-3xl font-bold">Gere coupons de desconto para seus clientes</h1>
                    <p>Aumente as vendas dos seus produtos. Gere e compartilhe coupons para os seus clientes.</p>
                    <span
                        className="inline-flex cursor-pointer items-center gap-2 text-red-500"
                        onClick={() => {
                            dispatch(showModal({ showModal: true, modalType: ABOUT_COUPON_MODAL, modalProps: {} }))
                        }}
                    >
                        Saiba mais detalhes sobre como funciona
                        <OpenLinkIcon color={COLORS.RED} />
                    </span>
                </header>
                <section className="my-3">
                    <h1 className="text-capitalize text-xl font-bold">Seus coupons</h1>
                    <div className="mt-5 mb-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <TextField
                                value=""
                                onChange={() => {
                                    return
                                }}
                                inputClassName="bg-hypay-light-gray border-b-2 border-black-400 text-sm"
                                placeholder="Buscar cupom"
                                inputIcon={<SearchIcon color={COLORS.PLACEHOLDER} />}
                                className="hidden md:block"
                            />
                        </div>
                        <div className="text-capitalize flex items-center justify-between gap-2">
                            <span>Últimos 30 dias</span>
                            <div className="rotate-180">
                                <ArrowUpIcon color={COLORS.GREY} />
                            </div>
                        </div>
                    </div>

                    {loadingCoupon && (
                        <div className="flex h-[30vh] w-full flex-col items-center justify-center">
                            <LoaderIcon />
                            <p className="font-b0ld text-center text-base">Loading</p>
                        </div>
                    )}

                    {!loadingCoupon && couponList.length > 0 ? (
                        <main>
                            <div className="hidden md:block">
                                <table
                                    className={`my-2 w-full border-collapse ${
                                        activatingCouponLoading || deActivatingCouponLoading || deletingCouponLoading
                                            ? 'opacity-50'
                                            : ''
                                    }  rounded-md border-2 bg-white`}
                                >
                                    <thead className={`border-b-2 border-gray-200 px-6 py-10`}>
                                        <tr className="text-capitalize">
                                            {discountTableHeader.map((header, index: number) => (
                                                <th key={index} className={`text-capitalize p-4 text-left`}>
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="rounded-b">
                                        {couponList.map((coupon: ISingleCouponResponse, index: number) => {
                                            const {
                                                coupon_name,
                                                status,
                                                end_date,
                                                coupon_limit,
                                                id,
                                                coupon_discount,
                                                products,
                                            } = coupon
                                            return (
                                                <tr key={index} className="border-b-2">
                                                    <td className="p-4 text-left">{coupon_name}</td>
                                                    <td className={`justify-centera flex items-center`}>
                                                        <button
                                                            onClick={() => changeCouponStatus({ status, couponID: id })}
                                                            className={` border-0 bg-transparent p-4 text-left outline-none ${
                                                                status === 'Active' ? 'text-green-400' : 'text-red-400'
                                                            }`}
                                                        >
                                                            {status === 'Active' ? 'Ativo' : 'Inativo'}
                                                        </button>
                                                    </td>
                                                    <td className={`p-4 text-left `}>{coupon_discount}</td>
                                                    <td className={`p-4 text-left `}>{products[0]}</td>
                                                    <td className={`p-4 text-left `}>{coupon_limit}</td>
                                                    <td className={`p-4 text-left `}>{end_date}</td>
                                                    <td className={` relative p-4 pl-5 text-center`}>
                                                        <div
                                                            className="inline-block cursor-pointer"
                                                            onClick={() => handleTableDropDown(id)}
                                                        >
                                                            <ThreeDots />
                                                        </div>
                                                        {tableDropDown === id && (
                                                            <div ref={ref}>
                                                                <Card
                                                                    padding="p-3"
                                                                    className="items-between absolute left-0 z-20 flex flex-col justify-center rounded border shadow-xl"
                                                                >
                                                                    <button
                                                                        className="my-1 w-full capitalize transition-transform hover:scale-105"
                                                                        onClick={() => {
                                                                            dispatch(
                                                                                showModal({
                                                                                    showModal: true,
                                                                                    modalType: UPDATE_COUPON_MODAL,
                                                                                    modalProps: {
                                                                                        coupon,
                                                                                        products: listOfproducts,
                                                                                    },
                                                                                })
                                                                            )
                                                                        }}
                                                                    >
                                                                        Atualizar
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDeleteCoupon(id)}
                                                                        className="my-1 w-full capitalize transition-transform hover:scale-105"
                                                                    >
                                                                        Excluir
                                                                    </button>
                                                                </Card>
                                                            </div>
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="md:hidden">
                                {couponList.map((coupon: ISingleCouponResponse, index: number) => {
                                    return (
                                        <MobileCouponCard
                                            handleDeleteCoupon={handleDeleteCoupon}
                                            changeCouponStatus={changeCouponStatus}
                                            coupon={coupon}
                                            key={index}
                                            activatingCouponLoading={activatingCouponLoading}
                                            deActivatingCouponLoading={deActivatingCouponLoading}
                                            deletingCouponLoading={deletingCouponLoading}
                                        />
                                    )
                                })}
                            </div>
                            <Button
                                onClick={() => {
                                    dispatch(
                                        showModal({
                                            showModal: true,
                                            modalType: ADD_COUPON_MODAL,
                                            modalProps: { products: listOfproducts },
                                        })
                                    )
                                }}
                                primary
                                className="mt-8 flex items-center md:mt-2"
                            >
                                <span className="pl-2">
                                    <CircularPlusIcon />
                                </span>
                                <span className="px-2 capitalize">Gerar novo cupom</span>
                            </Button>
                        </main>
                    ) : null}

                    {!loadingCoupon && couponList.length < 1 ? (
                        <div className="mx-auto flex h-40 w-8/12 flex-col items-center justify-center text-center">
                            <h1 className="mb-4 text-xl font-bold">Você ainda não possui nenhum cupom gerado.</h1>
                            <Button
                                onClick={() => {
                                    dispatch(
                                        showModal({
                                            showModal: true,
                                            modalType: ADD_COUPON_MODAL,
                                            modalProps: {
                                                products: listOfproducts,
                                            },
                                        })
                                    )
                                }}
                                primary
                                className="mt-8 flex items-center md:mt-2"
                            >
                                <span className="pl-2">
                                    <CircularPlusIcon />
                                </span>
                                <span className="px-2 capitalize">Gerar novo cupom</span>
                            </Button>
                        </div>
                    ) : null}
                </section>
            </div>
            {modal.modalType === ADD_COUPON_MODAL && (
                <AddCouponDIscountModal
                    createACouponFunc={createACouponFunc}
                    creatingACouponLoading={creatingACouponLoading}
                />
            )}
            {modal.modalType === UPDATE_COUPON_MODAL && (
                <AddCouponDIscountModal
                    updateACouponFunc={updateACouponFunc}
                    updatingCouponLoading={updatingCouponLoading}
                />
            )}
            {modal.modalType === ABOUT_COUPON_MODAL && <AboutCouponModal />}
        </PrimaryLayout>
    )
}

export default Discount
