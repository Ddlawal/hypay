import React, { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { AddAProduct } from '../../../../components/CreateAStore/AddAProduct'
import { PrimaryLayout } from '../../../../components/Layout'
import { ProductsType } from '../../../../interfaces/products'
import { showSuccessSnackbar } from '../../../../lib/helper'
import { useLazyGetSingleProductQuery } from '../../../../store/services/products'

type OnSuccessType = { products: { data: Array<ProductsType> } }

const EditProduct: NextPage = () => {
    const [product, setProduct] = useState<ProductsType>()
    const [loding, setLoading] = useState(true)
    const {
        query: { id },
        isReady,
        back,
    } = useRouter()

    const [getProduct, { isFetching, isLoading }] = useLazyGetSingleProductQuery()
    useEffect(() => {
        const performFetch = async () => {
            if (isReady) {
                const res = await getProduct(id as string).unwrap()

                setProduct(res)
                setLoading(isFetching || isLoading)
            }
        }

        performFetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady])

    const onSuccess = () => {
        back()
        showSuccessSnackbar(`Product updated successfully!`)
    }
    return (
        <PrimaryLayout currentTabIndex={1} isLoading={loding} isNavBack navHeader="Editar produto">
            <div className="pt-1">
                <AddAProduct<OnSuccessType> onSuccess={onSuccess} product={product} />
            </div>
        </PrimaryLayout>
    )
}

export default EditProduct
