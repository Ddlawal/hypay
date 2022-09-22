import React, { useState } from 'react'
import cx from 'classnames'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'
import { COLORS } from '../../lib/constants/colors'
import { Input } from '../form'
import { CartIcon, MenuIcon, SearchIcon } from '../Icons'
import { BUYER_SIDE_NAV_WIDTH } from '../../lib/constants/elements'
import { NextLink } from '../Links'
import { Logo } from '../Logo'
import { Button } from '../Button'
import { useCart } from '../../hooks/useCart'
// import { useRouter } from 'next/router'
import { Modal, ModalHeading } from '../Modal'
import { Divider } from '../Divider'
import { Cart } from '../Cart'

export const BuyersHeader = () => {
    const [open, setOpen] = useState(false)
    const { ref } = useOnClickOutside<HTMLDivElement>(() => setOpen(false))
    const {
        cart: { cartCount, cartItems },
    } = useCart()
    const [showModal, setShowModal] = useState(false)
    // const { push } = useRouter()
    console.log(cartItems)
    const width = BUYER_SIDE_NAV_WIDTH + 'px'

    // const goToCheckout = () => push('/store/checkout')

    return (
        <div className="flex w-screen items-center justify-between overflow-hidden bg-white py-4 px-2 md:justify-end md:px-16 lg:px-28">
            <div className="fixed right-0 top-0 z-50">
                <div
                    ref={ref}
                    style={{ width }}
                    className={cx(
                        !open && 'translate-x-full',
                        'absolute right-0 top-0 block h-screen rounded-tl-xl rounded-bl-xl bg-hypay-primary transition duration-500 ease-in-out md:hidden'
                    )}
                >
                    <header className="flex w-full items-center justify-center pt-8 pb-16">
                        <NextLink href="/dashboard/home">
                            <Logo
                                labelled={{ labelPosition: 'right' }}
                                labelColor={'text-white'}
                                color={COLORS.WHITE}
                            />
                        </NextLink>
                    </header>

                    <div className="text-bold w-full pl-4 text-xl text-white">
                        <NextLink href="/store" className="block py-2">
                            Home
                        </NextLink>
                        <NextLink href="/store/checkout" className="block py-2">
                            Checkout
                        </NextLink>
                        <NextLink href="/store/support" className="block py-2">
                            Atendimento
                        </NextLink>
                    </div>
                </div>
            </div>

            <Logo size={24} labelled={{ labelPosition: 'right' }} />
            <div className="text-bold hidden w-full pl-4 text-lg md:ml-16 md:flex md:justify-around lg:ml-28">
                <NextLink href="/store">Home</NextLink>
                <NextLink href="/store/checkout">Checkout</NextLink>
                <NextLink href="/store/support">Atendimento</NextLink>
            </div>
            <div className="flex items-center justify-end gap-x-2 md:gap-x-0">
                <button className="block rounded-lg p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md md:hidden">
                    <SearchIcon size={22} />
                </button>
                <Button className="relative md:mr-4" onClick={() => setShowModal(true)}>
                    {cartCount ? (
                        <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-[50%] bg-hypay-pink text-[0.6rem] text-white">
                            {cartCount}
                        </span>
                    ) : null}
                    <CartIcon color={COLORS.BLACK} size={22} />
                </Button>
                <Input
                    placeholder="Search"
                    autoFocus
                    className="bg-hypay-light-gray text-sm md:w-44 lg:w-60"
                    parentClassName="hidden md:block"
                    icon={<SearchIcon color={COLORS.PLACEHOLDER} />}
                    type="search"
                />
                <button className="p-2 md:hidden" onClick={() => setOpen(true)}>
                    <MenuIcon size={26} color={COLORS.ICON_GRAY} />
                </button>
            </div>

            {showModal ? (
                <Modal
                    isOpen={showModal}
                    dismissable
                    showDismissButton
                    onDismiss={() => setShowModal(false)}
                    withoutPadding
                    size="lg"
                >
                    <ModalHeading className="mb-0 py-6 pl-5">Resumo da Compra</ModalHeading>
                    <Divider />

                    <Cart />
                </Modal>
            ) : null}
        </div>
    )
}
