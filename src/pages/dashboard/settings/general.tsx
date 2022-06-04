import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'

const General: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={2} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div>General</div>
        </PrimaryLayout>
    )
}

export default General
