import { useState } from 'react'
import AuthLayout from '../components/AuthLayout/AuthLayout'
import { Button } from '../components/Button'
import { AddAProduct } from '../components/CreateAStore/AddAProduct'
import CreateSocialStore from '../components/CreateAStore/CreateSocialStore'
import { CreateStore } from '../components/CreateAStore/CreateStore'
import { COLORS } from '../lib/constants/colors'

const createStoreTabs = [
    {
        title: 'Create Your Store',
        subTitle:
            'The store will be connected to cardoso.rafael@anymail.com and will remain connected for the next 14 days ',
        hasComponent: true,
        component: <CreateStore />,
    },
    {
        title: 'Create a success model for your business',
        subTitle: 'Build your site in a fully customized way.',
        component: <AddAProduct />,
    },
    {
        title: "Don't miss out!",
        subTitle: 'With us you will find all the security and support your business needs. ',
        component: <CreateSocialStore />,
    },
]

function createStore() {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <AuthLayout title={createStoreTabs[selectedTab].title} subtitle="Build your site in a fully customized way.">
            {createStoreTabs[selectedTab].component}
            <Button
                onClick={() => {
                    if (selectedTab !== createStoreTabs.length - 1) {
                        return setSelectedTab(selectedTab + 1)
                    } else {
                        setSelectedTab(0)
                    }
                }}
                className={`${COLORS.PINK} w-[60%]`}
                primary
            >
                {createStoreTabs[selectedTab].title}
            </Button>
        </AuthLayout>
    )
}

export default createStore
//  switch (selectedTab) {
//      case 'Create store':
//          return (
//              <AuthLayout
//                  title="Create a success model for your business"
//                  subtitle="Build your site in a fully customized way."
//              >
//                  <div className="mx-auto w-10/12 ">
//                      <header className="mx-auto mt-10 w-full">
//                          <h1 className="text-center text-[32px] font-bold text-black">Create your store</h1>
//                          <div>
//                              <p className="text-md mt-5 text-left font-bold text-black md:mt-3">
//                                  The store will be connected to cardoso.rafael@anymail.com and will remain connected for
//                                  the next 14 days{' '}
//                              </p>
//                          </div>
//                      </header>
//                      <form className="mt-4 w-10/12 ">
//                          <div className="">
//                              <label htmlFor="fullname" className="mb-2 font-semibold">
//                                  Store Name
//                              </label>
//                              <div id="fullname" className="mt-1 rounded-md border-[1px] px-2 py-1">
//                                  <input
//                                      type="text"
//                                      className="w-full border-none bg-transparent outline-none"
//                                      placeholder="Lucian store"
//                                  />
//                              </div>
//                          </div>

//                          <div className="mt-16 flex items-center  justify-center font-semibold">
//                              <Button
//                                  onClick={() => setSelectedTab('Add a Product')}
//                                  className={`${COLORS.PINK} w-[60%]`}
//                                  primary
//                              >
//                                  Create Store
//                              </Button>
//                          </div>
//                      </form>

//                      <footer className="mt-20">
//                          <p className="text-center text-sm text-hypay-gray">
//                              Learn More.
//                              <span className="cursor-pointer pl-1 text-blue-500"> How to open a store?</span>
//                          </p>
//                          <p className="text-right">
//                              <span className="cursor-pointer pl-1 text-blue-500"> Help . Privacy</span>
//                          </p>
//                      </footer>
//                  </div>
//              </AuthLayout>
//          )
//          break
//      case 'Add a Product':
//          return (
//              <AuthLayout
//                  title="Ease of access"
//                  subtitle="Register your products and edit your store whenever you want. Take advantage of all the features HyPay provides!"
//              >
//                  <div className="mx-auto w-10/12 ">
//                      <header className="mx-auto mt-10 w-full">
//                          <h1 className="text-center text-[32px] font-bold text-black">Add a product</h1>
//                          <div>
//                              <p className="text-md mt-5 text-left font-bold text-black md:mt-3">
//                                  Add a new product and take the initial step to grow your business. It's easy and fast!
//                              </p>
//                          </div>
//                      </header>
//                      <form className="mt-4 w-10/12 ">
//                          <div className="">
//                              <label htmlFor="fullname" className="mb-2 font-semibold">
//                                  Store Name
//                              </label>
//                              <div id="fullname" className="mt-1 rounded-md border-[1px] px-2 py-1">
//                                  <input
//                                      type="text"
//                                      className="w-full border-none bg-transparent outline-none"
//                                      placeholder="Lucian store"
//                                  />
//                              </div>
//                          </div>

//                          <div className="mt-16 flex items-center  justify-center font-semibold">
//                              <Button
//                                  onClick={() => setSelectedTab('Create store')}
//                                  className={`${COLORS.PINK} w-[60%]`}
//                                  primary
//                              >
//                                  Create Store
//                              </Button>
//                          </div>
//                      </form>

//                      <footer className="mt-20">
//                          <p className="text-center text-sm text-hypay-gray">
//                              Learn More.
//                              <span className="cursor-pointer pl-1 text-blue-500"> How to open a store?</span>
//                          </p>
//                          <p className="text-right">
//                              <span className="cursor-pointer pl-1 text-blue-500"> Help . Privacy</span>
//                          </p>
//                      </footer>
//                  </div>
//              </AuthLayout>
//          )
//          break
//      default:
//          // code block
//          return (
//              <AuthLayout
//                  title="Create a success model for your business"
//                  subtitle="Build your site in a fully customized way."
//              >
//                  <div className="mx-auto w-10/12 ">
//                      <header className="mx-auto mt-10 w-full">
//                          <h1 className="text-center text-[32px] font-bold text-black">Create your store</h1>
//                          <div>
//                              <p className="text-md mt-5 text-left font-bold text-black md:mt-3">
//                                  The store will be connected to cardoso.rafael@anymail.com and will remain connected for
//                                  the next 14 days{' '}
//                              </p>
//                          </div>
//                      </header>
//                      <form className="mt-4 w-10/12 ">
//                          <div className="">
//                              <label htmlFor="fullname" className="mb-2 font-semibold">
//                                  Store Name
//                              </label>
//                              <div id="fullname" className="mt-1 rounded-md border-[1px] px-2 py-1">
//                                  <input
//                                      type="text"
//                                      className="w-full border-none bg-transparent outline-none"
//                                      placeholder="Lucian store"
//                                  />
//                              </div>
//                          </div>

//                          <div className="mt-16 flex items-center  justify-center font-semibold">
//                              <Button className={`${COLORS.PINK} w-[60%]`} primary>
//                                  Create Store
//                              </Button>
//                          </div>
//                      </form>

//                      <footer className="mt-20">
//                          <p className="text-center text-sm text-hypay-gray">
//                              Learn More.
//                              <span className="cursor-pointer pl-1 text-blue-500"> How to open a store?</span>
//                          </p>
//                          <p className="text-right">
//                              <span className="cursor-pointer pl-1 text-blue-500"> Help . Privacy</span>
//                          </p>
//                      </footer>
//                  </div>
//              </AuthLayout>
//          )
//  }
