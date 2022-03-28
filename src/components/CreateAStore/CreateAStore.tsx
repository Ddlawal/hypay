import * as React from 'react'
import { useForm } from 'react-hook-form'
import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'
import { SecondInput } from '../form'
import { useCreateBusinessNameMutation } from '../../services/auth'
import { useAppSelector } from '../../hooks/useStoreHooks'
import { User } from '../../reducers/auth'

export const getServerSideProps = async () => {
    if (typeof window !== 'undefined') {
        const user = localStorage.getItem('user')
        return {
            props: { user },
        }
    }
}

export const CreateAStore = (props: any) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>()

    const { userInfo } = useAppSelector((state) => state?.auth?.user as User)
    const { firstName, lastName } = userInfo ?? {}

    const [addBusinessName, { isLoading }] = useCreateBusinessNameMutation()
    const onSubmit = async (data: { businessname?: string }) => {
        if (isLoading) {
            return
        }
        try {
            addBusinessName({
                businessname: data.businessname,
                first_name: firstName,
                last_name: lastName,
                address: 'Abuja',
            })
                .unwrap()
                .then((res) => {
                    console.log(res, 'response after the store got added')
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error, 'error')
        }
    }

    return (
        <div className="relative mx-auto h-auto w-10/12 ">
            <header className="mx-auto mt-10 w-full">
                <h1 className="text-center text-[32px] font-bold text-black">Create your store</h1>
                <div>
                    <p className="text-md mx-auto mt-5 w-10/12 text-center font-bold text-black md:mx-0 md:mt-3 md:w-full md:text-left">
                        The store will be connected to cardoso.rafael@anymail.com and will remain connected for the next
                        14 days
                    </p>
                </div>
            </header>
            <form onSubmit={handleSubmit(onSubmit)} className="md:4 mt-8 w-full md:w-10/12">
                <SecondInput
                    name="businessname"
                    validation={{ required: true }}
                    label="Store Name"
                    placeholder="Lucian store"
                    register={register}
                />
                <div className="mt-20 flex w-full items-center justify-center   font-semibold md:pl-16">
                    <Button className={`${COLORS.PINK} w-full md:w-[70%]`} primary>
                        Create Store
                    </Button>
                </div>
            </form>
        </div>
    )
}
