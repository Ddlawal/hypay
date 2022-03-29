import Image from 'next/image'
import React from 'react'
import { generateRandomImage } from '../../lib/data'
import { Button } from '../Button'
import { Card } from '../Card'

function ProductAdded() {
    return (
        <div className="mx-auto w-10/12 ">
            <header className="mx-auto mt-10 w-full">
                <h1 className="text-left text-2xl font-bold text-black md:text-left md:text-[32px]">
                    Produto adicionado!
                </h1>
                <div>
                    <p className="text-md mt-3 text-left font-bold text-black md:mt-3">
                        Seu produto Lorem Ipsum foi adicionado com sucesso
                    </p>
                </div>
            </header>

            <section className="my-3 md:w-8/12">
                <Card className="flex h-[12rem] items-center justify-between gap-x-2" padding-2 rounded>
                    <div className="w-1/2">
                        <Image
                            src={generateRandomImage(200, 200)}
                            className="rounded-md"
                            alt="product Image"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="flex w-1/2 flex-col justify-between pl-2">
                        <h6 className="mb-2 font-bold">Lorem Ipsum</h6>
                        <p className="mb-2 text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit leo orci nunc nibh
                            quam et. Sagittis ut eu aliquam pretium augue aliquam.
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="font-bold">Valor</p>
                            <p className="font-bold">R$30</p>
                        </div>
                    </div>
                </Card>
            </section>
            <div className="mx-auto text-center">
                <div className="mt-5 flex w-full items-center justify-center font-semibold ">
                    <Button className={`w-4/6 bg-hypay-pink md:w-6/12`} primary>
                        Continuar
                    </Button>
                </div>
                <p className="text-md my-3 text-center font-bold text-black">Or</p>
                <button className="mx-auto font-bold text-hypay-primary">Pular estapa</button>
            </div>
        </div>
    )
}

export default ProductAdded
