import React, { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { PrimaryLayout } from '../../../components/Layout'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { useProducts } from '../../../hooks/useProducts'
import { ProductsType } from '../../../interfaces/products'

const ProductDetails: NextPage = () => {
    const isDesktop = useMediaQuery('md')
    const router = useRouter()
    if (isDesktop) {
        router.replace('/dashboard/products')
    }
    const productId = router.query.id
    console.log(router)
    const { product } = useProducts(productId as string)
    const { image_url, productName, amount, quantity, product_type } = product as ProductsType

    return (
        <PrimaryLayout currentTabIndex={1}>
            <div className="px-4 pb-4 pt-2">
                <div className="py-3">Detalhes do produto</div>
                <Card rounded padding="p-0">
                    <div className="py-4 px-6">
                        <div className="flex items-start justify-between">
                            <div className="relative h-44 w-[40%] rounded-lg border border-gray-100 sm:h-60">
                                <Image src={image_url} layout="fill" objectFit="cover" />
                            </div>
                            <Button
                                size="sm"
                                padding="py-0 px-3"
                                className="border border-hypay-secondary py-2 text-hypay-secondary"
                            >
                                Copiar Link
                            </Button>
                        </div>
                        <div className="flex flex-col gap-y-3 py-4">
                            <div className="flex justify-between border-b border-hypay-light-gray py-1 px-4">
                                <div>Produto</div>
                                <div>{productName}</div>
                            </div>
                            <div className="flex justify-between border-b border-hypay-light-gray py-1 px-4">
                                <div>Preço</div>
                                <div>{amount}</div>
                            </div>
                            <div className="flex justify-between border-b border-hypay-light-gray py-1 px-4">
                                <div>Estoque</div>
                                <div>{quantity}</div>
                            </div>
                            <div className="flex justify-between border-b border-hypay-light-gray py-1 px-4">
                                <div>Varioções</div>
                                <div>{product_type}</div>
                            </div>
                            <div className="flex justify-between border-b border-hypay-light-gray py-1 px-4">
                                <div>Promocional</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around border-t border-hypay-light-gray py-4">
                        <Button padding="px-[15%] py-2" className="text-hypay-secondary">
                            Excluir
                        </Button>
                        <Button primary padding="px-[15%] py-2">
                            Editar
                        </Button>
                    </div>
                </Card>
            </div>
        </PrimaryLayout>
    )
}

export default ProductDetails
