import * as React from 'react'
import { useForm } from 'react-hook-form'
import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'
import { SecondInput } from '../form'
import { useAppSelector, useAppDispatch } from '../../hooks/useStoreHooks'
import { loginUserData, updateUserLoggedInData } from '../../store/reducers/auth'
import { updatedUserData } from '../../store/reducers/temporaryData'
import { useCreateStoreMutation } from '../../store/services/products'

export const CreateAStore = ({ setTabIndex }: { setTabIndex: (value: React.SetStateAction<number>) => void }) => {
    const { register, handleSubmit } = useForm<any>()
    const [createBusinessName, { isLoading }] = useCreateStoreMutation()
    const dispatch = useAppDispatch()
    const user = useAppSelector(loginUserData)
    const userExist = useAppSelector(updatedUserData)

    const onSubmit = async (data: { businessname?: string }) => {
        if (isLoading) {
            return
        }
        if (data.businessname == user?.businessname) {
            return setTabIndex(1)
        }
        try {
            createBusinessName(data.businessname)
                .unwrap()
                .then((res: any) => {
                    dispatch(updateUserLoggedInData(res))
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
                    defaultValue={user || userExist ? userExist?.businessname || user?.businessname : ''}
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
