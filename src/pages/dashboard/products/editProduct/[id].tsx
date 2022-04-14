import React, { NextPage } from 'next'
import { useRouter } from 'next/router'
import { AddAProduct } from '../../../../components/CreateAStore/AddAProduct'
import { PrimaryLayout } from '../../../../components/Layout'
import { useProducts } from '../../../../hooks/useProducts'
import { useSnackbar } from '../../../../hooks/useSnackbar'
import { ProductsType } from '../../../../interfaces/products'

type OnSuccessType = { products: { data: ProductsType[] } }

const EditProduct: NextPage = () => {
    const router = useRouter()
    const id = router.query.id as string
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
