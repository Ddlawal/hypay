import { useState } from 'react'
import { ICreateCoupon, ISingleCouponResponse, IUpdateCoupon } from '../interfaces/coupons'
import { showSuccessSnackbar, showErrorSnackbar } from '../lib/helper'
import {
    useActivateCouponMutation,
    useAddCouponMutation,
    useDeActivateCouponMutation,
    useLazyFetchMyCouponsQuery,
    useLazyGenerateCouponQuery,
    useLazyRemoveCouponQuery,
    useUpdateCouponMutation,
} from '../store/services/coupon'

export const useCoupon = function () {
    const [couponList, setCouponList] = useState<Array<ISingleCouponResponse>>([])
    const [fetchCouponData, { isLoading: loadingCoupon }] = useLazyFetchMyCouponsQuery()
    const [removeCoupon, { isLoading: deletingCouponLoading }] = useLazyRemoveCouponQuery()
    const [generateCoupon, { isLoading: loadingGeneratingCoupon }] = useLazyGenerateCouponQuery()
    const [addACoupon, { isLoading: creatingACouponLoading }] = useAddCouponMutation()
    const [activateCoupon, { isLoading: activatingCouponLoading }] = useActivateCouponMutation()
    const [deActivateCoupon, { isLoading: deActivatingCouponLoading }] = useDeActivateCouponMutation()
    const [updateACoupon, { isLoading: updatingCouponLoading }] = useUpdateCouponMutation()

    const deleteACoupon = async (couponID: number) => {
        try {
            const {
                coupons: { data },
            } = await removeCoupon(couponID, true).unwrap()
            showSuccessSnackbar('Coupon Deleted succesfully')
            return setCouponList(data)
        } catch (error) {
            return error
        }
    }

    const updateACouponFunc = async (updateACouponPayload: IUpdateCoupon) => {
        try {
            const {
                coupons: { data },
            } = await updateACoupon(updateACouponPayload).unwrap()
            console.log(data, 'after updating a coupon')
            showSuccessSnackbar('Coupon updated succesfully')
            return setCouponList(data)
        } catch (error: any) {
            showErrorSnackbar(error?.data?.message)
            return error
        }
    }

    const changeCouponStatus = async ({ status, couponID }: { couponID: number; status: string }) => {
        if (status == 'Active') {
            try {
                const {
                    coupons: { data },
                } = await deActivateCoupon({ couponID }).unwrap()
                showSuccessSnackbar('Coupon status changed succesfully')
                return setCouponList(data)
            } catch (error: any) {
                showErrorSnackbar(error?.data?.message)
            }
        } else {
            try {
                const {
                    coupons: { data },
                } = await activateCoupon({ couponID }).unwrap()
                showSuccessSnackbar('Coupon status changed succesfully')
                return setCouponList(data)
            } catch (error: any) {
                showErrorSnackbar(error?.data?.message)
            }
        }
    }

    const createACouponFunc = async (createCouponPayload: ICreateCoupon) => {
        try {
            const {
                coupons: { data },
            } = await addACoupon(createCouponPayload).unwrap()
            showSuccessSnackbar('Coupon Created succesfully')
            return setCouponList(data)
        } catch (error: any) {
            showErrorSnackbar(error?.data?.message)
            return error
        }
    }

    return {
        loadingCoupon,
        deletingCouponLoading,
        loadingGeneratingCoupon,
        creatingACouponLoading,
        activatingCouponLoading,
        deActivatingCouponLoading,
        fetchCouponData,
        generateCoupon,
        updatingCouponLoading,
        deleteACoupon,
        addACoupon,
        activateCoupon,
        couponList,
        setCouponList,
        changeCouponStatus,
        updateACoupon,
        updateACouponFunc,
        createACouponFunc,
    }
}
