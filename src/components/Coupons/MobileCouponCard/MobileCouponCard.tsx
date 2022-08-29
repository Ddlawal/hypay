import React from 'react'
import { useProducts } from '../../../hooks/useProducts'
import { useAppDispatch } from '../../../hooks/useStoreHooks'
import { ISingleCouponResponse } from '../../../interfaces/coupons'
import { COLORS } from '../../../lib/constants/colors'
import { UPDATE_COUPON_MODAL } from '../../../lib/data'
import { showModal } from '../../../store/reducers/ui'
import { Card } from '../../Card'
import { EditIcon, TrashCanIcon } from '../../Icons'

interface IMobileCouponCard {
    coupon: ISingleCouponResponse
    handleDeleteCoupon: (id: number) => Promise<void>
    changeCouponStatus: ({ status, couponID }: { couponID: number; status: string }) => Promise<void>
    activatingCouponLoading: boolean
    deActivatingCouponLoading: boolean
    deletingCouponLoading: boolean
}

export const MobileCouponCard = ({
    coupon,
    handleDeleteCoupon,
    activatingCouponLoading,
    deActivatingCouponLoading,
    deletingCouponLoading,
    changeCouponStatus,
}: IMobileCouponCard) => {
    const dispatch = useAppDispatch()
    const { products: listOfproducts } = useProducts()
    const { coupon_name, status, end_date, coupon_limit, id, coupon_discount, products } = coupon

    return (
        <Card
            className={`${
                activatingCouponLoading || deActivatingCouponLoading || deletingCouponLoading ? 'opacity-50' : ''
            }
                 my-7 rounded-xl bg-white py-3 px-2`}
            elevation="md"
        >
            <div className="flex items-center justify-between">
                <p>{coupon_name}</p>
                <button
                    onClick={() => changeCouponStatus({ status, couponID: id })}
                    className={` border-0 bg-transparent p-4 text-left outline-none ${
                        status === 'Active' ? 'text-green-400' : 'text-red-400'
                    }`}
                >
                    {status === 'Active' ? 'Ativo' : 'Inativo'}
                </button>
            </div>
            <div className="item-center flex justify-between gap-x-2 ">
                <div>
                    <p className="text-sm text-neutral-400">Expiração</p>
                    <p className="text-sm text-black">{end_date}</p>
                </div>
                <div>
                    <p className="text-sm text-neutral-400">% Desconto</p>
                    <p className="text-sm text-black">{coupon_discount}</p>
                </div>
                <div>
                    <p className="text-sm capitalize text-neutral-400">Quant. Cupons</p>
                    <p className="text-sm text-black">{coupon_limit}</p>
                </div>
            </div>
            <div className="mb-2 mt-4 flex items-center justify-between">
                <div>
                    <p className="text-sm text-neutral-400">Produto</p>
                    <p className="text-sm capitalize text-black">{products[0]}</p>
                </div>

                <div className="flex gap-x-3">
                    <div className="inline-block">
                        <EditIcon
                            onClick={() => {
                                dispatch(
                                    showModal({
                                        showModal: true,
                                        modalType: UPDATE_COUPON_MODAL,
                                        modalProps: { coupon, products: listOfproducts },
                                    })
                                )
                            }}
                            color={COLORS.GREY}
                        />
                    </div>
                    <div className="inline-block" onClick={() => handleDeleteCoupon(id)}>
                        <TrashCanIcon color={COLORS.GREY} />
                    </div>
                </div>
            </div>
        </Card>
    )
}
