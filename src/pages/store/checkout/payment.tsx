import cx from 'classnames'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { CheckoutWrapper } from '../../../components/Buyer'
import { Divider } from '../../../components/Divider'
import { NextImage } from '../../../components/Image'
import paystackLogo from '../../../../public/images/paystack-logo.png'
import seerbitLogo from '../../../../public/images/seerbit-logo.png'
import defaultLogo from '../../../../public/images/default-image.png'
import { PaymentProviders } from '../../../interfaces/buyer'
import { useDispatch } from 'react-redux'
import { useCheckout } from '../../../hooks/useCheckout'
import { Button } from '../../../components/Button'
import { ArrowLeftIcon } from '../../../components/Icons/ArrowLeftIcon'

const paymentProviders: Array<PaymentProviders> = ['paystack', 'seerbit']

const Payment: NextPage = () => {
    const [paymentProvider, setPaymentProvider] = useState<PaymentProviders>()
    const { setProvider } = useCheckout()
    const dispatch = useDispatch()
    const { back } = useRouter()

    const getPaymentLogo = (p: PaymentProviders) => {
        if (p === 'paystack') {
            return paystackLogo
        }

        if (p === 'seerbit') {
            return seerbitLogo
        }

        return defaultLogo
    }

    const handleSelectPaymentProvider = (p: PaymentProviders) => {
        dispatch(setProvider(p))
        setPaymentProvider(p)
    }

    return (
        <CheckoutWrapper
            canProceed={!!paymentProvider}
            next="pay"
            activeTimelineEvent="Payment"
            summaryButtonText={
                paymentProvider
                    ? `Pay with ${paymentProvider?.charAt(0).toUpperCase()}${paymentProvider?.slice(1)}`
                    : 'Pay'
            }
        >
            <header className="mb-2 flex items-center gap-x-4 text-lg font-bold">
                <Button preventDefault>
                    <ArrowLeftIcon size={28} onClick={() => back()} />
                </Button>{' '}
                Pagamento
            </header>
            <div className="mt-6 font-semibold">Escolha sua forma de pagamento </div>
            <ul className="mt-4">
                {paymentProviders.map((p, i) => {
                    return (
                        <li
                            key={i}
                            className={cx(
                                paymentProvider === p ? 'bg-white' : 'bg-gray-100',
                                'border-hypay-lightgray my-3 flex items-center gap-x-4 rounded border px-3'
                            )}
                            onClick={() => handleSelectPaymentProvider(p)}
                        >
                            <div>
                                <input
                                    type="radio"
                                    id={p}
                                    name="address"
                                    checked={paymentProvider === p}
                                    onChange={() => handleSelectPaymentProvider(p)}
                                />
                            </div>
                            <Divider orientation="vertical" height="h-[6rem]" />
                            <NextImage src={getPaymentLogo(p)} width={150} height={40} alt={p.toLocaleUpperCase()} />
                        </li>
                    )
                })}
            </ul>
        </CheckoutWrapper>
    )
}

export default Payment
