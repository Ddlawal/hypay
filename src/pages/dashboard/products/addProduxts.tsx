import React, { NextPage } from 'next'
import { useRouter } from 'next/router'
import { AddAProduct } from '../../../components/CreateAStore/AddAProduct'
import { PrimaryLayout } from '../../../components/Layout'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { ProductsType } from '../../../interfaces/products'

type OnSuccessType = { products: { data: ProductsType[] } }

const AddProducts: NextPage = () => {
    const router = useRouter()
    const { showSuccessSnackbar } = useSnackbar()

    const onSuccess = (res: OnSuccessType) => {
        showSuccessSnackbar(`${res.products.data[0].productName} added successfully!`)
        router.back()
    }
    return (
        <PrimaryLayout currentTabIndex={1} isNavBack navHeader="Adicone um produto">
            <div className="pt-1">
                <AddAProduct<OnSuccessType> onSuccess={onSuccess} />
            </div>
        </PrimaryLayout>
    )
}

export default AddProducts
