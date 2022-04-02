import * as React from 'react'
import { useForm } from 'react-hook-form'
import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'
import { SecondInput } from '../form'
import { useCreateBusinessNameMutation } from '../../services/auth'
import { useAppSelector, useAppDispatch } from '../../hooks/useStoreHooks'
import { loginUserData } from '../../reducers/auth'
import { setUserData, updatedUserData } from '../../reducers/temporaryData'

export const CreateAStore = ({ setTabIndex }: { setTabIndex: (value: React.SetStateAction<number>) => void }) => {
    const { register, handleSubmit } = useForm<any>()
    const dispatch = useAppDispatch()
    const user = useAppSelector(loginUserData)
    const userExist = useAppSelector(updatedUserData)
    const { firstName, lastName, businessname } = user

    const [addBusinessName, { isLoading }] = useCreateBusinessNameMutation()
    const onSubmit = async (data: { businessname?: string }) => {
        if (isLoading) {
            return
        }
        console.log(businessname || userExist?.businessname == data.businessname, 'business name')
        if (data.businessname == businessname || userExist?.businessname) {
            return setTabIndex(1)
        }
        try {
            addBusinessName({
                businessname: data.businessname,
                first_name: firstName,
                last_name: lastName,
                address: 'Add Address',
            })
                .unwrap()
                .then((res: any) => {
                    dispatch(setUserData(res))
                    setTabIndex(1)
                })
                .catch((err) => {
                    console.log(err, 'store not fetched')
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
                    defaultValue={user || userExist ? businessname || userExist?.businessname : ''}
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
