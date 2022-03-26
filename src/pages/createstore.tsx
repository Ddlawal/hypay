import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import AuthLayout from '../components/AuthLayout/AuthLayout'
import { Button } from '../components/Button'
import { AddAProduct } from '../components/CreateAStore/AddAProduct'
import CreateSocialStore from '../components/CreateAStore/CreateSocialStore'
import { CreateAStore } from '../components/CreateAStore/CreateAStore'
import { COLORS } from '../lib/constants/colors'
import { useSelector } from 'react-redux'

const createStoreTabs = [
    {
        title: 'Create Your Store',
        subTitle:
            'The store will be connected to cardoso.rafael@anymail.com and will remain connected for the next 14 days ',
        component: <CreateAStore />,
        btnText: 'Create Store',
    },
    {
        title: 'Create a success model for your business',
        subTitle: 'Build your site in a fully customized way.',
        component: <AddAProduct />,
    },
    {
        title: "Don't miss out!",
        subTitle: 'With us you will find all the security and support your business needs. ',
        component: <CreateSocialStore />,
    },
]

export const getServerSideProps = async () => {
    if (typeof window !== 'undefined') {
        let user = localStorage.getItem('user')
        return {
            user: { user },
        }
    }
    return { props: {} }
}

const CreateStore: NextPage = () => {
    const [selectedTab, setSelectedTab] = useState(0)

    useEffect(() => {
        // const userInfo: any = useSelector<any>((state) => state)
        // const { firstName, lastName, address } = userInfo ?? {}
        let userInfo = localStorage.getItem('user')
        console.log(userInfo, 'state')
    }, [])

    return (
        <AuthLayout title={createStoreTabs[selectedTab].title} subtitle="Build your site in a fully customized way.">
            {createStoreTabs[selectedTab].component}
            <div className="mx-auto my-2 flex w-full justify-center">
                <Button
                    onClick={() => {
                        if (selectedTab !== createStoreTabs.length - 1) {
                            return setSelectedTab(selectedTab + 1)
                        } else {
                            setSelectedTab(0)
                        }
                    }}
                    className={`${COLORS.PINK}  `}
                    primary
                >
                    next
                </Button>
            </div>
        </AuthLayout>
    )
}

export default CreateStore
