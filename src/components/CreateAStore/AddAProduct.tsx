import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'
import { BagIcon, CameraIcon } from '../Icons'

export const AddAProduct = () => {
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
            <form className="mt-4 w-10/12">
                <h3 className="my-3 font-semibold">Name and description</h3>
                <div className="my-2">
                    <label htmlFor="name" className="mb-2 font-semibold">
                        Name
                    </label>
                    <div id="name" className="mt-1 rounded-md border-[1px] border-hypay-gray px-2 py-1">
                        <input
                            type="text"
                            className="w-full border-none bg-transparent outline-none"
                            placeholder="Lucian store"
                        />
                    </div>
                </div>
                <div className="my-2">
                    <label htmlFor="description" className="mb-2 font-semibold">
                        Description
                    </label>
                    <div id="description" className="mt-1 rounded-md border-[1px] border-hypay-gray px-2 py-1">
                        <input
                            type="text"
                            className="w-full border-none bg-transparent outline-none"
                            placeholder="Lucian store"
                        />
                    </div>
                </div>

                <div>
                    <h4 className="my-2 text-xl font-bold">Photos</h4>
                    <div className="flex items-center justify-between">
                        <div className="flex h-24 w-24 items-center justify-center rounded-md border-2 border-dashed border-hypay-gray ">
                            <CameraIcon size={50} />
                        </div>
                        <div className="flex h-24 w-24 items-center justify-center rounded-md border-2 border-dashed border-hypay-gray ">
                            <CameraIcon size={50} />
                        </div>
                        <div className="flex h-24 w-24 items-center justify-center rounded-md border-2 border-dashed border-hypay-gray ">
                            <CameraIcon size={50} />
                        </div>
                        <div className="flex h-24 w-24 items-center justify-center rounded-md border-2 border-dashed border-hypay-gray ">
                            <CameraIcon size={50} />
                        </div>
                    </div>

                    {/* Product link Button  */}
                    <h4 className="my-3 text-xl font-bold">Product Link</h4>
                    <Button className="rounded-md border-[1px] border-hypay-pink bg-white px-3 text-hypay-pink outline-none">
                        Copy Link
                    </Button>

                    <h4 className="my-3 text-xl font-bold">Videos</h4>
                    <p className="text-md mt-5 text-left font-normal text-black md:mt-3">
                        Link of your product's video on Youtube or Vimeo
                    </p>
                    <div className="my-2">
                        <div id="description" className="mt-1 rounded-md border-[1px] border-hypay-gray px-2 py-1">
                            <input
                                type="text"
                                className="w-full border-none bg-transparent outline-none"
                                placeholder=""
                            />
                        </div>
                    </div>

                    {/* Stock section */}
                    <div>
                        <h4 className="my-3 text-xl font-bold">Stock</h4>
                        <div className=" flex ">
                            <div className="my-2">
                                <label htmlFor="quantity" className="mb-2 font-semibold">
                                    Quantity
                                </label>
                                <div
                                    id="quantity"
                                    className="mt-1 w-8/12  rounded-md border-[1px] border-hypay-gray px-2 py-1"
                                >
                                    <input
                                        type="text"
                                        className="w-full border-none bg-transparent outline-none"
                                        placeholder=""
                                        name="quantity"
                                    />
                                </div>
                            </div>
                            <div className="my-2">
                                <label htmlFor="sku" className="mb-2 font-semibold">
                                    SKU
                                </label>
                                <div
                                    id="sku"
                                    className="mt-1 w-8/12  rounded-md border-[1px] border-hypay-gray px-2 py-1"
                                >
                                    <input
                                        type="text"
                                        className="w-full border-none bg-transparent outline-none"
                                        placeholder=""
                                        name="sku"
                                    />
                                </div>
                            </div>
                            <div className="my-2">
                                <label htmlFor="barCode" className="mb-2 font-semibold">
                                    Bar code
                                </label>
                                <div
                                    id="barCode"
                                    className="mt-1 w-8/12  rounded-md border-[1px] border-hypay-gray px-2 py-1"
                                >
                                    <input
                                        type="text"
                                        className="w-full border-none bg-transparent outline-none"
                                        placeholder=""
                                        name="barCode"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product Type */}
                    <div>
                        <h4 className="my-3 text-xl font-bold">Product Type</h4>
                        <div className=" flex flex-col ">
                            <div className="my-2 flex items-center">
                                <div
                                    id="quantity"
                                    className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-hypay-gray p-2"
                                >
                                    <input
                                        type="radio"
                                        className="w-full border-none bg-transparent outline-none"
                                        placeholder=""
                                        name="quantity"
                                    />
                                </div>
                                <label htmlFor="quantity" className="ml-2 font-semibold">
                                    Physical
                                </label>
                            </div>
                            <div className=" flex items-center">
                                <div
                                    id="digital"
                                    className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-hypay-gray p-2"
                                >
                                    <input
                                        type="radio"
                                        className="w-full border-none bg-transparent outline-none"
                                        placeholder=""
                                        name="digital"
                                    />
                                </div>
                                <label htmlFor="digital" className="ml-2 font-semibold">
                                    Digital
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Weight and dimension */}
                    <div>
                        <h4 className="my-3 text-xl font-bold">Weight and dimensions</h4>
                        <div className=" flex ">
                            <div className="my-2">
                                <label htmlFor="weight" className="mb-2 font-semibold">
                                    Weight
                                </label>
                                <div
                                    id="weight"
                                    className="mt-1 w-10/12  rounded-md border-[1px] border-hypay-gray px-2 py-1"
                                >
                                    <input
                                        type="text"
                                        className="w-full border-none bg-transparent outline-none"
                                        placeholder=""
                                        name="weight"
                                    />
                                </div>
                            </div>
                            <div className="my-2">
                                <label htmlFor="length" className="mb-2 font-semibold">
                                    Length
                                </label>
                                <div
                                    id="length"
                                    className="mt-1 w-10/12  rounded-md border-[1px] border-hypay-gray px-2 py-1"
                                >
                                    <input
                                        type="text"
                                        className="w-full border-none bg-transparent outline-none"
                                        placeholder=""
                                        name="length"
                                    />
                                </div>
                            </div>
                            <div className="my-2">
                                <label htmlFor="width" className="mb-2 font-semibold">
                                    Width
                                </label>
                                <div
                                    id="width"
                                    className="mt-1 w-10/12  rounded-md border-[1px] border-hypay-gray px-2 py-1"
                                >
                                    <input
                                        type="text"
                                        className="w-full border-none bg-transparent outline-none"
                                        placeholder=""
                                        name="width"
                                    />
                                </div>
                            </div>
                            <div className="my-2">
                                <label htmlFor="height" className="mb-2 font-semibold">
                                    Height
                                </label>
                                <div
                                    id="height"
                                    className="mt-1 w-10/12  rounded-md border-[1px] border-hypay-gray px-2 py-1"
                                >
                                    <input
                                        type="text"
                                        className="w-full border-none bg-transparent outline-none"
                                        placeholder=""
                                        name="height"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Free shipping */}
                    <h4 className="my-3 text-xl font-bold">Free Shipping</h4>
                    <div className="my-2 flex items-center">
                        <div
                            id="quantity"
                            className="mt-1 flex h-7 w-7 items-center justify-center rounded-md border-[1px] border-hypay-gray p-2"
                        >
                            <input
                                type="checkbox"
                                className="w-full border-none bg-transparent outline-none"
                                placeholder=""
                                name="quantity"
                            />
                        </div>
                        <label htmlFor="quantity" className="ml-2 font-semibold">
                            This product has free shipping
                        </label>
                    </div>

                    {/* Advanced shipping */}
                    <h4 className="my-3 text-xl font-bold">Advanced Options</h4>
                    <div className="my-2 flex items-center justify-between rounded-sm  p-2 shadow-md">
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
                    <div className="my-2 flex items-center justify-between rounded-sm p-2 shadow-md">
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
                        <Button primary className="rounded-md border-[1px]   px-3 text-white outline-none">
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
