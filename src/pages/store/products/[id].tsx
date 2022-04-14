import React, { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { LoadingPage } from '../../../components/Layout/LoadingPage'
import { Logo } from '../../../components/Logo'
import { useProducts } from '../../../hooks/useProducts'
import { COLORS } from '../../../lib/constants/colors'

const ProductView: NextPage<{ id: string }> = ({ id }) => {
    const { product, isLoading } = useProducts(id)
    const router = useRouter()

    if (isLoading) {
        return <LoadingPage />
    }

    if (!isLoading && !product) {
        router.push('/')
        return null
    }

    return (
        <>
            <div className="mt-4 flex justify-center">
                <Logo size={48} labelled={{ labelPosition: 'bottom' }} color={COLORS.PRIMARY} />
            </div>
            <div className="mt-16 flex items-start justify-between px-[20%]">
                <div className="relative h-44 w-[50%] rounded-lg border border-gray-100 sm:h-60">
                    <Image src={product?.image_url || ''} layout="fill" objectFit="cover" />
                </div>
                <div className="w-[40%]">
                    <p>{product?.productName}</p>
                    <p>{product?.quantity}</p>
                    <p>{product?.amount}</p>
                    <p>{product?.productDescription}</p>
                </div>
            </div>
        </>
    )
}

export default ProductView

export const getServerSideProps: GetServerSideProps<{ id: string }> = async ({ params }) => {
    const id = params?.id as string

    return {
        props: { id },
    }
}
