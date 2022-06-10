import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'
import { SelectField } from '../../../components/Select'
import { Button } from '../../../components/Button'

const languageOptions = [
    {
        label: 'Português',
        value: 'Português',
    },
    {
        label: 'Inglês',
        value: 'Inglês',
    },
    {
        label: 'Espanhol',
        value: 'Espanhol',
    },
    {
        label: 'Francês',
        value: 'Francês',
    },
    {
        label: 'Japonês',
        value: 'Japonês',
    },
]

const General: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={2} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div className="px-4 py-4 md:w-9/12 md:px-12">
                <header>
                    <h1 className="text-3xl font-bold">Configure o Idioma que deseja utilizar </h1>
                </header>

                <section className="mt-20  w-8/12">
                    <SelectField
                        value={languageOptions[0].value}
                        name="language"
                        placeholder="Portuguese"
                        options={languageOptions}
                        onChange={() => console.log(languageOptions[0].value)}
                    />

                    <Button primary className="mt-10 px-12">
                        Salvar
                    </Button>
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default General
