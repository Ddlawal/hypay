import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../hooks/useStoreHooks'
import { copyTextToClipboard, showErrorSnackbar, showSuccessSnackbar } from '../../lib/helper'
import { hideModal } from '../../store/reducers/ui'
import { Button } from '../Button'
import { SecondInput } from '../form'
import { CopyIcon } from '../Icons'
import ModalLayout from '../Layout/ModalLayout'
import { ProductsType } from '../../interfaces/products'
import { ICreateCoupon, IUpdateCoupon } from '../../interfaces/coupons'
import { useCoupon } from '../../hooks/useCoupon'
import { getDate } from '../../lib/dateFns'

interface IGeneratedCouponRes {
    couponName: string
    couponCode: string
}

interface IAddCouponDIscountModal {
    createACouponFunc?: (createCouponPayload: ICreateCoupon) => Promise<any>
    updateACouponFunc?: (updateACouponPayload: IUpdateCoupon) => Promise<any>
    updatingCouponLoading?: boolean
    creatingACouponLoading?: boolean
}

export const AddCouponDIscountModal = ({
    createACouponFunc,
    updateACouponFunc,
    updatingCouponLoading,
    creatingACouponLoading,
}: IAddCouponDIscountModal) => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue: setValue2,
        formState: { errors },
    } = useForm<ICreateCoupon>()
    const {
        register: register2,
        handleSubmit: handleSubmit2,
        formState: { errors: errors2 },
        getValues: getValues2,
        setValue,
    } = useForm<ICreateCoupon>()
    const dispatch = useAppDispatch()
    const {
        modalProps: { products, coupon: hasCouponToUpdate },
    } = useAppSelector((state) => state.ui)
    const { generateCoupon, loadingGeneratingCoupon } = useCoupon()

    console.log(updatingCouponLoading, creatingACouponLoading, 'updatingCouponLoading')

    // copy to clipboard
    const handleCopyToClipboard = function (code: string) {
        if (!code) {
            return
        }

        copyTextToClipboard(code)
        showSuccessSnackbar('Code Copied Successfully')
    }

    // The any type here will be fixed to the actual data types when we get there to the endpoint integration aspect
    const goGenerateCoupon = async (data: ICreateCoupon) => {
        const { end_date, limit, coupon_discount, product_ids } = data
        const generateCouponParams = {
            coupon_discount,
            end_date,
            limit,
            product_ids: [Number(product_ids)],
        }
        const response: IGeneratedCouponRes = await generateCoupon(generateCouponParams, true).unwrap()
        setValue('coupon_name', response.couponName)
        setValue('coupon_code', response.couponCode)
    }

    const productValue = products?.find(
        (product: ProductsType) => hasCouponToUpdate && product.productName === hasCouponToUpdate.products[0]
    )

    useEffect(() => {
        if (hasCouponToUpdate) {
            const discountToNumber = Number(
                hasCouponToUpdate?.coupon_discount.substring(0, hasCouponToUpdate?.coupon_discount.length - 1)
            )
            const newEndDate = getDate(hasCouponToUpdate.end_date, 'YYYY MM DD').split(' ').join('-')
            setValue('coupon_name', hasCouponToUpdate.coupon_name)
            setValue('coupon_code', hasCouponToUpdate?.coupon_code)
            setValue2('end_date', newEndDate)
            setValue2('limit', JSON.stringify(hasCouponToUpdate?.coupon_limit))
            setValue2('coupon_discount', discountToNumber)
        }
    }, [hasCouponToUpdate, setValue, setValue2])

    const createCoupon = async (data: ICreateCoupon) => {
        if (creatingACouponLoading || updatingCouponLoading) {
            return
        }
        const { coupon_name, coupon_code } = data
        const end_date = getValues('end_date')
        const limit = getValues('limit')
        const coupon_discount = getValues('coupon_discount')
        const product_ids = Number(getValues('product_ids'))
        const createCouponPayload = {
            end_date,
            limit,
            coupon_discount,
            coupon_name,
            coupon_code,
            product_ids: [Number(product_ids)],
        }

        if (!hasCouponToUpdate) {
            try {
                await createACouponFunc?.(createCouponPayload)
                dispatch(hideModal())
            } catch (error: any) {
                showErrorSnackbar(error?.data?.message)
            }
        } else {
            try {
                await updateACouponFunc?.({
                    ...createCouponPayload,
                    couponID: hasCouponToUpdate?.id as number,
                })
                dispatch(hideModal())
            } catch (error: any) {
                showErrorSnackbar(error?.data?.message)
            }
        }
    }
    return (
        <ModalLayout>
            <header>
                <h1 className="font-bold capitalize">Gerar novo cupom</h1>
            </header>
            <form onSubmit={handleSubmit(goGenerateCoupon)}>
                <div className={`h-[78px]`}>
                    <label htmlFor="product_name" className="mt-3 flex font-semibold">
                        <div className="flex w-full items-baseline justify-between">
                            <p className="text-sm">Nome do produto</p>
                        </div>
                    </label>
                    <div
                        id="product_ids"
                        className={`mt-1 flex h-[34px] items-center justify-between gap-2 rounded-md border-[1px] bg-white px-2`}
                    >
                        <select
                            {...register('product_ids')}
                            className={'h-full w-full appearance-none border-none bg-transparent outline-none'}
                            placeholder=""
                            defaultValue={productValue && productValue?.productName}
                        >
                            {!productValue && <option value="">Select Product</option>}
                            {productValue && <option value={productValue?.id}>{productValue?.productName}</option>}
                            {products &&
                                products
                                    .filter(
                                        (product: ProductsType) =>
                                            product.productName !== hasCouponToUpdate?.products[0]
                                    )
                                    .map((product: ProductsType, index: number) => {
                                        return (
                                            <option key={index} value={product.id}>
                                                {product.productName}
                                            </option>
                                        )
                                    })}
                        </select>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between md:flex-row md:space-x-3">
                    <div className="w-full md:w-6/12">
                        <SecondInput
                            label="Porcentagem Desconto (%)"
                            name="coupon_discount"
                            errors={errors}
                            type="number"
                            register={register}
                            validation={{ required: { value: true, message: 'Coupon Discount is required' } }}
                        />
                    </div>
                    <div className="w-full md:w-6/12">
                        <SecondInput
                            label="Quantidade de coupons"
                            name="limit"
                            errors={errors}
                            type="number"
                            register={register}
                            validation={{ required: { value: true, message: 'Limit is required' } }}
                        />
                    </div>
                </div>
                <SecondInput
                    errors={errors}
                    label="Data de expiração"
                    register={register}
                    name="end_date"
                    validation={{ required: { value: true, message: 'End date is required' } }}
                    type="date"
                />
                <Button
                    type="submit"
                    disabled={loadingGeneratingCoupon}
                    className="mx-auto flex w-full items-center justify-center border border-hypay-secondary text-center text-hypay-secondary"
                >
                    {loadingGeneratingCoupon ? 'Generating coupon...' : 'Gerar código'}
                </Button>
            </form>
            <hr className="mb-2 mt-3" />
            {/* create coupon form */}
            <form onSubmit={handleSubmit2(createCoupon)}>
                {/* The bottom buttons begin here */}
                <SecondInput
                    icon={
                        <CopyIcon
                            className="cursor-pointer"
                            onClick={() => {
                                handleCopyToClipboard(getValues2('coupon_code'))
                            }}
                        />
                    }
                    label="Seu cupom"
                    register={register2}
                    validation={{ required: { value: true, message: 'Coupon Code is required' } }}
                    name="coupon_code"
                    disabled
                    errors={errors2}
                />
                <div className="border-b" />
                <SecondInput
                    icon={
                        <CopyIcon
                            className="cursor-pointer"
                            onClick={() => {
                                handleCopyToClipboard(getValues2('coupon_name'))
                            }}
                        />
                    }
                    label="Personalize o nome do seu cupom abaixo (Opcional)"
                    register={register2}
                    name="coupon_name"
                    placeholder=""
                    errors={errors2}
                    validation={{ required: { value: true, message: 'Coupon name is required' } }}
                />
                <span className="text-[10px]">
                    Este código deve ser utilizado pelo cliente no campo “cupom” ao efetuar uma compra
                </span>

                <div className="my-3 flex items-center justify-start space-x-10">
                    <Button onClick={() => dispatch(hideModal())} className="text-bold w-4/12">
                        Cancelar
                    </Button>
                    {productValue && (
                        <Button
                            type="submit"
                            disabled={updatingCouponLoading}
                            primary
                            className="text-bold min-w-4/12 capitalize"
                        >
                            {updatingCouponLoading ? 'Updating coupon...' : 'Update coupon'}
                        </Button>
                    )}
                    {!productValue && (
                        <Button
                            type="submit"
                            disabled={creatingACouponLoading}
                            primary
                            className="text-bold min-w-4/12 capitalize"
                        >
                            {creatingACouponLoading ? 'Creating coupon...' : 'Criar cupom'}
                        </Button>
                    )}
                </div>
            </form>
        </ModalLayout>
    )
}
