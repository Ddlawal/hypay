import React, { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { AddAProduct } from '../../../../components/CreateAStore/AddAProduct'
import { PrimaryLayout } from '../../../../components/Layout'
import { useProducts } from '../../../../hooks/useProducts'
import { useSnackbar } from '../../../../hooks/useSnackbar'
import { ProductsType } from '../../../../interfaces/products'

type OnSuccessType = { products: { data: ProductsType[] } }

const EditProduct: NextPage<{ id: string }> = ({ id }) => {
    const router = useRouter()
    const { product, isLoading } = useProducts(id)
    const { showSuccessSnackbar } = useSnackbar()

    const props: { product?: ProductsType } = {}

    if (product) {
        props.product = product
    }

    const onSuccess = (res: OnSuccessType) => {
        console.log(res.products.data[0])
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

export const getServerSideProps: GetServerSideProps<{ id: string }> = async ({ query }) => {
    const id = query.id as string

    return {
        props: { id },
    }
}
