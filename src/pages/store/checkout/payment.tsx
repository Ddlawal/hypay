import { NextPage } from 'next'
import { CheckoutWrapper } from '../../../components/Buyer'
// import { usePlaceOrderMutation } from '../../../store/services/buyer'

const Payment: NextPage = () => {
    // const [placeOrder] = usePlaceOrderMutation()
    return (
        <CheckoutWrapper next="pay" summaryButtonText="Pay">
            <div>Payment</div>
        </CheckoutWrapper>
    )
}

export default Payment
