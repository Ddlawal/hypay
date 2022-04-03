import React, { NextPage } from 'next'
import { AddAProduct } from '../../../components/CreateAStore/AddAProduct'
import { PrimaryLayout } from '../../../components/Layout'

const AddProducts: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={1}>
            <AddAProduct />
        </PrimaryLayout>
    )
}

export default AddProducts
