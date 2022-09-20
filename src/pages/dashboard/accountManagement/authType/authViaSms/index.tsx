import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { PrimaryLayout } from '../../../../../components/Layout'
import { LeftArrowIcon } from '../../../../../components/Icons'
import { Card } from '../../../../../components/Card'
import { NextImage as Image } from '../../../../../components/Image'
import smsAuth from '../../../../../../public/images/smsAuth.png'
import { SecondInput } from '../../../../../components/form'
import { Button } from '../../../../../components/Button'

function Index() {
    const { back } = useRouter()
    const { register } = useForm()
    return (
        <PrimaryLayout>
            <div className="px-4 py-4 md:w-9/12 md:px-12">
                <header className="justify-venter flex items-center gap-x-6  pb-3">
                    <span onClick={() => back()}>
                        <LeftArrowIcon />
                    </span>
                    <h1 className="text-3xl font-bold">Autenticação via App</h1>
                </header>

                <section className="mt-10">
                    <Card className="itmes-center my-3 flex gap-x-3" rounded>
                        <Image src={smsAuth} alt="Phone auth type" height={60} width={48} />
                        <h1 className="p-3 text-2xl text-hypay-pink">Autenticação via SMS</h1>
                    </Card>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <SecondInput
                            label="1- Insira seu número de telefone"
                            name="chave"
                            type="text"
                            register={register}
                        />
                        <SecondInput label="2 - Inserir chave" name="chave" type="text" register={register} />
                        <Button className=" px-5" primary>
                            Validar
                        </Button>
                    </form>
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default Index
