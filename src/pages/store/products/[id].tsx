import React, { GetServerSideProps, NextPage } from 'next'

const ProductView: NextPage<{ product: { id: string } }> = ({ product: { id } }) => {
    console.log(id)
    return <div>Product {id}</div>
}

export default ProductView

export const getServerSideProps: GetServerSideProps<{ product: { id: string } }> = async ({ query }) => {
    const id = query.id as string

    return {
        props: {
            product: { id },
        },
    }
}
