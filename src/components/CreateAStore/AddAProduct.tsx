import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'

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
            <form className="mt-4 w-10/12 ">
                <div className="">
                    <label htmlFor="fullname" className="mb-2 font-semibold">
                        Store Name
                    </label>
                    <div id="fullname" className="mt-1 rounded-md border-[1px] px-2 py-1">
                        <input
                            type="text"
                            className="w-full border-none bg-transparent outline-none"
                            placeholder="Lucian store"
                        />
                    </div>
                </div>

                <div className="mt-16 flex items-center  justify-center font-semibold">
                    <Button className={`${COLORS.PINK} w-[60%]`} primary>
                        Create Store
                    </Button>
                </div>
            </form>
        </div>
    )
}
