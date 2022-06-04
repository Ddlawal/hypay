import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'

const Plans: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={5} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div>Plans</div>
        </PrimaryLayout>
    )
}

export default Plans
