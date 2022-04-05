import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'

const Analysis: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={3}>
            <div>Analysis</div>
        </PrimaryLayout>
    )
}

export default Analysis
