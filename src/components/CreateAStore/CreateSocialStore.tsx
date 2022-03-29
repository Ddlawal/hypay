import Image from 'next/image'
import React, { useState } from 'react'
import { COLORS } from '../../lib/constants/colors'
import { generateRandomImage } from '../../lib/data'
import { Button } from '../Button'
import { Card } from '../Card'
import { FacebookSvgIcon } from '../Icons/FacebookSvgIcon'
import { InstagramSvgIcon } from '../Icons/InstagramSvgIcon'

function CreateSocialStore() {
    const [socialsIcon, setSocialIcon] = useState('')
    return (
        <div className="mx-auto w-10/12 ">
            <header className="mx-auto mt-10 w-full">
                <h1 className="text-left text-[32px] font-bold text-black">Connect your social media</h1>
                <p className="text-md mt-5 text-left font-bold text-black md:mt-3">
                    Share your store on social networks and boost your sales!
                </p>
                <section className="my-3 md:w-8/12">
                    <Card className="flex h-[12rem] items-center justify-between gap-x-2" padding-2 rounded>
                        <div className="w-1/2">
                            <Image
                                src={generateRandomImage(200, 200)}
                                className="rounded-md"
                                alt="product Image"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="flex w-1/2 flex-col justify-between pl-2">
                            <h6 className="mb-2 font-bold">Lorem Ipsum</h6>
                            <p className="mb-2 text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit leo orci nunc
                                nibh quam et. Sagittis ut eu aliquam pretium augue aliquam.
                            </p>
                            <div className="flex items-center justify-between">
                                <p className="font-bold">Valor</p>
                                <p className="font-bold">R$30</p>
                            </div>
                        </div>
                    </Card>
                    <p className="font-bold">Escolha um canal de compartilhamento</p>
                </section>
                <form className="mx-auto mt-4 w-10/12">
                    {/* Social Icons */}
                    <div className="mx-auto my-3 flex w-10/12 justify-evenly gap-x-8 text-center md:w-4/12 md:justify-center ">
                        <InstagramSvgIcon
                            onClick={() => setSocialIcon('insta')}
                            color={socialsIcon == 'insta' ? `${COLORS.PINK}` : `${COLORS.PRIMARY}`}
                            size={40}
                        />
                        <FacebookSvgIcon
                            onClick={() => setSocialIcon('fb')}
                            color={socialsIcon == 'fb' ? `${COLORS.PINK}` : `${COLORS.PRIMARY}`}
                            size={40}
                        />
                    </div>

                    <div className="mx-auto text-center">
                        <div className="mt-5 flex w-full items-center justify-center font-semibold ">
                            <Button
                                className={`md-w-1/2 w-4/6 ${socialsIcon ? 'bg-hypay-pink' : 'bg-hypay-gray'}`}
                                primary
                            >
                                Share
                            </Button>
                        </div>
                        <p className="text-md my-3 text-center font-bold text-black">Or</p>
                        <button className="mx-auto font-bold text-hypay-primary">Skip</button>
                    </div>
                </form>
            </header>
        </div>
    )
}

export default CreateSocialStore
