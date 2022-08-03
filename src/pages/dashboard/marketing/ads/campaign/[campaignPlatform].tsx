import React, { useState } from 'react'
import { PrimaryLayout } from '../../../../../components/Layout'
import { campaignPlatforms } from '.'
import { SecondInput } from '../../../../../components/form'
import { useForm } from 'react-hook-form'
import { ArrowUpIcon, CircularPlusIcon } from '../../../../../components/Icons'
import { COLORS } from '../../../../../lib/constants/colors'
import { PhotographBox } from '../../../../../components/CreateAStore/AddAProduct'
import { Card } from '../../../../../components/Card'
import { Button } from '../../../../../components/Button'
import { SelectField } from '../../../../../components/Select'

// Type of previews
type FormData = {
    productname: string
    startDate: string
    endDate: string
}

const FEED = 'Feed'
const STORIES = 'Stories'
const HORIZONTAL = 'Horizontal'
const VERTICAL = 'Vertical'

const CampaignPlatform = ({ campaignPath }: { campaignPath: string }) => {
    const [photoBoxCount, setPhotoBoxCount] = useState(3)
    const [previewType, setPreviewType] = useState(FEED)

    const changePreviewType = (type: string) => {
        setPreviewType(type)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <PrimaryLayout currentTabIndex={5} dropDownIndex={0}>
            <div className="px-4 md:px-12">
                <section className="flex min-h-screen flex-col items-stretch justify-between md:flex-row">
                    <div className="py-4 md:w-1/2">
                        <header>
                            <h1 className="mb-4 text-xl font-bold"> {campaignPath} Ads</h1>
                        </header>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="mt-3 font-bold">Products</h3>
                            <div className="flex items-end gap-5 pr-5">
                                <SecondInput
                                    className="my-5 md:my-0 md:w-full"
                                    name="productname"
                                    errors={errors}
                                    label="Paste the link of the products to be advertised"
                                    register={register}
                                    validation={{
                                        required: true,
                                    }}
                                    placeholder=""
                                    type="text"
                                />
                                <div className="mb-3">
                                    <CircularPlusIcon color={COLORS.BLACK} size={24} />
                                </div>
                            </div>

                            <div className="justify-betweem flex w-11/12 items-center gap-x-3">
                                <div className="w-1/2">
                                    <h3 className="mt-3 font-bold">Starting Date</h3>
                                    <SecondInput
                                        className="md:my-0 md:w-full"
                                        name="startDate"
                                        errors={errors}
                                        label="First Date of your Campaign"
                                        register={register}
                                        validation={{
                                            required: true,
                                        }}
                                        placeholder=""
                                        type="text"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <h3 className="mt-3 font-bold">Finishing Date</h3>
                                    <SecondInput
                                        className="md:my-0 md:w-full"
                                        name="endDate"
                                        errors={errors}
                                        label="Last Date of your Campaign"
                                        register={register}
                                        validation={{
                                            required: true,
                                        }}
                                        placeholder=""
                                        type="text"
                                    />
                                </div>
                            </div>
                            {/* Adding Image section */}
                            <div>
                                <h3 className="mt-3 font-bold">Additional Images</h3>
                                <p className="my-2">Insert here the images and videos of your ad</p>
                                <span className="text-xs">Max. 10</span>

                                <div className="flex w-11/12 items-center justify-between gap-5">
                                    <div className="max-w-11/12 my-2 flex items-center gap-x-3 overflow-x-scroll rounded bg-white p-2">
                                        {Array(photoBoxCount)
                                            .fill(' ')
                                            .map((product, index) => (
                                                <PhotographBox key={index} index={0} />
                                            ))}
                                    </div>
                                    <span
                                        onClick={() => {
                                            setPhotoBoxCount((count) => count + 1)
                                        }}
                                        className="mb-3"
                                    >
                                        <CircularPlusIcon color={COLORS.BLACK} size={24} />
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="mt-3 font-bold">Description</h3>
                                <p>Describe your ad</p>
                                <Card className="my-3 h-[10rem] w-11/12 shadow-md" padding="p-2 pb-5" rounded>
                                    <textarea className="h-full w-full outline-none"></textarea>
                                </Card>
                                {campaignPath === 'internal' && (
                                    <div className="w-11/12">
                                        <SelectField<string | null>
                                            options={[]}
                                            name="Pages"
                                            placeholder={<span className="text-hypay-primary">Pages</span>}
                                            value={'Pages'}
                                            onChange={() => console.log('')}
                                        />
                                    </div>
                                )}
                            </div>
                            {/* Publish or discrad buttons */}
                            <div className="mt-7 flex items-center justify-around">
                                <Button
                                    onClick={() => {
                                        // push('/dashboard/home')
                                    }}
                                    className="text-md font-bold text-hypay-primary"
                                >
                                    Descartar
                                </Button>
                                <Button
                                    // onClick={() => handleSubmit}
                                    primary
                                    className="rounded-md border-[1px] px-3 text-white outline-none md:w-[50%]"
                                >
                                    Publicar produto
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="border-t border-gray-300 md:w-1/2 md:border-l md:py-4">
                        <Card
                            className={`mx-auto my-10 w-11/12 rounded-md border ${
                                previewType === HORIZONTAL ? 'md:w-10/12' : 'md:w-9/12'
                            }`}
                        >
                            <h1 className="mb-4 text-xl font-bold">Activity Preview</h1>
                            {campaignPath === 'internal' ? (
                                <div className="flex items-center gap-x-3">
                                    <Button
                                        className={` ${previewType === VERTICAL ? 'font-bold' : ''}`}
                                        onClick={() => changePreviewType(VERTICAL)}
                                    >
                                        Vertical
                                    </Button>
                                    <Button
                                        className={` ${previewType === HORIZONTAL ? 'font-bold' : ''}`}
                                        onClick={() => changePreviewType(HORIZONTAL)}
                                    >
                                        Horizontal
                                    </Button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-x-3">
                                    <Button
                                        className={` ${previewType === FEED ? 'font-bold' : ''}`}
                                        onClick={() => changePreviewType(FEED)}
                                    >
                                        Feed
                                    </Button>
                                    <Button
                                        className={` ${previewType === STORIES ? 'font-bold' : ''}`}
                                        onClick={() => changePreviewType(STORIES)}
                                    >
                                        Stories
                                    </Button>
                                </div>
                            )}
                            {campaignPath !== 'internal' ? (
                                <div className={`${previewType === FEED ? 'border p-1' : ''} "rounded"`}>
                                    <div className="relative block  text-center">
                                        <img
                                            src="/images/ladies-cloth.png"
                                            alt="CLOTH IMAGE"
                                            className={` ${
                                                previewType === FEED
                                                    ? 'h-full max-h-[18rem]  rounded-t'
                                                    : 'h-full max-h-[30rem] rounded'
                                            } "object-contain" mx-auto block w-auto max-w-full text-center`}
                                        />
                                        {previewType === STORIES && (
                                            <span className="absolute bottom-5 left-[25%] right-[25%] mx-auto flex cursor-pointer flex-col  text-center ">
                                                <span className="mx-auto">
                                                    <ArrowUpIcon color="gray" />
                                                    <ArrowUpIcon color="gray" />
                                                    <ArrowUpIcon />
                                                </span>
                                                <p className="mx-auto  text-sm text-white">Clikc here and lean more</p>
                                            </span>
                                        )}
                                    </div>

                                    {previewType === FEED && (
                                        <div className="flex items-center justify-between bg-gray-100 p-2 shadow">
                                            <div>
                                                <h6 className="font-bold">White shirt</h6>
                                                <p>Loja.com</p>
                                            </div>
                                            <div>
                                                <Button className="rounded border border-black px-6 py-0 text-sm">
                                                    Visit Store
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className={`${previewType === HORIZONTAL ? 'border p-1' : ''} "rounded"`}>
                                    {previewType === HORIZONTAL ? (
                                        <img src="/images/horizontal-frame.png" alt="vertical frame" />
                                    ) : (
                                        <img src="/images/vertical-frame.png" alt="vertical frame" />
                                    )}
                                </div>
                            )}
                        </Card>
                        {campaignPath === 'internal' && (
                            <div className="mx-auto w-10/12">
                                <p className="font-bold">Positioning of the banner on the page</p>
                                <p>Choose the pages where your ad will appear</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default CampaignPlatform

export const getStaticPaths = () => {
    const paths = campaignPlatforms.map((path) => ({ params: { campaignPlatform: path.link } }))
    return {
        paths,
        fallback: false,
    }
}

type campaignPathParams = {
    params: {
        campaignPlatform: string
    }
}

export const getStaticProps = ({ params }: campaignPathParams) => {
    return {
        props: {
            campaignPath: params.campaignPlatform,
        },
    }
}
