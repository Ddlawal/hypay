import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'

const Notification: NextPage = () => {
    return (
        <PrimaryLayout menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div>Notification</div>
        </PrimaryLayout>
    )
}

export default Notification
