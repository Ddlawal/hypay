import React, { useEffect } from 'react'
import { PrimaryLayout } from '../../../../components/Layout'
import { SecondInput } from '../../../../components/form'
import { useForm } from 'react-hook-form'
import { Card } from '../../../../components/Card'
import { useGetProfileInfoQuery, useGetReferralLevelsQuery } from '../../../../store/services/onlineStore'
import { copyTextToClipboard, showSuccessSnackbar } from '../../../../lib/helper'
import { useGetReferralStatsQuery } from '../../../../store/services/coupon'
import { OpenLinkIcon, RoundedCheckIcon } from '../../../../components/Icons'
import { ReferralLevel } from '../../../../interfaces/onlineStore'
import { COLORS } from '../../../../lib/constants/colors'
import { showModal } from '../../../../store/reducers/ui'
import { ABOUT_COUPON_MODAL } from '../../../../lib/data'
import AboutCouponModal from '../../../../components/Modals/AboutCouponModal'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStoreHooks'

function Indicate() {
    const dispatch = useAppDispatch()
    const modal = useAppSelector((state) => state.ui)
    const { data, isLoading: loadingUserData } = useGetProfileInfoQuery()
    const { data: referralStats } = useGetReferralStatsQuery('')
    const { data: referralLevels } = useGetReferralLevelsQuery()
    const {
        register,
        formState: { errors },
        setValue,
    } = useForm<{ referralCode: string }>({ defaultValues: { referralCode: '' } })

    const copyReferalCode = (code: string) => {
        copyTextToClipboard(code)
        showSuccessSnackbar('Referal code copied successfully')
    }

    useEffect(() => {
        if (data?.userProfile) {
            setValue('referralCode', `https://hypay.vercel.app/signup?referal_code=${data?.userProfile?.referral_code}`)
        }
    }, [setValue, data])

    return (
        <PrimaryLayout currentTabIndex={6} dropDownIndex={1}>
            <div className="px-8 py-4 md:px-12">
                <header className="border-b-2 pb-8 md:py-6">
                    <h1 className="mb-6 text-4xl font-bold">Ganhe prêmios indicando o Hypay</h1>
                    <p className="text-base">
                        Compartilhe coupons com outros vendedores e ganhe prêmios na nossa plataforma. Todo vendedor que
                        entrar para o Hypay pelo link que você enviar, você acumula pontos. Quanto mais pontos você
                        alcançar, mais prêmios você ganha.
                    </p>
                    <span
                        className="inline-flex cursor-pointer items-center gap-2 text-red-500"
                        onClick={() => {
                            dispatch(showModal({ showModal: true, modalType: ABOUT_COUPON_MODAL, modalProps: {} }))
                        }}
                    >
                        Saiba mais detalhes sobre como funciona
                        <OpenLinkIcon color={COLORS.RED} />
                    </span>
                    <div className="flex flex-col md:flex-row md:items-end ">
                        {loadingUserData ? (
                            <span className="mr-3">Fetching Loading....</span>
                        ) : (
                            <SecondInput
                                className="mb-5 mr-8 w-full items-end md:my-0 md:w-2/5"
                                name="referralCode"
                                errors={errors}
                                label="Link"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                disabled
                                placeholder="www.hypay.com.br/abc123def4563def4"
                                type="text"
                            />
                        )}
                        <button
                            onClick={() =>
                                data &&
                                copyReferalCode(
                                    `https://hypay.vercel.app/signup?referal_code=${data?.userProfile?.referral_code}`
                                )
                            }
                            className="mb-4 h-8 w-44 rounded-lg bg-hypay-orange md:my-6 md:mb-1"
                        >
                            Copiar link
                        </button>
                    </div>
                    <p className="h-3 text-xs">Compartilhe esse link com outros vendedores e ganhe beneficios</p>
                </header>
                <section className="my-4">
                    <div className="flex w-full flex-col items-center justify-between md:flex-row">
                        <Card className="w-4/5 rounded-lg md:h-28 md:w-7/12 lg:w-3/5">
                            {referralStats?.sellers_referred ? (
                                <p>Você está no nível {referralStats?.sellers_referred}</p>
                            ) : (
                                <p>Your level hasnt started counting</p>
                            )}
                            <div className="flex h-11 w-full items-center">
                                <div className="my-1 h-4 w-11/12 rounded-lg bg-hypay-gray">
                                    <div
                                        style={{ width: `${parseInt(referralStats?.sellers_referred)}%` }}
                                        className={`h-4 rounded-lg bg-hypay-secondary`}
                                    ></div>
                                </div>
                                <div className="mb-4 ml-4 flex flex-col lg:w-1/3">
                                    <p className="text-xs">convites</p>
                                    <p className="font-bold text-hypay-secondary">
                                        {referralStats?.sellers_referred} / <span>100</span>
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="my-4 w-3/5 rounded-lg py-6 text-center md:mr-0 md:w-1/3 xl:w-1/3">
                            Parabéns! Você já ajudou {referralStats?.sellers_referred} vendedores à aumentarem suas
                            vendas usando o Hypay.
                        </Card>
                    </div>
                    <div className="flex grid-cols-2 flex-wrap items-end justify-between gap-2 text-center sm:grid sm:grid-cols-4 lg:flex lg:grid-cols-5">
                        {referralLevels?.map(({ reward, required_invites }: ReferralLevel, index: number) => (
                            <div key={index} className="text-center">
                                <Card
                                    className={`${
                                        referralStats?.sellers_referred > required_invites
                                            ? 'bg-hypay-green text-white'
                                            : referralStats?.sellers_referred < required_invites
                                            ? 'border border-hypay-secondary text-hypay-secondary'
                                            : 'text-gray-500 text-opacity-50'
                                    } xlg:w-36 my-2 mt-2 flex h-24 w-full flex-col  items-center justify-center rounded-md text-center md:w-36  `}
                                >
                                    <div className="">
                                        <RoundedCheckIcon color={COLORS.WHITE} />
                                    </div>
                                    <p>{reward}</p>
                                </Card>
                                <p
                                    className={`${
                                        referralStats?.sellers_referred > required_invites
                                            ? 'text-hypay-green'
                                            : referralStats?.sellers_referred < required_invites
                                            ? 'text-hypay-secondary'
                                            : 'text-gray-500 text-opacity-50'
                                    } w-full sm:w-36 xl:w-36 `}
                                >
                                    Convite {required_invites} vendedores
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {modal.modalType === ABOUT_COUPON_MODAL && <AboutCouponModal />}
        </PrimaryLayout>
    )
}

export default Indicate
