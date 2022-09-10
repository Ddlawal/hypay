import React, { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { AddAProduct } from '../../../../components/CreateAStore/AddAProduct'
import { PrimaryLayout } from '../../../../components/Layout'
import { useProducts } from '../../../../hooks/useProducts'
import { ProductsType } from '../../../../interfaces/products'
import { showSuccessSnackbar } from '../../../../lib/helper'

type OnSuccessType = { products: { data: Array<ProductsType> } }

export const getServerSideProps: GetServerSideProps<Record<string, unknown>, { id: string }> = async ({ params }) => {
    return {
        props: {
            productId: params?.id,
        },
    }
}

const EditProduct: NextPage<{ productId: string }> = ({ productId }) => {
    const router = useRouter()
    const { product, isLoading } = useProducts(productId)

    const props: { product?: ProductsType } = {}

    if (product) {
        props.product = product
    }

    const onSuccess = (res: OnSuccessType) => {
        router.back()
        showSuccessSnackbar(`Product updated successfully!`)
    }
    return (
        <PrimaryLayout currentTabIndex={1} isLoading={isLoading} isNavBack navHeader="Editar produto">
            <div className="pt-1">
                <AddAProduct<OnSuccessType> onSuccess={onSuccess} {...props} />
            </div>
        </PrimaryLayout>
    )
}

export default EditProduct
