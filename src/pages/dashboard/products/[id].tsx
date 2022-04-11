import React, { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { PrimaryLayout } from '../../../components/Layout'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { useProducts } from '../../../hooks/useProducts'

const ProductDetails: NextPage<{ id: string }> = ({ id: productId }) => {
    const isDesktop = useMediaQuery('md')
    const router = useRouter()
    if (isDesktop) {
        router.replace('/dashboard/products')
    }

    const gotoEditProduct = () => router.push(`/dashboard/products/editProduct/${productId}`)

    const {
        product,
        isLoading,
        deleteProduct: { onDelete },
    } = useProducts(productId)

    const deleteProduct = () => onDelete('/dashboard/products')

    return (
        <PrimaryLayout currentTabIndex={1} isLoading={isLoading} isNavBack navHeader="Detalhes do produto">
            <div className="px-4 pb-4 pt-2">
                <div className="py-3">Detalhes do produto</div>
                <Card rounded padding="p-0">
                    <div className="py-4 px-6">
                        <div className="flex items-start justify-between">
                            <div className="relative h-44 w-[40%] rounded-lg border border-gray-100 sm:h-60">
                                <Image src={product?.image_url as string} layout="fill" objectFit="cover" />
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
                                <div>{product?.productName}</div>
                            </div>
                            <div className="flex justify-between border-b border-hypay-light-gray py-1 px-4">
                                <div>Preço</div>
                                <div>{product?.amount}</div>
                            </div>
                            <div className="flex justify-between border-b border-hypay-light-gray py-1 px-4">
                                <div>Estoque</div>
                                <div>{product?.quantity}</div>
                            </div>
                            <div className="flex justify-between border-b border-hypay-light-gray py-1 px-4">
                                <div>Varioções</div>
                                <div>{product?.product_type}</div>
                            </div>
                            <div className="flex justify-between border-b border-hypay-light-gray py-1 px-4">
                                <div>Promocional</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around border-t border-hypay-light-gray py-4">
                        <Button padding="px-[15%] py-2" className="text-hypay-secondary" onClick={deleteProduct}>
                            Excluir
                        </Button>
                        <Button primary padding="px-[15%] py-2" onClick={gotoEditProduct}>
                            Editar
                        </Button>
                    </div>
                </Card>
            </div>
        </PrimaryLayout>
    )
}

export default ProductDetails

export const getServerSideProps: GetServerSideProps<{ id: string }> = async ({ query }) => {
    const id = query.id as string

    return {
        props: { id },
    }
}
