import React from 'react'
import { CloseIcon } from '../Icons'
import ModalLayout from '../Layout/ModalLayout'
import { hideModal } from '../../store/reducers/ui'
import { useAppDispatch } from '../../hooks/useStoreHooks'
import { COLORS } from '../../lib/constants/colors'

function AboutCouponModal() {
    const dispatch = useAppDispatch()
    return (
        <ModalLayout width="md:w-5/12">
            <header className="flex items-center justify-between border-b border-b-hypay-iconGray pb-3">
                <h1 className="font-bold capitalize text-hypay-gray">Gerar novo cupom</h1>
                <span className="cursor-pointer">
                    <CloseIcon color={COLORS.GREY} onClick={() => dispatch(hideModal())} />
                </span>
            </header>

            <main>
                <h6 className="text-md py-5 font-bold">Why generate a discount coupon?</h6>

                <p className="font-sm text-hypay-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ultricies pretium consectetur diam
                    neque magna. Porta urna mauris ante mus habitasse enim, ac aliquet. Turpis urna hac enim aliquam
                    proin pellentesque tortor, cursus mattis. Massa odio porta porttitor habitant. At nisl blandit
                    congue nunc dolor, et. Nunc, elementum nunc rhoncus lectus nisi iaculis faucibus id pellentesque.
                    Quis platea tellus magna a. Eget sed accumsan pretium urna, non diam risus, urna nunc. Tellus enim
                    nunc leo mi, quis. Porttitor phasellus sit nisl posuere neque id. Mauris massa hendrerit nisi, mi
                    mattis.
                </p>

                <h6 className="text-md py-5 font-bold">Why generate a discount coupon?</h6>

                <ol type="1" className="font-sm text-hypay-gray">
                    <li>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam odio praesentium iure cupiditate
                        obcaecati harum modi! Architecto corporis facilis atque in, nihil nisi qui necessitatibus. Animi
                        quod commodi quibusdam eos? Nulla facilis officiis odio pariatur fugit magnam eius mollitia
                        omnis aliquid vitae, enim nesciunt tempore, cumque earum ullam unde minus quam ad voluptates
                        suscipit expedita blanditiis praesentium? Repudiandae, quod laborum?
                    </li>
                    <li>
                        ipsum dolor, sit amet consectetur adipisicing elit. Totam odio praesentium iure cupiditate
                        obcaecati harum modi! Architecto corporis facilis atque in, nihil nisi qui necessitatibus. Animi
                        quod commodi quibusdam eos? Nulla facilis officiis odio pariatur fugit magnam eius mollitia
                        omnis aliquid vitae, enim nesciunt tempore, cumque earum ullam unde minus quam ad voluptates
                        suscipit expedita blanditiis praesentium? Repudiandae, quod laborum?
                    </li>
                </ol>
            </main>
        </ModalLayout>
    )
}

export default AboutCouponModal
