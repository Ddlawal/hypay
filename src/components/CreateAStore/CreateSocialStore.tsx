import React, { useState } from 'react'
import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'
import { FacebookSvgIcon } from '../Icons/FacebookSvgIcon'
import { InstagramSvgIcon } from '../Icons/InstagramSvgIcon'
import { LinkedInSvgIcon } from '../Icons/LinkedInSvgIcon'

function CreateSocialStore() {
    const [socialsIcon, setSocialIcon] = useState('')
    return (
        <div className="mx-auto w-10/12 ">
            <header className="mx-auto mt-10 w-full">
                <h1 className="text-center text-[32px] font-bold text-black">Connect your social media</h1>
                <div>
                    <p className="text-md mt-5 text-center font-bold text-black md:mt-3">
                        Share your store on social networks and boost your sales!
                    </p>
                </div>
                <form className="mt-4 w-10/12 ">
                    {/* Social Icons */}
                    <div className="my-3 mx-auto flex w-4/12 gap-4 text-center ">
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
                        <LinkedInSvgIcon
                            onClick={() => setSocialIcon('linkedin')}
                            color={socialsIcon == 'linkedin' ? `${COLORS.PINK}` : `${COLORS.PRIMARY}`}
                            size={40}
                        />
                    </div>

                    <div className="text-center">
                        <div className="mt-5 flex w-full items-center justify-center  font-semibold ">
                            <Button className={`w-[50%] ${socialsIcon ? 'bg-hypay-pink' : 'bg-hypay-gray'}`} primary>
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
