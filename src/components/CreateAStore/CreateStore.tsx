import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'

export const CreateStore = (props: any) => {
    return (
        <div className="mx-auto min-h-full w-10/12 ">
            <header className="mx-auto mt-10 w-full">
                <h1 className="text-center text-[32px] font-bold text-black">Create your store</h1>
                <div>
                    <p className="text-md mt-5 text-left font-bold text-black md:mt-3">
                        The store will be connected to cardoso.rafael@anymail.com and will remain connected for the next
                        14 days
                    </p>
                </div>
            </header>
            <form className="mt-4 w-10/12 ">
                <div className="">
                    <label htmlFor="fullname" className="mb-2 font-semibold">
                        Store Name
                    </label>
                    <div id="fullname" className="mt-1 rounded-md border-[1px] border-hypay-gray px-2 py-1">
                        <input
                            type="text"
                            className="w-full border-none bg-transparent outline-none"
                            placeholder="Lucian store"
                        />
                    </div>
                </div>

                <div className="mt-16 flex w-full items-center justify-center   font-semibold md:pl-16">
                    <Button className={`${COLORS.PINK} w-[70%]`} primary>
                        Create Store
                    </Button>
                </div>
            </form>
        </div>
    )
}
