import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'

const Communication: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={1} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div>Communication</div>
        </PrimaryLayout>
    )
}

export default Communication
