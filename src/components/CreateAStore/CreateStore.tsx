import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'

export const CreateStore = () => {
    return (
        <div className="mx-auto w-10/12 ">
            <header className="mx-auto mt-10 w-full">
                <h1 className="text-center text-[32px] font-bold text-black">Create your store</h1>
                <div>
                    <p className="text-md mt-5 text-left font-bold text-black md:mt-3">
                        The store will be connected to cardoso.rafael@anymail.com and will remain connected for the next
                        14 days{' '}
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

            {/* <footer className="mt-20">
                <p className="text-center text-sm text-hypay-gray">
                    Learn More.
                    <span className="cursor-pointer pl-1 text-blue-500"> How to open a store?</span>
                </p>
                <p className="text-right">
                    <span className="cursor-pointer pl-1 text-blue-500"> Help . Privacy</span>
                </p>
            </footer> */}
        </div>
    )
}
