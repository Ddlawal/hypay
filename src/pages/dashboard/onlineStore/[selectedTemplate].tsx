import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { CircularPlusIcon, LeftArrowIcon, RedDotsIcon } from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { NextPage } from 'next'
import { Button } from '../../../components/Button'
import { COLORS } from '../../../lib/constants/colors'
import { themeTemplateData, themeTemplateDataType } from '../../../lib/data'
import { GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = themeTemplateData.map((template) => {
        // console.log(template, 'exach rtemplate')
        return {
            params: {
                selectedTemplate: `${template.id}`,
            },
        }
    })
    return { paths: paths, fallback: false }
}

export const getStaticProps = async ({
    params,
}: {
    params: {
        selectedTemplate: string
    }
}) => {
    const template = themeTemplateData.filter((template) => template.id == params.selectedTemplate)
    return { props: { template: template[0] } }
}

interface SelectedTemplateProps {
    children?: ReactNode
    template: {
        title: string
        id: number
    }
}

const SelectedTemplate = ({ template }: SelectedTemplateProps) => {
    const { back } = useRouter()
    return (
        <PrimaryLayout currentTabIndex={4}>
            <div className="py-4 px-4 md:px-12">
                <div className="mb-4 flex items-center gap-2 ">
                    <div className="cursor-pointer" onClick={() => back()}>
                        <LeftArrowIcon />
                    </div>
                    <h1 className=" text-2xl font-bold">Personalização</h1>
                </div>
                <section className="mx-5">
                    <h2 className="text-xl font-bold">Barras de navegação</h2>
                    <div className="my-5 flex h-10 w-8/12 cursor-pointer items-center bg-hypay-gray p-4 text-lg md:w-4/12">
                        Menu Principal {template.id}
                    </div>

                    <div className="mt-3 flex items-center">
                        <RedDotsIcon size={34} />
                        <p className="ml-4">Início</p>
                    </div>
                    <div className="mt-3 flex items-center">
                        <RedDotsIcon size={34} />
                        <p className="ml-4">Produtos</p>
                    </div>
                    <div className="mt-3 flex items-center">
                        <RedDotsIcon size={34} />
                        <p className="ml-4">Contato</p>
                    </div>
                    <div className="my-3">
                        <Button primary className="mt-8 flex items-center md:mt-2">
                            <span className="pl-2">
                                <CircularPlusIcon />
                            </span>
                            <span className="px-2">Criar um novo menu</span>
                        </Button>
                        <div>
                            <h2 className="my-5 text-xl font-bold">Páginas</h2>
                            <Button className="mt-8 flex items-center border border-hypay-primary bg-white text-hypay-primary md:mt-2">
                                <span className="pl-2">
                                    <CircularPlusIcon color={COLORS.PRIMARY} />
                                </span>
                                <span className="px-2">Criar novas páginas</span>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default SelectedTemplate
