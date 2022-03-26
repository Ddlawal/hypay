import * as React from 'react'
import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'
import { BagIcon, CameraIcon } from '../Icons'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { SecondInput } from '../form'

interface PhotographBoxProps {
    boxSize?: string
    cameraSize?: number
}
export const PhotographBox = ({ boxSize = '24', cameraSize = 50 }: PhotographBoxProps) => {
    return (
        <div
            className={`h-${boxSize} flex cursor-pointer w-${boxSize} items-center justify-center rounded-md border-2 border-dashed border-hypay-gray`}
        >
            <CameraIcon size={cameraSize} />
        </div>
    )
}

export const AddAProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<any>()

    const { push } = useRouter()
    return (
        <div className="mx-auto w-10/12 ">
            <header className="mx-auto mt-10 w-full">
                <h1 className="text-center text-[32px] font-bold text-black">Add a product</h1>
                <div>
                    <p className="text-md mt-5 text-left font-bold text-black md:mt-3">
                        Add a new product and take the initial step to grow your business. It's easy and fast!
                    </p>
                </div>
            </header>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 w-10/12">
                <h3 className="my-3 font-semibold">Name and description</h3>
                <SecondInput
                    className="my-5 md:my-0"
                    name="name"
                    errors={errors}
                    label="Names"
                    register={register}
                    validation={{
                        required: true,
                    }}
                    placeholder="Lucian Store"
                    type="text"
                />
                <SecondInput
                    className="my-5 md:my-0"
                    name="description"
                    errors={errors}
                    label="Description"
                    register={register}
                    validation={{
                        required: true,
                    }}
                    placeholder="Describe your store"
                    type="text"
                />

                <div>
                    <h4 className="my-2 text-xl font-bold">Photos</h4>
                    <div className="flex items-center justify-between">
                        <PhotographBox />
                        <PhotographBox />
                        <PhotographBox />
                        <PhotographBox />
                    </div>

                    {/* Product link Button  */}
                    <h4 className="my-3 text-xl font-bold">Product Link</h4>
                    <Button className="rounded-md border-[1px] border-hypay-pink bg-white px-3 text-hypay-pink outline-none">
                        Copy Link
                    </Button>

                    <div className="mt-10">
                        <h4 className="text-xl font-bold">Videos</h4>
                        <p className="text-md  text-left font-normal text-black md:mt-3">
                            Link of your product's video on Youtube or Vimeo
                        </p>
                        <SecondInput
                            className="my-2 md:my-0"
                            name="videoDescription"
                            errors={errors}
                            register={register}
                            validation={{
                                required: true,
                            }}
                            placeholder=""
                            type="text"
                        />
                    </div>

                    {/* Stock section */}
                    <div className="mt-10">
                        <h4 className="text-xl font-bold">Stock</h4>
                        <div className=" flex justify-between">
                            <SecondInput
                                className="my-2 w-3/12 md:my-0"
                                name="quantity"
                                errors={errors}
                                label="Quantity"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                            />
                            <SecondInput
                                className="my-2 w-3/12 md:my-0"
                                name="sku"
                                errors={errors}
                                label="SKU"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                            />
                            <SecondInput
                                className="my-2 w-3/12 md:my-0"
                                name="barcode"
                                errors={errors}
                                label="Bar Code"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                            />
                        </div>
                    </div>
                    {/* Product Type */}
                    <div className="mt-10">
                        <h4 className=" text-xl font-bold">Product Type</h4>
                        <div className=" flex flex-col ">
                            <div className="my-2 flex items-center">
                                <input
                                    type="radio"
                                    className="h-6 w-6 border-none bg-transparent outline-none"
                                    placeholder=""
                                    name="digital"
                                />
                                <label htmlFor="quantity" className="ml-2 font-semibold">
                                    Physical
                                </label>
                            </div>
                            <div className=" flex items-center">
                                <input
                                    type="radio"
                                    className="h-6 w-6 border-none bg-transparent outline-none"
                                    placeholder=""
                                    name="digital"
                                />
                                <label htmlFor="digital" className="ml-2 font-semibold">
                                    Digital
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Weight and dimension */}
                    <div className="mt-10">
                        <h4 className="mt-3 text-xl font-bold">Weight and dimensions</h4>
                        <div className=" flex justify-between gap-x-4">
                            <SecondInput
                                className="my-2 w-4/12 md:my-0"
                                name="weight"
                                errors={errors}
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                                label="Weight"
                            />
                            <SecondInput
                                className="my-2 w-4/12 md:my-0"
                                name="length"
                                errors={errors}
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                                label="Length"
                            />
                            <SecondInput
                                className="my-2 w-4/12 md:my-0"
                                name="width"
                                errors={errors}
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                                label="Width"
                            />
                            <SecondInput
                                className="my-2 w-4/12 md:my-0"
                                name="height"
                                errors={errors}
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                                label="Height"
                            />
                        </div>
                    </div>

                    {/* Free shipping */}
                    <h4 className="mt-6 text-xl font-bold">Free Shipping</h4>
                    <div className=" flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="quantity" className="ml-2 font-semibold">
                            This product has free shipping
                        </label>
                    </div>

                    {/* Advanced shipping */}
                    <h4 className="mt-10 text-xl font-bold">Advanced Options</h4>
                    <div className="my-3 flex items-center justify-between rounded-sm  p-2 shadow-md">
                        <div className="flex items-center gap-x-2">
                            <div className="">
                                <BagIcon color={COLORS.PINK} />
                            </div>
                            <div className="flex flex-col">
                                <h3>Categories</h3>
                                <p className="text-xs">Choose here which category your product fits into</p>
                            </div>
                        </div>
                        <div className="">
                            <Button className="rounded-md border-[1px] border-hypay-pink bg-white px-3 text-hypay-pink outline-none">
                                Choose Category
                            </Button>
                        </div>
                    </div>
                    <div className="my-3 flex items-center justify-between rounded-sm p-2 shadow-md">
                        <div className="flex items-center gap-x-2">
                            <div>
                                <BagIcon color={COLORS.PINK} />
                            </div>
                            <div className="flex flex-col">
                                <h3>Variations</h3>
                                <p className="text-xs">Examples of variations are: colors and sizes</p>
                            </div>
                        </div>
                        <div className="">
                            <Button className="rounded-md border-[1px] border-hypay-pink bg-white px-3 text-hypay-pink outline-none">
                                Add variables
                            </Button>
                        </div>
                    </div>
                    {/* Publish or discrad buttons */}
                    <div className="mt-7 flex items-center justify-around">
                        <button className="text-md font-bold text-hypay-primary">Discard</button>
                        <Button
                            onClick={() => push('/dashboard/products')}
                            primary
                            className="rounded-md border-[1px]   px-3 text-white outline-none"
                        >
                            Publish product
                        </Button>
                    </div>
                    {/* or skip section */}
                    <div className="mt-4 flex flex-col items-center justify-center">
                        <p className="text-center">Or</p>
                        <button className="mx-auto text-sm font-bold text-hypay-secondary">Skip</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
