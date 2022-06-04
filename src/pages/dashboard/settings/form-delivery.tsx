import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'

const FormDelivery: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={4} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div>Form of Delivery</div>
        </PrimaryLayout>
    )
}

export default FormDelivery
