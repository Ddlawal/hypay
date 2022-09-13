import React, { NextPage } from 'next'
import { useRouter } from 'next/router'
import { AddAProduct } from '../../../components/CreateAStore/AddAProduct'
import { PrimaryLayout } from '../../../components/Layout'
import { ProductsType } from '../../../interfaces/products'
import { showSuccessSnackbar } from '../../../lib/helper'

type OnSuccessType = { products: { data: Array<ProductsType> } }

const AddProducts: NextPage = () => {
    const router = useRouter()

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
