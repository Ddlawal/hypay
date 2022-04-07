import React, { useState } from 'react'
import { NextPage } from 'next'
import AuthLayout from '../components/AuthLayout/AuthLayout'
import { AddAProduct } from '../components/CreateAStore/AddAProduct'
import CreateSocialStore from '../components/CreateAStore/CreateSocialStore'
import { CreateAStore } from '../components/CreateAStore/CreateAStore'
import ProductAdded from '../components/CreateAStore/ProductAdded'
import { useAppDispatch } from '../hooks/useStoreHooks'
import { addProduct } from '../store/reducers/temporaryData'

const createStoreTabs = [
    {
        title: 'Create Your Store',
        subTitle:
            'The store will be connected to cardoso.rafael@anymail.com and will remain connected for the next 14 days ',
        // component: <CreateAStore />,
        btnText: 'Create Store',
    },
    {
        title: 'Create a success model for your business',
        subTitle: 'Build your site in a fully customized way.',
        // component: <AddAProduct />,
    },
    {
        title: 'Confiança!',
        subTitle: 'Conosco você encontrará as toda a segurança e suporte necessários ao seu negócio.',
        // component: <ProductAdded />,
    },
    {
        title: "Don't miss out!",
        subTitle: 'With us you will find all the security and support your business needs. ',
        // component: <CreateSocialStore />,
    },
]

const CreateStore: NextPage = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const dispatch = useAppDispatch()

    const onSuccess = (params: unknown): void => {
        console.log(params, 'on success this should be fired')
        dispatch(addProduct(params))
    }
    return (
        <AuthLayout title={createStoreTabs[selectedTab].title} subtitle={createStoreTabs[selectedTab].subTitle}>
            {selectedTab === 0 && (
                <CreateAStore
                    setTabIndex={(index: React.SetStateAction<number>) => {
                        setSelectedTab(index)
                    }}
                />
            )}
            {selectedTab === 1 && (
                <AddAProduct
                    onSuccess={onSuccess}
                    setTabIndex={(index: React.SetStateAction<number>) => {
                        setSelectedTab(index)
                    }}
                />
            )}
            {selectedTab === 2 && (
                <ProductAdded
                    setTabIndex={(index: React.SetStateAction<number>) => {
                        setSelectedTab(index)
                    }}
                />
            )}
            {selectedTab === 3 && (
                <CreateSocialStore
                    setTabIndex={(index: React.SetStateAction<number>) => {
                        setSelectedTab(index)
                    }}
                />
            )}
        </AuthLayout>
    )
}

export default CreateStore
