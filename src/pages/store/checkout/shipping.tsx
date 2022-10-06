import { NextPage } from 'next'
import { useState } from 'react'
import { CheckoutWrapper } from '../../../components/Buyer'
import { TIMELINE_EVENTS } from '../../../lib/data'

const shippings = [
    { address_id: 1, address: 'Lagos', name: 'Ikeja store', phone: '08012345678' },
    { address_id: 2, address: 'Niger', name: 'Minna store', phone: '08012345678' },
    { address_id: 3, address: 'Abuja', name: 'Gwarimpa store', phone: '08012345678' },
]

const Shipping: NextPage = () => {
    const [preferredShippingStoreId, setPreferredShippingStoreId] = useState<number>()

    return (
        <CheckoutWrapper
            activeTimelineEvent={TIMELINE_EVENTS.SHIPPING}
            canProceed={!!preferredShippingStoreId}
            next="/payment"
        >
            <div>Shipping</div>
            <ul className="mt-4">
                {shippings.map(({ address_id, address, name, phone }, i) => (
                    <li
                        key={i}
                        className="border-hypay-lightgray my-3 flex items-center gap-x-4 rounded border bg-slate-100 px-3 py-2"
                    >
                        <div>
                            <input
                                type="radio"
                                id={`${address_id}`}
                                name="address"
                                onChange={(e) => setPreferredShippingStoreId(Number(e.target.id))}
                                checked={preferredShippingStoreId === address_id}
                            />
                        </div>
                        <div>
                            <div>{name}</div>
                            <div>{address}</div>
                            <div>{phone}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </CheckoutWrapper>
    )
}

export default Shipping
