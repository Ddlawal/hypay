import React from 'react'
import { PrimaryLayout } from '../../../../components/Layout'

function Indicate() {
    return (
        <PrimaryLayout currentTabIndex={6} dropDownIndex={1}>
            <div className="py-4 px-4 md:px-12">
                <h1>Indicate</h1>
            </div>
        </PrimaryLayout>
    )
}

export default Indicate
