import React, { useState } from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'
import { SecondPlanComponent } from '../../../components/SettingsPlan/Screens/SecondPlanComponent'
import { FirstPlanComponent } from '../../../components/SettingsPlan/Screens/FirstPlanComponent'
import ThirdPlanComponent from '../../../components/SettingsPlan/Screens/ThirdPlanComponent'

const Plans: NextPage = () => {
    const [planStage, setPlanStage] = useState(1)
    return (
        <PrimaryLayout currentTabIndex={5} menuItemList={SettingsMenuItemList} isPrimary={false}>
            {planStage === 1 && <FirstPlanComponent setPlanStage={setPlanStage} />}
            {planStage === 2 && <SecondPlanComponent setPlanStage={setPlanStage} />}
            {planStage === 3 && <ThirdPlanComponent />}
        </PrimaryLayout>
    )
}

export default Plans
