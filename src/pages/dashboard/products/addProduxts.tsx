import React, { NextPage } from 'next'
import { AddAProduct } from '../../../components/CreateAStore/AddAProduct'
import { PrimaryLayout } from '../../../components/Layout'

const AddProducts: NextPage = () => {
    return (
        <PrimaryLayout>
            <AddAProduct />
        </PrimaryLayout>
    )
}

export default AddProducts
