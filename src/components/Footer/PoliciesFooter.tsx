import { useRouter } from 'next/router'
import React from 'react'
import { Button } from '../Button'
import { NextLink } from '../Links'

export const PoliciesFooter = () => {
    const { push } = useRouter()
    const gotoCreateStore = () => push('/createstore')

    return (
        <footer className="mt-40 py-4 px-2 md:px-[10%]">
            <div className="items-center justify-between md:flex">
                <div className="mb-8 md:mb-0">
                    <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-hypay-primary md:text-[3rem]">
                        Ready to get started?
                    </h1>
                    <h3 className="text-lg text-hypay-placeholder">Get in touch or create an account.</h3>
                </div>
                <div>
                    <Button primary preventDefault padding="py-3 px-16 md:px-10" onClick={gotoCreateStore}>
                        Create your store
                    </Button>
                </div>
            </div>
            <hr className="my-6 text-hypay-gray md:my-16" />
            <div className="justify-between md:flex md:pb-16">
                <div className="mb-8 md:w-[25%]">
                    <h2 className="mb-3 font-bold text-hypay-placeholder">Lagos Address</h2>
                    <p className="leading-6 text-hypay-gray">3 Samuel Onafuwa Close Rivervalley Estate Ojodu Lagos</p>
                </div>
                <div className="mb-8 md:w-[25%]">
                    <h2 className="mb-3 font-bold text-hypay-placeholder">Company</h2>
                    <NextLink href="/terms-conditions" className="mb-2 block text-hypay-gray">
                        Terms of Service
                    </NextLink>
                    <NextLink href="/privacy" className="block text-hypay-gray">
                        Privacy Policy
                    </NextLink>
                </div>
                <div className="mb-8 md:w-[25%]">
                    <h2 className="mb-3 font-bold text-hypay-placeholder">Connect</h2>
                    <NextLink href="#" className="mb-2 block text-hypay-gray">
                        Join Community
                    </NextLink>
                    <NextLink href="#" className="block text-hypay-gray">
                        Blog Post
                    </NextLink>
                </div>
            </div>
            <hr className="mt-6 mb-8 text-hypay-gray md:mt-16" />
            <p className="my-4 text-center font-bold text-hypay-placeholder">© {new Date().getFullYear()} Hypay</p>
        </footer>
    )
}
