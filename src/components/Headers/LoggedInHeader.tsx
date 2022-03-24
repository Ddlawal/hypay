import Image from 'next/image'
import React, { useState } from 'react'
import { COLORS } from '../../lib/constants/colors'
import { TextField } from '../form'
import { CommentIcon, NotificationIcon, SearchIcon } from '../Icons'

export const LoggedInHeader = () => {
    const [searchString, setSearchString] = useState('')
    return (
        <div className="flex items-center justify-end bg-white py-4 px-8">
            <div className="flex items-center justify-end gap-x-4">
                <TextField
                    value={searchString}
                    onChange={(input) => setSearchString(input)}
                    inputClassName="bg-hypay-light-gray"
                    placeholder="Search"
                    inputIcon={<SearchIcon color={COLORS.PLACEHOLDER} />}
                    className="mr-28"
                />
                <button className="rounded-full p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md">
                    <CommentIcon size={26} color={COLORS.ICON_GRAY} />
                </button>
                <button className="rounded-full p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md">
                    <NotificationIcon size={26} color={COLORS.ICON_GRAY} />
                </button>
                <button className="rounded-full transition duration-200 ease-in-out hover:scale-105">
                    <Image
                        className="rounded-full"
                        loader={({ src }) => src}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnQScKMx5KEgFZiQtqXBFX8EuF7GI-DWfsA&usqp=CAU"
                        alt="avatar"
                        width={40}
                        height={40}
                        quality={100}
                    />
                </button>
            </div>
        </div>
    )
}
