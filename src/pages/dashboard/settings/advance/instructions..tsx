import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../../components/Layout'
import { SettingsMenuItemList, toturialItemsData, tutorialItemsInterface } from '../../../../lib/data'
import { LeftArrowIcon } from '../../../../components/Icons'
import Link from 'next/link'

const General: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={2} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <header className="mx-12 pt-6">
                <Link href="http://localhost:3000/dashboard/settings/general">
                    <a>
                        <LeftArrowIcon />
                    </a>
                </Link>
            </header>
            <main className="mx-16">
                <div>
                    <h1 className="my-4 text-xl  font-bold">Como usar um código de rastreamento</h1>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ultricies pretium consectetur diam
                        neque magna. Porta urna mauris ante mus habitasse enim, ac aliquet. Turpis urna hac enim aliquam
                        proin pellentesque tortor, cursus mattis. Massa odio porta porttitor habitant. At nisl blandit
                        congue nunc dolor, et. Nunc, elementum nunc rhoncus lectus nisi iaculis faucibus id
                        pellentesque. Quis platea tellus magna a. Eget sed accumsan pretium urna, non diam risus, urna
                        nunc. Tellus enim nunc leo mi, quis. Porttitor phasellus sit nisl posuere neque id. Mauris massa
                        hendrerit nisi, mi mattis.
                    </p>
                </div>
                <div className="">
                    <h2 className="my-6 text-xl font-bold">Tutorial</h2>
                    <div>
                        {toturialItemsData.map(({ list, text }: tutorialItemsInterface, index) => (
                            <div key={index} className="flex items-start">
                                <p className="mr-1 text-sm">{list}</p>
                                <p className="text-sm">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </PrimaryLayout>
    )
}

export default General
