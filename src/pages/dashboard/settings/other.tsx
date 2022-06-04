import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'

const Other: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={3} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div>Other</div>
        </PrimaryLayout>
    )
}

export default Other
